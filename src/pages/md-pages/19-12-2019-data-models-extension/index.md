---
path: "/guides/data-models-extension"
date: "2019-12-19T13:30:33.962Z"
title: "Ontology extension guide"
type: "page"
---
## Introduction
This guide is for Platform of Trust customers who are willing to make an increment to Platform of Trust Core Ontology by themselves. 

The aim of this guide is to describe how Platform of Trust customers and other interest groups can participate to the ontology development work. This guide explains the process of downloading the ontology file and the editing tool, making an increment and pushing the updated ontology file back to Platform of Trust for testing, validation and merging it to Platform of Trust master ontology.

## Guidelines on editing ontology

### DOs
- Make increments. You can add new subclasses under the current classes. You can also add new properties.
- For classes, use pascal case naming convention. For example, PascalCase.
- For properties, use camel case naming convention. For example, camelCase.
- Add missing annotations and refine existing ones.
- Be logical and semantically consistent.

### DON'Ts
- Do not delete anything from the PoT Core Ontology. You are allowed to delete only the classes that you have added yourself.
- Do not edit the class or property names of PoT Core Ontology. You are allowed to edit only the names of the classes you have added.
- Do not change the types of relations between the current classes. You are allowed to change only the relation types of the classes you have added.

## Editing process
1. *Download the latest Platform of Trust ontology*

It can be downloaded from [GitHub repository](https://github.com/PlatformOfTrust/standards). It is located under path */{Version}/Ontology/pot.jsonld*. Where *{Version}* is required version, for ex. *v1*.
Since Protégé requires *Expanded JSON-LD* form, you need to expand it using [JSON-LD Playground](https://json-ld.org/playground/) tool. Just copy-paste file content in tool and save *Expanded* form for future editing in Protégé.

2. *Download and install Protégé ontology editor*

*Installation instructions* for different operation systems can be found [here](http://protegeproject.github.io/protege/installation/).

3. *Edit the ontology according to Platform of Trust Guidelines*

Open the file on Protégé. macOS users will have to change the ontology file ending from .jsonld to .owl.
Once you have opened the ontology file with the editor you are able to edit it. You should have at least basic knowledge about ontologies and OWL before starting the work. Please reffer [The W3C Web Ontology Language](https://www.w3.org/TR/owl-guide/) and [Ontology Development 101](https://protege.stanford.edu/publications/ontology_development/ontology101.pdf). Also follow the guidelines specified in this document/

4. *Save the file and push it as PR in GitHub*
	- Make fork of [GitHub Repository](https://github.com/PlatformOfTrust/standards).
	- Save the edited file in JSON-LD format with following naming schema: pot_<your comapany's name>_20yy-mm-dd.jsonld.
	- Add your file to *Suggestions* folder under *{Verson}* folder (ex. *v1*) in GitHub repository. Fell free to add *Suggestions* folder if it is missing. For example, a person working for YIT saving the file on April 20th names the file as *v1\Suggestions\pot_YIT_2020-04-20.jsonld*.
	- Once the file is saved you can deliver it back to Platform of Trust for testing, validation and implementation by creating PR request from your fork repository.

## Links and additional information
All classes and properties can be investigated in [Data Model structure documentation](https://standards.oftrust.net/v1/).

All JSON-LD source files are available under [GitHub Repository](https://github.com/PlatformOfTrust/standards).

For more information on ontology read [How to use standard data models guide](/guides/data-models).

If you are application developer, it might be a good idea to read [Application Development Guide](/guides/build-apps) first. 

If you are integrating data and creating data products, take a look at the [Data Product Guide](/guides/data-products). 

Open sandbox is your friend! Isolated environment for testing applications and data product integrations, read more from [Sandbox Guide](/guides/sandbox).