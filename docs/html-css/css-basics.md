---
sidebar_position: 2
---
# CSS Basics 

---
## Content

* CSS Rules
* Linking CSS 
* CSS Reset 
* CSS Media Types|
* CSS Selectors 
* Units 

---
## CSS
**Cascading Style Sheet**

CSS is a style sheet language used to describe the presentation and visual representation of HTML or XML documents. It enables web developers to control the layout, styling, and appearance of web pages, providing a means to create visually appealing and consistent designs across a website.

**Importance of CSS in Web Development:**

1. **Presentation and Styling:**
   CSS separates the content from its presentation, allowing developers to style HTML elements. It provides control over aspects such as colors, fonts, spacing, and layout, enhancing the overall visual appeal of a website.

2. **Consistency Across Pages:**
   By using CSS, developers can create a consistent look and feel across all pages of a website. This ensures a coherent user experience and reinforces the branding and identity of the site.

3. **Responsive Design:**
   CSS plays a crucial role in implementing responsive design techniques. It allows developers to create layouts that adapt to different screen sizes and devices, providing an optimal viewing experience on desktops, tablets, and smartphones.

4. **Maintenance and Efficiency:**
   CSS promotes code reusability. Styles can be defined in a central stylesheet and applied consistently throughout the site. This not only makes maintenance easier but also reduces the file size and load times for web pages.

5. **Accessibility:**
   CSS contributes to web accessibility by allowing developers to create designs that are navigable and readable by individuals with disabilities. This includes defining text sizes, color contrasts, and other visual elements that aid in accessibility.

6. **Browser Compatibility:**
   CSS helps ensure a consistent appearance across various web browsers. It provides a standardized way to style elements, reducing the likelihood of compatibility issues and making websites accessible to a broader audience.

7. **Animation and Interactivity:**
   CSS supports animations and transitions, enabling developers to add dynamic and interactive elements to web pages without relying on JavaScript. This enhances user engagement and creates a more engaging user interface.

8. **SEO (Search Engine Optimization):**
   While CSS itself doesn't directly impact SEO, it contributes indirectly by improving the user experience. Search engines favor well-designed, user-friendly websites, and CSS helps achieve this by creating visually appealing and accessible designs.

In summary, CSS is a fundamental component of web development that significantly influences the visual and interactive aspects of websites. Its importance lies in its ability to enhance design, provide consistency, and contribute to a positive user experience across various devices and platforms.


### Important
* Format templates enable modular design of websites
* Content is separated from format. IMPORTANT!!!
* Cascade means 
  * Style sheets are defined on different levels and can be overridden. 
  * The specific addressing of an element


* The specification plays a big role. 
  * `element` 
  * `class=` 
  * `id=` 
  * `style=""` 
  * `!important` 


* CSS can be created in numerous ways:
  * As a separate file (i.e. `style.css`) which is then linked to the HTML using `<link>`
  * Inside the `<head>` element using `<style></style>` 
  * As an attribute (inline-style): 
    * ```html
      <p style="color: red;">I am red.</p>
      ``` 

* The use of multiple stylesheets help with development
* Styles can be specified for different display sizes
  * By using `media queries` 


<!-- _class: lead gaia -->
### CSS Syntax

![w:1000](https://www.w3schools.com/css/img_selector.gif)


**CSS (Cascading Style Sheets) Syntax:**

The CSS syntax consists of a set of rules that define how HTML elements should be styled. Each rule consists of a selector and a declaration block containing one or more property-value pairs.

:::tip[Learning]
There is no need to memorize everything at once, you will find that overtime you will learn all these fancy words naturally
:::


**Basic Structure:**
```css
selector {
  property: value;
  /* Additional property-value pairs */
}
```

- **Selector:** Identifies the HTML element(s) to be styled.
- **Declaration Block:** Enclosed within curly braces `{}`, contains one or more property-value pairs.
- **Property:** Describes the aspect of the element to be styled (e.g., `color`, `font-size`, `margin`).
- **Value:** Specifies the style or behavior for the selected property (e.g., `red`, `16px`, `10px 20px`).

**Example:**
```css
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: blue;
  text-align: center;
}
```

In this example:
- The `body` selector styles the entire document body, setting the font family and background color.
- The `h1` selector styles all `<h1>` elements, changing the text color to blue and centering the text.

**Comments:**
```css
/* This is a CSS comment */
```

- Comments provide explanations or notes within the CSS code and do not affect the styling.


**Multiple Declarations:**
```css
p {
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}
```

- Multiple property-value pairs can be defined within the same selector.


### Linking CSS

There are several ways to apply CSS styles to a web page. Here are the common methods:

| Type | Example |
| --- | --- |
| As external file | `<link href="style.css" rel="stylesheet">` |
| In the `<head>` as `<style>` | `<style> p{color:red} </style>` |
| Inline as style attribute | `<p style="color:red">hello</p>` |



1. **Inline CSS:**
   - Styles are directly applied to individual HTML elements using the `style` attribute.
   - Example:
     ```html
     <p style="color: red; font-size: 16px;">This is a red, 16px text.</p>
     ```
   - **Pros:** Quick and straightforward for specific styles.
   - **Cons:** May lead to less maintainable code and isn't easily reusable.

2. **Internal or Embedded CSS:**
   - Styles are defined within the `<style>` element within the HTML document's `<head>` section.
   - Example:
     ```html
     <head>
       <style>
         p {
           color: blue;
           font-size: 18px;
         }
       </style>
     </head>
     <body>
       <p>This is a blue, 18px text.</p>
     </body>
     ```
   - **Pros:** Keeps styles within the HTML file, useful for smaller projects.
   - **Cons:** Can become cluttered and harder to manage as the project grows.

3. **External CSS:**
   - Styles are stored in a separate CSS file (e.g., `styles.css`) and linked to the HTML file using the `<link>` element.
   - Example (HTML file):
     ```html
     <head>
       <link rel="stylesheet" type="text/css" href="styles.css">
     </head>
     ```
     Example (styles.css):
     ```css
     p {
       color: green;
       font-size: 20px;
     }
     ```
   - **Pros:** Promotes separation of concerns, making code more modular and maintainable.
   - **Cons:** Requires an additional file, but this is a common and scalable approach.

The choice of which method to use depends on the project's size, organization preferences, and the need for reusability. In larger projects, external CSS files are often preferred for better code organization and maintainability.

:::info[in class]
You will find that we use `<style>` in many examples we see in class, this is mostly because there is no need to create a separate file for such small example. This doesn't mean that it is the best option!
:::


### CSS Reset
![reset](https://c.tenor.com/PrTKdmEy1lcAAAAC/mib-flash.gif)

A CSS reset is a set of styles or rules applied to a web page to normalize the default styles provided by different web browsers. The goal is to create a consistent starting point for styling, ensuring that web developers have a standardized baseline across browsers.

Web browsers have their default styles for various HTML elements, and these styles can vary between browsers. This inconsistency can lead to differences in how elements are displayed. A CSS reset helps eliminate or minimize these discrepancies by resetting or equalizing default styles.

A typical CSS reset includes setting common styles such as margin, padding, and font properties to a consistent baseline. By doing so, developers have more control over the styling process and can create a design that looks consistent across various browsers.

It's important to note that CSS resets are often used in conjunction with or have been largely replaced by more modern approaches like CSS normalization (e.g., using a CSS normalization library) or using a "reset" through the styling framework being used in the project. These methods provide a more targeted and nuanced approach to handling browser-specific styling issues.

* Simple CSS Reset
  * ```css
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```

* [normalize.css](https://necolas.github.io/normalize.css/)
* [Modern CSS Reset](https://raw.githubusercontent.com/elad2412/the-new-css-reset/main/css/reset.css)

:::tip[vs-code]
You can create snippets in vs-code to simply inject css resets in your stylesheets
https://code.visualstudio.com/docs/editor/userdefinedsnippets
:::

### CSS Media Types

CSS media types are a way to apply different styles to a document based on the characteristics of the device or medium through which it is presented. They allow web developers to define specific styles for different output devices, such as screens, printers, or handheld devices, enhancing the adaptability of a website to various contexts.

The `@media` rule is used to apply styles based on media types. Here's a basic example:

```css
@media screen {
  body {
    font-size: 16px;
    background-color: #f0f0f0;
  }
}

@media print {
  body {
    font-size: 12px;
  }
}
```

In this example:
- Styles within the `@media screen` block apply when the document is displayed on a screen (e.g., computer monitor).
- Styles within the `@media print` block apply when the document is being printed.

Common media types include:
- `all`: Applies styles for all devices.
- `screen`: Applies styles for computer screens.
- `print`: Applies styles for printed pages.
- `speech`: Applies styles for speech synthesizers.

Developers can use media types to create responsive designs, optimizing the presentation of content for different devices and ensuring a better user experience across various mediums. Media queries, an extension of media types, allow for even more specific targeting based on features like screen width, height, and orientation.
* [List of recognized media types](https://www.w3.org/TR/CSS21/media.html%23media-types)



<!-- _class: lead gaia -->
## CSS Selectors
![I chose you](https://c.tenor.com/bDnLivil00YAAAAC/pokemon-poke-ball.gif)

CSS selectors are patterns that define which HTML elements to style. They specify the target elements to which a set of CSS rules should apply. Here are some common types of CSS selectors:

:::info[resource]
You can practice CSS selectors at https://flukeout.github.io/
:::

### Elements, Classes, ID's

| CSS | Description |
| --- | --- |
| `p {}` | All `<p>` elements |
| `p, a {}` | All `<p>` and `<a>` elements |
| `p a {}` | All `<a>` elements inside `<p>` elements [ ALL* ] |
| `.foo` | All elements with the `foo` class |
| `#foo` | All elements with the `foo` id |
| `div.foo` | All `<div>` elements with the `foo` class |
| `section div.foo` | All `<div>`s with class `foo` inside `<section>`s


### Attributes, Children, Siblings

| CSS | Description |
| --- | --- |
| `a[title]` | All `<a>` elements with a `title` attribute |
| `a[title="click"]` | `<a>` elements with a `title="click"` attribute |
| `p > a` | `<a>`s which are direct descendants of `<p>`s \n *Child Selector*|
| `h1 + p` | The first `<p>`s which are adjacent to `<h1>`s \n *Adjacent Sibling Selector*|
| `h1 ~ p` | All `<p>`s which come after `<h1>`s \n *General Sibling Selector*|


### Pseudo Classes *[Pseudoklassen]*

| CSS | Description |
| --- | --- |
| `a:hover` | `<a>` elements on mouse contact |
| `a:focus` | `<a>` elements when they are focused |
| `a:visited` | `<a>` elements when they have been visited |
| `a:first-child` | The first `<a>` element |
| `a:nth-child(3)` | The third `<a>` element |
| `a:nth-child(odd/even)` | Odd/even `<a>` element |
| `a:nth-child(3n + 4)` | Each 3rd `<a>` starting after the 4th |
| `a:last-child` | The last `<a>` element |


### Pseudo Elements *[Pseudoelementen]*

| CSS | Description |
| --- | --- |
| `p::first-line` | The first line of all `<p>` elements |
| `p::first-letter` | The first letter of all `<p>` elements |
| `p::before` | Content before all `<p>` elements |
| `p::after` | Content after all `<p>` elements |


## Classes

Classes and IDs are crucial for applying targeted styles to specific elements, providing flexibility and control in the styling process. While classes can be used on multiple elements, IDs are meant to uniquely identify a single element within a document.

* Defined by `class=` in the HTML and selected using `.` in CSS
* Can be used multiple times
```html
<style>
.red {
  color: red;
}
.crossed {
  text-decoration: line-through ;
}
</style>
<p class="red">I am red</p>
<p class="red">I am red</p>
<p class="blue">I am blue</p>
<p class="red crossed">I am red and crossed</p>
```

## IDs

* Defined by `id=` in the HTML and selected using `#` in CSS
* Can be used once per document
```html
<style>
#main-navi {
  display: inline-block;
}

</style>
<nav id="main-navigation">
  <ul>
    ...
  </ul>
</nav>
```

:::tip[anchoring]
You can use id's as a reference for your in-page navigation.
if you link to #about, then the page will jump to the about id in your page.
:::

:::warning[classes or ids?]
Honestly I mostly uses classes myself, unless I have to make a unique identifier for a specific element or I need an anchor for a navigation.
:::

## CSS Specificity  

CSS specificity is a set of rules that determines which styles are applied to an element when conflicting styles exist. Specificity is a measure of how specific a selector is in targeting an element. It follows a hierarchy, and the more specific a selector is, the higher its specificity.

* Cascading means that rules overwrite other rules.This does not only apply to the order the rules were defined in.
* Specificity *[Spezifität]* in CSS means priority.

![w:1100](https://csshell.dev/src/images/posts/specificity.svg)

**Calculating Specificity:**

Specificity is usually expressed as a four-part value, such as 0, 0, 1, 0, where each part corresponds to the importance of inline styles, IDs, classes/attributes/pseudo-classes, and elements, respectively.

```css
#header .button {
  color: green;
}
```
In this example, the selector has a specificity of 1, 0, 1, 1 (one class and one element), which is more specific than a selector with only a class or an element.

<!-- _class: lead gaia -->
## Units *[Masseinheitent]*
![css](https://c.tenor.com/QWdPngpHxZ8AAAAd/family-guy-css.gif)

CSS units are used to measure various properties, such as length, size, and angles, in stylesheets. They provide flexibility for defining styles across different devices and screen sizes. Here are some common types of CSS units:

**CSS Units:**

CSS units are used to measure various properties, such as length, size, and angles, in stylesheets. They provide flexibility for defining styles across different devices and screen sizes. Here are some common types of CSS units:

1. **Absolute Units:**
   - **Pixels (`px`):** A pixel is a single point on a screen and is often used for precise control of layout and sizing.
     ```css
     div {
       width: 200px;
       height: 150px;
     }
     ```

   - **Inches (`in`), Centimeters (`cm`), Millimeters (`mm`), Points (`pt`), Picas (`pc`):** These units are based on physical measurements and are less commonly used for web design due to their fixed size.

2. **Relative Units:**
   - **Em (`em`):** Relative to the font-size of the closest parent or the element itself.
     ```css
     p {
       font-size: 1.2em; /* 1.2 times the font size of the parent element */
     }
     ```
   - **Rem (`rem`):** Relative to the font-size of the root element (usually the `<html>` element).
     ```css
     body {
       font-size: 16px; /* 1rem is equal to 16px */
     }
     ```
   - **Percentage (`%`):** Relative to the parent element's value.
     ```css
     div {
       width: 50%; /* 50% of the parent element's width */
     }
     ```
:::info[rem or em?]
This is a complicated story with many perspectives but to keep it short, keep it simple, be consistent and predictable and just use rem.
You can find more info all over the internet
https://blog.logrocket.com/using-em-vs-rem-css/
:::

3. **Viewport Units:**
   - **Viewport Width (`vw`):** Relative to 1% of the width of the viewport.
     ```css
     div {
       width: 50vw; /* 50% of the viewport width */
     }
     ```

   - **Viewport Height (`vh`):** Relative to 1% of the height of the viewport.
     ```css
     div {
       height: 75vh; /* 75% of the viewport height */
     }
     ```

   - **Viewport Minimum (`vmin`) and Maximum (`vmax`):** Relative to the smaller or larger dimension of the viewport, respectively.

These units allow web developers to create designs that are responsive and adaptable to various screen sizes and devices. The choice of unit depends on the design requirements and the desired level of flexibility.

## Homework

Exercise: CSS Selectors Challenge

**Objective:**
Practice using various CSS selectors to style different elements on a webpage.

**Instructions:**

1. Create an HTML file with the following structure:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>CSS Selectors Challenge</title>
</head>
<body>
    <header>
        <h1>CSS Selectors Challenge</h1>
    </header>
    <section>
        <div id="container">
            <h2 class="section-title">Section 1</h2>
            <p>This is the first section.</p>
            <ul>
                <li class="list-item">Item 1</li>
                <li class="list-item">Item 2</li>
                <li class="list-item">Item 3</li>
            </ul>
        </div>
        <div id="container">
            <h2 class="section-title">Section 2</h2>
            <p>This is the second section.</p>
            <ul>
                <li class="list-item">Item 4</li>
                <li class="list-item">Item 5</li>
                <li class="list-item">Item 6</li>
            </ul>
        </div>
    </section>
    <footer>
        <p>&copy; 2022 CSS Selectors Challenge</p>
    </footer>
</body>
</html>
```

**Tasks:**

1. Apply a specific font style to the entire body.
2. Style the header with a background color, centered text, and padding.
3. Give a different font color to elements with the class 'section-title'.
4. Apply italic styling to all paragraphs within the 'section'.
5. Style the unordered lists inside the 'container' divs by removing list styling and padding.
6. Apply background color, text color, padding, and margin to elements with the class 'list-item'.
7. Add a background color, center the text, and add padding to the footer.


2. Solution:

```css title="styles.css"
/* Apply styles to the entire body */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

/* Style the header with a background color, center the text, and add padding */
header {
    background-color: #3498db;
    text-align: center;
    padding: 1em;
    color: white;
}

/* Target the class 'section-title' and give it a different font color */
.section-title {
    color: #2ecc71;
}

/* Select and style the paragraphs within the 'section' */
section p {
    font-style: italic;
}

/* Style the unordered lists within the 'container' divs */
#container ul {
    list-style-type: none;
    padding: 0;
}

/* Apply styles to the list items with the class 'list-item' */
.list-item {
    background-color: #f39c12;
    color: white;
    padding: 0.5em;
    margin: 0.5em 0;
}

/* Add styles to the footer, change the background color, and center the text */
footer {
    background-color: #34495e;
    text-align: center;
    padding: 1em;
    color: white;
}
```

**Note:**
Feel free to experiment with additional styles and selectors to enhance the appearance of the webpage. The goal is to become more proficient in using CSS selectors for styling specific elements.