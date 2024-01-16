---
sidebar_position: 3
---
# Layout Basics

## Color Codes

In CSS (Cascading Style Sheets), colors can be applied to HTML elements using different color representation formats.

### Hexadecimal Code

* `color: #000000;` (Black) - `color: #ffffff;` (White)
* Each digit has 16 levels:
  * 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
  * (16 x 16) x (16 x 16) x (16 x 16) =  256 x 256 x 256 = 16.78 M colors
* Can be simplified to 3 digits (i.e. `#222` = `#222222` )
* Can have alpha: https://caniuse.com/css-rrggbbaa

### RGB Colors

* `color: rgb(255, 0, 0);` (Red) 
* `color: rgba(255, 0, 0, 0.5);` (Red with 50% transparency) 
* RGB values: `0 - 255`
* &alpha; (alpha) value: `0 - 1`
* Remember to check inspector

### RGBA

Similar to RGB but includes an alpha parameter for defining transparency, with values from 0 (transparent) to 1 (opaque).

### HSL (Hue, Saturation, Lightness):

* `hsl(hue, saturation, lightness)`
* Example: `hsl(0, 100%, 50%)`
* Represents colors using parameters for hue (type of color), saturation (intensity), and lightness (brightness).

### Named Colors

* Use named colors for common colors without specifying RGB values.

```css
span {
  color: crimson;
}
```

These formats offer various ways to express colors in CSS, providing flexibility and control over the appearance of elements on a webpage.



## Inline and Block Elements

![gif](https://c.tenor.com/biS6hGNPwbAAAAAd/design-punch.gif)

In CSS, elements are categorized as either inline or block-level elements, and this distinction affects how elements are displayed on a webpage.

### Block Elements

* Structural elements:
  * i.e. `div`, `p`, `form`, `ul`, `li`, `h1`, Semantic Tags
* Are as **WIDE** as **possible**
  * Same width as parent elements
  * Create a new line
* Are as **HIGH** as **necessary** 
* Can have `padding` and `margin`


### Inline Elements

* Usually text-based elements:
  * i.e. `span`, `a`, `em`, `strong`, `label`
* Ignore **WIDTH** and **HEIGHT**
  * Don't create a new line
  * Height dependent on `line-height`
* Can be placed in the middle of texts


### Inline-Block Elements

* A combination of both Block and Inline
  * i.e. `img`
* Can have **WIDTH** and **HEIGHT**
  * Don't create a new line
  * Can have `margin` and `padding`
* Can be placed in the middle of texts


### Key Differences:
**Layout Behavior:**

Block-level elements create a new block in the layout, stacking vertically.
Inline elements flow within the content, not creating new blocks, and can appear on the same line.

**Width:**

Block-level elements typically take up the full width available in their containing element.
Inline elements only take up as much width as necessary.

**Height:**

Block-level elements automatically adjust their height based on their content.
Inline elements do not affect the height of the line they are on.

**Line Breaks:**

Block-level elements create line breaks before and after them.
Inline elements do not force line breaks.

Understanding these distinctions is crucial for creating well-structured and visually appealing layouts in CSS. Additionally, the display behavior of an element can be modified using the CSS display property, allowing for more flexibility in layout design.

## The `display` Property

In CSS, the `display` property is used to control the layout behavior of an element. It determines how an element is rendered in terms of its box type, such as block-level, inline, or other specialized types. The `display` property can take various values, each influencing the layout and positioning of the element. Here are some common values:

1. **`block`:**
   - The element generates a block-level box, causing a line break before and after it. It typically takes up the full width available.

   ```css
   div {
     display: block;
   }
   ```

2. **`inline`:**
   - The element generates an inline box, allowing it to flow within the content and not creating a new block. It takes up only as much width as necessary.

   ```css
   span {
     display: inline;
   }
   ```

3. **`inline-block`:**
   - The element generates an inline-level box that behaves as a block-level box. It maintains inline flow while allowing for block-level styling.

   ```css
   img {
     display: inline-block;
   }
   ```

4. **`none`:**
   - The element is removed from the document flow and is not rendered on the page. This is commonly used for hiding elements.

   ```css
   .hidden {
     display: none;
   }
   ```

5. **`flex`:**
   - The element becomes a flex container, and its children become flex items. This allows for flexible box layout capabilities.

   ```css
   .flex-container {
     display: flex;
   }
   ```

6. **`grid`:**
   - The element becomes a grid container, and its children become grid items. This enables a two-dimensional grid-based layout.

   ```css
   .grid-container {
     display: grid;
   }
   ```

The `display` property provides flexibility in defining the layout structure of a webpage. By choosing an appropriate value, developers can control how elements interact with each other in terms of flow, positioning, and visual presentation.

<!-- _class: lead gaia -->
## Float 

![float](https://c.tenor.com/hh47PTztK94AAAAC/pikachu-swimming-pool.gif)

In CSS, the `float` property is used to define how an element should be positioned within its parent container in terms of horizontal alignment. The `float` property is often used for creating multi-column layouts and positioning elements such as images within text content.

1. **Values:**
   - **`left`:** The element floats to the left, allowing content to flow around its right side.
   - **`right`:** The element floats to the right, allowing content to flow around its left side.
   - **`none`:** The default value, indicating no floating. The element remains in the normal document flow.

   ```css
   img {
     float: left;
   }
   ```

2. **Effects on Layout:**
   - Floating an element takes it out of the normal document flow, allowing content to wrap around it.
   - Elements following a floated element will move up alongside the floated element if there is enough space.

3. **Clearing Floats:**
   - Floating elements can sometimes cause layout issues, such as elements not clearing the floated ones. To prevent this, the `clear` property is often used.
   - **`clear: left;` or `clear: right;`:** The element will move below the floated elements on the specified side.
   - **`clear: both;`:** The element will move below any floated element, regardless of whether it's floated to the left or right.

   ```css
   div {
     clear: both;
   }
   ```

4. **Considerations:**
   - The use of floats for layout has been largely replaced by more modern layout techniques like Flexbox and Grid.
   - Floats were historically used for creating multi-column layouts and positioning elements, but they come with certain challenges, especially regarding clearing and clearfix.

It's important to note that while floats were a popular method for layout in the past, modern CSS layout techniques like Flexbox and Grid are generally considered more flexible and powerful for creating complex layouts. Floats are still used in some specific scenarios, but their use has diminished with the advancement of CSS.


<!-- _class: lead gaia -->
## Flex 

![flex](https://c.tenor.com/c-keT9-x2SgAAAAC/sponge-bob-square-pants-work-out.gif)

In CSS, the Flexible Box Layout, commonly known as Flexbox, is a layout model designed for the efficient arrangement of elements within a container, providing a more efficient way to distribute space and align items. Here are key points about Flexbox:

1. **Container and Items:**
   - To create a Flexbox layout, you designate an element as the "flex container" using `display: flex;` or `display: inline-flex;`.
   - The child elements of the flex container are referred to as "flex items."

   ```css
   .flex-container {
     display: flex;
   }
   ```

2. **Main and Cross Axes:**
   - Flexbox operates along two axes: the main axis and the cross axis.
   - The `flex-direction` property defines the main axis direction (row, row-reverse, column, or column-reverse).

   ```css
   .flex-container {
     flex-direction: row; /* or column, etc. */
   }
   ```

3. **Justify Content:**
   - The `justify-content` property aligns flex items along the main axis.
   - Common values include `flex-start`, `flex-end`, `center`, `space-between`, and `space-around`.

   ```css
   .flex-container {
     justify-content: space-between;
   }
   ```

4. **Align Items and Align Self:**
   - The `align-items` property aligns flex items along the cross axis.
   - The `align-self` property allows individual items to override the `align-items` value.

   ```css
   .flex-container {
     align-items: center;
   }

   .flex-item {
     align-self: flex-end;
   }
   ```

5. **Flex Grow, Shrink, and Basis:**
   - The `flex` property is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
   - `flex-grow` determines the ability of an item to grow.
   - `flex-shrink` determines the ability of an item to shrink.
   - `flex-basis` sets the initial main size of an item before growing or shrinking.

   ```css
   .flex-item {
     flex: 1 0 auto;
   }
   ```

6. **Flex Wrap:**
   - The `flex-wrap` property controls whether flex items are forced into a single line or can be wrapped onto multiple lines.

   ```css
   .flex-container {
     flex-wrap: wrap;
   }
   ```

Flexbox simplifies complex layout tasks, making it easier to create responsive and dynamic designs. It is well-suited for one-dimensional layouts, like navigation bars, lists, and card-based structures. For two-dimensional layouts, CSS Grid is another powerful layout model that complements Flexbox.


<!-- _class: lead gaia -->
## Easy way 

* [The Ultimate Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) *Credit to CSS Tricks*
* [Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/) *Credit to joshwcomeau*



<!-- _class: lead gaia -->
## Try it yourself 🛠

Exercise: Flexbox Layout Challenge

**Objective:**
Practice using Flexbox to create a responsive layout for a navigation bar.

**Instructions:**

1. Create an HTML file with the following structure:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Flexbox Navigation</title>
</head>
<body>
    <header>
        <h1>Flexbox Navigation</h1>
        <!-- Add a navigation bar with at least four links -->
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section>
        <!-- Create a section with some sample content -->
        <p>This is a sample section content. Feel free to add more content here.</p>
    </section>
</body>
</html>
```



**Tasks:**

1. Use Flexbox properties to horizontally align the navigation links evenly within the navigation bar.
2. Style the navigation links to make them visually appealing.
3. Ensure that the layout remains responsive when viewed on different screen sizes by using appropriate Flexbox properties.
4. Add any additional styling or enhancements to improve the overall appearance of the navigation bar and section.

2. Solution.

```css title="style.css"
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 1em;
    text-align: center;
}

nav {
    /* Apply Flexbox properties to the navigation bar */
    display: flex;
    justify-content: space-around;
    background-color: #555;
    padding: 0.5em;
}

nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
}

nav li {
    margin: 0;
}

nav a {
    text-decoration: none;
    color: #fff;
    padding: 0.5em 1em;
}

section {
    padding: 2em;
}
```

**Note:**
Feel free to experiment and add your own creative touch to the exercise. The goal is to become more familiar with using Flexbox for layout purposes.
