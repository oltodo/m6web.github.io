webpackJsonp([0x6057edf4b91ec000],{"./node_modules/json-loader/index.js!./.cache/json/2017-05-17-spa-mode-isomorphism-js.json":function(e,t){e.exports={data:{markdownRemark:{ast:'{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"For more than a year and a half, we use ","position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":2,"column":41,"offset":41},"indent":[]}},{"type":"link","title":null,"url":"https://nodejs.org/en/","children":[{"type":"text","value":"Node.js","position":{"start":{"line":2,"column":42,"offset":42},"end":{"line":2,"column":49,"offset":49},"indent":[]}}],"position":{"start":{"line":2,"column":41,"offset":41},"end":{"line":2,"column":74,"offset":74},"indent":[]}},{"type":"text","value":" and ","position":{"start":{"line":2,"column":74,"offset":74},"end":{"line":2,"column":79,"offset":79},"indent":[]}},{"type":"link","title":null,"url":"https://facebook.github.io/react/","children":[{"type":"text","value":"React","position":{"start":{"line":2,"column":80,"offset":80},"end":{"line":2,"column":85,"offset":85},"indent":[]}}],"position":{"start":{"line":2,"column":79,"offset":79},"end":{"line":2,"column":121,"offset":121},"indent":[]}},{"type":"text","value":" together to make the best app possible for our users. These 2 technologies are complementary to write only once code executed on the server and the client side: that’s the isomorphic way! This approach helped us to develop a reliable app with ","position":{"start":{"line":2,"column":121,"offset":121},"end":{"line":2,"column":365,"offset":365},"indent":[]}},{"type":"link","title":null,"url":"/isomorphic-single-page-app-parfaite-react-flux/","children":[{"type":"text","value":"a fast first render and SEO friendly","position":{"start":{"line":2,"column":366,"offset":366},"end":{"line":2,"column":402,"offset":402},"indent":[]}}],"position":{"start":{"line":2,"column":365,"offset":365},"end":{"line":2,"column":453,"offset":453},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":2,"column":453,"offset":453},"end":{"line":2,"column":454,"offset":454},"indent":[]}}],"position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":2,"column":454,"offset":454},"indent":[]}},{"type":"heading","depth":2,"children":[{"type":"text","value":"SSR caching","position":{"start":{"line":4,"column":4,"offset":459},"end":{"line":4,"column":15,"offset":470},"indent":[]}}],"position":{"start":{"line":4,"column":1,"offset":456},"end":{"line":4,"column":15,"offset":470},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Here is the architecture we use for the 6play web app.","position":{"start":{"line":6,"column":1,"offset":472},"end":{"line":6,"column":55,"offset":526},"indent":[]}}],"position":{"start":{"line":6,"column":1,"offset":472},"end":{"line":6,"column":55,"offset":526},"indent":[]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"/static/1c51fdfd11ce7ce22e9d69aeaab04858-ba33c.png","alt":"6play server architecture","position":{"start":{"line":8,"column":1,"offset":528},"end":{"line":8,"column":42,"offset":569},"indent":[]}}],"position":{"start":{"line":8,"column":1,"offset":528},"end":{"line":8,"column":42,"offset":569},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"You can see that Node.js server responses are cached with ","position":{"start":{"line":10,"column":1,"offset":571},"end":{"line":10,"column":59,"offset":629},"indent":[]}},{"type":"link","title":null,"url":"https://varnish-cache.org/","children":[{"type":"text","value":"Varnish","position":{"start":{"line":10,"column":60,"offset":630},"end":{"line":10,"column":67,"offset":637},"indent":[]}}],"position":{"start":{"line":10,"column":59,"offset":629},"end":{"line":10,"column":96,"offset":666},"indent":[]}},{"type":"text","value":". Indeed, React is not efficient with server side rendering because it just has not been designed for that. The React ","position":{"start":{"line":10,"column":96,"offset":666},"end":{"line":10,"column":214,"offset":784},"indent":[]}},{"type":"inlineCode","value":"renderToString","position":{"start":{"line":10,"column":214,"offset":784},"end":{"line":10,"column":230,"offset":800},"indent":[]}},{"type":"text","value":" method blocks the event loop. Consequently the server can not process an acceptable responses rate for a service like 6play that can reach a lot of requests per second without cache. Particularly when the European Football Championship final bring together France and Portugal and is live or when the last episode of « Les Marseillais », one of the teenagers favorite programs, has just been released on the platform. So caching server responses, with a quite low caching time, is required for our application health!","position":{"start":{"line":10,"column":230,"offset":800},"end":{"line":10,"column":748,"offset":1318},"indent":[]}}],"position":{"start":{"line":10,"column":1,"offset":571},"end":{"line":10,"column":748,"offset":1318},"indent":[]}},{"type":"heading","depth":2,"children":[{"type":"text","value":"SPA mode","position":{"start":{"line":12,"column":4,"offset":1323},"end":{"line":12,"column":12,"offset":1331},"indent":[]}}],"position":{"start":{"line":12,"column":1,"offset":1320},"end":{"line":12,"column":12,"offset":1331},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Isomorphism enables search engines to parse our website without executing any line of JavaScript, only using the server side rendering. We thought that the opposite could be useful too. Imagine our Node servers are down, for various reasons. Our Varnish servers continue to deliver the application pages but only during the cache time. After, the user would get an error… or not!","position":{"start":{"line":14,"column":1,"offset":1333},"end":{"line":14,"column":380,"offset":1712},"indent":[]}}],"position":{"start":{"line":14,"column":1,"offset":1333},"end":{"line":14,"column":380,"offset":1712},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"In this case, we would switch to a ","position":{"start":{"line":16,"column":1,"offset":1714},"end":{"line":16,"column":36,"offset":1749},"indent":[]}},{"type":"link","title":null,"url":"https://nginx.org/en/","children":[{"type":"text","value":"Nginx","position":{"start":{"line":16,"column":37,"offset":1750},"end":{"line":16,"column":42,"offset":1755},"indent":[]}}],"position":{"start":{"line":16,"column":36,"offset":1749},"end":{"line":16,"column":66,"offset":1779},"indent":[]}},{"type":"text","value":" server that simply delivers a blank page with the client JavaScript code. The server was responsible for the app state initialization before, the user browser has to do so now. Then it can render the page: our application becomes a simple SPA. And this is almost imperceptible for the user, the first render is just a little longer. This way secures the availability of our service.","position":{"start":{"line":16,"column":66,"offset":1779},"end":{"line":16,"column":449,"offset":2162},"indent":[]}}],"position":{"start":{"line":16,"column":1,"offset":1714},"end":{"line":16,"column":449,"offset":2162},"indent":[]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"/static/641fa7817f6ecfaaaf6f677c1a65d317-daad3.png","alt":"SPA mode","position":{"start":{"line":18,"column":1,"offset":2164},"end":{"line":18,"column":28,"offset":2191},"indent":[]}}],"position":{"start":{"line":18,"column":1,"offset":2164},"end":{"line":18,"column":28,"offset":2191},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"The Varnish servers check the status of the Node ones via a specific route. When every instance is down, they route all requests to a static HTML file on the Nginx server.","position":{"start":{"line":20,"column":1,"offset":2193},"end":{"line":20,"column":172,"offset":2364},"indent":[]}}],"position":{"start":{"line":20,"column":1,"offset":2193},"end":{"line":20,"column":172,"offset":2364},"indent":[]}},{"type":"heading","depth":2,"children":[{"type":"text","value":"Really useful ?","position":{"start":{"line":22,"column":4,"offset":2369},"end":{"line":22,"column":19,"offset":2384},"indent":[]}}],"position":{"start":{"line":22,"column":1,"offset":2366},"end":{"line":22,"column":19,"offset":2384},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Yes! It is not used until it is! A few months ago we went through a memory leak. Consequences? After some time, we saw an increase in CPU usage, then the servers fell down and SPA mode was enabled. We didn’t notice the memory leak immediately because we often deploy new versions of our app and it resets the memory. When we detected the problem, it was too late to rollback because the incriminated version was probably weeks or months old.","position":{"start":{"line":24,"column":1,"offset":2388},"end":{"line":24,"column":442,"offset":2829},"indent":[]}}],"position":{"start":{"line":24,"column":1,"offset":2388},"end":{"line":24,"column":442,"offset":2829},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"You certainly know how difficult it is to find the code responsible for a memory leak in Node.js. It is often not a matter of hours but of days or weeks. With our SPA mode, we could debug our code with serenity. When the Node servers were down, the SPA mode took the reins. Then we simply restart the server to restore the nominal state when we were alerted (sometimes immediately, sometimes several hours after because it happened in the night). This situation went on some weeks. And we finally fixed the memory leak. No user has been affected. For us, this SPA mode is a significant safety for the high availability of our app.","position":{"start":{"line":26,"column":1,"offset":2831},"end":{"line":26,"column":631,"offset":3461},"indent":[]}}],"position":{"start":{"line":26,"column":1,"offset":2831},"end":{"line":26,"column":631,"offset":3461},"indent":[]}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":27,"column":1,"offset":3462}}}',frontmatter:{date:"May 16, 2017",path:"/2017-05-17-spa-mode-isomorphism-js",title:"Last night isomorphic JS saved our life!",image:{childImageSharp:{resize:{src:"/static/1baa131d99a65e28f3901ad7f7dd5c7d-338bd.jpg"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---2017-05-17-spa-mode-isomorphism-js-57b972bb0426a1f80e21.js.map