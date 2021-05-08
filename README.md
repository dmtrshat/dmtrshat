<h1 align="center">
  Hi <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">, I'm Dmitry. <br/>
  I'm a software engineer
</h1>
<h3 align="center">Crustacean, Pythonist, Javascripter.</h3>

<p align="center"> 
  <a href="https://www.arduino.cc/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="40" height="40"/> </a>

  <a href="https://www.cprogramming.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/>
  </a>
  
  <a href="https://www.w3schools.com/cpp/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/>
  </a>

  <a href="https://www.rust-lang.org" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg" alt="rust" width="40" height="40"/>
  </a>

  <a href="https://www.python.org" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
  </a>

  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  </a>
  
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
  </a>

  <a href="https://reactjs.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  </a>
  
  <a href="https://svelte.dev" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="svelte" width="40" height="40"/> 
  </a>

  <a href="https://vuejs.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/>
  </a>

  <a href="https://nodejs.org" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
  </a>
</p>

<p>
  Recently, I am mainly a web developer, but I have a lot of experience in software development.<br/>
  In programming, I am most interested in ML and Data Science.
</p>

<p>
  <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=dmtrshat&show_icons=true&locale=en&layout=compact" alt="dmtrshat" />
</p>

<h3>Latest blog posts</h3>
<!--START_SECTION:feed-->
#### [Browser, DOM, JavaScript. Everything you need to know to build effective web-apps. Part one - Browser.](https:&#x2F;&#x2F;dev.to&#x2F;dmtrshat&#x2F;browser-dom-javascript-everything-you-need-to-know-to-build-effective-web-apps-part-one-browser-b18) 
*Initially I planned to write only about DOM and even wrote the first article. But I came to the conclusion that in order to fully understand some of the concepts, I need to touch a little bit on how the browser works. Then I decided - Why &quot;a little&quot;? Maybe no? That&#39;s what I&#39;ve decided. 
I&#39;m not going to go into that, but to understand the context, I&#39;ll tell you a little bit about it. In the mid-90s, there were so-called &quot;browser wars&quot;. Each company, in addition to its HTML, had its own versions of DOM and browser engines until W3C obliged all companies to standardize technology. A common standard has not yet been achieved, which is why we have to create cross-browser versions of web applications.
REMARK
Browser architecture scheme

While it&#39;s running, the browser runs several processes.

REMARK
Since in this article we consider the browser in the context of web development, we are interested only in one process - rendering process.
IDEA
For each tab, the browser launches this process. Moreover, modern browsers also run the rendering process for each iframe. This is done in order to isolate each tab and iframe. And if any child process fails, kill it, not the main process. It&#39;s called site isolation.
rendering process runs threads. We will only consider the main thread. Almost all the work in the rendering process is done by browser engines.
Blink.
Gecko
WebKit
REMARK

During development, you should also consider EdgeHTML, but soon Microsoft will completely abandon it.
Now let&#39;s take a look at what happens when drawing a page.
this is a simplified model

First of all, resources (HTML and CSS) are parsed and converted to object trees. They are combined and another tree is constructed based on them - the render tree. This tree contains only those elements that will be drawn on the screen.
REMARK
display: none - will not be contained in this tree. Because the element does not have its own visual representation.
After that, a walk through this tree to calculate their size and location on the screen. This process is called layout (or flow in Firefox).
Then, all calculated elements are drawn onto the screen.
Let us dwell on each point.
Many parsers are based on context free grammar, which allows them to work very efficiently. But the main problem with parsing HTML is that it cannot be defined usingcontext free grammar. This is because the browser needs to keep track of how HTML is written. If the tag is not closed somewhere, then the browser will close it and so on. Even if you do not make mistakes, this feature slows down parsing very much.
Another important feature of HTML parsing is how it reacts when it encounters the &lt;script&gt;tag. Parsing stops until the script is executed and only after that continues to work. This is why you should place scripts before the &lt;&#x2F;body&gt; tag or use async and defer. async anddefer - allow loading scripts in parallel with parsing.
REMARK
defer differs in that it guarantees the execution order.
It should be noted that if there are very large scripts, the browser starts to allocate separate streams and tries to optimize the download.
A similar situation occurs when the parser encounters CSS. Style loading blocks parsing.
CSS parsing is free of such problems as when parsing HTML and, in principle, is no different.
At this point, the render tree&#x60; begins to be constructed.
After the render tree is formed, the position and geometric dimensions of the elements of this tree are calculated.
The speed of layout directly depends on the quality of the CSS you wrote.
What does it mean?
This means that each CSS rule needs to be applied to a separate DOM node. This is achieved by recursively traversing the HTML tree, another tree - the CSS tree. And the more difficult it is to write CSS, the longer it will take.
CSS - selectors are not equal in performance.
#(id), .(Class) Slightly less productive - type(for ex. - h1)
pseudo elements.
REMARK
css methodologies which are based on productive selectors.
Here the image is constructed and sent to the GPU to draw it onto the screen.
that&#39;s how the layout process goes

REMARK
source
In browsers, in devtools you can enable a mode that will show the rendering of elements.
We examined the main points of the browser. In some of the following articles, we will touch upon a few more interesting points.
Thank you very much for your attention. I hope it was useful for you 🙏*
#### [Browser, DOM, JavaScript. Everything you need to know to build effective web-apps. Part two - DOM.](https:&#x2F;&#x2F;dev.to&#x2F;dmtrshat&#x2F;dom-what-is-it-and-how-does-it-work-2j23) 
*Hi 👋
DOM. This is the second article in the series.
DOM(Document Object Model) is a software interface for HTML, XML and SVG documents. It provides a structured view of the document(tree) as a group of nodes and objects that have properties and methods, and defines the way in which the structure can be accessed by the program. 
The basis of an HTML document is tags.
document.body is an object for the &lt;body&gt; tag.
REMARK 
This is a typical HTML page:
&lt;!DOCTYPE HTML&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;About DOM&lt;&#x2F;title&gt;
&lt;&#x2F;head&gt;
&lt;body&gt;
  DOM...
&lt;&#x2F;body&gt;
&lt;&#x2F;html&gt;

And this is a view of an HTML document as a tag tree:
html
    head
        #text
        title
             #text &quot;About DOM&quot;
        #text
    #text
    body
        #text &quot;DOM...&quot;

Tags are node elements(elements). They form the structure of the tree: &lt;html&gt; is the root node, &lt;head&gt; and &lt;body&gt; its child nodes, etc.
Text inside the elements forms text nodes named #text. The text node contains only a string of text. It cannot have descendants (it is always at the lowest level).
REMARK
Spaces and line breaks before the &lt;head&gt; tag are ignored;
There are no characters after &lt;&#x2F;body&gt; tag. Anything written after this tag is moved to the end of the &lt;body&gt; tag according to the DOM specification;
Everything written before &lt;head&gt; tag is moved inside &lt;body&gt;.
Everything written in HTML is also in the DOM tree, even comments.
Remark
In this example, there are no text nodes created by spaces and line breaks:
&lt;!DOCTYPE HTML&gt;
&lt;html&gt;&lt;head&gt;&lt;title&gt;About DOM&lt;&#x2F;title&gt;&lt;&#x2F;head&gt;&lt;body&gt;DOM...&lt;&#x2F;body&gt;&lt;&#x2F;html&gt;

REMARK 
When building a DOM, the browser automatically fixes incorrectly written HTML. For example, if a file contains only the word world, the browser will add all the necessary tags. The DOM will look like this:
html
    head
    body
        #text &quot;world&quot;

REMARK
REMARK
There are 12 DOM nodes:
ELEMENT_NODE
ATTRIBUTE_NODE
TEXT_NODE
CDATA_SECTION_NODE
ENTITY_REFERENCE_NODE
ENTITY_NODE
PROCESSING_INSTRUCTION_NODE
COMMENT_NODE
DOCUMENT_NODE
DOCUMENT_TYPE_NODE
DOCUMENT_FRAGMENT_NODE
NOTATION_NODE
But most often only 4 of them are used: document, elements, text nodes, comments.
Here - you can see the DOM model in real time.
In the next article I will talk about shadow and virtual DOM. Don&#39;t miss it! 
Thank you very much for your attention. I hope it was useful for you 🙏*
#### [A small collection of useful React hooks.](https:&#x2F;&#x2F;dev.to&#x2F;dmtrshat&#x2F;a-small-collection-of-useful-react-hooks-5ha2) 
*I often have to find different implementations of the same things in projects. I singled out for myself the most common and leave links to ready-made solutions.
REMARK 
useFetch - Fetch API in the implementation of the hook.
useApi - Same as useFetch, only made with axios.
useWindowScrollPosition - Helps to track the position of the cursor.
useLocalStorage - Various operations with local storage.
useDocumentTitle - Allows you to set the title of the document.
useOnlineStatus - Check the status of the network.
useClippy - Adding to the clipboard.
useScript - Allows you to dynamically download external scripts.
Thank you very much for your attention. I hope it was useful for you 🙏*
#### [✨Start creating React apps correctly✨](https:&#x2F;&#x2F;dev.to&#x2F;dmtrshat&#x2F;start-creating-react-apps-correctly-5f53) 
*In this article, I will talk about how I develop React applications. I will share my experience and try to explain why it is necessary to do so. 
Before you start developing an application, I advise you to write documentation for the project. This will help to fully understand the task and determine what tools&#x2F;approaches are needed to perform this task. It will also help to define the project structure. 
I gotta be honest, I don&#39;t always write tests. But I know it&#39;s important. So I recommend you to write them 😂 
TDD). This approach reduces the risk of bugs and your project will be 100% fit for purpose. It is not necessary to cover all the components with tests. It&#39;s like comments: 
IDEA
Fulfillment of all the previous pointsIt allows you to think about state management.
Redux is perfect for big projects. 
Mobx - I find it redundant for small projects and not functional enough for large ones. That&#39;s why Mobx is for medium-sized projects.
Context API is a Swiss knife. It is suitable for projects of any size. But not yet as flexible as Redux for large projects.
REMARK 
It&#39;s more of a matter of convenience and conciseness of your application structure. Let&#39;s imagine that there are two kinds of components - stupid and smart.
components.
containers.
src contains two folders components and containers, which helps to better navigate in the project.
There&#39;s been a lot of talk about that. Yeah, so far, the use of hooks has been advisory in nature. But I strongly recommend that you stop using classes. You can also use hooks to manage a component&#39;s life cycle, but your application will also be faster, clearer and contain less code.
official React documentation.
REMARK 
You can read about prop-types here.
prop-types can be often found in projects, contracts, unfortunately, are very rare.
description of a function and help you understand what this function does.
&#x2F;**
* Greet user by name
* @param {string} [name]
*&#x2F;
const toGreet &#x3D; (name) &#x3D;&gt; &#x60;Hi ${name}&#x60;;

Now when you call a function (or hover over it), the editor will show you the description and types for the receiving parameters.
JSDoc can be found here. 
Give up styled-components and inline styles!
Apart from syntax highlighting and normal pre and postprocessor support, styles written in this way are not cached. And in the case of styled-components styles will be compiled each time, which affects performance.
Astroturf and Linaria (they have a similar API to styled-components).
css modules.
PWA combines native application properties with browser functionality, which has its advantages:
PWA is supported by the most popular operating systems;


new functionality and updates are added remotely by developers. Users can see the changes and improvements, but they don&#39;t need to download the updates themselves;


thanks to the Service Worker script, which is run in the background by the browser, and the caching strategy, it is possible to work offline;


PWA can be installed without the &quot;Play Market&quot; and App Store, and despite the prohibition to install applications from unknown sources. PWA and antivirus programs are loyal to PWA. At the same time, data is transmitted via HTTPS, so PWA is secure; 


PWA can be added to the App Store and Google Play, allowing the user to download the application from a familiar source.  




REMARK 
That&#39;s it. 
Thank you very much for your attention.*
<!--END_SECTION:feed-->
