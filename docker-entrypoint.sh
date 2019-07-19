#!/bin/sh
set -eux

if [ -z "${DEVELOPERS_HOST:-}" ]; then
  DEVELOPERS_HOST="developers.example.host"
fi

if ! [ -z "${BASIC_USER_AUTH:-}" ] && ! [ -z "${BASIC_PASS_AUTH:-}" ];then
   sh -c "echo -n '${BASIC_USER_AUTH}:' >> /etc/nginx/sites/.htpasswd"
   sh -c "openssl passwd -apr1 \"${BASIC_PASS_AUTH}\" >> /etc/nginx/sites/.htpasswd"
fi

sed -i 's+$DEVELOPERS_HOST+'"${DEVELOPERS_HOST}"'+g' /etc/nginx/sites/*.conf

# Replace ENV variables in netlify config files
sed -i 's+$WEBSITE_ROOT+'"${WEBSITE_ROOT}"'+g' /var/www/developers-app/cmsadmin/config.yml
sed -i 's+$WEBSITE_REPO+'"${WEBSITE_REPO}"'+g' /var/www/developers-app/cmsadmin/config.yml
sed -i 's+$AUTH_ENDPOINT+'"${AUTH_ENDPOINT}"'+g' /var/www/developers-app/cmsadmin/config.yml

nginx -c /etc/nginx/nginx.conf -g "daemon off;"
