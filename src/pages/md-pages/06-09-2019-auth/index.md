---
path: "/guides/auth"
date: "2019-09-06T07:07:57.268Z"
title: "Auth developers guide"
type: "page"
---

## Introduction 

This guide is meant for developers who has just started working with Platform Of Trust technology. In this guide we will cover very basic, but extremely important part of the system - authentication. By the end of this guide you should be able to register and log in as a developer, obtain `Authorization token` and be able to use it via CLI or as a part of our web application.

## Overview

1. Authorization tokens
2. Register a new user
    1. Send register request
    2. Authorize oauth application
3. Authorization 
    1. Send authorization request
    2. Obtain authorization token
4. Test authorization token
5. Web UI

## Authorization tokens

Authorization tokens are one of the most essential and useful tokens you would need to communicate with Platform of Trust and use its functionality. The only way to get `Authrozation token` is to authorize to Platform of Trust as a user. This kind of token will last for 24 hours since you authorized. You can have at maximum N number of tokens at the same time (?). You need to have different tokens depends on environment you are using (sandbox or production). 
 
 
## Register a new user

### Register user

In order to be able to use Platform of Trust's most demanding features, users must have created a new identity in the system. We start by simply creating a new user.

#### Request template:

```
curl -i --request POST \
  --url https://login-sandbox.oftrust.net/api/register \
  --header 'content-type: application/x-www-form-urlencoded \
  --form email=foobar@example.com \
  --form password=mypasswordtest \
  --form firstName=Foo \
  --form lastName=Bar \
  --form termsAccepted=true
```

Response:

```
HTTP/1.0 201 Created
Content-Type: application/json
Content-Length: 232

{
  "@context": "https://standards.lifeengine.io/v1/Context/Identity/Person/",
  "@type": "Person",
  "@id": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
  "email": "foobar@example.com",
  "role": "developer",
  "firstName": "Foo",
  "lastName": "Bar"
}
```


### Authorize application

If you try to log in right now, you will not be able to do so, and get this error:

```
HTTP/1.0 403 Forbidden
```
```
{"error": {"status": 403, "message": "Permission denied"}}
```

Even though a new user record was created in previous step, you won't be able to even log in using user credentials. So before we can actually act from behalf of the user, we have to authorize at least 1 oauth application to be able to read our user's data and perform some other actions. After that we can log in. 

In this guide we are going to use `My World App` as an example of oauth application.  

Request:

```
curl -i --request POST \
  --url https://login-sandbox.oftrust.net/api/authorizeApplication \
  --header 'content-type: application/x-www-form-urlencoded \
  --form userId=33237067-e72c-4f26-b78b-9f9e234b2e7d \
  --form clientId=f773dafe-20c0-4a25-aa3e-9da0b81b9304
```

`userId` - is id of user you want to authorized the app 
`clientId` - is id of oauth application. There is a guide where you can learn how to create your own oauth application, but for now we can use `My World App` oauth application. 

Response:

```
HTTP/1.0 200 OK
```

## Authorization

### Send authorization request

Now we are ready to log in using our newly created user's credentials. Let's send authorize request. 

#### Request template:

```
curl -i --request POST \
  --url https://login-sandbox.oftrust.net/api/authorize \
  --header 'content-type: application/x-www-form-urlencoded' \
  --form grant_type=authorization \
  --form client_id=f773dafe-20c0-4a25-aa3e-9da0b81b9304 \
  --form email=foobar@example.com \
  --form redirect_uri=https://world-sandbox.oftrust.net/api/exchangeToken \
  --form response_type=code \
  --form password=mypasswordtest
```

`grant_type` - The grant type of the authorization flow, MUST be `authorization_code`

`response_type` - The response type for the request, MUST be `code`

`redirect_uri` - The redirect URI for the authorization flow. This value is also defined by the oauth app, in our guide we use the uri defined by `My World app` oauth application. 

Optional:

`state` - An optional state for the request, could be a CSRF token.

Response:
 
```
HTTP/1.0 200 OK
```

```
{"redirectUrl": "https://world-sandbox.oftrust.net/api/exchangeToken?code=9otToANa2Q6mNB2au79X4YgsUy3cvx&redirect_uri=http%3A%2F%2Fworld.local%3A8080%2Fapi%2FexchangeToken&subject=33237067-e72c-4f26-b78b-9f9e234b2e7d&client_id=f773dafe-20c0-4a25-aa3e-9da0b81b9304", "userId": "33237067-e72c-4f26-b78b-9f9e234b2e7d"}
```


Here you can copy `redirectUrl` to your browser and hit enter. In chrome developers tools inside `Application` tab, you can explore Cookies, where you can find `Authorization token` itself:

```
"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6bnVsbCwiZXhwIjoxNTY4MTE5MjU4LCJzdWIiOiJlMTUzZTIwMC0xNGQ1LTQzY2UtOTVkYy0yZGIyMmFjNjc2N2YiLCJhdWQiOiJmNzczZGFmZS0yMGMwLTRhMjUtYWEzZS05ZGEwYjgxYjkzMDQiLCJ0eXBlIjoiVXNlciIsImlzcyI6IkxFIiwiaWF0IjoxNTY4MDMyODU4LjAsInNjb3BlcyI6IiJ9.YhwvWuyQTihDNQaDCikSVRVQOq4tt3btquMH533f7wskD6qkGp812QxgBXRMKhXfVslK2u3xrKbhQluVEyk4i9Jk14Ile68GvHuBIWZyYeQ4-8NXAdkzL8DqnLwb0HeW7kWDYVu5QWiTZumSXUrGupJ6ubNcMwbRDEUG52zO7SQSiu5nfY8ftpyBOIEvNCFsTDOkLMXm4jbEi-GF14_ybbhNUl1Y6zX6sjfo89psLFObHwqTjWxK1kIbNhXil2vnzNaHV_6foCqTG3HW9ewmzcmWSVwk914xk7KJP3jE7BWJKl_osKFMl9yyQYxSNQQtBgrWiK2WAnxsXMD_9rcgTj3_GjqhoX7D8jUPI7io_2pPL-rPvmYgcxnVrozNm2ADxqwHjY59sKbsyP8KqmgHvTBP6imkF0GHFM89IgjSBBXjywDbllHyX-SnbpVqyL9L7dyV59nYUiHorhxxQTTTPaqjfYCEZb6fiheGfd3LPxZsavE_VChUgnubpUsum7MTvUQEdm-hIhPGtrPNIakuvZQLBgHjK1l-kVDMQrWSjzNi9IM0HQiKwWaLIOdasu5zvBCKXCA_l5Y68Jrdtk3qtsST16m9Z5ZIgRNoSvZIKHwaobV35uqKtX_fdrZj-XGVRetmQodXbOdVZhoQPNPerqFCE1szH6jJj3IzlxaN5QU"
```

, as well as `expiration`, right now it is set to `24 hours`. 

Alternatively to copying `redirectUrl` into your browser, you can continue with cURL command:

```
curl -i -c - --request GET \
  --url '<INSERT_REDIRECT_URL_FROM_PREVIOUS_STEP>'
```
 
 Notice we use `-c` option with cURL to print Cookies into our terminal. Response should contain `Authorization` token:
 
```
Authorization	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6bnVsbCwiZXhwIjoxNTY4MTIwMDAwLCJzdWIiOiIzMzIzNzA2Ny1lNzJjLTRmMjYtYjc4Yi05ZjllMjM0YjJlN2QiLCJhdWQiOiJmNzczZGFmZS0yMGMwLTRhMjUtYWEzZS05ZGEwYjgxYjkzMDQiLCJ0eXBlIjoiVXNlciIsImlzcyI6IkxFIiwiaWF0IjoxNTY4MDMzNjAwLjAsInNjb3BlcyI6IiJ9.b_gMNIKODrLzfooYadqI2VJGTuc7c26x8S7OncpyXA6XtZP_E3rlI9H5ot84zQS9SqHdLk23JxKdCiQCtbTpYcLn8QcUlF7mWweQmq1ewanHPHhfSb6uileQNQKGnGEVe3V4a8Hy2x_d8rOYujwFA2sfxfcEZdArAnfK_IIHfWzC5zz78c3nrT5LeqE1BP1RHzpLKkc91rcLcwa0ldKTDQlGDdi6hBYneaMGToqF3yTQxd1v_4YHLGp3i4A_TZu8wrBMoWFvJburYp45itsyElatNSwFMkNz6L7w6sxDQWTB9MznUuhk90U6bD49GljhY-Ny0XgwEzzUHeyj8oJHbkxfrJHpDHl-uNBQyPohwVwyaDdh6BDFJgM3JHOlezJuH_RbMCcUa1XqwkGhZwdXYNP7fgpTkEDY41_oRwsrPx9jM9jlvG9VBTEPFijATy-IV-tXH0VJ4pLO0fJ1IgAuUMnQJOxgnUPSuI2g_zhMLojgDMJUo1kONAWdoc7UwLMeR33ALlohLBdfnm0-thLTR3GOpuXgWC5Nx067Fy4ydwTpObrDu2LnliRFNvE2fQOXOrQKAz_BmOonL7xc2jFv5w0L9MSDfZcLzJYrMk2MF5E_fNOSiw8qW82U5a6E42FkxogN1o85AApGxvUWkdfG4MjOlGrgqW1QhdEsJLNGV2Y"
```
 

### Troubleshooting

If the user you are logging in has not authorized oauth application as we discussed in step 2.2. You will get the following error:


Response:

```
HTTP/1.0 403 Forbidden
```

```
{
  "message": "App authorization required",
  "userId": "f5892015-5089-482d-ac45-3fac263df998"
}
```

In order to fix this, you need to go to step 2.2 and send authorize application request to allow oauth application to read your user data. 


## Test authorization token 

You can check if `Authorization token` you have obtained is working correctly by sending `/me` request.

Let's try to send failing request first:

#### Request template:

```
curl -i --request GET \
  --url https://login-sandbox.oftrust.net/api/me
```

Response:

```
HTTP/1.0 403 Forbidden
```

```
{"error": {"status": 403, "message": "Permission denied"}}
```
 
Let's now send the same request with `Authorization token` we received in previous steps.

#### Request template:

```
curl -i --request GET \
  --url https://login-sandbox.oftrust.net/api/me \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' 
```

Response:
```
{
  "@context": "https://standards.lifeengine.io/v1/Context/Identity/Person/",
  "@type": "Person",
  "@id": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
  "email": "foobar@example.com",
  "role": "developer",
  "firstName": "Foo",
  "lastName": "Bar"
}
```


Now you can use Platform of Trust APIs that require `Authorization token`. Those usually are the most useful endpoints. 


## Web UI

You can do all the same steps above using web application. You need to go to [My World App](https://world-sandbox.oftrust.net/) and simply follow authorization flow.
