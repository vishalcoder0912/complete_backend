# Backend Development – Core Concepts

This README covers some **fundamental backend concepts** that every backend or full‑stack developer should clearly understand. These topics are frequently asked in interviews and are essential for building scalable, secure web applications.

---

## 1. What is an API Endpoint?

An **API endpoint** is a specific **URL** that acts as an entry point to a service or functionality provided by a backend system.

### Key Points:

* It defines **where** and **how** a client can access a resource
* Clients send **HTTP requests** (GET, POST, PUT, DELETE, etc.) to endpoints
* The server processes the request and returns a **response** (usually JSON)

### Example:

```
GET https://api.example.com/users/123
```

This endpoint fetches details of the user with ID `123`.

👉 Typically, **one endpoint maps to one feature** or action in the backend.

---

## 2. Difference Between SQL and NoSQL Databases

### SQL Databases (Relational Databases)

SQL databases use a **predefined schema**, meaning the structure of the data is fixed.

#### Characteristics:

* Data stored in **tables** (rows and columns)
* Strong **schema enforcement**
* Uses **SQL (Structured Query Language)**
* Supports **ACID** properties (Atomicity, Consistency, Isolation, Durability)

#### Examples:

* MySQL
* PostgreSQL
* Oracle
* SQL Server

---

### NoSQL Databases

NoSQL databases are **schema-less** or have a **flexible schema**.

#### Characteristics:

* Data stored as **documents, key-value pairs, graphs, or columns**
* Records in the same collection **do not need identical structure**
* Highly **scalable** and **flexible**

#### Examples:

* MongoDB (Document-based)
* Redis (Key-value)
* Cassandra (Column-based)
* Neo4j (Graph-based)

### Summary Table:

| Feature     | SQL          | NoSQL                    |
| ----------- | ------------ | ------------------------ |
| Schema      | Fixed        | Flexible                 |
| Scalability | Vertical     | Horizontal               |
| Structure   | Tables       | Collections / Documents  |
| Use Case    | Banking, ERP | Big Data, Real-time Apps |

---

## 3. What is a RESTful API?

A **RESTful API** is an API that follows the **REST (Representational State Transfer)** architectural principles.

### Core REST Principles:

#### 1. Client-Server Architecture

* Client and server are **independent**
* Improves scalability and separation of concerns

#### 2. Uniform Interface

Includes the following constraints:

* **Resource Identification** using URIs
* **Resource Manipulation** through representations (JSON, XML)
* **Self-descriptive Messages** (headers + body explain how to process request)
* **HATEOAS** (Hypermedia as the Engine of Application State)

#### 3. Statelessness

* Every request must contain **all required information**
* Server does not store client session data

#### 4. Cacheability

* Responses should be **cacheable** by client or server when possible

#### 5. Layered System

* Client doesn’t know if it’s connected directly to server or through intermediaries

#### 6. Code on Demand (Optional)

* Server may send executable code to the client (e.g., JavaScript)

---

## 4. Handling File Uploads in a Web Application

Handling file uploads securely is a **critical backend responsibility**.

### Best Practices:

#### 1. Server-side Validation

* Validate **file size**
* Validate **file type / MIME type**
* Prevent malicious file uploads

🔐 Refer: OWASP File Upload Security Guidelines

---

#### 2. Use Secure Channels

* Always upload files using **HTTPS**
* Prevent data interception

---

#### 3. Avoid Filename Collisions

* Rename uploaded files using:

  * UUIDs
  * Timestamps

Example:

```
user_profile_9f3a21.png
```

---

#### 4. Store File Metadata

Keep track of:

* Original filename
* Stored filename
* File size
* Upload timestamp
* User ID

This helps in:

* File downloads
* Auditing
* Debugging



## 5. What kind of tests would you write for a new API endpoint?

When developing a new API endpoint, multiple testing layers should be considered:

### Unit Tests

* Test only the **business logic**
* Use **public interfaces only** (avoid private methods)
* Mock external dependencies (DB, file system, APIs)
* Fast and deterministic

### Integration Tests

* Test the **actual HTTP endpoint**
* Verify interaction with databases and external services
* Ensures different components work together correctly

### Load / Performance Tests

* Simulate high traffic scenarios
* Validate stability under stress
* Usually performed before production release

---

## 6. How does session management work in web applications?

Session management follows these steps:

1. **Session Creation** – Backend creates a unique session ID during login
2. **Session Storage** – Session data stored in DB or in-memory store (e.g., Redis)
3. **Session ID Delivery** – Sent to client via cookies
4. **Client Identification** – Client sends session ID with every request
5. **Session Access** – Backend retrieves session data using session ID
6. **Session Termination** – Session expires or is explicitly destroyed

👉 Redis is preferred for scalability and high performance.

8. What kind of tests would you write for a new API endpoint?
What the interviewer wants to check

Your understanding of testing layers and real-world backend quality practices.

Ideal Interview Answer

When creating a new API endpoint, I focus on three main types of tests:

Unit Tests

Validate business logic only

Test via public methods, not private functions

Mock external dependencies like databases or APIs

Integration Tests

Test the actual HTTP endpoint

Verify interaction with databases and external services

Load / Performance Tests

Check how the endpoint behaves under high traffic

Usually done before production release

9. How does session management work in web applications?
What the interviewer wants to check

Your understanding of state handling and authentication flow.

Ideal Interview Answer

Session management works as follows:

User logs in and backend creates a unique session ID

Session data is stored in a database or in-memory store like Redis

Session ID is sent to the client using cookies

Client sends the session ID with every request

Backend retrieves session data using the ID

Session expires or is destroyed during logout

10. How do you approach API versioning?
What the interviewer wants to check

Your ability to maintain backward compatibility.

Ideal Interview Answer

The two most common approaches are:

URL-based versioning: /v1/users

Header-based versioning: api-version: 1

URL-based versioning is more visible and commonly used.

11. How do you protect a server from SQL injection attacks?
What the interviewer wants to check

Your knowledge of backend security fundamentals.

Ideal Interview Answer

I use the following strategies:

Prepared statements with parameterized queries

ORM frameworks that generate secure SQL

Escaping user input (only if manual queries are unavoidable)

12. Explain statelessness in HTTP
What the interviewer wants to check

Your understanding of scalability concepts.

Ideal Interview Answer

HTTP is stateless, meaning every request is independent. The server does not store client state between requests, which improves scalability and reliability.

13. What is containerization?
What the interviewer wants to check

Your understanding of modern deployment practices.

Ideal Interview Answer

Containerization packages an application with its dependencies to ensure consistent execution across environments. Docker is a common example.

14. How do you secure a newly developed API?
Ideal Interview Answer

Implement authentication (JWT, OAuth)

Use HTTPS for encrypted communication

Apply strong authorization and CORS policies

15. How do you scale a backend application during traffic surges?
Ideal Interview Answer

By using horizontal scaling, deploying multiple stateless instances behind a load balancer.

16. How do you debug backend applications?
Ideal Interview Answer

Locally: IDE debuggers

Production: Logging, monitoring tools like NewRelic

17. How do you ensure backend code maintainability?
Ideal Interview Answer

I follow modular design, naming conventions, regular refactoring, consistent error handling, and automated testing.

🔹 Intermediate-Level Backend Questions
18. How would you implement full-text search?
Ideal Interview Answer

Use database-native full-text search or search engines like ElasticSearch. A custom solution involves tokenization, inverted indexing, and scoring.

19. How do you handle batch processing?
Ideal Interview Answer

By using distributed processing frameworks like Hadoop or Spark for parallel execution.

20. What is a message queue and why is it useful?
Ideal Interview Answer

Message queues enable asynchronous, event-driven communication between services, improving scalability and decoupling.

21. How do you manage database connections under high load?
Ideal Interview Answer

Using connection pooling, query optimization, and database load balancing.

22. How do you implement CI/CD for backend services?
Ideal Interview Answer

By triggering pipelines via Git, running automated tests, deploying only on success, and maintaining rollback strategies.

23. What is distributed caching?
Ideal Interview Answer

Distributed caching uses clustered cache servers with sharding, replication, and cache invalidation to improve performance and availability.

24. How do you manage background tasks?
Ideal Interview Answer

Using message queues, background job frameworks, or cron jobs depending on the use case.

25. How do you handle data encryption in backend systems?
Ideal Interview Answer

Data in transit: HTTPS/TLS

Data at rest: AES/RSA with secure key management

26. What are webhooks?
Ideal Interview Answer

Webhooks are event-driven HTTP callbacks used to notify systems asynchronously.

27. What are GDPR considerations in backend systems?
Ideal Interview Answer

Collect minimal data, obtain consent, secure data, and allow users to access or delete their data.

28. How do you handle long-running processes?
Ideal Interview Answer

By converting requests into asynchronous jobs using message queues and notifying clients upon completion.

29. How do you implement API rate limiting?
Ideal Interview Answer

Define limits, choose an algorithm like token bucket, store counters in Redis, and return HTTP 429 when exceeded.




---


---
