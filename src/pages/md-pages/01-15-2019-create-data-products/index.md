---
path: "/guides/data-products"
date: "2019-01-15T13:30:33.962Z"
title: "Data product 101"

type: "page"
---
This guide will help you create a data product in the Platform of Trust market place for other developers to utilize in applications. 

## Basic conceps

**What is a data product?** 

A Data product is the final product which 3rd party developers can find from Platform of Trust market place.  
3rd party developers always use Data Broker API to access data product data.

Note that we expect the raw data provider to have a beta API environment which can be used in the Platform of Trust environment. 
The beta API is used for testing the data product before launch. 

**What is a translator and why do I need it?**

The translator connects the raw data source to the data product and translates the data model to standard format.

**Get familiar with Platform of Trust ontology**

Local data most likely uses different names for data attributes. 
If you haven't done data integration before, use a good amount of time in this step. 
It will pay back later and reduce refactoring and wasted resources.

You need to be familiar with the ontology to harmonize source system data 
fields to standard formats used in Platform of Trust. 
With a harmonized ontology and semantics we can be sure that everyone 
understands the content in a similar way. 

**Authentication**

Describe authentication briefly. 

# Create a data product

Phases included in the process: 

1. What data is available and why is it published?
2. Sign up as a user
3. Create and host a translator
4. Register data product in sandbox and test the translator
5. Register data product in production


# 1. What data is available and why is it published?

You might be tempted to jump directly to the technical integration, but think about the business reasons first. 
Use a business model canvas or similar to iterate business reasons and other aspects if needed. 

First you need to find out what data is available in the source system. 
On top of that you need to have a reason why it is published. 

If you act on behalf of another company and your task is to setup technical 
facilities for the data product, discuss with your client. 

**Business related wuestions which normally needs to be answered before proceeding:** 
* What data is available?
* Why should that data be published via Platform of Trust (business reasons)
* Who are the expected consumers? 
* What are the use cases for the data? 

You're about to start building the translator component or functionality between the raw data source system and Platform of Trust.

IMAGE HERE

**Technical questions which needs to be asnwered before proceeding**
* How is the data accessed? API? Something else?
* Where's the API (if there is)? 
* Data source system/integration documentation? 
* How to get credentials are needed?  

The consuming developer will access the data via the Platform of Trust Data Broker API, 
which in turn forwards the request to the translator component which handles calls to the raw data system. 
The beta API is also expected to stay available after the data product release 
since 3rd party developers will use it while developing applications instead of 
calling your production API. 



# 2. Sign up as a user

To get started, you need to [sign up as a user](https://developers.oftrust.net/sign-up) to the Platform of Trust.


# 3. Create and host a translator 

A translator transforms the local data model and attributes to match the Platform of Trust ontology.

To access the data behind a translator, the developer requests data through the Data Broker API, which forwards the request to the translator.

The Platform of Trust Data Broker API does *not* store or cache the data anywhere. Each request is always relayed as is,
with extra security added in signed payload headers. The request data or response data is never mangled in any way in the Data Broker API.

Currently you have two options. 
* You can use any of the provided open source skeletons provided by Platform of Trust, 
which can be downloaded from [Github](https://github.com/PlatformOfTrust/translator-skeleton-python). 
With this option you need to deploy the code your self, e.g. use your own servers or a cloud provider. 
This might require more work from you. [See the more detailed example and description of using Translator skeleton](/developers/getstarted/translator).
* Another popular option is the use of an integration platform if you happen to have one. 
Currently Tunninen Oy provides a Platform of Trust compatible integration platform, 
which enables a fast way to integrate your raw data to Platform of Trust. 
We expect and welcome more integration providers to join the Platform of Trust ecosystem. 


# 4. Register data product in sandbox and test the translator

You can register the data product with our Product API ([see documentation](https://docs.oftrust.net/#product-api)).
The documentation always points to the sandbox APIs, which means that you should first test against that.

Here's an example on how you would register a data product with the Product API in Platform of Trust.

Note that you need to be logged in to either the MyWorld application or the 
developer portal, and send the `Authorization` header.

```
curl -X POST https://api-sandbox.oftrust.net/product/v1/products \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzY29w...DVs5aaf" \
-d '{
  "dataContext": "https://platformoftrust.github.io/standards/contexts/product-data.jsonld",
  "parameterContext": "https://platformoftrust.github.io/standards/contexts/product-parameters.jsonld",
  "productCode": "example-product-1",
  "name": "Example product",
  "translatorUrl": "https://example.com/translator/url",
  "organizationPublicKeys": [
    {
      "url": "https://example.com/example.pub",
      "type": "RsaSignature2018"
    }
  ],
  "description": "Example data product, returns information from our APIs.",
  "imageUrl": "https://example.com/image.png"
}'
```

The fields of the data product:
- `dataContext`: Link to a JSON-LD context describing the `data` that the Data Broker API returns.
- `parameterContext`: Link to a JSON-LD context describing the `parameters` to be sent to the translator via the Data Broker.
- `productCode`: A unique identifier for the data product.
- `name`: The name of the data product.
- `translatorUrl`: The URL to the translator, this is where the data broker will forward the request.
- `organizationPublicKeys`: List of objects containing `{"url", "type"}` where the URL points to the public key of the organization, used for signing the payload, and the "type" defines the type of the key.
- `description`: The description of the data product, shown in the market.
- `imageUrl`: Optional URL to an image to be shown with the data product.

In case of success (201 Created), you will get a response body similar to this: 

```json
{
  "@context": "https://platformoftrust.github.io/standards/contexts/product.jsonld",
  "@type": "Product",
  "@id": "https://api-sandbox.oftrust.net/product/v1/products/example-product-1",
  "productCode": "example-product-1",
  "dataContext": "https://platformoftrust.github.io/standards/contexts/product-data.jsonld",
  "parameterContext": "https://platformoftrust.github.io/standards/contexts/product-parameters.jsonld",
  "name": "Example product",
  "translatorUrl": "https://example.com/translator/url",
  "organizationPublicKeys": [
    {
      "url": "https://example.com/example.pub",
      "type": "RsaSignature2018"
    }
  ],
  "description": "Example data product, returns information from our APIs.",
  "imageUrl": "https://example.com/image.png"
}

```
 
## Testing the data product

Use Platform of Trust Data Broker API to test your data product. An example: 

```
curl -X POST https://api-sandbox.oftrust.net/broker/v0.1/fetch-data-product \
-H "Content-Type: application/json" \
-H "X-Pot-Signature: Ioma1gqOVFUBrXiziWSCLqBG4vFozG3YgzPzillNip0=" \
-H "X-Pot-App: 379780e4-b511-4fa9-aef8-bda9bd58ab89" \
-H "X-Pot-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzY29w...DVs5aaf" \
-d '{
    "timestamp": "2019-02-27T14:38:00+02:00",
    "productCode": "example-product-1",
    "parameters": {
         "param-1": "example-1",
         "param-2": "example-2",
    }
}'
```

See [API documentation](https://docs.oftrust.net/#broker-api) for details.

# 4. Register data product in production

The final step is to register the data product in the production environment.

Make the same API call as with the sandbox, but change the `translatorUrl` to point to your production environment,
as well as the `curl` call to `https://api.oftrust.net/product/v1/products`.


## TODO: Set pricing and other product information

Minimum meta information requirements for published data product are: 
* Name
* Description
* Price
* Data license
* Logo (url)


You can configure the data product with Product API (see documentation). 

You can preview the data product in Platform of Trusta Market place and 
adjust the content and settings accordingly before publishing the product. 


## TODO: Update and unpublish 

You can always update product configuration and unpublish your data product with Product API. Check out the API Documentation for details. 

# Create account and get started!

If you are application developer, it might be a good idea to read [Application Development Guide](/guides/build-apps) first. 

Digital Twins are fundamental features of the platform, take a look at the [Digital Twin Guide](/guides/twins).

Open sandbox is your friend! Isolated environment for testing applications and data product integrations, read more from [Sandbox Guide](/guides/sandbox).