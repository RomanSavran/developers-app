---
path: "/apis/calendar-api"
documentation: "https://docs.oftrust.net/#calendar-api"
version: "1.0"
modified: "20.5.2019"
uptime: ""
runkit: ""
date: "2019-01-22T13:01:33.962Z"
title: "Calendar REST API"
#image: "" # Featured image shown on page and listings. Save in same folder. Don't use svg.
type: "api" # All "News" are blogs to separate them from real pages made with MarkDown, so that they appear in blog listings etc.
subtype: "api" # "blog" / "news" / "press-realease" etc.
tags: ['api', 'calendar', 'Data'] # Any string, can be used in search / "related content"
lang: "en-US" # ISO Lang attr
order: 5
status: "published" # "published" / "draft" / "pending" / "archived"
---
##General
The calendar API provides means to create calendar entries to identities. You can e.g. create an event for a housing company identity, a reservation to a room identity, or just a regular calendar entry to any identity you want.

##Capabilities
* All traditional REST API CRUD operations.
* Create calendar entries for any of the identities in digital twins.
* You can specify if an entry repeats. 
* Calendar entries can have carbon copy recipients similar to email. A notification about the entry will be sent to these users.

##Limitations
* No PATCH method.
* Not CORS enabled - requires authorization header.
* You can add only one calendar event at a time. 

##Resources
[RAML Specs (zip)](https://docs.oftrust.net/specs/raml/calendar-api.zip)

[Open API Specs (json)](https://docs.oftrust.net/specs/oas/calendar-api.json)

[API Documentation](https://docs.oftrust.net/#calendar-api)