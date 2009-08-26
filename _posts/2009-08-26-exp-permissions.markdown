---
layout: post
meta_keywords: expressionengine, folder permissions, shell script, chmod
meta_description: Correctly sets permissions for a new ExpressionEngine site
title: ExpressionEngine Permissions
summary: Correctly sets permissions for a new ExpressionEngine site
categories: shell-scripts
github_gist: http://gist.github.com/gists/175451/

---

* **Author**: [George Ornbo][]
* **Source Code**: [Github][]

## Compatibility

* ExpressionEngine Version 1.6.x
* POSIX compliant Operating System

## License

ExpressionEngine permissions is free for personal and commercial use. 

Copyright is licensed under a [Open Source Initiative - BSD License][] license.

## Installation

Add the file exp_permissions.sh to your /bin folder.

Remember to make the file executable. Details on how to make shell scripts executable can be found [here](http://shapeshed.com/s/2351)

## Name

{{ page.title }}

## Synopsis

{{ page.summary }}

## Description

To use this script navigate to the root of your ExpressionEngine site and then run the script:

	exp_permsissions.sh

You will be prompted to enter a system folder. If you are using the default 'system' just hit return. If you are using a custom folder name enter it here. 

If all goes well the script will exit silently. 

The script sets the following permssions:

666:

* /path.php
* /system/config.php 
* /system/config_bak.php

777:

* /images/avatars/uploads/ 
* /images/captchas/ 
* /images/member_photos/ 
* /images/pm_attachments/ 
* /images/signature_attachments/ 
* /images/uploads/ 
* /system/cache/

[George Ornbo]: http://shapeshed.com/
[ExpressionEngine]:http://www.expressionengine.com/index.php?affiliate=shapeshed
[Open Source Initiative - BSD License]: http://opensource.org/licenses/bsd-license.php
[Github]: http://gist.github.com/gists/175451/
