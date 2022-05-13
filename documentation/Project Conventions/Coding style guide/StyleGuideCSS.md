# CSS Coding Style Guide
* Reference: https://google.github.io/styleguide/htmlcssguide.html#Type_Selectors

---

## Introduction

Below are the CSS coding style guidelines/standards used throughout the project.

### CSS Style Rules ###

## CSS Validity
* Use valid CSS3 and validate with tools such as W3C CSS validator to test.

## Class Naming 
* Make use of meaningful class names

/* Not recommended: meaningless */
.yee-1901 {}

/* Not recommended: presentational */
.button-green {}
.clear {}


/* Recommended: specific */
.gallery {}
.login {}
.video {}

/* Recommended: generic */
.aux {}
.alt {}

## Class Name style
* Use class names that are short as possible but as long as necessary.

/* Not recommended */
.navigation {}
.atr {}

/* Recommended */
.nav {}
.author {}

## Class Name Delimiters
* Use a hyphen to separate words in class names.

/* Not recommended: does not separate the words “demo” and “image” */
.demoimage {}
/* Not recommended: uses underscore instead of hyphen */
.error_status {}

/* Recommended */
.video-id {}
.ads-sample {}

## Type Selectors 
* Avoid qualifying class names with type selectors.

/* Not recommended */
ul.example {}
div.error {}

/* Recommended */
.example {}
.error {}

## ID Selectors
* Avoid ID selectors

/* Not recommended */
#example {}

/* Recommended */
.example {}

## Shorthand Properties
* Use shorthand properties where possible.

/* Not recommended */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;

/* Recommended */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;

## Zeros
* Always include leading “0”s in values

e.g font-size: 0.8em;

## Hexadecimal Notation
* Use 3 character hexadecimal notation where possible.

## Important Declarations
* Avoid using !important declarations.

/* Not recommended */
.example {
  font-weight: bold !important;
}

/* Recommended */
.example {
  font-weight: bold;
}

### CSS Formatting Rules ###

## Declaration Order
* You can make declarations in any order

## Block Content Indentation
* Indent all block content.

@media screen, projection {

  html {
    background: #fff;
    color: #444;
  }

}

## Declaration Stops
* Use a semicolon after every declaration.

/* Not recommended */
.test {
  display: block;
  height: 100px
}

/* Recommended */
.test {
  display: block;
  height: 100px;
}

## Declaration Block Separation
* Use a space between the last selector and the declaration block.

/* Not recommended: missing space */
.video{
  margin-top: 1em;
}
/* Not recommended: unnecessary line break */
.video
{
  margin-top: 1em;
}


/* Recommended */
.video {
  margin-top: 1em;
}


## Selector and Declaration Separation
* Separate selectors and declarations by new lines.

/* Not recommended */
a:focus, a:active {
  position: relative; top: 1px;
}
/* Recommended */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}

## Rule Separation
* Separate rules by new lines.

html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}

## CSS Quotation Marks
* Use single ('') rather than double ("") quotation marks for attribute selectors and property values.

/* Not recommended */
@import url("https://www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}

/* Recommended */
@import url(https://www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}
