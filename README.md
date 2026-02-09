Explain what an API endpoint is?
An API endpoint is a specific URL that acts as an entry point into a specific service or a functionality within a service.

Through an API endpoint, client applications can interact with the server sending requests (sometimes even with data in the form of payload) and receive a response from it.

Usually, each endpoint can be mapped to a single feature inside the server.



Can you explain the difference between SQL and NoSQL databases?
SQL databases (or relational databases as they’re also known) rely on a predefined schema (or structure) for their data. Whenever you describe a record, or table inside the database, you do so through its format (name and fields).

In NoSQL databases, there is no schema, so there is no predefined structure to the data. You usually have collections of records that are not obligated to have the same structure, even if they represent conceptually the same thing.



What is a RESTful API, and what are its core principles?
For an API to be RESTful (which means it complies with the REST guidelines), it needs to:

It needs to follow a client-server architecture (which all HTTP-based services do).

It has to provide a uniform interface which means:

There should be a way to identify resources from each other through URIs (Unique Resource Identification).

There should be a way to modify resources through their representation.

Messages should be self descriptive, meaning that each message should provide enough information to understand how to process it.

Clients using the API should be able to discover actions available for the current resource using the provided response from the server (this is known as HATEOAS or Hypermedia as the Engine of Application State).

It needs to be stateless, which means each request to the server must contain all information to process the request.

It should be a layered system, meaning that client and server don’t have to be connected directly to each other, there might be intermediaries, but that should not affect the communication between client and server.




How would you handle file uploads in a web application?
From a backend developer perspective, the following considerations should be taken into account when handling file uploads regardless of the programming language you’re using:

Perform server-side validations. Validate that the size of your file is within range, and that the file is of the required type. You can check this OWASP guide for more details.

Use secure channels. Make sure the file upload is done through an HTTPS connection.

Avoid name collision. Rename the file ensuring the new filename is unique within your system. Otherwise this can lead to application errors by not being able to save the uploaded files.

Keep metadata about your files. Store it in your database or somewhere else, but make sure to keep track of it, so you can provide extra information to your users. Also, if you’re renaming the files for security and to avoid name collisions, keep track of the original filename in case the file needs to be downloaded back by the user.











Resources should be cacheable either by client or by server.

Optionally, the server could send code to the client for it to execute (known as “Code on Demand”).
