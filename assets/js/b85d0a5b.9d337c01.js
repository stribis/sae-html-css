"use strict";(self.webpackChunkhtml_css_basics=self.webpackChunkhtml_css_basics||[]).push([[501],{8141:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=l(5893),i=l(1151);const r={sidebar_position:3},t="Layout Basics",o={id:"html-css/css-layout",title:"Layout Basics",description:"Color Codes",source:"@site/docs/html-css/css-layout.md",sourceDirName:"html-css",slug:"/html-css/css-layout",permalink:"/sae-html-css/docs/html-css/css-layout",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CSS Basics",permalink:"/sae-html-css/docs/html-css/css-basics"}},c={},a=[{value:"Color Codes",id:"color-codes",level:2},{value:"Hexadecimal Code",id:"hexadecimal-code",level:3},{value:"RGB Colors",id:"rgb-colors",level:3},{value:"RGBA",id:"rgba",level:3},{value:"HSL (Hue, Saturation, Lightness):",id:"hsl-hue-saturation-lightness",level:3},{value:"Named Colors",id:"named-colors",level:3},{value:"Inline and Block Elements",id:"inline-and-block-elements",level:2},{value:"Block Elements",id:"block-elements",level:3},{value:"Inline Elements",id:"inline-elements",level:3},{value:"Inline-Block Elements",id:"inline-block-elements",level:3},{value:"Key Differences:",id:"key-differences",level:3},{value:"The <code>display</code> Property",id:"the-display-property",level:2},{value:"Float",id:"float",level:2},{value:"Flex",id:"flex",level:2},{value:"Easy way",id:"easy-way",level:2},{value:"Try it yourself \ud83d\udee0",id:"try-it-yourself-",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"layout-basics",children:"Layout Basics"}),"\n",(0,s.jsx)(n.h2,{id:"color-codes",children:"Color Codes"}),"\n",(0,s.jsx)(n.p,{children:"In CSS (Cascading Style Sheets), colors can be applied to HTML elements using different color representation formats."}),"\n",(0,s.jsx)(n.h3,{id:"hexadecimal-code",children:"Hexadecimal Code"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"color: #000000;"})," (Black) - ",(0,s.jsx)(n.code,{children:"color: #ffffff;"})," (White)"]}),"\n",(0,s.jsxs)(n.li,{children:["Each digit has 16 levels:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F"}),"\n",(0,s.jsx)(n.li,{children:"(16 x 16) x (16 x 16) x (16 x 16) =  256 x 256 x 256 = 16.78 M colors"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Can be simplified to 3 digits (i.e. ",(0,s.jsx)(n.code,{children:"#222"})," = ",(0,s.jsx)(n.code,{children:"#222222"})," )"]}),"\n",(0,s.jsxs)(n.li,{children:["Can have alpha: ",(0,s.jsx)(n.a,{href:"https://caniuse.com/css-rrggbbaa",children:"https://caniuse.com/css-rrggbbaa"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"rgb-colors",children:"RGB Colors"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"color: rgb(255, 0, 0);"})," (Red)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"color: rgba(255, 0, 0, 0.5);"})," (Red with 50% transparency)"]}),"\n",(0,s.jsxs)(n.li,{children:["RGB values: ",(0,s.jsx)(n.code,{children:"0 - 255"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u03b1 (alpha) value: ",(0,s.jsx)(n.code,{children:"0 - 1"})]}),"\n",(0,s.jsx)(n.li,{children:"Remember to check inspector"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"rgba",children:"RGBA"}),"\n",(0,s.jsx)(n.p,{children:"Similar to RGB but includes an alpha parameter for defining transparency, with values from 0 (transparent) to 1 (opaque)."}),"\n",(0,s.jsx)(n.h3,{id:"hsl-hue-saturation-lightness",children:"HSL (Hue, Saturation, Lightness):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"hsl(hue, saturation, lightness)"})}),"\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"hsl(0, 100%, 50%)"})]}),"\n",(0,s.jsx)(n.li,{children:"Represents colors using parameters for hue (type of color), saturation (intensity), and lightness (brightness)."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"named-colors",children:"Named Colors"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use named colors for common colors without specifying RGB values."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"span {\n  color: crimson;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"These formats offer various ways to express colors in CSS, providing flexibility and control over the appearance of elements on a webpage."}),"\n",(0,s.jsx)(n.h2,{id:"inline-and-block-elements",children:"Inline and Block Elements"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://c.tenor.com/biS6hGNPwbAAAAAd/design-punch.gif",alt:"gif"})}),"\n",(0,s.jsx)(n.p,{children:"In CSS, elements are categorized as either inline or block-level elements, and this distinction affects how elements are displayed on a webpage."}),"\n",(0,s.jsx)(n.h3,{id:"block-elements",children:"Block Elements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Structural elements:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["i.e. ",(0,s.jsx)(n.code,{children:"div"}),", ",(0,s.jsx)(n.code,{children:"p"}),", ",(0,s.jsx)(n.code,{children:"form"}),", ",(0,s.jsx)(n.code,{children:"ul"}),", ",(0,s.jsx)(n.code,{children:"li"}),", ",(0,s.jsx)(n.code,{children:"h1"}),", Semantic Tags"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Are as ",(0,s.jsx)(n.strong,{children:"WIDE"})," as ",(0,s.jsx)(n.strong,{children:"possible"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Same width as parent elements"}),"\n",(0,s.jsx)(n.li,{children:"Create a new line"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Are as ",(0,s.jsx)(n.strong,{children:"HIGH"})," as ",(0,s.jsx)(n.strong,{children:"necessary"})]}),"\n",(0,s.jsxs)(n.li,{children:["Can have ",(0,s.jsx)(n.code,{children:"padding"})," and ",(0,s.jsx)(n.code,{children:"margin"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"inline-elements",children:"Inline Elements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Usually text-based elements:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["i.e. ",(0,s.jsx)(n.code,{children:"span"}),", ",(0,s.jsx)(n.code,{children:"a"}),", ",(0,s.jsx)(n.code,{children:"em"}),", ",(0,s.jsx)(n.code,{children:"strong"}),", ",(0,s.jsx)(n.code,{children:"label"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Ignore ",(0,s.jsx)(n.strong,{children:"WIDTH"})," and ",(0,s.jsx)(n.strong,{children:"HEIGHT"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Don't create a new line"}),"\n",(0,s.jsxs)(n.li,{children:["Height dependent on ",(0,s.jsx)(n.code,{children:"line-height"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Can be placed in the middle of texts"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"inline-block-elements",children:"Inline-Block Elements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A combination of both Block and Inline","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["i.e. ",(0,s.jsx)(n.code,{children:"img"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Can have ",(0,s.jsx)(n.strong,{children:"WIDTH"})," and ",(0,s.jsx)(n.strong,{children:"HEIGHT"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Don't create a new line"}),"\n",(0,s.jsxs)(n.li,{children:["Can have ",(0,s.jsx)(n.code,{children:"margin"})," and ",(0,s.jsx)(n.code,{children:"padding"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Can be placed in the middle of texts"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"key-differences",children:"Key Differences:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Layout Behavior:"})}),"\n",(0,s.jsx)(n.p,{children:"Block-level elements create a new block in the layout, stacking vertically.\nInline elements flow within the content, not creating new blocks, and can appear on the same line."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Width:"})}),"\n",(0,s.jsx)(n.p,{children:"Block-level elements typically take up the full width available in their containing element.\nInline elements only take up as much width as necessary."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Height:"})}),"\n",(0,s.jsx)(n.p,{children:"Block-level elements automatically adjust their height based on their content.\nInline elements do not affect the height of the line they are on."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Line Breaks:"})}),"\n",(0,s.jsx)(n.p,{children:"Block-level elements create line breaks before and after them.\nInline elements do not force line breaks."}),"\n",(0,s.jsx)(n.p,{children:"Understanding these distinctions is crucial for creating well-structured and visually appealing layouts in CSS. Additionally, the display behavior of an element can be modified using the CSS display property, allowing for more flexibility in layout design."}),"\n",(0,s.jsxs)(n.h2,{id:"the-display-property",children:["The ",(0,s.jsx)(n.code,{children:"display"})," Property"]}),"\n",(0,s.jsxs)(n.p,{children:["In CSS, the ",(0,s.jsx)(n.code,{children:"display"})," property is used to control the layout behavior of an element. It determines how an element is rendered in terms of its box type, such as block-level, inline, or other specialized types. The ",(0,s.jsx)(n.code,{children:"display"})," property can take various values, each influencing the layout and positioning of the element. Here are some common values:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"block"}),":"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The element generates a block-level box, causing a line break before and after it. It typically takes up the full width available."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"div {\n  display: block;\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"inline"}),":"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The element generates an inline box, allowing it to flow within the content and not creating a new block. It takes up only as much width as necessary."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"span {\n  display: inline;\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"inline-block"}),":"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The element generates an inline-level box that behaves as a block-level box. It maintains inline flow while allowing for block-level styling."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"img {\n  display: inline-block;\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"none"}),":"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The element is removed from the document flow and is not rendered on the page. This is commonly used for hiding elements."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".hidden {\n  display: none;\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"flex"}),":"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The element becomes a flex container, and its children become flex items. This allows for flexible box layout capabilities."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".flex-container {\n  display: flex;\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"grid"}),":"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The element becomes a grid container, and its children become grid items. This enables a two-dimensional grid-based layout."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".grid-container {\n  display: grid;\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"display"})," property provides flexibility in defining the layout structure of a webpage. By choosing an appropriate value, developers can control how elements interact with each other in terms of flow, positioning, and visual presentation."]}),"\n",(0,s.jsx)(n.h2,{id:"float",children:"Float"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://c.tenor.com/hh47PTztK94AAAAC/pikachu-swimming-pool.gif",alt:"float"})}),"\n",(0,s.jsxs)(n.p,{children:["In CSS, the ",(0,s.jsx)(n.code,{children:"float"})," property is used to define how an element should be positioned within its parent container in terms of horizontal alignment. The ",(0,s.jsx)(n.code,{children:"float"})," property is often used for creating multi-column layouts and positioning elements such as images within text content."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Values:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"left"}),":"]})," The element floats to the left, allowing content to flow around its right side."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"right"}),":"]})," The element floats to the right, allowing content to flow around its left side."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"none"}),":"]})," The default value, indicating no floating. The element remains in the normal document flow."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"img {\n  float: left;\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Effects on Layout:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Floating an element takes it out of the normal document flow, allowing content to wrap around it."}),"\n",(0,s.jsx)(n.li,{children:"Elements following a floated element will move up alongside the floated element if there is enough space."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Clearing Floats:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Floating elements can sometimes cause layout issues, such as elements not clearing the floated ones. To prevent this, the ",(0,s.jsx)(n.code,{children:"clear"})," property is often used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"clear: left;"})," or ",(0,s.jsx)(n.code,{children:"clear: right;"}),":"]})," The element will move below the floated elements on the specified side."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"clear: both;"}),":"]})," The element will move below any floated element, regardless of whether it's floated to the left or right."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"div {\n  clear: both;\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Considerations:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The use of floats for layout has been largely replaced by more modern layout techniques like Flexbox and Grid."}),"\n",(0,s.jsx)(n.li,{children:"Floats were historically used for creating multi-column layouts and positioning elements, but they come with certain challenges, especially regarding clearing and clearfix."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It's important to note that while floats were a popular method for layout in the past, modern CSS layout techniques like Flexbox and Grid are generally considered more flexible and powerful for creating complex layouts. Floats are still used in some specific scenarios, but their use has diminished with the advancement of CSS."}),"\n",(0,s.jsx)(n.h2,{id:"flex",children:"Flex"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://c.tenor.com/c-keT9-x2SgAAAAC/sponge-bob-square-pants-work-out.gif",alt:"flex"})}),"\n",(0,s.jsx)(n.p,{children:"In CSS, the Flexible Box Layout, commonly known as Flexbox, is a layout model designed for the efficient arrangement of elements within a container, providing a more efficient way to distribute space and align items. Here are key points about Flexbox:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Container and Items:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:['To create a Flexbox layout, you designate an element as the "flex container" using ',(0,s.jsx)(n.code,{children:"display: flex;"})," or ",(0,s.jsx)(n.code,{children:"display: inline-flex;"}),"."]}),"\n",(0,s.jsx)(n.li,{children:'The child elements of the flex container are referred to as "flex items."'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".flex-container {\n  display: flex;\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Main and Cross Axes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Flexbox operates along two axes: the main axis and the cross axis."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"flex-direction"})," property defines the main axis direction (row, row-reverse, column, or column-reverse)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".flex-container {\n  flex-direction: row; /* or column, etc. */\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Justify Content:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"justify-content"})," property aligns flex items along the main axis."]}),"\n",(0,s.jsxs)(n.li,{children:["Common values include ",(0,s.jsx)(n.code,{children:"flex-start"}),", ",(0,s.jsx)(n.code,{children:"flex-end"}),", ",(0,s.jsx)(n.code,{children:"center"}),", ",(0,s.jsx)(n.code,{children:"space-between"}),", and ",(0,s.jsx)(n.code,{children:"space-around"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".flex-container {\n  justify-content: space-between;\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Align Items and Align Self:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"align-items"})," property aligns flex items along the cross axis."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"align-self"})," property allows individual items to override the ",(0,s.jsx)(n.code,{children:"align-items"})," value."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".flex-container {\n  align-items: center;\n}\n\n.flex-item {\n  align-self: flex-end;\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Flex Grow, Shrink, and Basis:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"flex"})," property is a shorthand for ",(0,s.jsx)(n.code,{children:"flex-grow"}),", ",(0,s.jsx)(n.code,{children:"flex-shrink"}),", and ",(0,s.jsx)(n.code,{children:"flex-basis"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"flex-grow"})," determines the ability of an item to grow."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"flex-shrink"})," determines the ability of an item to shrink."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"flex-basis"})," sets the initial main size of an item before growing or shrinking."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".flex-item {\n  flex: 1 0 auto;\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Flex Wrap:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"flex-wrap"})," property controls whether flex items are forced into a single line or can be wrapped onto multiple lines."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".flex-container {\n  flex-wrap: wrap;\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Flexbox simplifies complex layout tasks, making it easier to create responsive and dynamic designs. It is well-suited for one-dimensional layouts, like navigation bars, lists, and card-based structures. For two-dimensional layouts, CSS Grid is another powerful layout model that complements Flexbox."}),"\n",(0,s.jsx)(n.h2,{id:"easy-way",children:"Easy way"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",children:"The Ultimate Guide"})," ",(0,s.jsx)(n.em,{children:"Credit to CSS Tricks"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/",children:"Interactive Guide to Flexbox"})," ",(0,s.jsx)(n.em,{children:"Credit to joshwcomeau"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"try-it-yourself-",children:"Try it yourself \ud83d\udee0"}),"\n",(0,s.jsx)(n.p,{children:"Exercise: Flexbox Layout Challenge"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Objective:"}),"\nPractice using Flexbox to create a responsive layout for a navigation bar."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Instructions:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create an HTML file with the following structure:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="styles.css">\n    <title>Flexbox Navigation</title>\n</head>\n<body>\n    <header>\n        <h1>Flexbox Navigation</h1>\n        \x3c!-- Add a navigation bar with at least four links --\x3e\n        <nav>\n            <ul>\n                <li><a href="#">Home</a></li>\n                <li><a href="#">About</a></li>\n                <li><a href="#">Services</a></li>\n                <li><a href="#">Contact</a></li>\n            </ul>\n        </nav>\n    </header>\n    <section>\n        \x3c!-- Create a section with some sample content --\x3e\n        <p>This is a sample section content. Feel free to add more content here.</p>\n    </section>\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Tasks:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use Flexbox properties to horizontally align the navigation links evenly within the navigation bar."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Style the navigation links to make them visually appealing."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ensure that the layout remains responsive when viewed on different screen sizes by using appropriate Flexbox properties."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add any additional styling or enhancements to improve the overall appearance of the navigation bar and section."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Solution."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="style.css"',children:"body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background-color: #333;\n    color: #fff;\n    padding: 1em;\n    text-align: center;\n}\n\nnav {\n    /* Apply Flexbox properties to the navigation bar */\n    display: flex;\n    justify-content: space-around;\n    background-color: #555;\n    padding: 0.5em;\n}\n\nnav ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n}\n\nnav li {\n    margin: 0;\n}\n\nnav a {\n    text-decoration: none;\n    color: #fff;\n    padding: 0.5em 1em;\n}\n\nsection {\n    padding: 2em;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"}),"\nFeel free to experiment and add your own creative touch to the exercise. The goal is to become more familiar with using Flexbox for layout purposes."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>t});var s=l(7294);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);