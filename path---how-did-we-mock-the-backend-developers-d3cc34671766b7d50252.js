webpackJsonp([0xefe78c570cc84000],{"./node_modules/json-loader/index.js!./.cache/json/how-did-we-mock-the-backend-developers.json":function(e,t){e.exports={data:{markdownRemark:{ast:'{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"At M6Web we are currently working on a new version of a web site, with two separate teams: ","position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":2,"column":92,"offset":92},"indent":[]}}],"position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":2,"column":92,"offset":92},"indent":[]}},{"type":"list","ordered":false,"start":null,"loose":true,"children":[{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"the backend team providing data access through APIs;","position":{"start":{"line":3,"column":3,"offset":95},"end":{"line":3,"column":55,"offset":147},"indent":[]}}],"position":{"start":{"line":3,"column":3,"offset":95},"end":{"line":3,"column":55,"offset":147},"indent":[]}}],"position":{"start":{"line":3,"column":1,"offset":93},"end":{"line":3,"column":55,"offset":147},"indent":[]}},{"type":"listItem","loose":true,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"us, the frontend team, building an ","position":{"start":{"line":4,"column":3,"offset":150},"end":{"line":4,"column":38,"offset":185},"indent":[]}},{"type":"linkReference","identifier":"isomorphic","referenceType":"full","children":[{"type":"text","value":"isomorphic","position":{"start":{"line":4,"column":39,"offset":186},"end":{"line":4,"column":49,"offset":196},"indent":[]}}],"position":{"start":{"line":4,"column":38,"offset":185},"end":{"line":4,"column":62,"offset":209},"indent":[]}},{"type":"text","value":" SPA application using ","position":{"start":{"line":4,"column":62,"offset":209},"end":{"line":4,"column":85,"offset":232},"indent":[]}},{"type":"linkReference","identifier":"react-website","referenceType":"full","children":[{"type":"text","value":"React.JS","position":{"start":{"line":4,"column":86,"offset":233},"end":{"line":4,"column":94,"offset":241},"indent":[]}}],"position":{"start":{"line":4,"column":85,"offset":232},"end":{"line":4,"column":110,"offset":257},"indent":[]}},{"type":"text","value":" and the ","position":{"start":{"line":4,"column":110,"offset":257},"end":{"line":4,"column":119,"offset":266},"indent":[]}},{"type":"linkReference","identifier":"flux-website","referenceType":"full","children":[{"type":"text","value":"flux pattern","position":{"start":{"line":4,"column":120,"offset":267},"end":{"line":4,"column":132,"offset":279},"indent":[]}}],"position":{"start":{"line":4,"column":119,"offset":266},"end":{"line":4,"column":147,"offset":294},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":4,"column":147,"offset":294},"end":{"line":4,"column":148,"offset":295},"indent":[]}}],"position":{"start":{"line":4,"column":3,"offset":150},"end":{"line":4,"column":148,"offset":295},"indent":[]}}],"position":{"start":{"line":4,"column":1,"offset":148},"end":{"line":5,"column":3,"offset":298},"indent":[1]}}],"position":{"start":{"line":3,"column":1,"offset":93},"end":{"line":5,"column":3,"offset":298},"indent":[1,1]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"Develop the frontend before the APIs","position":{"start":{"line":6,"column":3,"offset":301},"end":{"line":6,"column":39,"offset":337},"indent":[]}}],"position":{"start":{"line":6,"column":1,"offset":299},"end":{"line":6,"column":39,"offset":337},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Both teams started the project at the same time, meaning that at the beginning, we didn\'t have the web services needed for our application. We looked for the best way to develop it without waiting for those web services to become available.","position":{"start":{"line":8,"column":1,"offset":339},"end":{"line":8,"column":241,"offset":579},"indent":[]}}],"position":{"start":{"line":8,"column":1,"offset":339},"end":{"line":8,"column":241,"offset":579},"indent":[]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"Interface","position":{"start":{"line":10,"column":3,"offset":585},"end":{"line":10,"column":12,"offset":594},"indent":[]}}],"position":{"start":{"line":10,"column":1,"offset":583},"end":{"line":10,"column":12,"offset":594},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Our technical choices for the SPA has been guided by a deep thinking about isomorphic applications. This approach, with React, Flux and their surrounding environment, was at the time, totally unknown. Our first important task was to build the foundations of the web site architecture, demonstrate the feasibility of the project and document everything.","position":{"start":{"line":12,"column":1,"offset":598},"end":{"line":12,"column":353,"offset":950},"indent":[]}}],"position":{"start":{"line":12,"column":1,"offset":598},"end":{"line":12,"column":353,"offset":950},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"This resulting delay allowed the backend team to specify the output of the API. Based on those informations, we wrote fixtures. The idea was to have data from a nonexistent web service.","position":{"start":{"line":14,"column":1,"offset":954},"end":{"line":14,"column":186,"offset":1139},"indent":[]}}],"position":{"start":{"line":14,"column":1,"offset":954},"end":{"line":14,"column":186,"offset":1139},"indent":[]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"Superagent and superagent-mock","position":{"start":{"line":16,"column":3,"offset":1145},"end":{"line":16,"column":33,"offset":1175},"indent":[]}}],"position":{"start":{"line":16,"column":1,"offset":1143},"end":{"line":16,"column":33,"offset":1175},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"To request the API we use the ","position":{"start":{"line":18,"column":1,"offset":1179},"end":{"line":18,"column":31,"offset":1209},"indent":[]}},{"type":"linkReference","identifier":"superagent","referenceType":"full","children":[{"type":"text","value":"superagent","position":{"start":{"line":18,"column":32,"offset":1210},"end":{"line":18,"column":42,"offset":1220},"indent":[]}}],"position":{"start":{"line":18,"column":31,"offset":1209},"end":{"line":18,"column":55,"offset":1233},"indent":[]}},{"type":"text","value":" library, an easily-extensible Javascript HTTP client. It is isomorphic, so it can be used both on server and client sides.","position":{"start":{"line":18,"column":55,"offset":1233},"end":{"line":18,"column":178,"offset":1356},"indent":[]}}],"position":{"start":{"line":18,"column":1,"offset":1179},"end":{"line":18,"column":178,"offset":1356},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Then we developed ","position":{"start":{"line":20,"column":1,"offset":1360},"end":{"line":20,"column":19,"offset":1378},"indent":[]}},{"type":"linkReference","identifier":"superagent-mock","referenceType":"full","children":[{"type":"text","value":"superagent-mock","position":{"start":{"line":20,"column":20,"offset":1379},"end":{"line":20,"column":35,"offset":1394},"indent":[]}}],"position":{"start":{"line":20,"column":19,"offset":1378},"end":{"line":20,"column":53,"offset":1412},"indent":[]}},{"type":"text","value":", a superagent plugin dedicated to simulate HTTP requests returning fixtures data.","position":{"start":{"line":20,"column":53,"offset":1412},"end":{"line":20,"column":135,"offset":1494},"indent":[]}}],"position":{"start":{"line":20,"column":1,"offset":1360},"end":{"line":20,"column":135,"offset":1494},"indent":[]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"Application","position":{"start":{"line":22,"column":3,"offset":1498},"end":{"line":22,"column":14,"offset":1509},"indent":[]}}],"position":{"start":{"line":22,"column":1,"offset":1496},"end":{"line":22,"column":14,"offset":1509},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Like superagent, superagent-mock can be installed via npm, and be used by server or client side libraries. First, you need to add the library in your ","position":{"start":{"line":24,"column":1,"offset":1513},"end":{"line":24,"column":151,"offset":1663},"indent":[]}},{"type":"inlineCode","value":"package.json","position":{"start":{"line":24,"column":151,"offset":1663},"end":{"line":24,"column":165,"offset":1677},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":24,"column":165,"offset":1677},"end":{"line":24,"column":166,"offset":1678},"indent":[]}}],"position":{"start":{"line":24,"column":1,"offset":1513},"end":{"line":24,"column":166,"offset":1678},"indent":[]}},{"type":"code","lang":"bash","value":"npm install superagent-mock --save-dev","position":{"start":{"line":26,"column":1,"offset":1682},"end":{"line":28,"column":6,"offset":1734},"indent":[1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Then, create the configuration file, where you will define which data will be mocked. Let\'s take for example a nonexistent API, the authors list on our technical blog: ","position":{"start":{"line":30,"column":1,"offset":1736},"end":{"line":30,"column":169,"offset":1904},"indent":[]}},{"type":"inlineCode","value":"http://tech.m6web.fr/api/authors","position":{"start":{"line":30,"column":169,"offset":1904},"end":{"line":30,"column":203,"offset":1938},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":30,"column":203,"offset":1938},"end":{"line":30,"column":204,"offset":1939},"indent":[]}}],"position":{"start":{"line":30,"column":1,"offset":1736},"end":{"line":30,"column":204,"offset":1939},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Here is the file structure we need: ","position":{"start":{"line":32,"column":1,"offset":1941},"end":{"line":32,"column":37,"offset":1977},"indent":[]}}],"position":{"start":{"line":32,"column":1,"offset":1941},"end":{"line":32,"column":37,"offset":1977},"indent":[]}},{"type":"code","lang":"javascript","value":"// ./config.js file\\nmodule.exports = [\\n  {\\n    pattern: \'http://tech.m6web.fr/api/authors\',\\n    fixtures: \'./authors.js\',\\n    callback: function (match, data) {\\n      return { body : data };\\n    }\\n];","position":{"start":{"line":34,"column":1,"offset":1979},"end":{"line":44,"column":4,"offset":2196},"indent":[1,1,1,1,1,1,1,1,1,1]}},{"type":"list","ordered":false,"start":null,"loose":false,"children":[{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"The ","position":{"start":{"line":46,"column":3,"offset":2200},"end":{"line":46,"column":7,"offset":2204},"indent":[]}},{"type":"inlineCode","value":"pattern","position":{"start":{"line":46,"column":7,"offset":2204},"end":{"line":46,"column":16,"offset":2213},"indent":[]}},{"type":"text","value":" attribute should be a regular expression, in case of a route containing variable parameters (ie: ","position":{"start":{"line":46,"column":16,"offset":2213},"end":{"line":46,"column":114,"offset":2311},"indent":[]}},{"type":"inlineCode","value":"https://tech.m6web.fr/api/authors/(\\\\\\\\d+)","position":{"start":{"line":46,"column":114,"offset":2311},"end":{"line":46,"column":156,"offset":2353},"indent":[]}},{"type":"text","value":").","position":{"start":{"line":46,"column":156,"offset":2353},"end":{"line":46,"column":158,"offset":2355},"indent":[]}}],"position":{"start":{"line":46,"column":3,"offset":2200},"end":{"line":46,"column":158,"offset":2355},"indent":[]}}],"position":{"start":{"line":46,"column":1,"offset":2198},"end":{"line":46,"column":158,"offset":2355},"indent":[]}},{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"The ","position":{"start":{"line":47,"column":3,"offset":2358},"end":{"line":47,"column":7,"offset":2362},"indent":[]}},{"type":"inlineCode","value":"fixtures","position":{"start":{"line":47,"column":7,"offset":2362},"end":{"line":47,"column":17,"offset":2372},"indent":[]}},{"type":"text","value":" attribute represents the link to a file or a callback.","position":{"start":{"line":47,"column":17,"offset":2372},"end":{"line":47,"column":72,"offset":2427},"indent":[]}}],"position":{"start":{"line":47,"column":3,"offset":2358},"end":{"line":47,"column":72,"offset":2427},"indent":[]}}],"position":{"start":{"line":47,"column":1,"offset":2356},"end":{"line":47,"column":72,"offset":2427},"indent":[]}},{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"The ","position":{"start":{"line":48,"column":3,"offset":2430},"end":{"line":48,"column":7,"offset":2434},"indent":[]}},{"type":"inlineCode","value":"callback","position":{"start":{"line":48,"column":7,"offset":2434},"end":{"line":48,"column":17,"offset":2444},"indent":[]}},{"type":"text","value":" attribute is a function with two arguments: ","position":{"start":{"line":48,"column":17,"offset":2444},"end":{"line":48,"column":62,"offset":2489},"indent":[]}},{"type":"inlineCode","value":"match","position":{"start":{"line":48,"column":62,"offset":2489},"end":{"line":48,"column":69,"offset":2496},"indent":[]}},{"type":"text","value":" is the result of the regular expression and ","position":{"start":{"line":48,"column":69,"offset":2496},"end":{"line":48,"column":114,"offset":2541},"indent":[]}},{"type":"inlineCode","value":"data","position":{"start":{"line":48,"column":114,"offset":2541},"end":{"line":48,"column":120,"offset":2547},"indent":[]}},{"type":"text","value":" the fixtures. ","position":{"start":{"line":48,"column":120,"offset":2547},"end":{"line":48,"column":135,"offset":2562},"indent":[]}},{"type":"inlineCode","value":"match","position":{"start":{"line":48,"column":135,"offset":2562},"end":{"line":48,"column":142,"offset":2569},"indent":[]}},{"type":"text","value":" allows to use some call parameters (ie: the author id) to return relevant data (ie: the author in the fixture).","position":{"start":{"line":48,"column":142,"offset":2569},"end":{"line":48,"column":254,"offset":2681},"indent":[]}}],"position":{"start":{"line":48,"column":3,"offset":2430},"end":{"line":48,"column":254,"offset":2681},"indent":[]}}],"position":{"start":{"line":48,"column":1,"offset":2428},"end":{"line":48,"column":254,"offset":2681},"indent":[]}}],"position":{"start":{"line":46,"column":1,"offset":2198},"end":{"line":48,"column":254,"offset":2681},"indent":[1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Next, you have to create the fixture file. This is a JS file exposing a function returning the mocked data.","position":{"start":{"line":50,"column":1,"offset":2683},"end":{"line":50,"column":108,"offset":2790},"indent":[]}}],"position":{"start":{"line":50,"column":1,"offset":2683},"end":{"line":50,"column":108,"offset":2790},"indent":[]}},{"type":"code","lang":"javascript","value":"// ./authors.js file\\nmodule.exports = function () {\\n  return [\\n    {\\n      id: 1,\\n      name: \\"John Doe\\",\\n      description: \\"unidentified person\\"\\n    },\\n    ...\\n  ];\\n};","position":{"start":{"line":52,"column":1,"offset":2792},"end":{"line":64,"column":4,"offset":2979},"indent":[1,1,1,1,1,1,1,1,1,1,1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Finally, at the top of the file called by node, you have to patch ","position":{"start":{"line":66,"column":1,"offset":2981},"end":{"line":66,"column":67,"offset":3047},"indent":[]}},{"type":"linkReference","identifier":"superagent","referenceType":"full","children":[{"type":"text","value":"superagent","position":{"start":{"line":66,"column":68,"offset":3048},"end":{"line":66,"column":78,"offset":3058},"indent":[]}}],"position":{"start":{"line":66,"column":67,"offset":3047},"end":{"line":66,"column":91,"offset":3071},"indent":[]}},{"type":"text","value":" with ","position":{"start":{"line":66,"column":91,"offset":3071},"end":{"line":66,"column":97,"offset":3077},"indent":[]}},{"type":"linkReference","identifier":"superagent-mock","referenceType":"full","children":[{"type":"text","value":"superagent-mock","position":{"start":{"line":66,"column":98,"offset":3078},"end":{"line":66,"column":113,"offset":3093},"indent":[]}}],"position":{"start":{"line":66,"column":97,"offset":3077},"end":{"line":66,"column":131,"offset":3111},"indent":[]}},{"type":"text","value":" this way: ","position":{"start":{"line":66,"column":131,"offset":3111},"end":{"line":66,"column":142,"offset":3122},"indent":[]}}],"position":{"start":{"line":66,"column":1,"offset":2981},"end":{"line":66,"column":142,"offset":3122},"indent":[]}},{"type":"code","lang":"javascript","value":"// ./server.js file\\nvar request = require(\'superagent\');\\nvar config = require(\'./config.js\');\\nrequire(\'superagent-mock\')(request, config);","position":{"start":{"line":68,"column":1,"offset":3124},"end":{"line":73,"column":4,"offset":3280},"indent":[1,1,1,1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Those few lines allow us to overload some superagent methods to apply the configuration of the mocked requests (check the ","position":{"start":{"line":75,"column":1,"offset":3282},"end":{"line":75,"column":123,"offset":3404},"indent":[]}},{"type":"linkReference","identifier":"superagent-mock-source","referenceType":"full","children":[{"type":"text","value":"source code","position":{"start":{"line":75,"column":124,"offset":3405},"end":{"line":75,"column":135,"offset":3416},"indent":[]}}],"position":{"start":{"line":75,"column":123,"offset":3404},"end":{"line":75,"column":160,"offset":3441},"indent":[]}},{"type":"text","value":").","position":{"start":{"line":75,"column":160,"offset":3441},"end":{"line":75,"column":162,"offset":3443},"indent":[]}}],"position":{"start":{"line":75,"column":1,"offset":3282},"end":{"line":75,"column":162,"offset":3443},"indent":[]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"What\'s next","position":{"start":{"line":77,"column":3,"offset":3447},"end":{"line":77,"column":14,"offset":3458},"indent":[]}}],"position":{"start":{"line":77,"column":1,"offset":3445},"end":{"line":77,"column":15,"offset":3459},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"With this tip, you can develop the frontend without access to any API. It\'s very useful in order to work locally on your computer, without the internet, or to make your functional tests independent of any third party.","position":{"start":{"line":79,"column":1,"offset":3461},"end":{"line":79,"column":218,"offset":3678},"indent":[]}}],"position":{"start":{"line":79,"column":1,"offset":3461},"end":{"line":79,"column":218,"offset":3678},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"However it gets tricky when you connect your application with the real API... and you realize that the interface was not respected. We often have to fix our code at this stage, but the changes are usually minor and time saved by the mock isn\'t questioned. The tedious part is still to maintain fixtures with the API evolution, especially necessary if it\'s used with functional tests.","position":{"start":{"line":81,"column":1,"offset":3680},"end":{"line":81,"column":384,"offset":4063},"indent":[]}}],"position":{"start":{"line":81,"column":1,"offset":3680},"end":{"line":81,"column":384,"offset":4063},"indent":[]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"Even more!","position":{"start":{"line":83,"column":3,"offset":4067},"end":{"line":83,"column":13,"offset":4077},"indent":[]}}],"position":{"start":{"line":83,"column":1,"offset":4065},"end":{"line":83,"column":13,"offset":4077},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Our app build itself the URLs of images retrieved via the API: it provides us an id and we guess the final URL through a configuration setting. This isn\'t REST compliant but we have good reasons to do this. The URL generation uses the library ","position":{"start":{"line":85,"column":1,"offset":4079},"end":{"line":85,"column":244,"offset":4322},"indent":[]}},{"type":"linkReference","identifier":"sprintf-js","referenceType":"full","children":[{"type":"text","value":"sprintf-js","position":{"start":{"line":85,"column":245,"offset":4323},"end":{"line":85,"column":255,"offset":4333},"indent":[]}}],"position":{"start":{"line":85,"column":244,"offset":4322},"end":{"line":85,"column":268,"offset":4346},"indent":[]}},{"type":"text","value":". To have a completely independent application of any external request, we also had to mock these calls to local images. With this in mind, we have developed ","position":{"start":{"line":85,"column":268,"offset":4346},"end":{"line":85,"column":426,"offset":4504},"indent":[]}},{"type":"linkReference","identifier":"sprintf-mock","referenceType":"full","children":[{"type":"text","value":"sprintf-mock","position":{"start":{"line":85,"column":427,"offset":4505},"end":{"line":85,"column":439,"offset":4517},"indent":[]}}],"position":{"start":{"line":85,"column":426,"offset":4504},"end":{"line":85,"column":454,"offset":4532},"indent":[]}},{"type":"text","value":" whose operating mode is curiously similar to that of superagent-mock.","position":{"start":{"line":85,"column":454,"offset":4532},"end":{"line":85,"column":524,"offset":4602},"indent":[]}}],"position":{"start":{"line":85,"column":1,"offset":4079},"end":{"line":85,"column":524,"offset":4602},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Projects ","position":{"start":{"line":87,"column":1,"offset":4604},"end":{"line":87,"column":10,"offset":4613},"indent":[]}},{"type":"linkReference","identifier":"superagent-mock","referenceType":"full","children":[{"type":"text","value":"superagent-mock","position":{"start":{"line":87,"column":11,"offset":4614},"end":{"line":87,"column":26,"offset":4629},"indent":[]}}],"position":{"start":{"line":87,"column":10,"offset":4613},"end":{"line":87,"column":44,"offset":4647},"indent":[]}},{"type":"text","value":" and ","position":{"start":{"line":87,"column":44,"offset":4647},"end":{"line":87,"column":49,"offset":4652},"indent":[]}},{"type":"linkReference","identifier":"sprintf-mock","referenceType":"full","children":[{"type":"text","value":"sprintf-mock","position":{"start":{"line":87,"column":50,"offset":4653},"end":{"line":87,"column":62,"offset":4665},"indent":[]}}],"position":{"start":{"line":87,"column":49,"offset":4652},"end":{"line":87,"column":77,"offset":4680},"indent":[]}},{"type":"text","value":" are open source. Very easy to use, they allow us to parallelize our developments with the backend team and to make our functional tests autonomous. So don\'t wait API completion to start your frontend developments!","position":{"start":{"line":87,"column":77,"offset":4680},"end":{"line":87,"column":291,"offset":4894},"indent":[]}}],"position":{"start":{"line":87,"column":1,"offset":4604},"end":{"line":87,"column":291,"offset":4894},"indent":[]}},{"type":"definition","identifier":"react-website","title":null,"url":"http://facebook.github.io/react/","position":{"start":{"line":89,"column":1,"offset":4896},"end":{"line":89,"column":50,"offset":4945},"indent":[]}},{"type":"definition","identifier":"flux-website","title":null,"url":"https://facebook.github.io/flux/","position":{"start":{"line":90,"column":1,"offset":4946},"end":{"line":90,"column":49,"offset":4994},"indent":[]}},{"type":"definition","identifier":"isomorphic","title":null,"url":"http://isomorphic.net/javascript","position":{"start":{"line":91,"column":1,"offset":4995},"end":{"line":91,"column":47,"offset":5041},"indent":[]}},{"type":"definition","identifier":"superagent","title":null,"url":"http://visionmedia.github.io/superagent/","position":{"start":{"line":92,"column":1,"offset":5042},"end":{"line":92,"column":55,"offset":5096},"indent":[]}},{"type":"definition","identifier":"webpack","title":null,"url":"http://webpack.github.io/","position":{"start":{"line":93,"column":1,"offset":5097},"end":{"line":93,"column":37,"offset":5133},"indent":[]}},{"type":"definition","identifier":"browserify","title":null,"url":"http://browserify.org/","position":{"start":{"line":94,"column":1,"offset":5134},"end":{"line":94,"column":37,"offset":5170},"indent":[]}},{"type":"definition","identifier":"superagent-mock","title":null,"url":"https://github.com/M6Web/superagent-mock","position":{"start":{"line":95,"column":1,"offset":5171},"end":{"line":95,"column":60,"offset":5230},"indent":[]}},{"type":"definition","identifier":"superagent-mock-source","title":null,"url":"https://github.com/M6Web/superagent-mock/blob/master/superagent-mock.js","position":{"start":{"line":96,"column":1,"offset":5231},"end":{"line":96,"column":98,"offset":5328},"indent":[]}},{"type":"definition","identifier":"sprintf-js","title":null,"url":"https://github.com/alexei/sprintf.js","position":{"start":{"line":97,"column":1,"offset":5329},"end":{"line":97,"column":51,"offset":5379},"indent":[]}},{"type":"definition","identifier":"sprintf-mock","title":null,"url":"https://github.com/M6Web/sprintf-mock","position":{"start":{"line":98,"column":1,"offset":5380},"end":{"line":98,"column":54,"offset":5433},"indent":[]}},{"type":"definition","identifier":"kenny-isomorphic-post","title":null,"url":"http://tech.m6web.fr/isomorphic-single-page-app-parfaite-react-flux/","position":{"start":{"line":99,"column":1,"offset":5434},"end":{"line":99,"column":94,"offset":5527},"indent":[]}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":100,"column":1,"offset":5528}}}',frontmatter:{date:"March 29, 2015",path:"/how-did-we-mock-the-backend-developers",title:"How did we mock the backend developers?",image:{childImageSharp:{resize:{src:"/static/dac860640c7f2b3b7e440186503eb283-338bd.jpg"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---how-did-we-mock-the-backend-developers-d3cc34671766b7d50252.js.map