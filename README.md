# makeBS

[WIP] Creating a bootstrap style file from a website.

[Bootstrap](http://getbootstrap.com) is a very flexible framework for creating good looking websites.
The main problem with bootstrap is customizing it to make a site that looks and feel the way you want.
This tool lets you copy over your website's style into your bootstrap project.

Bootstrap builds on Less / Sass and all the customization options are added as variables. For example, button border radius is `@btn-border-radius-base`.
A new style is essentially a redefinition of the default bootstrap variables.
Bootstrap provides a [custom boostrap builder](http://getbootstrap.com/customize/) which allows you to do it manually.
This tool automatically pulls in these variable values from a website.

Getting Started
---------------

* Download `phantomjs` from phantomjs.org
* Run `phantomjs main.js <url>`

For example, `phantomjs main.js http://twitter.com` returns:

```
@body-bg:rgb(245, 248, 250);
@font-family-base:'Helvetica Neue', Helvetica, Arial, sans-serif;
@font-size-base:14px;
@text-color:rgb(41, 47, 51);
@footer-background:rgba(0, 0, 0, 0.54902);
@footer-padding-bottom:0px;
@footer-padding-top:0px;
@footer-text-color:rgb(41, 47, 51);
@brand-primary:rgb(27, 149, 224);
@link-color:rgb(27, 149, 224);
@section-bgcolor:rgb(255, 255, 255);
@section-color:rgb(41, 47, 51);
```
