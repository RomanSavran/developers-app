---
path: "/guides/build-apps"
date: "2019-01-15T13:30:33.962Z"
title: "Build apps"
type: "page"
---

## Purpose

Aim is that with help of this guide any developer with moderate amount of skills is able to create "hello digital twin" kind of app which uses one data product in sandbox environment. 

You'll learn 
* how to build apps which utilize Platform of Trust authentication and 
* data products of various data providers. In the example we use one data product.  
* how to use sandbox environment in application testing.  

To go through the guide, you'll need around 10-15 minutes of time. 

## 1. Before you start to code...

### 1.1. Register yourself as a user of PoT platform
To be able to use PoT at maximum, you must be logged in as a PoT user. Right now, you are able to do it only via [World of Trust ](http://world.oftrust.net).

### 1.2. Register your application to enable OAuth 

Firstly you need to create oauth client for your application. Thus the users of your application can log in to PoT. It is neccessary for sending requests to protected API endpoints.

You also should be able to do it only from [World of Trust](http://world.oftrust.net)
UI. After registration of your application in PoT, you will get 
* `Client ID`, 
* `Client Secret` and 
* `Access Tokens`. 

NOTE! These values are crucial and shown only once, so you should save them immediately. Your application will use `Client ID`, `Client Secret` and `Access Tokens` in variuos requests to PoT.

## 2. Implement User authorization

Users of your app must be logged in to PoT in order to perform most of useful requests. We have implemented oauth2 flow into PoT, so you only need to have at least 2 following steps done:

Generate authorization link. Initiate authorization flow by sending request from a browser to your application backend `GET /authorize`. This should generate state and return redirection URL to login portal with necessary parameters `state` is base64 encoded string to validate later, `grant_type` is `authorization_code`, `response_type` is `code`, `redirect_uri` is where to login portal will send `code` and `state` for validation and token exchange: 

```
https://login.oftrust.net/? \
grant_type=authorization_code&response_type=code& \
redirect_uri=https://login.oftrust.net/api/exchangeToken& \
client_id=37e278c6-1af9-4537-b92d-af8609b6e1e7& \
state=eyJkIjogeyJyIjogImh0dHA6Ly9idWlsZGVyLmxvY2Fs....SZkZWQifQ==
```

Once browser gets this response, it should open url in the same browser's tab. User will be presented to login portal page where they can sign in or sign up. 

## 3. Implement code exchange endpoint

When the user has logged in into PoT system. Login portal will send `code` and `state` to `redirect_uri` that you have spicified in previous step and when you created oauth client. This endpoint needs to be implemented on a side of your application. So that you can exchange code for `authorization token`with another request to login portal API. 

`POST https://login.oftrust.net/api/exchangeToken`:

```
'client_secret': <YOU_GET_IT_IN_STEP_"Register oauth client">,
'client_id': <YOU_GET_IT_IN_STEP_"Register oauth client">,
'redirect_uri': <TO_VALIDATE_URI (BTW do we validate it both in auhorization and exchange token steps?)>,
'grant_type': 'authorization_code', // MUST BE
'code': <code you get from login portal's request>,
'state': <state you get from login portal's request>
```

On success you should validate state. After that we recommend to write authorization token in client's cookie with HTTP response including following header:

```
Set-Cookie: 
Authorization="Bearer eyJ0eXAiOiJKV1OiJSU....ZuQ_gi6eLHOFhZi8xaChtg"; 
HttpOnly; Max-Age=86400; 
SameSite=Strict; Secure
```

Pay attention to `HttpOnly`, `SameSite=Strict` and `Secure`.

And redirect user to desired location with another header in the very same response:

`Location: <URL where cookie with authorization token will be written>`

## Sending request to PoT API

For certain requests you need to pass authorization token as a header `Auhorization` to PoT API.

```
GET https://login.oftrust.net/api/me
GET <oftrust_api_url>/identities

Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1N...5LCJzdWIiOiJmZDlaChtg"`
```

## 4. Select Data product to use

In order to be able to fetch data products one of our data products providers you need to know in advance: `product_code` and `parameters` that will be processed by data provider's system. In addition to that you need to specify `Client ID`, `Client Secret` and `Access Tokens`, which you get when created `oauth client` in previous steps of this guide.

`POST <Broker_API_URL>/fetch_data_product`

Headers

```
'X-Pot-App': <Client ID>
'X-Pot-Signature': <HMAC-SHA256(Access Tokens, request body)> 
'X-Pot-Token': <Auhtorization token NOTE! exclude "Bearer:" part> #optional
```

Body

```
{
    'timestamp': <RFC-3339 Timestamp>,
    'productCode': <Product code e.g. "business-identity-test">,
    'parameters': <set of predefined parameters to pass to data provider>
}
```

E.g. `parameters` can be something like this

```
{
    "businessId": "0831312-4"
}
```

## How to list data products? 

## How to search for specific data products? 


## Test in sandbox
## Deploy and publish

