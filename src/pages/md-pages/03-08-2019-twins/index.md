---
path: "/guides/identities-and-links"
date: "2019-09-12T07:07:57.268Z"
title: "Identities and links guide"
type: "page"
---

## Introduction 

This guide is meant for developers who has learnt about Platform of Trust and how to authorize as a developer. In this guide we will show how to work with identities. One of the core concepts of Platform Of Trust. Identities are digital representation of things from real world. E.g. a building, a car or a person can be separate identities in Platform of Trust.

This is an example of data of `Apartment` identity.

```
{
  "@context": "https://standards.oftrust.net/v1/Context/Identity/Space/Apartment/",
  "@type": "Apartment",
  "@id": "ec2d273b-b866-496e-b682-79b061dbf71f",
  "inLinks": [],
  "outLinks": [],
  "data": {
    "name": "Cozy place"
  },
  "metadata": {
    "createdAt": "2019-09-11T11:24:23+00:00",
    "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
    "updatedAt": "2019-09-11T11:24:23+00:00",
    "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
  }
}
```

From `Apartment` type you can tell what kind of identity this is. Though link `https://standards.oftrust.net/v1/Context/Identity/Space/Apartment/` from `@context` field can tell you many more details about the identity, we will cover concept of identity's context in another guide.


## Overview

1. Create identities
2. View created identities
3. Create links between identities
4. Explore identities and links
5. Update and delete linked identities
    1. Delete links
    2. Delete identities
6. Summary


## Create identities

Create identities is very simple. The only prerequisite you need to have is `Authoorization token`. If you don't know what it is or how to get it, read our previous guide about authorization.

#### Request template:

```
curl -i --request POST \
  --url https://api-sandbox.oftrust.net/identities/v1 \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' \
  --header 'content-type: application/json' \
  --data '{
  "context": "https://standards.oftrust.net/v1/Context/Identity/Space/Apartment/",
  "type": "Apartment",
  "data": {
    "name": "Cozy place"
  }
}'
``` 

Parameters:

- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.

When you create a new identity, you always have to specify valid `type`, `context` and `name`. Some identities might require more data in order to be created. This type of information is specified in a `Context` file, in our case it is [https://standards.oftrust.net/v1/Context/Identity/Space/Apartment/](https://standards.oftrust.net/v1/Context/Identity/Space/Apartment/). More information and available context files you can find at [Platform Of Trust' standards website](https://standards.oftrust.net/v1/).

Response:

```
HTTP/1.0 201 Created
```

```
{
  "@context": "https://standards.oftrust.net/v1/Context/Identity/Space/Apartment/",
  "@type": "Apartment",
  "@id": "ec2d273b-b866-496e-b682-79b061dbf71f",
  "inLinks": [],
  "outLinks": [],
  "data": {
    "name": "Cozy place"
  },
  "metadata": {
    "createdAt": "2019-09-11T11:24:23+00:00",
    "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
    "updatedAt": "2019-09-11T11:24:23+00:00",
    "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
  }
}
```

This response indicates that we managed to successfully create our first identity. Data above contains more fields compare to our request. First of all it has `@id` field, you can use it to read any identity you have access to. Other new and interesting fields are `inLinks` and `outLinks`. Right now they both are empty, but let's see what happen when we create more identities and links between them.  

Let's create more identities for types `Building` and `Sensor`.

#### Request template for `Building`:

```
curl -i --request POST \
  --url https://standards.oftrust.net/identities/v1 \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' \
  --header 'content-type: application/json' \
  --data '{
    "context": "https://standards.oftrust.net/v1/Context/Identity/Building/",
    "type": "Building",
    "data": {
        "name": "Glass House"
    }
}'
```

Parameters:

- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.

Request for `Sensor`:

```
curl -i --request POST \
  --url https://standards.oftrust.net/identities/v1 \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' \
  --header 'content-type: application/json' \
  --data '{
    "context": "https://standards.oftrust.net/v1/Context/Identity/Device/Sensor/",
    "type": "Sensor",
    "data": {
        "name": "Best sensor 9000",
        "colorName": "Blue",
        "descriptionGeneral": "This sensor does its job!"
    }
}'
```

Parameters:

- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.

After this chapter you should have created at least 3 identities of different types: `Buidling`, `Apartment` and `Sensor`.


## View created identities

Beside creating new identities, reading existing identities is also very useful feature of Platform of Trust. For some users it can be the most important. Therefore, anyone with `Authorization token` can read a specific identity, if they know its `id`. Obviously users cannot read any identity they want due to security reasons. In most cases all identities that were created by individual, should be accessible to them. Let's try to read identities we created previously in this guide. 


#### Request template:

```
curl -i --request GET \
  --url https://api-sandbox.oftrust.net/identities/<INSERT_IDENTITY_ID> \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' 
```

Parameters:

- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.

Response:

```
HTTP/1.0 200 OK
```

```
{
  "@context": "https://standards.oftrust.net/v1/Context/Identity/Device/Sensor/",
  "@type": "Sensor",
  "@id": "e5d73aaf-b4c3-4c34-a6e3-071d826b06b1",
  "inLinks": [],
  "outLinks": [],
  "data": {
    "name": "Best sensor 9000",
    "colorName": "Blue",
    "descriptionGeneral": "This sensor does its job!"
  },
  "metadata": {
    "createdAt": "2019-09-12T07:23:50+00:00",
    "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
    "updatedAt": "2019-09-12T07:23:50+00:00",
    "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
  }
}
```

As you can see the API returns exact data we provided when we were creating our `Sensor` identity. Feel free to try the same request but for other identities you have created so far. Or if you know `id` of another identities you can try to read them and see what might happen.   


## Create links between identities

`Links` as well as `Identities` is crucial part of Platform of Trust. From its name you can imagine that links are used to connect different identities with each other in a meaningful way. Just like in real world all things are connected, all identities in Platform of Trust should be connected. You can create a link between 2 identities with a request similar in certain ways to the requests that you were using creating new identities. Let's try.

#### Request template:

```
curl --request POST \
  --url https://api-sandbox.oftrust.net/identities/v1/<INSERT_FROM_IDENTITY_ID>/link/<INSERT_TO_IDENTITY_ID> \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' \
  --header 'content-type: application/json' \
  --data '{
  "context": "https://standards.oftrust.net/v1/Context/Link/BelongsTo/",
  "type": "BelongsTo"
}'
```

Parameters:

- `INSERT_FROM_IDENTITY_ID` 
- `INSERT_TO_IDENTITY_ID`
- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.

If you replace `<INSERT_FROM_IDENTITY_ID>` with `id` of `Apartment` identity and `INSERT_FROM_IDENTITY_ID` with `id` of `Budling` identity, you will get cURL command of valid HTTP request to Platform of Trust API. This request will create a `BelongsTo` link from `Apartment` identity to `Buidling` identity. While creating `Links`, just like `Identities`, the request has to have `type` and `context`. And again, more information regarding `Context` data and available context files you can find at [Platform Of Trust' standards website](https://standards.oftrust.net/v1/). We will cover `Context` in one of our following guides. 

Response:

```
HTTP/1.0 201 Created
```

```
{
  "@context": "https://standards.oftrust.net/v1/Context/Link/BelongsTo/",
  "@type": "BelongsTo",
  "@id": "be7a2c57-03d8-46f4-aaf0-2b1ca118ef5c",
  "from": "8ac7494b-b7bc-4a63-a253-4b9b1887b262",
  "to": "a6b5a74e-bd98-4c9b-9561-932877258833",
  "data": {},
  "metadata": {
    "createdAt": "2019-09-12T09:49:24+00:00",
    "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
    "updatedAt": "2019-09-12T09:49:24+00:00",
    "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
  }
}
```

Note `Link` unlike `Identity` has `from` and `to` fields, that indicate direction. Now, `Apratment` identity is connected to `Buildig` identity:

```
            belongsTo
Apartment -------------> Building 
```  

Let's connect the `Sensor` to `Apartment`, just like in real life. We could say that `Sensor` belongs to `Apartment` that belongs to `Buidling`

Request template:

```
curl --request POST \
  --url https://api-sandbox.oftrust.net/identities/v1/<INSERT_SENSOR_IDENTITY_ID>/link/<INSERT_APARTMENT_IDENTITY_ID> \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' \
  --header 'content-type: application/json' \
  --data '{
  "context": "https://standards.oftrust.net/v1/Context/Link/BelongsTo/",
  "type": "BelongsTo"
}'
```

Parameters:

- `INSERT_SENSOR_IDENTITY_ID` 
- `INSERT_APARTMENT_IDENTITY_ID`
- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.

When the last request successfully completed, we should have 3 identities linked together.

```
         BelongsTo                BelongsTo
Sensor -------------> Apartment -------------> Building
```

Great! Linking identities is a great feature which is used throughout Platform of Trust. And allows users and developers to explore relations, discovery new identities and other amazing functionality. 


## Explore identities and links

We have already learnt how to read particular identity by its `id`. Let's see how the data has changed after we linked couple of identities together in previous step.

#### Request template:

```
curl -i --request GET \
  --url https://api-sandbox.oftrust.net/identities/<INSERT_IDENTITY_ID> \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' 
```

Parameters:

- `INSERT_IDENTITY_ID` 
- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.

Response:

```
HTTP/1.0 200 OK
```

```
{
  "@context": "https://standards.oftrust.net/v1/Context/Identity/Device/Sensor/",
  "@type": "Sensor",
  "@id": "e5d73aaf-b4c3-4c34-a6e3-071d826b06b1",
  "inLinks": [],
  "outLinks": [
    {
      "@context": "https://standards.oftrust.net/v1/Context/Link/BelongsTo/",
      "@type": "BelongsTo",
      "@id": "1b4384ce-dfcb-4ead-8024-783431424820",
      "from": "e5d73aaf-b4c3-4c34-a6e3-071d826b06b1",
      "to": "459d500d-9cf5-4f1a-8314-fba4d4ec6434",
      "data": {},
      "metadata": {
        "createdAt": "2019-09-12T10:04:54+00:00",
        "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
        "updatedAt": "2019-09-12T10:04:54+00:00",
        "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
      }
    }
  ],
  "data": {
    "name": "Best sensor 9000",
    "colorName": "Blue",
    "descriptionGeneral": "This sensor does its job!"
  },
  "metadata": {
    "createdAt": "2019-09-12T07:23:50+00:00",
    "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
    "updatedAt": "2019-09-12T07:23:50+00:00",
    "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
  }
}
```

As you can see, now when we read `Sensor` identity data, it has `outLinks` data. `outLinks` and `inLinks` contain all connections that users have permission to see. Let's read on `Apartment` identity. Since we now `Sensor` is linked to `Apartment` identity via `BelongsTo` link. Thus, this guide's example case, `id` of `Apartment` identity can be found as `to` property of 1 link entry in `outLink`. Which is `459d500d-9cf5-4f1a-8314-fba4d4ec6434`.

#### Request template:

```
curl -i --request GET \
  --url https://api-sandbox.oftrust.net/identities/<INSERT_IDENTITY_ID> \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' 
```

Parameters:

- `INSERT_IDENTITY_ID` in this guide's example case is `459d500d-9cf5-4f1a-8314-fba4d4ec6434`.
- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.

Response:

```
HTTP/1.0 200 OK
```

```
{
  "@context": "https://standards.oftrust.net/v1/Context/Identity/Space/Apartment/",
  "@type": "Apartment",
  "@id": "459d500d-9cf5-4f1a-8314-fba4d4ec6434",
  "inLinks": [
    {
      "@context": "https://standards.oftrust.net/v1/Context/Link/BelongsTo/",
      "@type": "BelongsTo",
      "@id": "1b4384ce-dfcb-4ead-8024-783431424820",
      "from": "e5d73aaf-b4c3-4c34-a6e3-071d826b06b1",
      "to": "459d500d-9cf5-4f1a-8314-fba4d4ec6434",
      "data": {},
      "metadata": {
        "createdAt": "2019-09-12T10:04:54+00:00",
        "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
        "updatedAt": "2019-09-12T10:04:54+00:00",
        "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
      }
    }
  ],
  "outLinks": [
    {
      "@context": "https://standards.oftrust.net/v1/Context/Link/BelongsTo/",
      "@type": "BelongsTo",
      "@id": "74202ffe-2c82-41a8-bdbe-607c84e9aff8",
      "from": "459d500d-9cf5-4f1a-8314-fba4d4ec6434",
      "to": "a6b5a74e-bd98-4c9b-9561-932877258833",
      "data": {},
      "metadata": {
        "createdAt": "2019-09-12T10:31:09+00:00",
        "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
        "updatedAt": "2019-09-12T10:31:09+00:00",
        "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
      }
    }
  ],
  "data": {
    "name": "Cozy place"
  },
  "metadata": {
    "createdAt": "2019-09-12T10:03:40+00:00",
    "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
    "updatedAt": "2019-09-12T10:03:40+00:00",
    "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
  }
}
``` 

If you followed this guide from the beginning and complete all its steps. You should have data that looks like one above.

You can also requests only links of certain identity.

```
curl -i --request GET \
  --url https://api-sandbox.oftrust.net/identities/<INSERT_IDENTITY_ID>/links \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' 
```

Parameters:

- `INSERT_IDENTITY_ID`
- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.


## Update and delete linked identities 

Updating identity as easy as creating a new one. Users cannot update any identity because they need to have certain permissions to do so. However usually you should be able to update any identity created by yourself. when you need to update identity, you can send following request:

#### Request template

```
curl --request PUT \
  --url http://192.168.99.100:32000/identities/v1/e5d73aaf-b4c3-4c34-a6e3-071d826b06b1 \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' \
  --header 'content-type: application/json' \
  --data '{
	"context": "https://standards.oftrust.net/v1/Context/Identity/Device/Sensor/",
	"type": "Sensor",
	"data": {
		"name": "THE Best sensor 10000!",
		"colorName": "Blue",
		"descriptionGeneral": "This sensor does its job!"
	}
}'
```

Response:

```
HTTP/1.0 200 OK
```

```
{
  "@context": "https://standards.oftrust.net/v1/Context/Identity/Device/Sensor/",
  "@type": "Sensor",
  "@id": "e5d73aaf-b4c3-4c34-a6e3-071d826b06b1",
  "inLinks": [],
  "outLinks": [
    {
      "@context": "https://standards.oftrust.net/v1/Context/Link/BelongsTo/",
      "@type": "BelongsTo",
      "@id": "1b4384ce-dfcb-4ead-8024-783431424820",
      "from": "e5d73aaf-b4c3-4c34-a6e3-071d826b06b1",
      "to": "459d500d-9cf5-4f1a-8314-fba4d4ec6434",
      "data": {},
      "metadata": {
        "createdAt": "2019-09-12T10:04:54+00:00",
        "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
        "updatedAt": "2019-09-12T10:04:54+00:00",
        "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
      }
    }
  ],
  "data": {
    "name": "THE Best sensor 10000!",
    "colorName": "Blue",
    "descriptionGeneral": "This sensor does its job!"
  },
  "metadata": {
    "createdAt": "2019-09-12T07:23:50+00:00",
    "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
    "updatedAt": "2019-09-12T10:58:26+00:00",
    "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
  }
}
```

Of course sometimes you need to delete identity all together. 

#### Request template:

```
curl --request DELETE \
  --url https://api-sandbox.oftrust.net/identities/<INSERT_IDENTITY_ID> \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' 
```

Parameters:

- `INSERT_IDENTITY_ID` is `id` of `Sensor` identity. 
- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.  

If you followed this guide carefully and ran all the requests we provided until now, you should not be able to delete.

Response

```
HTTP/1.0 422 Unprocessable Entity
```

```
{
  "error": {
    "status": 422,
    "message": "Could not delete identity, reason: links exist to or from the identity."
  }
}
```

As you can see, the reason is written in response: `Could not delete identity, reason: links exist to or from the identity.`. 

### Delete links

In order to delete this identity we need to make sure that it does not connect to any other identity. Let's list all the links `Sensor` identity has:

#### Request template:

```
curl --request GET \
  --url http://192.168.99.100:32000/identities/v1/<INSERT_IDENTITY_ID>/links \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' 
```

Parameters:
- `INSERT_IDENTITY_ID` is `id` of `Sensor` identity. 
- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.

Response:

```
HTTP/1.0 200 OK
```

```
{
  "@context": "https://schema.org/",
  "@type": "collection",
  "ItemList": [
    {
      "@context": "https://standards.oftrust.net/v1/Context/Link/BelongsTo/",
      "@type": "BelongsTo",
      "@id": "1b4384ce-dfcb-4ead-8024-783431424820",
      "from": "e5d73aaf-b4c3-4c34-a6e3-071d826b06b1",
      "to": "459d500d-9cf5-4f1a-8314-fba4d4ec6434",
      "data": {},
      "metadata": {
        "createdAt": "2019-09-12T10:04:54+00:00",
        "createdBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d",
        "updatedAt": "2019-09-12T10:04:54+00:00",
        "updatedBy": "33237067-e72c-4f26-b78b-9f9e234b2e7d"
      }
    }
  ]
}
```

Let's delete existing links.

#### Request template:

```
curl --request DELETE \
  --url http://192.168.99.100:32000/identities/v1/<INSERT_SENSOR_IDENTITY_ID>/link/<INSERT_APARTMENT_IDENTITY_ID>/<INSERT_LINK_TYPE_TO_DELETE> \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>'
```

Parameters:
 
 - `INSERT_SENSOR_IDENTITY_ID` is `id` of `Sensor` identity
 - `INSERT_APARTMENT_IDENTITY_ID`  is `id` of `Apartment` 
 - `INSERT_LINK_TYPE_TO_DELETE` type of link you want to remove e.g. `BelongsTo`
 - `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.

Response:

```
HTTP/1.0 204 No Content
```

### Delete identities

Now you can list all links of `Sensor` identity to make sure there is no links connected with it. Once it is checked, we can try to remove `Sensor` identity again.

```
curl --request DELETE \
  --url https://api-sandbox.oftrust.net/identities/<INSERT_IDENTITY_ID> \
  --header 'authorization: <INSERT_AUTHORIZATION_TOKEN>' 
``` 

Parameters:
- `INSERT_IDENTITY_ID` is `id` of `Sensor` identity. 
- `Sensor` identity just now. And will get a following response.  
- `INSERT_AUTHORIZATION_TOKEN` - Bearer or user token.

Response:

```
HTTP/1.0 204 No Content
```

### Summary

In this guide you have learnt how to create, update and delete identities and links. As well as what are `Identities` and `Links` in Platform of Trust.
