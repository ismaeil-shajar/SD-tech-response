# API gateway

## POST add record in service

**Endpoint:** `https://api.sudanapi.tech/public/service/push/:service`

The POST request to https://api.sudanapi.tech/public/:service allows clients to send requests to a specific service selected from a list of services stored in a database.

### Headers

- `apikey`

### Path Variables

- `service`

### Body

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
}```

