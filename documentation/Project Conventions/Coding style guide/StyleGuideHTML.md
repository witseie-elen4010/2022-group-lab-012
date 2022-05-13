# HTML Style Guide
* Reference: https://google.github.io/styleguide/htmlcssguide.html#Type_Selectors
* Reference: https://www.w3schools.com/html/html5_syntax.asp	

---

## Background
This document defines formatting and style rules for HTML.

---

---
## Formatting Rules
---

## Document type
* Make use of HTML 5

## HTML Validity
* Use valid HTML, make use of tools such as W3C HTML validator to test.

## Semantics 
* Use HTML according to its purpose
	
## Multimedia Fallack
* Provide alternative contents for multimedia

<!-- Not recommended -->
<img src="spreadsheet.png">

<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">


## Separation of concerns 
* Separate structure from presentation from behaviour 

<!-- Not recommended -->
<!DOCTYPE html>
<title>HTML sucks</title>
<link rel="stylesheet" href="base.css" media="screen">
<link rel="stylesheet" href="grid.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>I’ve read about this on a few sites but now I’m sure:
  <u>HTML is stupid!!1</u>
<center>I can’t believe there’s no way to control the styling of
  my website without doing everything all over again!</center>


<!-- Recommended -->
<!DOCTYPE html>
<title>My first CSS-only redesign</title>
<link rel="stylesheet" href="default.css">
<h1>My first CSS-only redesign</h1>
<p>I’ve read about this on a few sites but today I’m actually
  doing it: separating concerns and avoiding anything in the HTML of
  my website that is presentational.
<p>It’s awesome!
<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">


## Comments
* Use comments where necessary, as needed.

## Optional Tags
* Do not include optional tags

<!-- Not recommended -->
<!DOCTYPE html>
<html>
  <head>
    <title>Spending money, spending bytes</title>
  </head>
  <body>
    <p>Sic.</p>
  </body>
</html>

<!-- Recommended -->
<!DOCTYPE html>
<title>Saving money, saving bytes</title>
<p>Qed.

## Attributes
* Avoid 'type' attributes for style sheets and scripts
* Avoid unnecessary 'id' attributes

## Attribute order
* HTML attributes should come in this particular order for easier reading of code

<a class="..." id="..." data-toggle="modal" href="#">
  Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="..."> 

## Use HTTPS for embedded resources where possible.

* Always use HTTPS (https:) for images and other media files, style sheets, and scripts, unless the respective files are not available over HTTPS.
<!-- Recommended -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

## Indentation
* Use two spaces for indentation.
<ul>
  <li>Fantastic
  <li>Great
</ul>

## Capitalization
* Use only lowercase for HTML element names, attributes, attribute values and properties.
<!-- Not recommended -->
<A HREF="/">Home</A>

<!-- Recommended -->
<img src="google.png" alt="Google">

## Trailing Whitespaces
* Avoid trailing white spaces as they are unnecessary and can complicate diffs.
<!-- Not recommended -->
<p>What?_

<!-- Recommended -->
<p>Yes please.

---

### Meta Rules

----

## Encoding 
* Use UTF-8 for character encoding.

<meta charset="utf-8">



