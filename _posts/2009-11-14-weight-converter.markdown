---
layout: post
meta_keywords: expressionengine, plugin, file, weight, converter
meta_description: Converts a number from one weight to another
title: Weight converter
summary: Converts a number from one weight to another
categories: expressionengine plugins
lighthouse: 41322-weight_converter
github: weight_converter.ee_addon
github_tags: [2.0.0, 1.0.0, 0.1.0]
pledgie: 6994

---
**Author**: [George Ornbo][]
**Source**: [Github][]

## Compatibility

* ExpressionEngine Version 1.6.x (1.x.x releases), ExpressionEngine Version 2.0.x (2.x.x releases)
* PHP 5.x

## License

Weight Converter is free for personal and commercial use. 

If you use it commercially a donation of $10 is suggested. You can send [donations here](http://pledgie.com/campaigns/6994). 

Weight Converter is licensed under a [Open Source Initiative - BSD License][] license.

## Installation

For EE 1.6.x the file pi.weight\_converter.php must be placed in the /system/plugins/ folder in your [ExpressionEngine][] installation.

For EE 2.0.0 the weight\_converter folder must be placed in the /system/expressionengine/third_party/ folder in your [ExpressionEngine][] installation.

## Name

Weight Converter

## Synopsis

Converts a number from one weight to another

## Description

The plugin converts a number from one weight to another. It is possible to specify the number of decimals, the decimal separator and the thousands separator.

    {exp:weight_converter from="kg" to="lb"}1.345{/exp:weight_converter}
	
## Parameters

    from
    
* lb - Pounds
* g - Grams
* kg - Kilograms
* oz - Ounzes
* st - Stones
* short_ton - Short Ton (UK)
* long_ton - Long Ton (US)

The Unit to convert from. Use syntax as above eg for stone use "st":

    to

* lb - Pounds
* g - Grams
* kg - Kilograms
* oz - Ounzes
* st - Stones
* short_ton - Short Ton (UK)
* long_ton - Long Ton (US)

The Unit to convert to. Use syntax as above eg for stone use "st":

    decimals
  
The number of decimal places to show. Default: 2.

    dec_point
  
The character to use for the decimal point. Default: .

    thousands_sep
  
The character to use for thousands separator. Default: SPACE


## Examples

Convert from kg to lbs

    {exp:weight_converter from="kg" to="lb"}2.1234{/exp:weight_converter}
    
Convert from g to st with one decimal place

    {exp:weight_converter from="kg" to="lb" decimals="1"}2.1234{/exp:weight_converter}

[George Ornbo]: http://shapeshed.com/
[Github]: http://github.com/shapeshed/weight_converter.ee_addon
[ExpressionEngine]:http://www.expressionengine.com/index.php?affiliate=shapeshed
[Open Source Initiative - BSD License]: http://opensource.org/licenses/bsd-license.php