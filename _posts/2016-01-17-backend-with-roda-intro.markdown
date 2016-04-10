---
layout: post
title:  "Backend with Roda - Intro"
date:   2016-01-17 17:23:46 -0300
categories: ruby roda backend intro
---
So, I work at this company (Pegcar) as a Web Developer Junior - wich means that I know almost nothing and I'm learning everything from scratch. Then, a few weeks ago - it was the last week of 2015, I think, they asked me to develop a landing page ~almost~ [all by myself](https://www.youtube.com/watch?v=XjDqsNwOsPk). I had to develop the backend (using Ruby) AND the frontend using all the help I needed from the CTO (wich was, in fact, a lot of help!) and ... well ... three weeks from then, I can't say I am totally capable of doing a backend without any help now, nor that I understand 100% of wath is going on, but I have certainly learned a lot of cool stuff and it was great to begin my journey as a developer. For that reason, in the next posts, I'm gonna try to explain some of the stuff I've learned.

In this post I'm gonna talk about Roda, wich is a routing framework in ruby - as far as I know, is like an alternative to Rails and Sinatra. The reasons I've choosed it to start are:

1.  It's a very good tool (again, as far as I know) but a little bit unpopular if compared to Rails or Sinatra, so there are a lack of references.

2.  It's not that difficult to use - at least the basic usage is simple.

3.  Is one good start point for an application. So Let's Go! :)

Okey, [Roda](http://roda.jeremyevans.net/) was written by Jeremy Evans. In it's web site, he call Roda a 'routing tree web framework toolkit' and my first doubt was "wtf is a routing tree?". And now I think Roda is something like: a framework; wich is used for web applications, so it is a web framework; that helps you define the routes for a web application; and it does that in a tree like form (you can check the example at Roda's home). So, all you have to do, to get started, is create a folder for the application (=D), create a [Gemfile](http://bundler.io/gemfile.html) - wich is a file where you say all the Gems you're going to use and where it can download them from - and add this lines to it:

	source 'https://rubygems.org'

	gem 'roda'
	gem 'rack-unreloader'

 and then run `bundle` at the terminal and it will install the Roda gem **and** the Rack gem (which you will use the run the app locally soon).

 The next thing is to create a config.ru file and write this:

	require 'roda'
	class App_name < Roda
	  use Rack::Session::Cookie, :secret => "some_secret_key"

	  route do |r|

	    r.root do
	      "Hello World"
	    end

	  end
	end


	run App_name

Line by line:

1. The `require roda` line is telling your application to use Roda gem;

2. The `class App_name < Roda` is creating an instance of the Roda object called App_name;

3. The `Rack::Session::Cookie` part is setting the :secret variable to "some_secret_key";

4. The `route do |r|` part is difficult for me to explain and if you reading have a better information than me, please leave a comment. What I think is happening is: when someone access your page, Roda will look there and search for a match and, if it finds it, it will execute the code above. For example: if your domain is myapp, `r.root` will match myapp.com, `r.on 'contact'` will magtch myapp.com/contact and so it  goes;

5. When the application looks for a "/" route and finds it, it will actually DISPLAY "Hello World" at the browser;

6. Finally, the `run App_name` tells Roda to run you application;

So, if everything is okey (which normally isn't, but it's ok to be not ok sometimes) you can go to the project's folder, run `rackup`, open a browser, go to `localhost:9292` (wich is the standard folder, I guess) and you should see your "Hello World"! \o/

Now, the last thing you might want to do is substitute the "Hello World" part for something telling Roda to render a erb, slim or html a file. In order to do that, you will be using a plugin called [render](http://roda.jeremyevans.net/rdoc/classes/Roda/RodaPlugins/Render.html):

1.  Add a line `plugin :render` above the `class App_name...` line and;
2.  Instead of "Hello World", write `render('bar')`;
3.  Create a "views" folder at the root directory of your project and, inside it, create a bar.erb file. The render plugin will look for a [.erb file](http://stackoverflow.com/questions/4284421/what-is-the-meaning-of-erb) by default. If you want to use a simple .html file instead, you have to pass an option `engine: "html"` after the plugin declaration but at the same line. You can use slim rather than html too. So, the line will be: `plugin :render, engine: "html"`.
4.  Add a gem name 'tilt' to that Gemfile and run `bundle` again at the terminal. That gem is used by Roda to render your .erb file

Now, if you write some html at that file, run `rackup` and go to `localhost:9292` you should see it rendered!

Okey, now I'm tired of writing and you are tired of reading so I'm gonna stop. I have many other cool stuff to explain and I'll do it little by little.

See ya! o/

EDITED: April 10, 2016
