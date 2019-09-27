# Standard_Code

**HTML patterns crafted to help you create the basis for your standard, accessible and responsive web sites**


This librarie uses the Eleventy static site generator.
The "Standard_Code" repo contains the Eleventy project, if you want to see the generated website, please go to <a href="http://creamlib.github.io/creamJS/" target="_blank">creamJS</a>.

Installation
===============================

Run
`npm install` 

You can find the documentation for Eleventy to the <a href="https://www.11ty.io/docs/" target="_blank">Eleventy docs site</a>

Launch localhost
================

Before launching a localhost version, please use the 'pathPrefix' Localhost version var in the '.eleventy.js' file.

To launch a localhost version :
`npx @11ty/eleventy --serve` 


Generate the production website
===============================

Before generating the website, please verify that in the '.eleventy.js' file, the var 'pathPrefix' for GitHub is not commented (and the localhost version is commented).

Run
`ngx eleventy` 

The generated production website will be in the folder '_site'.
Please copy the content of this folder in the 'creamJS' repo.

Informations
============

The configutation is defined in the '.eleventy.js' file.