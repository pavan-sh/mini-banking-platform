# Building APIs with Node.js, Express

### Whats Node.js?

- Node.js is runtime environment that allows JavaScript to run outside the browser for building server-side applications using Google's V8 JavaScript engine.
- Supports Async, event driven programming - Node does not wait around for slow tasks like reading files or fetching data; it keeps working on other things and responds when each tasks finishes with help of event loop, callbacks, promises, async/await.
- Efficient for scalable network application - because node can handle thousands of users at same time without slowing down, since it never sits idle waiting on any one of them with help of non-blocking I/O and event loop.

### Node.js outperforms traditional API stacks by pairing high-concurrency I/O with a unified JavaScript runtime.

- Handles More Users at Once. Its single-threaded, non-blocking event loop processes thousands of concurrent requests asynchronously without thread-blocking on I/O.
- Faster App Loading. It acts as an efficient API Gateway or BFF (Backend for Frontend) by orchestrating parallel microservice calls via asynchronous Promise execution.
- One Language Everywhere. Teams share TypeScript interfaces, validation schemas, and DTOs across the full stack to eliminate context switching.
- Seamless Data Exchange. Built on the V8 engine, it parses and serializes RESTful JSON payloads natively without heavy ORM or XML serialization overhead.
- Lower Server Costs. Event-driven I/O avoids the high RAM overhead of spinning up separate OS threads per connection under heavy network load.
- Massive Ready-Made Toolkit. Developers leverage the npm ecosystem alongside lightweight frameworks like Fastify or NestJS to accelerate CI/CD delivery.
