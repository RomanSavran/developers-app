---
path: "/guides/create-application"
date: "2019-10-25T10:57:00.772Z"
title: "Consume data products"
type: "page"
---

## Introduction 

This guide is meant for developers who is familiar with Platform of Trust and its main concepts such as: `Identities`, `Auhtorization token` and `Data products`. You can read about these topics in our guides as well e.g. [Data product 101](./guides/data-products) guide.

Overall `consuming Data Products` means simply to request necessary data from 3rd party data providers e.g. sensors, building or IoT devices. 

## Overview

1. Fetch a data product via Broker API
2. Summary

## Fetch a data product via Broker API

One of the most important features of Platform of Trust is to connect 3rd party data providers and any user on the platform. Thus you should be able to fetch data products via Broker API. Broker API will process your request and pass it to target Data Provider's `translator`. 

![](data_product.png)

Example:

```
curl --request POST \
  --url https://api-sandbox.oftrust.net/broker/v1/fetch-data-product \
  --header 'content-type: application/json' \
  --header 'x-app-token: eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzY29wZSI6bnVsbCwiZXhwIjoxNjM1MDczMjE0LCJzdWIiOiIwZDIyNjFkOS1lYWFhLTQwMDctYWU2OS01ZTI3YzVmYTI1MjYiLCJhdWQiOiIwZDIyNjFkOS1lYWFhLTQwMDctYWU2OS01ZTI3YzVmYTI1MjYiLCJ0eXBlIjoiQXBwIiwiaXNzIjoiTEUiLCJpYXQiOjE1NzIwMDEyMTQuMCwic2NvcGVzIjoiIn0.CzvStQxRPdUj_uf6JbCcNn26q7w5v-O95BsNfSDCEJKK-TCkda6_NdnzGauKDoqO1nmfv3d8bvpf7qCHXPuj1UHcnilmqpHAbCcfbg7QUe7pGO27Fnul3zX5HUHZtn0W6knJEfud_t_YjbW1AY_HZSewaaPCUXQtduoUno8iss54GLc-7Ut19AxS6mcsbvJxTDzCm6fXwzeyxij-HvhE0tpytpiRaIUNjiqXL5mqTtIRuERYSg7izqr4Q3d1dkxuMPFLQ2VgvJKCDjaOvz0wPc8i04L9BsHaY9OgpRU7R_78wPrgKzRfd3Za7SUVq7WSlwxTzTwfJOD83VnRO-qAiFTSHZTKfrDk0EV0KlbJux-18cOkpJ2qfeuPwd5LJSpQqmEWGGUlJzCPXFTbFnRm-jJnzmgbdahPWXO_Two10hk98O0ASaGnTHdFkO6k0LqoXnvvy5aUaulaSVMCvJ401m9djGvDhOlq42bmdkVx4laNuNQFzgxgH3ZthTJCWxP7tMq1bPXGbI_Sn2l5u5CO5NkTZspOd5uDVz4g2PPOAHctICPyL4oTghBsJQf5YpIASbKZh4BgWto-AQPxxMiDaJpzIzVezAHa5h-2sVBYEs64ig0kL0UXEeidAFyYKXXdoJb5cQmrNi-kUT90BsbAKQOVpwL8hgUKSi78jVPHRFY' \
  --header 'x-pot-signature: MYZlyZR+V5+auLqMMXCUnvaVHfD2wvSujFreOrMrASw=' \
  --data '{
	"timestamp": "2019-10-25T00:00:00.000Z",
	"productCode": "prh-business-identity-data-product",
	"parameters": {
		"businessId": "0831312-4"
	}
}'
```

Required headers:


`x-app-token` - access token of application you should have created before. You can read more about application in `Register an application` guide. <br/> 
`x-pot-signature` -  A HMAC-SHA256 signature in base64 encoded format. The signature is created from the request payload and the app's client secret. <br/>

Basic example in Python on how to generate `x-pot-signature` :

```
body = {
    "timestamp": generate_RFC3339(),
    'productCode': 'prh-business-identity-data-product',
    "parameters": {
        "businessId": "2980005-2"
    }
}

# Client secrets
secret = "P8qNkpXkfLe_OQa_2ydHRgzFR2_GuIoyUoMtf8zcLZ0"

# The keys MUST be sorted, without indentation 
# and separators comma (,) and colon (:) specified.

body_hash = json.dumps(
  body,
  sort_keys=True,
  indent=None,
  separators=(',', ': ')
).strip()

digest = hmac.new(secret.encode('utf-8'),
    body_hash.encode('utf-8'),
    hashlib.sha256).digest()

signature = base64.b64encode(digest).decode()
return signature
```

Optional header:

`x-user-token` - The currently logged in user's OAuth bearer token. In case data product is user specific.

Required parameters:

`timestamp` - The timestamp when the request was sent. RFC3339 format. <br/>
`productCode` - The product code of the data product you want to fetch. <br/>
`parameters` - Optional additional parameters that the translator needs. Different products and translator requires different parameters. You should check parameters list from Data Provider's translator API. <br/>

Response:

```
{
  "@context": "https://standards.lifeengine.io/v1/Context/Identity/Thing/HumanWorld/Product/DataProduct",
  "data": {
    "@context": "https://standards.oftrust.net/contexts/data_product-translator_test_data.jsonld",
    "@type": "BusinessIdentity",
    "totalResults": 1,
    "offset": 0,
    "items": [
      {
        "name": "Platform of Trust Oy",
        "businessId": "2980005-2",
        "companyForm": "OY",
        "registrationDate": "2019-03-01"
      }
    ]
  },
  "signature": {
    "type": "RsaSignature2018",
    "created": "2019-10-28T18:42:51+00:00",
    "creator": "https://api-sandbox.lifeengine.io/translator/v1/public.key",
    "signatureValue": "ojhLYhb7U8sB/4UEDu5Z3TYzXcEgZcE3N32axrfV6WuDCz95FMTCIw2QWMq/S0gf56OHyNFehYlLqHjg2VzBYj1gKfcTtj2U7YEaxSuik47/PC1dvMqodN8TjLR8OdC/M2HXn7FXAJ6UVzCEIcfHByygo6JLr8T9u01fYuxYmZDWeBEHp0FNM2xMvl6PO4+oX6DZjTAi7sgB7Z8W1T7RUqfCdWkQEF6GtMRjmS3BXPNtHbTVAKQkWywU8pr1eZvt7MJ31iOpnfjuHVVUQPYREmE4VEnEYomDewPz7RFnCQNT92f+mkKBSMhZ6s+DEnozDltQLEc9cqspdfkrI3GP4cg9qiTAIDeXNKvDgCjAbfdL+99RxK07vAkLHVOuDBO/r7zyxRec9hkLK1iusKPzYvrwcs7IFWkV3+hm8GuuwMdQooCnKb05betIK38+IETtBdUsUvMIqjDlV6eKYY944lKZTi44qGk2xO6BlKdUboBfOZfe1k6RSaGCsjsWp7ZroEfxzkJjYjt+/TM3ZjQXBQIPMUNvTjFDeXekFgdR9HRpilsQgnL23QtOD5zozWLEg/iEC9HwkSiSCxVwRc9MXplkQT0JFGiILEGxp3TJgUV+GIsnQx1NHnPVvBrths+zhiERRZTFmqKppxslFFzmuWYdPqzBhPslN1W0BQ1JwA8="
  }
}
``` 


## Summary

As you can see fetching data production is very easy. All you need to know is `application access token`, `product ID` and `parameters` .

For detailed documentations on Platform of Trust core APIs, Visit [Platform of Trust Broker API Documentation](https://docs.oftrust.net/#broker-api).
