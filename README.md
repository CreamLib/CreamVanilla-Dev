# About creamVanilla Development Repo

**HTML patterns crafted to help you create the basis for your standard, accessible and responsive web sites**

This repo contains the Eleventy project. If you want to see the generated website, please go to <a href="https://creamlib.github.io/creamVanilla/" target="_blank">creamVanilla</a>.

Installation
===============================

Run
`npm install` 


Launch localhost
================

Before launching a localhost version, please use the 'pathPrefix' Localhost version var in the '.eleventy.js' file.

To launch a localhost version :
`npx @11ty/eleventy --serve` 


Generate the production website
===============================

Before generating the website, please verify that in the '.eleventy.js' file, the var 'pathPrefix' for GitHub is not commented (and the localhost version is commented).

Run
`npx eleventy` 

The generated production website will be in the folder '_site'.
Please copy the content of this folder in the 'creamJS' repo.

Informations
============

The configutation is defined in the '.eleventy.js' file.

Documentation
=============

You can find the documentation for Eleventy to the <a href="https://www.11ty.io/docs/" target="_blank">Eleventy docs site</a>
