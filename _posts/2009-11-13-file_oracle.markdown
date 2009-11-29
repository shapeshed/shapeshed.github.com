---
layout: post
meta_keywords: expressionengine, plugin, file, sha1, mtime, atime, ctime
meta_description: Provides comprehensive information on a file
title: File Oracle
summary: Provides comprehensive information on a file
categories: expressionengine plugins
lighthouse: 41275-file_oracleee_addon
github: file_oracle.ee_addon
github_tags: [2.0.0, 1.0.0, 0.1.0]
pledgie: 6976

---
**Author**: [George Ornbo][]
**Source**: [Github][]

## Compatibility

* ExpressionEngine Version 1.6.x (1.x.x releases), ExpressionEngine Version 2.0.x (2.x.x releases)
* PHP 5.x

## License

File Oracle is free for personal and commercial use. 

If you use it commercially use a donation of $10 is suggested. You can send [donations here](http://pledgie.com/campaigns/6976). 

File Oracle is licensed under a [Open Source Initiative - BSD License][] license.

## Installation

For EE 1.6.x the file pi.human\_filesize.php must be placed in the /system/plugins/ folder in your [ExpressionEngine][] installation.

For EE 2.0.0 the human\_filesize folder must be placed in the /system/expressionengine/third_party/ folder in your [ExpressionEngine][] installation.

## Name

File Oracle

## Compatibility

* ExpressionEngine Version 1.6.x
* PHP 5.x

## Synopsis

Provides comprehensive information on a file

## Description

The plugin provides comprehensive information on a file and makes this information available to ExpressionEngine templates. 

The plugin expects to be given a file. This can either be relative to the document root of the site

    {exp:file_oracle file="/images/example_file.jpg"}
      <p>MD5: {md5}</p>
    {/exp:file_oracle}

Or the full server path

    {exp:file_oracle file="/Users/george/Sites/ee16.local/images/example.jpg"}
      <p>Last modified: {mtime format="%F %d %Y"}</p>
    {/exp:file_oracle}
	
## Single Variables

    {human_size}
  
Shows the size of the file in human readable format (e.g. 3KB, 4.1GB).

    {file_perms}
  
Show the octal file permission for the file.

    {mime_type}
  
Returns the mime type for the file.

    {md5}

Returns the md5 for the file.

    {sha1}
  
Returns the sha1 for the file.

    {dirname}
  
Returns the directory name for the file.

    {basename}
  
Returns the basename of the file.

    {extension}
  
Returns the extension for the file.

    {filename}
  
Returns the filename for the file (available since PHP 5.2.0).

    {dev}
  
The device number.

    {ino}
  
The inode number. On windows systems this will always be 0.

    {mode}
  
The inode protection mode.

    {nlink}
  
The number of links.

    {uid}
  
The userid of owner. On Windows this will always be 0.

    {gid}

The groupid of owner. On Windows this will always be 0.

    {rdev}
  
The device type, if inode device.

    {size}
  
The file size in bytes.

    {atime}
  
The time of last access (Unix timestamp). This also accepts ExpressionEngine data formatting format="%F %d %Y"

    {mtime}
  
The time of last modification (Unix timestamp). This also accepts ExpressionEngine data formatting format="%F %d %Y"

    {ctime}

The time of last inode change (Unix timestamp). This also accepts ExpressionEngine data formatting format="%F %d %Y"

    {blksize}

The blocksize of filesystem IO. Only valid on systems supporting the st_blksize type - other systems (e.g. Windows) return -1.

    {blocks}

The number of blocks allocated. Only valid on systems supporting the st_blksize type - other systems (e.g. Windows) return -1.

	
## Examples

    {exp:file_oracle file="/images/avatar_bigger.jpg"}
      <p>File size: {human_size}</p>
      <p>File permissions: {file_perms}</p>
      <p>Mime type: {mime_type}</p>
    {/exp:file_oracle}

[George Ornbo]: http://shapeshed.com/
[Github]: http://github.com/shapeshed/file_oracle.ee_addon
[ExpressionEngine]:http://www.expressionengine.com/index.php?affiliate=shapeshed
[Open Source Initiative - BSD License]: http://opensource.org/licenses/bsd-license.php