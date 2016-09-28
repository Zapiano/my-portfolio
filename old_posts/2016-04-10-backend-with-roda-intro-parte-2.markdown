---
layout: post
title:  "Backend with Roda - Intro (Part 2)"
date:   2016-01-17 17:23:46 -0300
categories: ruby roda backend intro part 2
---
This post is a continuation of this one: ["Backend with Roda - Intro"](http://zapiano.github.io/my-portfolio/ruby/roda/backend/intro/2016/01/17/backend-with-roda-intro.html).

When I write the first post about Roda, I did not mean to write a continuation, but here's what happened: recently I had to do a website to a communication agency called [Agencia Ecomunica](http://agenciaecomunica.com.br/) and I chose to use Roda - and it was a big mistake since it is just a static page so I didn't really **need** a backend.

Despite the fact that I have chosen a wrong tool to do my job, I tried to uset it right, so I came to my own post about Roda and read it to remember how to set up my environment - and, to my surprise, I realized that **my own post did not teach me** how to do some basic things I had to do if I wanted to make a simple one page static website(!).

So, here is a list of things I want to cover in this post in order to complement the first one and allow anyone to make a page:

1.  Link css and javascript files to the page;
2.  Use external fonts through @fontface rule;
3.  Use local images and fonts (and anothe public files);
4.  Use sass (or another preprocessor)

Just a note about this last topic: I'm planning a post JUST ABOUT preprocessors soon, so if you don't know what is this, just don't bother now and came back later. ;)

## 1.  Link css and javascript files to the page

In order to display css and javascript files, you have to use another Roda plugin called [assets](http://roda.jeremyevans.net/rdoc/classes/Roda/RodaPlugins/Assets.html). So, first of all add a line

  plugin :assets, :css => 'layout.css', :js => 'script.js'

This time, Roda will look for the files

  assets/css/layout.css
  assets/js/script.js

But you still have to do two more thins for this to work:

1.  You have to add a line `r.assets` above the `route do |r|`, so your config.ru file will look like this:

  require 'roda'

  class TestApp < Roda
  plugin :render, engine: "html"
  plugin :assets, :css => 'style.css', :js => 'script.js'

  use Rack::Session::Cookie, :secret => "test_password"

  route do |r|
    r.assets

    r.root do
      render("bar")
    end
  end
  end

  run TestApp

2.  At the bar.html file (or bar.erb or bar.slim) you have to call that files, so, in case of .html, it will be:

  <link rel="stylesheet" tyle="text/css" href="assets/css/style.css">
  <script type="text/javascript" src="assets/js/script.js"></script>

and in case of .erb it will be:

  <%= assets(:css) %>
  <%= assets(:js) %>

and in case of .slim it will be:

  == assets (css)
  == assets (js)

Now you just have to create that files and it should work.

## 2.  Use external fonts through @fontface rule;

If you don't know what @fontface is, [here is](https://www.google.com.br/search?client=ubuntu&channel=fs&q=%40fontface&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=TdkKV-LDFc3K8ged0Z_YDA) a great way to discover. If you don't want to know, just skip this section.

To use @fontface we'll just add another css file to the assets plugin. You can pass an array of files instead of a single file, like this:

  plugin :assets, :css => ['style.css', '_fonts.css']

and that _fonts.css file should look like this:

  @font-face {
    font-family: 'Source Sans Pro'
    src: url(font_url)
    font-weight: 100
  }

  @font-face {
    font-family: 'Source Sans Pro'
    src: url(font_url)
    font-weight: 300
  }

Where **you have to substitute** the `font_url` for the url of the font. That url can be an external link, taken from google fonts for example, but it can be a local. That second case will be covered in the next section.

Ah! And don't forget to add a line on your .html, .erb or .slim file calling that _fonts.css file.

## 3.  Use local images and fonts (and anothe public files);

In order to use(serve) public files, we'll use another Roda plugin called [static](http://roda.jeremyevans.net/rdoc/classes/Roda/RodaPlugins/Static.html). With it you set the folders with files you can load later on your site, like images or font files. It can be used to serve .css and .js files too, but I use the assets plugin because it compiles all the css files into one compressed file before sending it to the browser.

Anyway, to use this plugin you have to add a line with the folders names, above the other two, in your config.ru file, just like this:

  plugin :static, ["/images", "/fonts"]

When you **don't** say to Roda where it should look for that folders, it will look for them at the 'public' folder. So, in that case, it will look for this two folders:

  public/images
  public/fonts

And from now on you can put files into these two folders and use them in your aplication. That way, if you put a font file called `SourceSansPro-EstraLight.otf` into the `fonts` folder, you can go to that `_fonts.css` file we've discussed in the last section and use the path `/fonts/SourceSansPro-EstraLight.otf`, so you'll have:

  @font-face {
    font-family: 'Source Sans Pro'
    src: url("/fonts/SourceSansPro-EstraLight.otf")
    font-weight: 100
  }

And you can add a image of a gem called `gem.png` to the images folder and in your html file you can add the line:

  <img src="/images/gem.png"/>

## 4.  Use sass (or another preprocessor)

One last thing I want to cover here is: what if you want to use sass, less or scss? In that case you just have to use it and, at the assets plugin, instead of "style.css", you have to write "style.sass" or "style.less".

- - -

Well, with this basic setup I was able to do my first freelance job so I guess this is the basic informations someone need to get started with Roda. The next time I talk about it here I guess (and hope) it will not be an introduction anymore. :)

See ya! o/
