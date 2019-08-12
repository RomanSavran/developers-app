---
path: "/guides/sandbox"
date: "2019-01-15T13:30:33.962Z"
title: "Open Platform of Trust Sandbox"
type: "page"
---
The Platform of Trust Sandbox environment is intended to be used by developers to test their applications and data product integrations, prior to production, in a safe and isolated manner.

The environment should be used for test data only, but will run the same version of the software as production.

## SLA

SLA for all the services needed by sandbox is now `best effort`. Aim is to provide 99% uptime early next year. 

By default sandbox APIs will respond 99% of the call in under 250ms. Aim is to have 100ms response time early next year.  There are currently a few exceptions: 

- Product API average response time is 1000ms.  Aim is to have 250ms response time early next year. 
- Broker API is using 3rd party solutions and thus we can not completely guarantee respose time. 


## Periodic environment reset

For things to keep in mind when working with sandbox is that we do NOT guarantee that the data in the database stays intact, and instead we guarantee that it will be regularly reset and your data WILL be lost.

## Sample data and integrations 

For your own integrations to the sandbox environment it is recommended that you also use purely test data with no sensitive information, as other people also use the environment and your data might be viewed by other people as well. This is especially important in case of data products, as during development your access control checks etc. might not be fully complete.

It is recommended that when you are integrating a data product, that you use a separate "sandbox" deployment for yourself as well. This way you can keep working on the "development version" that is tied to sandbox, while you have a stable production version deployed as well.

## APIs in sandbox

The sandbox APIs and other URLs can be identified with the `*-sandbox.oftrust.net` -domain, so e.g. all the APIs for managing your data products etc. are under `api-sandbox.oftrust.net`. 


# Create account and get started!

Create account and start utilizing the free and open sandbox! 

If you are application developer, it might be a good idea to read [Application Development Guide](/guides/build-apps) first. 

If you are integrating data and creating data products, take a look at the [Data Product Guide](/guides/data-products). 

Digital Twins is fundamental feature of the platform, take a look at the [Digital Twin Guide](/guides/twins).
