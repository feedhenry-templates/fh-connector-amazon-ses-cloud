FORMAT: 1A

# FeedHenry Amazon SES Connector
[![Dependency Status](https://img.shields.io/david/feedhenry-templates/fh-connector-amazon-ses-cloud.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/fh-connector-amazon-ses-cloud)

The FeedHenry Amazon SES Connector. For more information on Amazon SES see: [https://github.com/aws/aws-sdk-js](https://github.com/aws/aws-sdk-js).

# Group Amazon SES Connector API

# Amazon SES [/cloud/ses]

List verified

## Amazon SES [POST] 

List all verified email addresses

+ Request (application/json)
    + Body
            {
            }

+ Response 200 (application/json)
    + Body
            {
            }
# Build
```
npm install
```

# Tests

All the tests are in the "test/" directory. The cloud app is using mocha as the test runner. 

## Unit tests

```shell
npm test
```

## Unit coverage

```shell
npm run coverage
```