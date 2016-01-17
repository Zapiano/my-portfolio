---
layout: post
title:  "Backend with Roda - Intro"
date:   2016-01-17 17:23:46 -0300
categories: ruby roda backend intro
---
So, I work at this company (Pegcar) as Web Developer Junior - wich means that I know almost nothing and I'm learning everything from scratch. Then, a few weeks ago - it was the last week of 2015, I think, they asked me to develop a landing page ~almost~ [all by myself](https://www.youtube.com/watch?v=XjDqsNwOsPk). I had to develop the backend (using Ruby) AND the frontend using all the help I needed from the CTO (wich was, in fact, a lot of help!) and ... well ... three weeks from then, I can't say I am totally capable of doing a backend without any help now, nor that I understand 100% of wath is going on, but I have certainly learned a lot of cool stuff and it was great to begin my journey as a developer. For that reason, in the next posts, I'm gonna try to explain some of the stuff I've learned. 

In this post I'm gonna talk about Roda, wich is a routing framework in ruby - as far as I know, is like an alternative to Rails and Sinatra. The reasons I've choosed it to start are:

1.  It's a very good tool (again, as far as I know) but a little bit unpopular if compared to Rails or Sinatra, so there are a lack of references. 

2.  It's not that difficult to use - at least the basic usage is simple.

3.  Is one good start point for an application. So Let's Go! :)

Okey, [Roda](http://roda.jeremyevans.net/) was written by Jeremy Evans. In it's web site, he call Roda a 'routing tree web framework toolkit' and my first doubt was "wtf is a routing tree?". And now I think Roda is something like: a framework; wich is used for web applications, so it is a web framework; that helps you define the routes for a web application; and it does that in a tree like form (you can check the example at Roda's home). So, all you have to do, to get started, is create a folder for the application (=D), create a [Gemfile](http://bundler.io/gemfile.html) - wich is a file where you say all the Gems you're going to use and where it can download them from - and add this lines to it: 

	source 'https://rubygems.org'

	gem 'roda'
	gem 'rack-unreloader'

 and then run `bundle` at the terminal and it will install the Roda gem AAAND the Rack gem (which you will use the run the app locally soon).

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

This way, you are:

1. Telling your application to use Roda gem, 

2. Creating an instance of the Roda object called App_name

3. The `Rack::Session::Cookie` part is setting the :secret variable to "some_secret_key" (but I really don't understand completely why this is important)

4. The `route do |r|` will run everything inside to every route, testing all the possibilities and, if it finds a match, it will run the code inside it and nothing before (in our case the only possible match is "root", wich corresponds to "/")

5. When the application looks for a "/" route and finds it, it will actually DISPLAY "Hello World" at the browser

6. Finally, the `run App_name` tells Roda to run you application...

So, if everything is okey (which normally isn't, but it's ok to be not ok sometimes) you can go to the project's folder, run `rackup`, open a browser, go to `localhost:9292` (wich is the standard folder, I guess) and you should see your "Hello World"! \o/

Now, the last thing you might want to do is substitute the "Hello World" part for something telling Roda to render a html file (actually, a .erb file or a slim file, for example). 

To do that:

1.  Add a line `plugin :render` above the `class App_name...` line and; 
2.  Instead of "Hello World", write `render('bar')`;
3.  Create a "views" folder at the root directory of your project and, inside it, a bar.erb file. If you don't know what is a .erb file, it fine. It's just a normal html file which accepts ruby code too, but if you DON'T WANT to write any code and write a 100% html file, it's ok. Just remember to call name the file .erb because otherwise when you try to run your application with rackup it will not work;
4.  Add a gem name 'tilt' to that Gemfile and run `bundle` again at the terminal. That gem is used by Roda to render your .erb file

Now, if you write some html at that file, run `rackup` and go to `localhost:9292` you should see it rendered! 

Okey, now I'm tired of writing and you are tired of reading so I'm gonna stop. I have many other cool stuff to explain and I'll do it little by little.

See ya! o/ 