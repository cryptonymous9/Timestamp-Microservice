# FreeCodeCamp Timestamp Microservice
This is a Node.js (with Express.js) application which is part of the freeCodeCamp Back End Certification. It takes a date string and gives you back a JSON with Unix value and natural format for the given date.

#FCC Constraints :

>1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
>2. A date string is valid if can be successfully parsed by `new Date(date_string)` (JS) . Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure an UTC timestamp.
>3. If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
>4. If the date string is **valid** the api returns a JSON having the structure 
>`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
>e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
>5. If the date string is **invalid** the api returns a JSON having the structure `{"unix": null, "utc" : "Invalid Date" }`. It is what you get from the date manipulation functions used above.

# User stories:

> 1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
> 2. If it does contain a date or Unix timestamp, it returns both the Unix timestamp and the natural language form of that date.
> 3. If it does not contain a date or Unix timestamp, it returns null for those properties.

Example output:
```
{ "unix": 1450137600, "natural": "December 15, 2015" }