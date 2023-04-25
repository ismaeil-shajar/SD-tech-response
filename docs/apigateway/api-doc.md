# Project: API gateway

## End-point: add record in service
the `POST` request to `https://api.sudanapi.tech/public/:service` allows clients to send requests to a specific service selected from a list of services stored in a database.

you can send any json body depend on target configuration service
### Method: POST
>```
>https://api.sudanapi.tech/public/service/push/:service
>```
### Headers

|Content-Type|Value|
|---|---|
|apikey||


### Body (**raw**)

```json
{
   "type":1,
    "details":"string",
    "area":"string",
    "address":"string",
    "phone":"string",
    "phone2":"string",
    "state_id":1,
    "locality_id":1,
    "htype_id":1  
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: add record in multi service
the `POST` request to `https://api.sudanapi.tech/public/:service` allows clients to send requests to a specific service selected from a list of services stored in a database.

json body :

- `services` : add configurations service names in array
- `data`: request body
### Method: POST
>```
>https://api.sudanapi.tech/public/service/multi/push/:service
>```
### Headers

|Content-Type|Value|
|---|---|
|apikey||


### Body (**raw**)

```json
{
    "services":["servicename1","servicename2"],
    "data":{
   "type":1,
    "details":"string",
    "area":"string",
    "address":"string",
    "phone":"string",
    "phone2":"string",
    "state_id":1,
    "locality_id":1,
    "htype_id":1,
"يوجد اشتباكات":"string"    
}}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: add new service configuration
the JSON object be used to save service configuration data in a database.

The object contains the following properties:

- `protocol`: Specifies the protocol to be used for communicating with the service (e.g. "http" or "https").
- `endpoint`: Specifies the URL of the service to be called.
- `method`: Specifies the HTTP method to be used when making the request to the service (e.g. "GET", "POST", etc.).
- `headers`: Specifies any additional headers that should be included in the HTTP request to the service. In the example provided, the `Content-Type` header is set to `application/json`, indicating that the request body will be in JSON format.
- `mapper`: Specifies a mapping between input and output keys. This can be used to convert input keys to output keys, as needed by the service being called.
- `defaults`: this can used to add defaults values will be send to services
### Method: POST
>```
>https://api.sudanapi.tech/public/config/:service
>```
### Headers

|Content-Type|Value|
|---|---|
|apikey||


### Body (**raw**)

```json
{
    "protocol": "http",
    "endpoint": "string",
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    },
    "mapper": {
        "key": "mappedKey"
    },
    "defaults":{
        "topic":"set"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
