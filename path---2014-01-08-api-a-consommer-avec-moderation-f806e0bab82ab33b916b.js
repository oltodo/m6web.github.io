webpackJsonp([0xbdf91f5dfdd6c800],{"./node_modules/json-loader/index.js!./.cache/json/2014-01-08-api-a-consommer-avec-moderation.json":function(e,n){e.exports={data:{markdownRemark:{ast:'{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Après avoir travaillé pendant plusieurs mois sur la création et les ","position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":2,"column":69,"offset":69},"indent":[]}},{"type":"link","title":null,"url":"http://tech.m6web.fr/redismock-qui-a-bouchonne-mon-redis.html","children":[{"type":"text","value":"tests","position":{"start":{"line":2,"column":70,"offset":70},"end":{"line":2,"column":75,"offset":75},"indent":[]}}],"position":{"start":{"line":2,"column":69,"offset":69},"end":{"line":2,"column":139,"offset":139},"indent":[]}},{"type":"text","value":" de nos API avec Symfony, le moment de leur publication est enfin arrivé !","position":{"start":{"line":2,"column":139,"offset":139},"end":{"line":2,"column":213,"offset":213},"indent":[]}}],"position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":2,"column":213,"offset":213},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Or, les clients de nos API sont multiples : il peut s\'agir d\'applications mobiles, de sites web mais aussi d’un ","position":{"start":{"line":4,"column":1,"offset":215},"end":{"line":4,"column":113,"offset":327},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"back office","position":{"start":{"line":4,"column":114,"offset":328},"end":{"line":4,"column":125,"offset":339},"indent":[]}}],"position":{"start":{"line":4,"column":113,"offset":327},"end":{"line":4,"column":126,"offset":340},"indent":[]}},{"type":"text","value":" interne. Chacun de ces clients peut nécessiter des “vues” différentes de l’API.","position":{"start":{"line":4,"column":126,"offset":340},"end":{"line":4,"column":206,"offset":420},"indent":[]}}],"position":{"start":{"line":4,"column":1,"offset":215},"end":{"line":4,"column":206,"offset":420},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Effectivement, alors que le BO devra pouvoir accéder à la totalité des ressources disponibles, l\'application mobile ne devra avoir accès qu’aux ressources publiées. De la même manière, la gestion du cache ainsi que la disponibilité des routes doit pouvoir s’adapter facilement aux clients qui consomment l’API.","position":{"start":{"line":6,"column":1,"offset":422},"end":{"line":6,"column":311,"offset":732},"indent":[]}}],"position":{"start":{"line":6,"column":1,"offset":422},"end":{"line":6,"column":311,"offset":732},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Nous avons opté pour l’utilisation d’un sous-domaine par client afin de l’identifier et ainsi de lui appliquer des configurations particulières. Ex :","position":{"start":{"line":8,"column":1,"offset":734},"end":{"line":8,"column":150,"offset":883},"indent":[]}}],"position":{"start":{"line":8,"column":1,"offset":734},"end":{"line":8,"column":150,"offset":883},"indent":[]}},{"type":"list","ordered":false,"start":null,"loose":false,"children":[{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"link","title":null,"url":"http://bo.api.monservice.fr","children":[{"type":"text","value":"http://bo.api.monservice.fr","position":{"start":{"line":10,"column":3,"offset":887},"end":{"line":10,"column":30,"offset":914},"indent":[]}}],"position":{"start":{"line":10,"column":3,"offset":887},"end":{"line":10,"column":30,"offset":914},"indent":[]}},{"type":"text","value":" pour le BO,","position":{"start":{"line":10,"column":30,"offset":914},"end":{"line":10,"column":42,"offset":926},"indent":[]}}],"position":{"start":{"line":10,"column":3,"offset":887},"end":{"line":10,"column":42,"offset":926},"indent":[]}}],"position":{"start":{"line":10,"column":1,"offset":885},"end":{"line":10,"column":42,"offset":926},"indent":[]}},{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"link","title":null,"url":"http://mobile.api.monservice.fr","children":[{"type":"text","value":"http://mobile.api.monservice.fr","position":{"start":{"line":11,"column":3,"offset":929},"end":{"line":11,"column":34,"offset":960},"indent":[]}}],"position":{"start":{"line":11,"column":3,"offset":929},"end":{"line":11,"column":34,"offset":960},"indent":[]}},{"type":"text","value":" pour l\'application mobile.","position":{"start":{"line":11,"column":34,"offset":960},"end":{"line":11,"column":61,"offset":987},"indent":[]}}],"position":{"start":{"line":11,"column":3,"offset":929},"end":{"line":11,"column":61,"offset":987},"indent":[]}}],"position":{"start":{"line":11,"column":1,"offset":927},"end":{"line":11,"column":61,"offset":987},"indent":[]}}],"position":{"start":{"line":10,"column":1,"offset":885},"end":{"line":11,"column":61,"offset":987},"indent":[1]}},{"type":"heading","depth":4,"children":[{"type":"text","value":" Authentification","position":{"start":{"line":14,"column":5,"offset":994},"end":{"line":14,"column":22,"offset":1011},"indent":[]}}],"position":{"start":{"line":14,"column":1,"offset":990},"end":{"line":14,"column":22,"offset":1011},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Nous utilisons le ","position":{"start":{"line":16,"column":1,"offset":1013},"end":{"line":16,"column":19,"offset":1031},"indent":[]}},{"type":"link","title":null,"url":"http://symfony.com/doc/current/components/security/introduction.html","children":[{"type":"text","value":"composant sécurité","position":{"start":{"line":16,"column":20,"offset":1032},"end":{"line":16,"column":38,"offset":1050},"indent":[]}}],"position":{"start":{"line":16,"column":19,"offset":1031},"end":{"line":16,"column":109,"offset":1121},"indent":[]}},{"type":"text","value":" de Symfony, qui permet de créer un utilisateur authentifié à la volée et de charger la configuration spécifique à celui-ci.","position":{"start":{"line":16,"column":109,"offset":1121},"end":{"line":16,"column":233,"offset":1245},"indent":[]}}],"position":{"start":{"line":16,"column":1,"offset":1013},"end":{"line":16,"column":233,"offset":1245},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Nous avons tout d’abord besoin de créer une classe ","position":{"start":{"line":18,"column":1,"offset":1247},"end":{"line":18,"column":52,"offset":1298},"indent":[]}},{"type":"inlineCode","value":"User","position":{"start":{"line":18,"column":52,"offset":1298},"end":{"line":18,"column":58,"offset":1304},"indent":[]}},{"type":"text","value":" implémentant ","position":{"start":{"line":18,"column":58,"offset":1304},"end":{"line":18,"column":72,"offset":1318},"indent":[]}},{"type":"inlineCode","value":"Symfony\\\\Component\\\\Security\\\\Core\\\\User\\\\UserInterface","position":{"start":{"line":18,"column":72,"offset":1318},"end":{"line":18,"column":124,"offset":1370},"indent":[]}},{"type":"text","value":", et contenant les informations de configuration spécifique.","position":{"start":{"line":18,"column":124,"offset":1370},"end":{"line":18,"column":184,"offset":1430},"indent":[]}}],"position":{"start":{"line":18,"column":1,"offset":1247},"end":{"line":18,"column":184,"offset":1430},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Les différents ","position":{"start":{"line":20,"column":1,"offset":1432},"end":{"line":20,"column":16,"offset":1447},"indent":[]}},{"type":"inlineCode","value":"Users","position":{"start":{"line":20,"column":16,"offset":1447},"end":{"line":20,"column":23,"offset":1454},"indent":[]}},{"type":"text","value":" sont ensuite créés à l’aide d’un fournisseur d\'utilisateurs implémentant ","position":{"start":{"line":20,"column":23,"offset":1454},"end":{"line":20,"column":97,"offset":1528},"indent":[]}},{"type":"inlineCode","value":"Symfony\\\\Component\\\\Security\\\\Core\\\\User\\\\UserProviderInterface","position":{"start":{"line":20,"column":97,"offset":1528},"end":{"line":20,"column":157,"offset":1588},"indent":[]}},{"type":"text","value":".\\nDans notre cas, chaque utilisateur possède son propre fichier de configuration yml. Le fournisseur d’utilisateur vérifie donc que l’utilisateur demandé possède un fichier de configuration et instancie un objet ","position":{"start":{"line":20,"column":157,"offset":1588},"end":{"line":21,"column":211,"offset":1800},"indent":[1]}},{"type":"inlineCode","value":"User","position":{"start":{"line":21,"column":211,"offset":1800},"end":{"line":21,"column":217,"offset":1806},"indent":[]}},{"type":"text","value":" avec cette configuration. Ce UserProvider est défini comme service dans notre bundle et configuré dans ","position":{"start":{"line":21,"column":217,"offset":1806},"end":{"line":21,"column":321,"offset":1910},"indent":[]}},{"type":"inlineCode","value":"security.yml","position":{"start":{"line":21,"column":321,"offset":1910},"end":{"line":21,"column":335,"offset":1924},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":21,"column":335,"offset":1924},"end":{"line":21,"column":336,"offset":1925},"indent":[]}}],"position":{"start":{"line":20,"column":1,"offset":1432},"end":{"line":21,"column":336,"offset":1925},"indent":[1]}},{"type":"paragraph","children":[{"type":"text","value":"Il faut ensuite créer notre propre fournisseur d’authentification pour avoir une authentification par nom de domaine. Pour cela nous avons suivi et adapté le ","position":{"start":{"line":23,"column":1,"offset":1927},"end":{"line":23,"column":159,"offset":2085},"indent":[]}},{"type":"link","title":null,"url":"http://symfony.com/doc/current/cookbook/security/custom_authentication_provider.html","children":[{"type":"text","value":"cookbook de Symfony","position":{"start":{"line":23,"column":160,"offset":2086},"end":{"line":23,"column":179,"offset":2105},"indent":[]}}],"position":{"start":{"line":23,"column":159,"offset":2085},"end":{"line":23,"column":266,"offset":2192},"indent":[]}},{"type":"text","value":". Cette authentification s’articule autour de 2 classes : un FirewallListener et un AuthenticationProvider. Pour que notre FirewallListener puisse facilement récupérer le client associé, nous avons ajouté un paramètre au routing Symfony :","position":{"start":{"line":23,"column":266,"offset":2192},"end":{"line":23,"column":504,"offset":2430},"indent":[]}}],"position":{"start":{"line":23,"column":1,"offset":1927},"end":{"line":23,"column":504,"offset":2430},"indent":[]}},{"type":"code","lang":"yaml","value":"host: {client}.api.monservice.fr","position":{"start":{"line":25,"column":1,"offset":2432},"end":{"line":27,"column":4,"offset":2476},"indent":[1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Le FirewallListener utilise donc ce paramètre du routing comme nom d’utilisateur et le transmet à notre AuthenticationProvider. Celui-ci récupère le ","position":{"start":{"line":29,"column":1,"offset":2478},"end":{"line":29,"column":150,"offset":2627},"indent":[]}},{"type":"inlineCode","value":"User","position":{"start":{"line":29,"column":150,"offset":2627},"end":{"line":29,"column":156,"offset":2633},"indent":[]}},{"type":"text","value":" grâce au ","position":{"start":{"line":29,"column":156,"offset":2633},"end":{"line":29,"column":166,"offset":2643},"indent":[]}},{"type":"inlineCode","value":"UserProvider","position":{"start":{"line":29,"column":166,"offset":2643},"end":{"line":29,"column":180,"offset":2657},"indent":[]}},{"type":"text","value":" et profite de cette phase pour vérifier que l’adresse IP du client est bien autorisée dans sa configuration grâce au ","position":{"start":{"line":29,"column":180,"offset":2657},"end":{"line":29,"column":298,"offset":2775},"indent":[]}},{"type":"link","title":null,"url":"https://github.com/M6Web/FirewallBundle","children":[{"type":"text","value":"FirewallBundle","position":{"start":{"line":29,"column":299,"offset":2776},"end":{"line":29,"column":313,"offset":2790},"indent":[]}}],"position":{"start":{"line":29,"column":298,"offset":2775},"end":{"line":29,"column":355,"offset":2832},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":29,"column":355,"offset":2832},"end":{"line":29,"column":356,"offset":2833},"indent":[]}}],"position":{"start":{"line":29,"column":1,"offset":2478},"end":{"line":29,"column":356,"offset":2833},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Effectivement, nous avons ajouté un filtrage initial (mais optionnel) sur les IPs pour chaque client, dans le fichiers ","position":{"start":{"line":31,"column":1,"offset":2835},"end":{"line":31,"column":120,"offset":2954},"indent":[]}},{"type":"inlineCode","value":"app/config/users/{username}.yml","position":{"start":{"line":31,"column":120,"offset":2954},"end":{"line":31,"column":153,"offset":2987},"indent":[]}},{"type":"text","value":" :","position":{"start":{"line":31,"column":153,"offset":2987},"end":{"line":31,"column":155,"offset":2989},"indent":[]}}],"position":{"start":{"line":31,"column":1,"offset":2835},"end":{"line":31,"column":155,"offset":2989},"indent":[]}},{"type":"code","lang":"yaml","value":"firewall:\\n    user_access:\\n        default_state: false\\n        lists:\\n            m6_prod: true\\n            m6_preprod: true\\n            m6_dev: true\\n            m6_lan: true\\n            m6_local: true\\n            m6_public: true","position":{"start":{"line":33,"column":1,"offset":2991},"end":{"line":44,"column":4,"offset":3233},"indent":[1,1,1,1,1,1,1,1,1,1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Pour plus de précisions, voir la ","position":{"start":{"line":46,"column":1,"offset":3235},"end":{"line":46,"column":34,"offset":3268},"indent":[]}},{"type":"link","title":null,"url":"https://github.com/M6Web/FirewallBundle#firewall-bundle-","children":[{"type":"text","value":"documentation du FirewallBundle","position":{"start":{"line":46,"column":35,"offset":3269},"end":{"line":46,"column":66,"offset":3300},"indent":[]}}],"position":{"start":{"line":46,"column":34,"offset":3268},"end":{"line":46,"column":125,"offset":3359},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":46,"column":125,"offset":3359},"end":{"line":46,"column":126,"offset":3360},"indent":[]}}],"position":{"start":{"line":46,"column":1,"offset":3235},"end":{"line":46,"column":126,"offset":3360},"indent":[]}},{"type":"heading","depth":4,"children":[{"type":"text","value":"Autorisation","position":{"start":{"line":48,"column":6,"offset":3367},"end":{"line":48,"column":18,"offset":3379},"indent":[]}}],"position":{"start":{"line":48,"column":1,"offset":3362},"end":{"line":48,"column":18,"offset":3379},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Pour gérer les autorisations d’accès des utilisateurs aux différentes routes, nous avons créé un EventListener qui écoute ","position":{"start":{"line":50,"column":1,"offset":3381},"end":{"line":50,"column":123,"offset":3503},"indent":[]}},{"type":"inlineCode","value":"kernel.request","position":{"start":{"line":50,"column":123,"offset":3503},"end":{"line":50,"column":139,"offset":3519},"indent":[]}},{"type":"text","value":" et qui décide de laisser passer la requête ou non en fonction de la configuration de l’utilisateur.","position":{"start":{"line":50,"column":139,"offset":3519},"end":{"line":50,"column":239,"offset":3619},"indent":[]}}],"position":{"start":{"line":50,"column":1,"offset":3381},"end":{"line":50,"column":239,"offset":3619},"indent":[]}},{"type":"code","lang":"yaml","value":"allow:\\n    default: true\\n    methods:\\n        delete: false\\n    resources:\\n        exam: false\\n    routes:\\n        get_articles: false","position":{"start":{"line":52,"column":1,"offset":3621},"end":{"line":61,"column":4,"offset":3767},"indent":[1,1,1,1,1,1,1,1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Dans cet exemple, l’utilisateur a accès par défaut à toutes les routes sauf les méthodes ","position":{"start":{"line":63,"column":1,"offset":3769},"end":{"line":63,"column":90,"offset":3858},"indent":[]}},{"type":"inlineCode","value":"DELETE","position":{"start":{"line":63,"column":90,"offset":3858},"end":{"line":63,"column":98,"offset":3866},"indent":[]}},{"type":"text","value":", les routes concernant les ","position":{"start":{"line":63,"column":98,"offset":3866},"end":{"line":63,"column":126,"offset":3894},"indent":[]}},{"type":"inlineCode","value":"exams","position":{"start":{"line":63,"column":126,"offset":3894},"end":{"line":63,"column":133,"offset":3901},"indent":[]}},{"type":"text","value":" et la route spécifique ","position":{"start":{"line":63,"column":133,"offset":3901},"end":{"line":63,"column":157,"offset":3925},"indent":[]}},{"type":"inlineCode","value":"get_articles","position":{"start":{"line":63,"column":157,"offset":3925},"end":{"line":63,"column":171,"offset":3939},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":63,"column":171,"offset":3939},"end":{"line":63,"column":172,"offset":3940},"indent":[]}}],"position":{"start":{"line":63,"column":1,"offset":3769},"end":{"line":63,"column":172,"offset":3940},"indent":[]}},{"type":"heading","depth":4,"children":[{"type":"text","value":" Durée de cache","position":{"start":{"line":65,"column":5,"offset":3946},"end":{"line":65,"column":20,"offset":3961},"indent":[]}}],"position":{"start":{"line":65,"column":1,"offset":3942},"end":{"line":65,"column":20,"offset":3961},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Les temps de cache sont différents en fonction de l’utilisation des données. Les données du backoffice ne seront pas cachées, tandis que les données de l’application mobile auront un temps de cache de 300s.\\nNous avons là-aussi créé un EventListener qui écoute cette fois ","position":{"start":{"line":67,"column":1,"offset":3963},"end":{"line":68,"column":65,"offset":4234},"indent":[1]}},{"type":"inlineCode","value":"kernel.response","position":{"start":{"line":68,"column":65,"offset":4234},"end":{"line":68,"column":82,"offset":4251},"indent":[]}},{"type":"text","value":" et qui modifie les headers de cache de la réponse en fonction de la configuration utilisateur qui peut contenir une durée par défaut de cache et des durées de cache par route.","position":{"start":{"line":68,"column":82,"offset":4251},"end":{"line":68,"column":258,"offset":4427},"indent":[]}}],"position":{"start":{"line":67,"column":1,"offset":3963},"end":{"line":68,"column":258,"offset":4427},"indent":[1]}},{"type":"heading","depth":4,"children":[{"type":"text","value":"Filtrage automatique avec Doctrine","position":{"start":{"line":70,"column":6,"offset":4434},"end":{"line":70,"column":40,"offset":4468},"indent":[]}}],"position":{"start":{"line":70,"column":1,"offset":4429},"end":{"line":70,"column":40,"offset":4468},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Nous pouvons offrir une \\"vue\\" différente de nos données à chaque client en définissant des critères de filtrage pour Doctrine (ex: date de publication, ressource activée, etc.) dans les fichiers de configuration des clients :","position":{"start":{"line":72,"column":1,"offset":4470},"end":{"line":72,"column":226,"offset":4695},"indent":[]}}],"position":{"start":{"line":72,"column":1,"offset":4470},"end":{"line":72,"column":226,"offset":4695},"indent":[]}},{"type":"code","lang":"yaml","value":"entities:\\n    article:\\n        active: true\\n        publication: false","position":{"start":{"line":74,"column":1,"offset":4697},"end":{"line":79,"column":4,"offset":4779},"indent":[1,1,1,1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Afin de ne pas modifier le comportement par défaut de Doctrine, nous avons ajouté une méthode ","position":{"start":{"line":81,"column":1,"offset":4781},"end":{"line":81,"column":95,"offset":4875},"indent":[]}},{"type":"link","title":null,"url":"https://gist.github.com/oziks/8180382","children":[{"type":"inlineCode","value":"findWithContext","position":{"start":{"line":81,"column":96,"offset":4876},"end":{"line":81,"column":113,"offset":4893},"indent":[]}}],"position":{"start":{"line":81,"column":95,"offset":4875},"end":{"line":81,"column":153,"offset":4933},"indent":[]}},{"type":"text","value":" à nos repositories qui reprend les mêmes paramètres que la méthode ","position":{"start":{"line":81,"column":153,"offset":4933},"end":{"line":81,"column":221,"offset":5001},"indent":[]}},{"type":"inlineCode","value":"findBy","position":{"start":{"line":81,"column":221,"offset":5001},"end":{"line":81,"column":229,"offset":5009},"indent":[]}},{"type":"text","value":" en injectant le ","position":{"start":{"line":81,"column":229,"offset":5009},"end":{"line":81,"column":246,"offset":5026},"indent":[]}},{"type":"inlineCode","value":"SecurityContext","position":{"start":{"line":81,"column":246,"offset":5026},"end":{"line":81,"column":263,"offset":5043},"indent":[]}},{"type":"text","value":". Cette méthode permet donc de récupérer des entités filtrées en fonction des paramètres d\'un client :","position":{"start":{"line":81,"column":263,"offset":5043},"end":{"line":81,"column":365,"offset":5145},"indent":[]}}],"position":{"start":{"line":81,"column":1,"offset":4781},"end":{"line":81,"column":365,"offset":5145},"indent":[]}},{"type":"code","lang":"php","value":"<?php\\n$article = $this\\n    ->get(\'m6_contents.article.manager\')\\n    ->getRepository()\\n    ->findWithContext($this->container->get(\'security.context\'), [\'id\' => $id]);","position":{"start":{"line":83,"column":1,"offset":5147},"end":{"line":89,"column":4,"offset":5324},"indent":[1,1,1,1,1,1]}},{"type":"heading","depth":4,"children":[{"type":"text","value":" Personnalisation avancée","position":{"start":{"line":91,"column":5,"offset":5330},"end":{"line":91,"column":30,"offset":5355},"indent":[]}}],"position":{"start":{"line":91,"column":1,"offset":5326},"end":{"line":91,"column":30,"offset":5355},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Grâce à l\'utilisation du Bundle Security de Symfony, toute la configuration spécifique à un sous-domaine est stockée dans l’utilisateur courant. Et dans Symfony, l’utilisateur courant est facilement récupérable à partir du service ","position":{"start":{"line":93,"column":1,"offset":5357},"end":{"line":93,"column":232,"offset":5588},"indent":[]}},{"type":"inlineCode","value":"security_context","position":{"start":{"line":93,"column":232,"offset":5588},"end":{"line":93,"column":250,"offset":5606},"indent":[]}},{"type":"text","value":". Il est ainsi possible de personnaliser n’importe quelle brique de l\'application en y injectant la dépendance sur ce service.","position":{"start":{"line":93,"column":250,"offset":5606},"end":{"line":93,"column":376,"offset":5732},"indent":[]}}],"position":{"start":{"line":93,"column":1,"offset":5357},"end":{"line":93,"column":376,"offset":5732},"indent":[]}},{"type":"heading","depth":4,"children":[{"type":"text","value":"DomainUserBundle","position":{"start":{"line":95,"column":6,"offset":5739},"end":{"line":95,"column":22,"offset":5755},"indent":[]}}],"position":{"start":{"line":95,"column":1,"offset":5734},"end":{"line":95,"column":22,"offset":5755},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Afin d\'implémenter facilement ce fonctionnement sur nos API, nous avons développé un bundle dédié. Il peut donc aussi vous permettre de gérer l\'authentification et la configuration de vos API par nom de domaine.","position":{"start":{"line":97,"column":1,"offset":5757},"end":{"line":97,"column":212,"offset":5968},"indent":[]}}],"position":{"start":{"line":97,"column":1,"offset":5757},"end":{"line":97,"column":212,"offset":5968},"indent":[]}},{"type":"paragraph","children":[{"type":"link","title":null,"url":"https://github.com/M6Web/DomainUserBundle","children":[{"type":"text","value":"DomainUserBundle","position":{"start":{"line":99,"column":2,"offset":5971},"end":{"line":99,"column":18,"offset":5987},"indent":[]}}],"position":{"start":{"line":99,"column":1,"offset":5970},"end":{"line":99,"column":62,"offset":6031},"indent":[]}},{"type":"text","value":" est disponible en ","position":{"start":{"line":99,"column":62,"offset":6031},"end":{"line":99,"column":81,"offset":6050},"indent":[]}},{"type":"link","title":null,"url":"http://tom.preston-werner.com/2011/11/22/open-source-everything.html","children":[{"type":"text","value":"open-source","position":{"start":{"line":99,"column":82,"offset":6051},"end":{"line":99,"column":93,"offset":6062},"indent":[]}}],"position":{"start":{"line":99,"column":81,"offset":6050},"end":{"line":99,"column":164,"offset":6133},"indent":[]}},{"type":"text","value":" sur le ","position":{"start":{"line":99,"column":164,"offset":6133},"end":{"line":99,"column":172,"offset":6141},"indent":[]}},{"type":"link","title":null,"url":"https://github.com/M6Web","children":[{"type":"text","value":"compte GitHub de M6Web","position":{"start":{"line":99,"column":173,"offset":6142},"end":{"line":99,"column":195,"offset":6164},"indent":[]}}],"position":{"start":{"line":99,"column":172,"offset":6141},"end":{"line":99,"column":222,"offset":6191},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":99,"column":222,"offset":6191},"end":{"line":99,"column":223,"offset":6192},"indent":[]}}],"position":{"start":{"line":99,"column":1,"offset":5970},"end":{"line":99,"column":223,"offset":6192},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Enjoy !","position":{"start":{"line":101,"column":1,"offset":6194},"end":{"line":101,"column":8,"offset":6201},"indent":[]}}],"position":{"start":{"line":101,"column":1,"offset":6194},"end":{"line":101,"column":8,"offset":6201},"indent":[]}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":102,"column":1,"offset":6202}}}',frontmatter:{date:"January 07, 2014",path:"/2014-01-08-api-a-consommer-avec-moderation",title:"API à consommer avec modération",image:{childImageSharp:{resize:{src:"/static/b81d38117b10d5b9dfcc2c03c588b37d-fe689.png"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---2014-01-08-api-a-consommer-avec-moderation-f806e0bab82ab33b916b.js.map