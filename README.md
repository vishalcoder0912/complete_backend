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

---


---
