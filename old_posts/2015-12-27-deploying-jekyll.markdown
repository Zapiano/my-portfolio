---
layout: post
title:  "Deploying at Github with Jekyll"
date:   2015-12-27 21:55:00 -0300
categories: deploy jekyll tutorial
---
So that's my first REAL post and it's gonna be like a mini-tutorial about how I've deployed (I don't really know if that's the right term) my site on github using Jekyll - it's kind of a meta post. ;)

The first thing I must say is: the [jekyll site]{https://jekyllrb.com} has a very rich and well organized documentation and there's a good [Github page]{https://help.github.com/articles/using-jekyll-with-pages/} explaining how to use Jekyll to host your blog too. So, if there's a lot of good material out there, what can I cooperat with?

Well, as usual, my case wasn't exactly the standard scenario. I already had a page hosted in github using the "Project Site" method (if you want to know what's this and how to do that, take a look [here]{https://pages.github.com/}, google it, send me an email, etc). To be more precise what I had was a Portfolio, but for all purposes it was just a static page, because that's the only thing you can actually host at Github's server - as far as I know. Ok, so what I did:

* I've Quick-start guide at Jekyll's and created a blog to use as example
* At my portfolio's repository I've created almost a "copy" of that example above: _config.yml, feed.xml and blog.html and file, _layouts, _posts, _sass and _includes folders
* One IMPORTANT thing here is: Github will look for and index.html file at your repository and will render it when someone enter at your site, AND when you create that blog example **it will create a index.html too**, so you have to **change** it name to something (like blog.html)
* Once you've done that, you have to open the _config.yml file and change it with you data. Actually, you have to pry into the folders, understand the structure and look for whats is doing what. Like: the default.html file at _layouts folder has a {% include head.html %} line. So you have to look for that file and, when you find it at the _includes folder, you will see that it is just the header part of a html. And that's how you begin to understand what you must (or may) change at the "example blog" so it looks more like "your blog".
* After that part, you have to make a Gemfile. If you don't know what's that, you probably don't know ruby (and if it is the case you should probably stop WHATEVER YOU ARE DOING and go study ruby) or you're a beginner like me <3. Anyway, Gemfile is just a file that contains the names of all the Ruby Gems you are going to use and a site where they can be downloaded. After create that file you have to run a bundle command at the terminal so the app can read that file and install that gems (and then a Gemfile.lock will be created). I'm really trying to be clear here... but it lasted months to me to understand such a ridiculous thing like that..

Now you have to push to Github and it should be working... but since the life isn't so beautiful, I'm gonna tell some things that went wrong for me and how I've managed to solve them:

* Everytime you make a change and go check how it is, you have to reload the page, but you may be stupid like me and forget to clear your browser cache. I won't explain why this is necessary, because it is a little mystical to me right now, but the point is: your browser is lazy and it sees the same file over and over again and think "ok, it's the same file, I will not reload that". And you have to tell it "forget everything you've seen until now! this is different!".
* If you try to open you're blog but it is... strange... it opens but with a weird layout... it may be because the css file isn't opening. You can check that using the 'Inspect Element'. If that's the case you have to investigate, but in my case the path to the css file was wrong
* Last but not least: remember to change de "baseurl" line at the _config.yml file. If you're hosting the site at Github's server and all that bunch of files are at some repository, the "baseurl" must be "/name-of-the-repository". If you wanna know why is that so important, look for something like "site.baseurl" at the header.html or head.html files: Jekyll uses that information to know the right path to the pages and files at your blog

Well... I think that's it. I really don't know if someone is going to read that, but it is useful at least as a record to me. :)

See ya o/