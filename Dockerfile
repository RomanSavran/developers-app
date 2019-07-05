FROM ubuntu:18.04

ENV LC_ALL=C.UTF-8 \
    LANG=C.UTF-8

ADD . /src/developers-app
WORKDIR /src/developers-app

RUN set -exu && apt-get clean && apt-get -y update \
 && apt-get -y install build-essential apt-transport-https lsb-release ca-certificates curl \
 && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
 && apt-get -y install build-essential \
    nodejs \
    gcc \
    git \
    autoconf \
    automake \
    libtool \
    nasm \
    nginx \
    openssl \
 && chmod +x docker-*.sh \
 && ./docker-setup.sh \
 && apt-get -y clean


#RUN apk update \
# && apk upgrade \
# && apk add --virtual build-dependencies \
#    nodejs \
#    npm \
#    build-base \
#    gcc \
#    git \
#    autoconf \
#    automake \
#    libtool \
#    nasm \
#    util-linux \
# && apk add nginx \
#    openssl \
# && chmod +x docker-*.sh \
# && ./docker-setup.sh \
# && apk del build-dependencies \
# && rm -rf /var/cache/apk/*

EXPOSE 8080
ENTRYPOINT ["./docker-entrypoint.sh"]
