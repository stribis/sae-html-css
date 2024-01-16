---
sidebar_position: 3
---
# Client & Server Interaction

## Requests and Responses: Navigating a Website

### Request-Response Cycle

![interaction](https://miro.medium.com/v2/resize:fit:1400/0*D_zEDiIqNK4uNhuY)

The interaction between a client (typically a web browser) and a server follows a request-response cycle. When a user enters a URL in the browser and hits Enter, a request is sent to the server. This request contains information about the desired resource (web page, image, etc.), and the server processes this request.

### Server Processing

Upon receiving a request, the server performs various tasks. For static resources, like HTML or image files, the server retrieves and directly serves the file. In the case of dynamic content, server-side scripts (e.g., PHP, Python, Node.js) generate the content on the fly based on the request.

### Sending the Response

The server then sends a response back to the client. This response includes the requested resource, along with metadata such as status codes, headers, and cookies. The client's browser processes the response, rendering the web page or handling other resource types accordingly.

## Static vs Dynamic Websites

### Static Websites

Static websites consist of fixed content stored on the server. Every user sees the same content, and changes require manual modification of HTML files. These sites are straightforward, fast to load, and easy to host. They are suitable for simple projects or content that doesn't change frequently.

### Dynamic Websites

Dynamic websites generate content dynamically based on user interactions or real-time data. Content is often retrieved from a database and tailored to individual users. Dynamic sites are more complex, allowing for personalized experiences and frequent updates, making them suitable for interactive applications and complex functionalities.

## Static and Dynamic URLs

![static vs dynamic](https://miro.medium.com/v2/resize:fit:709/0*sKlOQGXHt3p_d9ri.jpg)

### Static URLs

Static URLs remain constant and point directly to specific resources on the server. They are typically used in static websites where content doesn't change frequently. For example, `https://www.example.com/about-us`.

### Dynamic URLs

Dynamic URLs include parameters that determine the content to be displayed. They are often associated with dynamic websites and server-side scripting. For instance, `https://www.example.com/products?id=123` might retrieve details for a specific product with ID 123.

## Website Structure on a Server, Subdomains, and WWW

![structure](https://i.ytimg.com/vi/RniGO9Ek6yY/hqdefault.jpg)

### Structure of a Website on a Server

A website on a server is organized into directories and files. The root directory contains the main files, such as the homepage (e.g., `index.html`). Subdirectories may organize content logically, such as `/images` for image files or `/css` for stylesheets.

### Subdomains

Subdomains are subdivisions of a domain and can point to different sections or applications within a website. For instance, `blog.example.com` might host a blog, while `store.example.com` could lead to an online store. Subdomains provide a way to structure and organize content.

