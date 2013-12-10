# **WIP**

## Polygon Framework by [Elton Mesquita](https://twitter.com/eltonfmesquita)

> A flexible SASS based (mini)framework built with small and medium projects in mind. It doesn't provide style, but just the bare minimal boilerplate to build modern and well coded pages.
>

It also proposes a basic structure for your projects, follow it or not, it's up to you (as it should be).

## Yet another Framework? Why?
Yep! There are a lot of Framework these days and everyday pop a new one (including this very own). But there are some problems with most os these framework:
- They force down a coding method that not always suits your needs;
- They are usually aimed at big projects. Even if you use just some modules you still end up with a lot unused code;
- They are usually big and have a lot of lines of code and an extensive documentation and takes a lot of time to master;
- You usually have to (re)write all your markup to fit the Framework's guideline;

In the latest years I have used some Frameworks to build my pages. But everytime I used a Framework I ended up using it less extensively, because I just did not need everything it had to offer. I used the most famous and the not so famous Frameworks, but still every single one had the same issues I have mentioned above. 

One (micro)Framework has caught my attention, [Toast](https://daneden.me/toast/) by [Daniel Eden](https://daneden.me/). It is just 150 lines of CSS and has just the bare minimum that you will use in any page. It is so simple that you can master it in about 5 or 10 minutes. The idea behind Polygon looks like the Toast Framework, but extends it a little bit. As for the today web there are some more components that are largely used and are not provided by Toast.

The aim of the Polygon Framework is to sit right between a micro-framework like Toast and a full featured framework like [Twitter's Bootstrap](http://getbootstrap.com/) or [ZURB's Foundation](http://foundation.zurb.com/). It tries to be as flexible as possible and does not force who uses it to follow a strict method or way to code but instead, it proposes a basic structure for your project and a simple, efficient, semantic and flexible way to write your markup, mainly for tiny, small and medium projects.

## Polygon Structure
- A simple HTML template based in the HTML5 Boilerplate. It uses semantic markup and classes;
- The basic structure for a clean and well structured project;
- _style.scss: contains all the imports. Customize it for your needs;
- _vars.scss: contains all the variables. Customize it for your needs;
- In the framework folder:
	- [_normalize.scss](http://necolas.github.io/normalize.css/);
	- _resets.scss: just the most basics resets for any RWD page;
	- _mixins.scss: generic mixins to make life easier;
	- _html.scss: the very basics sets for a page;
	- _type.scss: the very basics for type on the page.
	- _grid.scss: a simple, mobile first, semantic grid;
	- _button-base.scss: a mixin with the basic structure for buttons. You have to provide the classes itself in the style/_buttons.scss file;
- In the plugins folders:
	- _slider.scss: the basic css for the slideshow plugin.
	- _modal.scss: the basic css for the modal plugin.
	- _tooltip.scss:  the basic css for the pure css tooltip plugin.
	- _dropdown.scss:  the basic css for the dropdown plugin.
- In the style folder:
	- _buttons.scss: the buttons styles. There is just a simple style provided as an example, do whatever you want with it;
	- _footer.scss: a blank file. It should contain all the styles for your project's footer;
	- _header.scss: a blank file. It should contain all the styles for your project's header;
	- _type.scss: a blank file. It should contain all the styles for your project's type;

## Using Polygon
As you can see above, the Polygon structure is pretty clean and straightfoward. It separates all the Framework's elements basic structure from the styling, using 3 folders: framework, plugins and style. 
- framework: contains all the structure of all the elements. It uses a lot of mixins;
- plugins: contains all the structure of the plugins provided. It doesn't provide style for them;
- style: as proposed, you should separate the structure from the style. This folders contains mainly blank files, just to serve as a boilerplate to your project and mantain the separation of the structure from the style.
