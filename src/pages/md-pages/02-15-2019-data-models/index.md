---
path: "/guides/data-models"
date: "2019-01-15T13:30:33.962Z"
title: "How to use standard data models"
type: "page"
---
This guide will help you to understand data models used in the Platform of Trust. Data integrator's most likely will need to understand this part thoroughly to be able to build translation rules between source data and platform of trust with Translator component or integration platform tools. 

## Purpose and benefits
Unification of data models enables easy integration without need to build connectors for each specific case. 
Platform of Trust data models are available in machine readable [JSON-LD](https://json-ld.org/) encoding and utilizes [RDF](https://www.w3.org/RDF/) and [OWL](https://www.w3.org/OWL/) standards. Other encodings might be available at later stages. Data model can be easily extended by third parties. Exact process is specified in [Ontology extension guide](/guides/data-models-extension).

## Data example
Each data file of identity should reference its associated context file. All properties excluding *name* should be nested under *data* object. Here is example of *Building*

```JSON
{
    "@context": "https://standards.oftrust.net/v1/Context/Identity/",
    "@id": "<identity id>",
    "@type": "Building",
    "name": "Huomenta",
    "data": {
        "lifeCycleInaugurationMomentYear": 1943,
		"lifecycleInspectionYear": 2017,
        "physicalAreaSquareMeterNet": 5200,
        "physicalVolumeCubic": 40000
    }
}
```

In this example *@context* defines reference to Context file where definition of JSON sctructure is located. In this definition there is a reference to Ontology file with term definitions. [JSON-LD playground](https://json-ld.org/playground/) can be used to extract machine readable definition of data. Just copypaste above example there to receive terms links.

Please reference sections below to get more information about Ontology and Context terms

## Data model
Data model include real life objects and their properties.
We have a set of classes, arranged in a multiple inheritance hierarchy where each class may be a sub-class of multiple classes.
We also have a set of properties:
* each property may have one or more classes as its domains. The property may be used for instances of any of these classes.
* each property may have one or more classes as its ranges. The value(s) of the property should be instances of at least one of these classes.
* can be arranged in hierarchy same as classes.

The decision to allow multiple domains and ranges was purely pragmatic. While the computational properties of systems with a single domain and range are easier to understand, in practice, this forces the creation of a lot of artifical classes, which are there purely to act as the domain/range of some properties.

All classes and properties can be investigated in [Data Model structure documentation](https://standards.oftrust.net/v1/).

## Data model source code
Data model source code is organized in following way:
* Core ontology file is named *pot.jsonld* and is located under *ontologies* folder. It contains all classes and properties used in ontology
* Context files are located in *contexts* folder and contains one file per identity. This file describes JSON document sctructure of specific identity.
* Vocab files are located in *vocabularies* folder and describes properties metadata like labels on forms and requirements

Core ontology should be understood as core terms vocabulary including all classes and properties. Context files define JSON document strcuture and are connected to ontology. Vocab files should be used to build UI and other application level represetations of data structure and also to understand some technical level properties of attributes.

If you want to extend ontology, please read this [Ontology extension guide](/guides/data-models-extension)

## Links and additional information
All classes and properties can be investigated in [Data Model structure documentation](https://standards.oftrust.net/v1/).

All JSON-LD source files are available under [GitHub Repository](https://github.com/PlatformOfTrust/standards).

If you want to add your classes or properties to ontology use [Ontology extension guide](/guides/data-models-extension)

If you are application developer, it might be a good idea to read [Application Development Guide](/guides/build-apps) first. 

If you are integrating data and creating data products, take a look at the [Data Product Guide](/guides/data-products). 

Open sandbox is your friend! Isolated environment for testing applications and data product integrations, read more from [Sandbox Guide](/guides/sandbox).