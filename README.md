# Fake Leads Processor
The dummy leads processor


### First Run
before you start the app for the first time, ensure that you run the command below
```
npm install
```

### Startup
To start the server
```
node app.js
```

---
### Mapping

Resource | GET | POST
--- | --- | ---
`/leads` | Returns all the leads from the DB | Creates a new lead
`/leads/:id` | Returns a lead from the db with the matching ID | -


Sample POST request
```
{
	"name": "John Doe",
	"email": "john.doe@test.com",
	"contactNumber": "1234567890",
	"comments": "Lorem ipsum"
}
```
