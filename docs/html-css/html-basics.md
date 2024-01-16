---
sidebar_position: 1
---
# HTML Basics

:::info[Code Editor]
If you don't have one, **PLEASE** download a code editor
I will be working with `vscode` which can be found here: https://code.visualstudio.com/download 
:::


## Mark-up Language vs. Programming Language

**Markup Language:**
A markup language is a set of tags used to annotate content, providing structure and meaning to elements within a document. It doesn't involve programming logic or operations. Instead, it focuses on presenting information in a structured way. HTML (Hypertext Markup Language) is a classic example used for creating the structure of web pages.

**Programming Language:**
A programming language, on the other hand, is a formal set of instructions that can be used to produce output or perform computations. It involves logic, algorithms, and control structures. Programming languages are used to create software, applications, and perform various computational tasks. Examples include Python, JavaScript, and Java. They enable the creation of dynamic and interactive functionalities in addition to defining structure.

| Mark-up Language *[Aufzeihnungssprache]* | Programming Language |
| --- | --- |
| Structures and Formats Content | Makes decisions after certain conditions Functions under the principle of Inputs, Processing and Output|
| HTML(Content) or CSS(Style) | JavaScript and many more |


## Static Pages

A static web page is a fixed, unchanging webpage that displays the same content to every user. The content on a static page remains constant unless manually updated by a developer. These pages are typically written in HTML and may include CSS for styling, but they lack dynamic elements or interactivity. Static web pages are quick to load and straightforward, making them suitable for content that doesn't change frequently, such as informational websites or online portfolios.

### Important:

* Stateless *[Zustandslos]* *(No Memory of past requests)*
* Is hardcoded *(All content is defined in the HTML Files)*
* Does not need any server-side language *(ex. PHP)*
* Does not connect to any Database *(Content is not Dynamic)*
* Client Side Storage Possible *(Cookies, Sessions, Local Storage etc.)*
* The starting file should be called `index.html`
* Only HTML And CSS knowledge needed


## Why index? 

:::info[your homepage]
Unless you know what you are doing, always name your homepage index.html and make sure it is directly in the root directory of your project!
:::
Naming the main page of a static website "index.html" is a convention widely recognized by web servers. When a user navigates to a directory on a web server without specifying a particular file in the URL, the server automatically looks for a default file to load. "index.html" is commonly set as the default file for this purpose.

By adhering to this convention and naming your main page "index.html," you ensure that when visitors access your website's root URL (e.g., http://www.yourwebsite.com/), the web server automatically loads the "index.html" file from that directory. This practice helps maintain a clean and organized structure for your web project while providing a seamless and expected user experience. It's a widely accepted standard that simplifies the URL and makes it more user-friendly.

* When sending a request to a web server `index.html` is the default file that will be loaded in the **browser**.

```
https://www.mywebsite.ch/index.html
```


## HTML
### HTML Syntax

HTML (Hypertext Markup Language) plays a crucial role in web development and is fundamental to the structure and presentation of content on websites. Here's a brief overview of its importance:

1. **Structural Foundation:** HTML serves as the backbone of a web page, defining the structure of content elements such as headings, paragraphs, lists, images, and links. It organizes information in a hierarchical manner, providing a clear and logical structure for both browsers and developers.

2. **Content Accessibility:** HTML facilitates accessibility by providing semantic elements that convey the meaning and context of content. Screen readers and other assistive technologies rely on HTML's semantic structure to interpret and present information to users with disabilities.

3. **Cross-Browser Compatibility:** HTML is universally supported by web browsers, ensuring that content is displayed consistently across different platforms and devices. It helps create a seamless user experience regardless of whether visitors are using Chrome, Firefox, Safari, or other browsers.

4. **Integration with Other Technologies:** HTML works seamlessly with other web technologies, such as CSS (Cascading Style Sheets) for styling and JavaScript for dynamic interactivity. This trio forms the core technologies for building modern, interactive, and visually appealing websites.

5. **Search Engine Optimization (SEO):** Search engines rely on HTML markup to understand and index the content of a website. Properly structured HTML, along with relevant meta tags and attributes, enhances a website's visibility in search engine results, contributing to better SEO.

6. **Responsive Design:** HTML supports the implementation of responsive design principles, allowing websites to adapt to various screen sizes and devices. This is essential for providing a consistent and user-friendly experience across desktops, tablets, and smartphones.

In summary, HTML is the foundation of web development, providing the necessary structure and semantics for creating accessible, compatible, and well-organized websites. It is a key language that web developers use to craft the digital experiences we encounter every day on the internet.

### Simple Tag

Elements are usually have **start tags** and **end tags**
```html
<h1>My Website</h1>
```
Note there is no always a start and end tag as is the case with`<br>`, `<hr>` or `<img>` and many others.


### Tag with Attributes

**Attributes** *[Attributen]* add additional options to an element
```html
<h1 id="greeting-text" class="bolder">Hello World</h1>
``` 
For some elements **attributes** are optional, but sometimes they are required!

```html
<img src="images/cat.png" alt="Fluffy cat wearing a hat">
```

### Nesting

You  can have elements inside other elements.
This is called **Nesting** *[Verschachtelung]*
```html
<section id="about">
  <header class="section_header">
    <h1>About Me</h1>
    <p>...</p>
  </header>
</section>
```
*Nesting* defines the structure of our pages

:::tip[Nesting]
Don't worry too much about nesting, it will happen naturally as you write HTML
:::

### HTML Hierarchy

```html
<nav>
  <img src="logo.svg" alt="Coorporate Logo">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#blog">Blog</a></li>
  </ul>
</nav>
```

Elements can be: `parents`, `children`, `siblings` and so on ...
*[Eltern, Kinder, Geschwister]*

### HTML Boilerplate *[Grundgerüst]*
Example HTML Boilerplate: 
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```
:::infop[shortcut]
You can type `!` and press `enter` in your vs-code to automatically create a boilerplate in an HTML File.
:::


Let's look at it in detail:
#### Doctype
```html
<!DOCTYPE html>
```

* All HTML documents must start with a `<!DOCTYPE>` declaration.
* The declaration is not an HTML tag. It is an *information* to the browser about what document type to expect.

 
#### Html tag
```html
<html lang="en">
 ...
</html>
```
* Root tag of the document
* Contains the `<head>` and `<body>` tags 
* Has the `lang` [attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) 
  * e.g: `lang="en-GB"` or `lang="de-CH"`


#### Body
```html
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
  ...
</body>
```

* Contains all content of the HTML Document
* Everything that is **visible**


#### Head
```html
<head>
  <meta charset="UTF-8">
  <title>My Website</title>
  ...
</head>
```

* Contains all Metadata
* Everything that is **not visible**


## Exercise 🛠
![build](https://c.tenor.com/40A4taEpX78AAAAd/tom-and-jerry-preparing.gif)


#### Now You! 

The goal of this exercise is to introduce and familiarize individuals with the process of setting up a basic web development project using a code editor.

* Create a project using your code editor
* Name the project directory `basic_website` 
* Create an `index.html` file in the directory
* Make sure you open the project as folder in your code editor
* Give your website the **title** `basic website`
* Add a **Heading** to your Website and give it the content `My Basic Website`
* Open the website using `live server`

This exercise provides a hands-on introduction to foundational web development tasks, including project setup, HTML file creation, content structuring, and live previewing, fostering a practical understanding of the essential elements involved in building a basic web page.

<!-- _class: lead gaia -->
## Semantic Mark-up

**Introducing Meaning to the web**

Semantic design in HTML involves using HTML elements that carry meaningful, descriptive tags to convey the structure and content of a web page. The term "semantic" refers to the meaning of the content rather than its presentation. Semantic HTML not only helps browsers and search engines understand the content better but also enhances accessibility for users, including those with disabilities who may rely on assistive technologies.

For example, instead of using a generic `<div>` tag to create a section, you might use a semantic tag like `<section>`. Similarly, instead of using a plain `<span>` for inline text styling, you might opt for semantic tags like `<em>` for emphasis or `<strong>` for strong importance.

By choosing appropriate semantic elements, you provide clarity about the purpose of different sections of your webpage, making it more readable for both humans and machines. This practice contributes to better search engine optimization, improves accessibility, and ensures a more maintainable and understandable codebase. Semantic design aligns with the philosophy of HTML, where the structure and content of a document should be separate from its presentation, promoting clean and meaningful markup.

![](https://miro.medium.com/max/717/1*sR8h0BDLUjVukHeajRXRNA.jpeg)


### Semantic Elements

* `<article>`
* `<aside>`
* `<figcaption>`
* `<figure>`
* `<footer>`
* `<header>`
* `<main>`
* `<nav>`
* `<section>`

and many more !


## Homework 🛠

**Exercise: Creating a Simple Blog Post**

**Objective:**
Apply your understanding of basic HTML syntax, semantic elements, and best practices to create a simple blog post.

**Instructions:**

1. **Project Setup:**
   - Create a new project folder named `simple_blog`.
   - Inside this folder, create an `index.html` file.
   - Open the project folder in your code editor.

2. **HTML Structure:**
   - Begin your HTML document with the necessary structure (`<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`).
   - Set the title of your blog post within the `<head>`.

3. **Semantic Elements:**
   - Utilize semantic HTML elements to structure your blog post:
     - Use `<header>` for the blog post title.
     - Wrap the main content in a `<main>` element.
     - Use `<article>` for the main content of the blog post.
     - Employ `<time>` to display the publication date of the blog post.

4. **Content:**
   - Write a brief introduction to your blog post within the `<header>`.
   - Inside the `<article>`, create a few paragraphs to elaborate on your chosen topic.
   - Integrate a subheading using an appropriate heading tag (`<h2>` or `<h3>`).
   - Add a couple of lists (ordered or unordered) to showcase key points.

5. **Additional Semantic Elements:**
   - Implement at least one additional semantic element not mentioned above (e.g., `<nav>`, `<footer>`, `<aside>`) where relevant.

6. **Best Practices:**
   - Ensure that your HTML adheres to proper indentation for readability.
   - Include comments to briefly explain the purpose of different sections of your HTML code.

7. **Validate Your HTML:**
   - Use an online HTML validator to check the correctness of your HTML code.
   - Address any issues identified by the validator.

8. **Final Touch:**
   - Open your HTML file in a browser to ensure it displays as expected.
   - Celebrate your success in creating a well-structured and semantic blog post using basic HTML!

:::danger[So many divs]
Avoid using div's, instead look for semantic elements that may better fit your purpose!
:::