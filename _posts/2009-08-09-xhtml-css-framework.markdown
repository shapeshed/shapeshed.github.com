---
layout: post
meta_keywords: xhtml, css, boilerplate, html
meta_description: A boilerplate for creating layouts in XHTML 1.1
title: XHTML / CSS Framework
summary: A boilerplate for creating layouts in XHTML 1.1
categories: html-css
lighthouse: 35276-xhtml-css-framework
github: css_xhtml.framework
github_tags: [1.0]

---

* **Author(s)**: [George Ornbo][]
* **Source Code**: [Github][]

## Compatibility

* XHTML 1.1
* CSS 2.1

## License

XHTML / CSS Framework is free for personal and commercial use. 

If you use it commercially use a donation of $10 is suggested. You can send [donations here](http://pledgie.org/campaigns/2898). 

XHTML / CSS Framework is licensed under a [Open Source Initiative - BSD License][] license. I encourage others to fork the code and enhance it. 

## Installation

* Copy the /modules/twitee folder to your /system/modules/ folder
* Copy the /language/english/lang.twitee.php file to your /system/languages/english folder
* Open the [Module Manager](http://www.expressionengine.com/index.php?affiliate=shapeshed&page=/docs/cp/modules/index.html)
* Install the Twit-ee module
* In the module enter your Twitter username and password 
* Ensure that your /system/cache/ folder is writable
* Twit-ee is MSM compatible so you can have a separate twitter account for each site

## Name

{{ page.title }}

## Synopsis

{{ page.summary }}

## Description

A boilerplate for creating layouts in XHTML 1.1

The framwork contains an example XHTML layout

{% highlight html %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<title>Page title here</title>
	<style type="text/css" media="screen">@import "css/screen.css";</style>
	<meta name="DC.title" content="Title here" />
	<meta name="DC.subject" content="Keywords here" />
	<meta name="DC.description" content="Description here" />
	<meta name="DC.format" content="text/html" />
	<meta name="DC.publisher" content="Publisher here" />
	<meta name="DC.language" content="en" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
</head>
<body>
	<ul id="skip-links">
		<li><a href="#internal-column">Skip to main content</a></li>
		<li><a href="#nav">Skip to navigation</a></li>
	</ul>
	<div id="wrapper">
		<h1><a href="/">Your site</a></h1>
		<form action="#" method="post" id="header-search-form">
			<fieldset>
			<legend>Keyword Search</legend>
			<label for="keywords">Search</label>
			<input type="text" class="text" value="" id="keywords" name="keywords" />
			<input type="submit" class="submit" value="Search" name="submit" />
			</fieldset>
		</form>
		<ul id="nav">
			<li><a href="#">Navigation link one</a></li>
			<li><a href="#">Navigation link two</a></li>
			<li><a href="#">Navigation link three</a></li>
			<li><a href="#">Navigation link five</a></li>
		</ul>
		<div id="content">
			<h2>H2 Title</h2>
			<p>Recordari volo transactas <a href="#">foeditates meas</a>, et carnales corruptiones animae meae, non quod eas amem, sed ut <acronym title="Computerized Axial Tomography">CAT</acronym> te, deus meus. amore amoris tui facio istuc, recolens vias meas nequissimas in amaritudine recogitationis meae, ut tu dulcescas mihi, dulcedo non fallax, dulcedo felix et secura, et colligens me a dispersione, in qua frustatim discissus sum, dum ab uno te aversus in multa evanui. Exarsi enim aliquando satiari inferis in adulescentia, et silvescere ausus sum variis et umbrosis amoribus, et contabuit species mea, et conputrui coram oculis tuis, placens mihi et placere cupiens oculis hominum.</p>
			<h3>H3 Title</h3>
			<p><dfn>Definition</dfn>: To define the meaning of a word, phrase or term.  erat, quod me <abbr title="This is the full text">My abbreviation</abbr> delectabat, nisi amare et amari? sed non tenebatur modus ab animo usque ad animum, quatenus est luminosus limes amicitiae, sed exhalabantur nebulae de limosa concupiscentia carnis et scatebra pubertatis, et obnubilabant atque obfuscabant cor meum, ut non discerneretur serenitas dilectionis a caligine libidinis. utrumque in confuso aestuabat et rapiebat inbecillam aetatem per abrupta cupiditatum</p>
			<h4>H4 Title</h4>
			<p><a href="#">Et anno quidem</a> illo intermissa erant studia mea, dum mihi reducto a Madauris, in qua vicina urbe iam coeperam litteraturae atque oratoriae percipiendae gratia peregrinari, <a href="#">longinquioris</a> apud Karthaginem peregrinationis sumptus parabantur, animositate magis quam opibus patris, municipis Thagastensis admodum tenuis. cui narro haec? neque enim tibi, deus meus, sed apud te narro haec generi meo, generi humano, quantulacumque ex particula incidere potest in istas meas litteras. et ut quid hoc? ut videlicet ego et quisquis haec legit cogitemus, de quam profundo clamandum sit ad te. et quid</p>
			<h5>H5 Title</h5>
			<p>Furtum certe punit lex tua, domine, <a href="http://www.bbc.co.uk">et lex scripta</a> in cordibus hominum, quam ne ipsa quidem delet iniquitas: quis enim fur aequo animo furem patitur? nec copiosus adactum inopia. et ego furtum facere volui, et feci, nulla conpulsus egestate, nisi penuria et fastidio iustitiae et sagina iniquitatis. nam id furatus sum, quod mihi abundabat et multa melius; nec ea re volebam frui, quam furto appetebam, sed ipso furto et peccato.</p>
			<h6>H6 Title</h6>
			<p>Etenim <del>deleted text</del> <ins>inserted text</ins> est pulchris corporibus, et auro et argento et omnibus, et in contactu carnis congruentia valet plurimum, ceterisque sensibus est sua cuique accommodata modificatio corporum; habet etiam honor temporalis et imperitandi atque superandi potentia suum decus, unde etiam vindictae aviditas oritur: et tamen in cuncta haec adipiscenda non est egrediendum abs te, domine, </p>
			<p>Type <kbd>shapeshed.com</kbd> into your browser address bar. </p>
			<pre>This text has
			been formatted using
			   the HTML pre tag. The brower should
			      display all white space
			as it was entered.
			</pre>
			<p>And then she said <q>like... whatever!</q></p>
			<p>When you click the <kbd>Delete</kbd> button, you will be asked <samp>Are you sure you want to delete 9 to 5 job?</samp> Click <kbd>Yes</kbd> to continue. </p>
			<p>The sub tag is used for <sub>subscript text</sub></p>
			<p>The sup tag is used for <sup>superscript text</sup></p>
			<p>The HTML tt tag renders <tt>teletype</tt> (or <tt>monospaced</tt>) text. </p>
			<p>The program accepts the <var>width</var> parameter to determine the display width. </p>
			<ul>
				<li>List item 1</li>
				<li>List item 2</li>
				<li>List item 3</li>
			</ul>
			<ol>
				<li>List item 1</li>
				<li>List item 2</li>
				<li>List item 3</li>
			</ol>
			<dl>
				<dt>List item 1</dt>
				<dd>List item 2</dd>
			</dl>
			<blockquote>
				<p>Mea, dum mihi reducto a Madauris, in qua vicina urbe iam coeperam litteraturae</p>
			</blockquote>
			<address>
				My address
			</address>
			<code>
				Some code
			</code>
			<form action="#" method="post">
				<fieldset>
					<legend>My Fieldset Legend</legend>
					
					<label for="my-button">Button Input Label</label>
					<input type="button" class="button" name="my-button" id="my-button" value="My Button" />
					
					<label for="my-checkbox">Checkbox Input Label</label>
					<input type="checkbox" class="checkbox" name="my-checkbox" id="my-checkbox" value="" />
					
					<label for="my-file">My File Label</label>
					<input type="file" class="file" name="my-file" id="my-file" value="" />
					
					<input type="hidden" name="my-hidden" id="my-hidden" value="My Hidden Value" />
					
					<label for="my-password">My Password Label</label>
					<input type="password" class="password" name="my-password" id="my-password" value="" />
					
					<label for="my-radio">My Radio Label</label>
					<input type="radio" class="radio" name="my-radio" id="my-radio" value="" />
					
					<label for="my-reset">My Reset Label</label>
					<input type="reset" class="reset" name="my-reset" id="my-reset" value="Reset" />
				
					<label for="my-text">My Text Label</label>
					<input type="text" class="text" name="my-text" id="my-text" value="" />

					<label for="my-textarea">My Textarea Label</label>					
					<textarea name="my-textarea" id="my-textarea" rows="5" cols="20"></textarea>

					<input type="submit" class="submit" name="my-submit" id="my-submit" value="Submit" />	
				
				</fieldset>
			</form>
			<table summary="The number of employees and the foundation year of some imaginary companies.">
				<caption>Table 1: Company data</caption>
				<tr>
					<th abbr="Company">Company Name</th>
					<th abbr="Employees">Number of Employees</th>
					<th abbr="Founded">Foundation Year</th>
				</tr>
				<tr>
					<td>ACME Inc</td>
					<td>1000</td>
					<td>1947</td>
				</tr>
				<tr>
					<td>XYZ Corp</td>
					<td>2000</td>
					<td>1973</td>
				</tr>
			</table>



		</div>
		<div id="footer">
			<p>&copy; 2008 Your Company</p>
		</div>		
	</div>
</body>
</html>
{% endhighlight %}

It is up to individual authors to create layouts but this can be used as a basic example to fine tune your CSS.

The typography is created using ems and files are provided in the typography folder to aid authors with this.

## See also ##

* [Github][]
	
[George Ornbo]: http://shapeshed.com/
[ExpressionEngine]:http://www.expressionengine.com/index.php?affiliate=shapeshed
[Open Source Initiative - BSD License]: http://opensource.org/licenses/bsd-license.php
[Github]: http://github.com/shapeshed/css_xhtml.framework/