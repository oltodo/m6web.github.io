webpackJsonp([0xee2dfab59f838800],{"./node_modules/json-loader/index.js!./.cache/json/2017-06-01-migration-elasticsearch.json":function(e,n){e.exports={data:{markdownRemark:{ast:'{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Pour assurer la scalabilité des performances de l\'API 6play, les données suivent tout ","position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":2,"column":87,"offset":87},"indent":[]}},{"type":"link","title":null,"url":"http://tech.m6web.fr/une-donnee-presque-parfaite/","children":[{"type":"text","value":"un ","position":{"start":{"line":2,"column":88,"offset":88},"end":{"line":2,"column":91,"offset":91},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"workflow","position":{"start":{"line":2,"column":92,"offset":92},"end":{"line":2,"column":100,"offset":100},"indent":[]}}],"position":{"start":{"line":2,"column":91,"offset":91},"end":{"line":2,"column":101,"offset":101},"indent":[]}}],"position":{"start":{"line":2,"column":87,"offset":87},"end":{"line":2,"column":153,"offset":153},"indent":[]}},{"type":"text","value":" pour être dénormalisées et stockées dans ","position":{"start":{"line":2,"column":153,"offset":153},"end":{"line":2,"column":195,"offset":195},"indent":[]}},{"type":"link","title":null,"url":"https://www.elastic.co/products/elasticsearch","children":[{"type":"text","value":"Elasticsearch","position":{"start":{"line":2,"column":196,"offset":196},"end":{"line":2,"column":209,"offset":209},"indent":[]}}],"position":{"start":{"line":2,"column":195,"offset":195},"end":{"line":2,"column":257,"offset":257},"indent":[]}},{"type":"text","value":".\\nMi-2016, nous avons identifié des dysfonctionnements majeurs sur nos serveurs, entrainant parfois des interruptions de service.\\nSuite à quelques mesures d\'urgences pour stabiliser l\'existant, nous avons entrepris de mettre à jour notre version d\'Elasticsearch pour bénéficier des dernières améliorations.\\nNous étions alors sur la ","position":{"start":{"line":2,"column":257,"offset":257},"end":{"line":5,"column":26,"offset":589},"indent":[1,1,1]}},{"type":"link","title":null,"url":"https://www.elastic.co/downloads/past-releases/elasticsearch-1-7-0","children":[{"type":"text","value":"version 1.7","position":{"start":{"line":5,"column":27,"offset":590},"end":{"line":5,"column":38,"offset":601},"indent":[]}}],"position":{"start":{"line":5,"column":26,"offset":589},"end":{"line":5,"column":107,"offset":670},"indent":[]}},{"type":"text","value":", et souhaitions passer en ","position":{"start":{"line":5,"column":107,"offset":670},"end":{"line":5,"column":134,"offset":697},"indent":[]}},{"type":"link","title":null,"url":"https://www.elastic.co/downloads/past-releases/elasticsearch-2-0-0","children":[{"type":"text","value":"version 2.0","position":{"start":{"line":5,"column":135,"offset":698},"end":{"line":5,"column":146,"offset":709},"indent":[]}}],"position":{"start":{"line":5,"column":134,"offset":697},"end":{"line":5,"column":215,"offset":778},"indent":[]}},{"type":"text","value":".\\nAprès plusieurs mois d\'efforts pour effectuer cette migration sans interruption de service ni gel technique, nous voici en version… ","position":{"start":{"line":5,"column":215,"offset":778},"end":{"line":6,"column":133,"offset":912},"indent":[1]}},{"type":"link","title":null,"url":"https://www.elastic.co/downloads/past-releases/elasticsearch-5-2-2","children":[{"type":"text","value":"5.2","position":{"start":{"line":6,"column":134,"offset":913},"end":{"line":6,"column":137,"offset":916},"indent":[]}}],"position":{"start":{"line":6,"column":133,"offset":912},"end":{"line":6,"column":206,"offset":985},"indent":[]}},{"type":"text","value":"!\\nVoici le récit de cette grande migration, et ce que l\'on a appris tout au long de ce périple.","position":{"start":{"line":6,"column":206,"offset":985},"end":{"line":7,"column":94,"offset":1080},"indent":[1]}}],"position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":7,"column":94,"offset":1080},"indent":[1,1,1,1,1]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"/static/2114bebef9b35bae1340ddb8cde3ad3c-4121f.jpg","alt":"ES5 Covfefe","position":{"start":{"line":9,"column":1,"offset":1082},"end":{"line":9,"column":34,"offset":1115},"indent":[]}}],"position":{"start":{"line":9,"column":1,"offset":1082},"end":{"line":9,"column":34,"offset":1115},"indent":[]}},{"type":"heading","depth":2,"children":[{"type":"text","value":"La théorie","position":{"start":{"line":11,"column":4,"offset":1120},"end":{"line":11,"column":14,"offset":1130},"indent":[]}}],"position":{"start":{"line":11,"column":1,"offset":1117},"end":{"line":11,"column":14,"offset":1130},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Il n\'y a pas de méthode magique pour changer de cluster sans coupure, la stratégie adoptée est assez classique:","position":{"start":{"line":13,"column":1,"offset":1132},"end":{"line":13,"column":112,"offset":1243},"indent":[]}}],"position":{"start":{"line":13,"column":1,"offset":1132},"end":{"line":13,"column":112,"offset":1243},"indent":[]}},{"type":"list","ordered":false,"start":null,"loose":false,"children":[{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"dupliquer les écritures sur le nouveau cluster","position":{"start":{"line":15,"column":4,"offset":1248},"end":{"line":15,"column":50,"offset":1294},"indent":[]}}],"position":{"start":{"line":15,"column":4,"offset":1248},"end":{"line":15,"column":50,"offset":1294},"indent":[]}}],"position":{"start":{"line":15,"column":1,"offset":1245},"end":{"line":15,"column":50,"offset":1294},"indent":[]}},{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"basculer les lectures sur le nouveau cluster","position":{"start":{"line":16,"column":4,"offset":1298},"end":{"line":16,"column":48,"offset":1342},"indent":[]}}],"position":{"start":{"line":16,"column":4,"offset":1298},"end":{"line":16,"column":48,"offset":1342},"indent":[]}}],"position":{"start":{"line":16,"column":1,"offset":1295},"end":{"line":16,"column":48,"offset":1342},"indent":[]}},{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"arrêter les écritures sur l\'ancien cluster","position":{"start":{"line":17,"column":4,"offset":1346},"end":{"line":17,"column":46,"offset":1388},"indent":[]}}],"position":{"start":{"line":17,"column":4,"offset":1346},"end":{"line":17,"column":46,"offset":1388},"indent":[]}}],"position":{"start":{"line":17,"column":1,"offset":1343},"end":{"line":17,"column":46,"offset":1388},"indent":[]}}],"position":{"start":{"line":15,"column":1,"offset":1245},"end":{"line":17,"column":46,"offset":1388},"indent":[1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Il n\'est pas nécessaire d\'enchaîner toutes les étapes dans la même journée, cela présente donc l\'avantage de pouvoir étaler les déploiements dans le temps en fonction des disponibilités,\\nainsi que de surveiller attentivement le ","position":{"start":{"line":19,"column":1,"offset":1390},"end":{"line":20,"column":42,"offset":1618},"indent":[1]}},{"type":"emphasis","children":[{"type":"text","value":"monitoring","position":{"start":{"line":20,"column":43,"offset":1619},"end":{"line":20,"column":53,"offset":1629},"indent":[]}}],"position":{"start":{"line":20,"column":42,"offset":1618},"end":{"line":20,"column":54,"offset":1630},"indent":[]}},{"type":"text","value":" pendant quelques jours pour vérifier que l\'infrastructure supporte bien les changements apportés.","position":{"start":{"line":20,"column":54,"offset":1630},"end":{"line":20,"column":152,"offset":1728},"indent":[]}}],"position":{"start":{"line":19,"column":1,"offset":1390},"end":{"line":20,"column":152,"offset":1728},"indent":[1]}},{"type":"heading","depth":2,"children":[{"type":"text","value":"Écritures en ","position":{"start":{"line":23,"column":4,"offset":1734},"end":{"line":23,"column":17,"offset":1747},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"Y","position":{"start":{"line":23,"column":18,"offset":1748},"end":{"line":23,"column":19,"offset":1749},"indent":[]}}],"position":{"start":{"line":23,"column":17,"offset":1747},"end":{"line":23,"column":20,"offset":1750},"indent":[]}}],"position":{"start":{"line":23,"column":1,"offset":1731},"end":{"line":23,"column":20,"offset":1750},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Nous utilisons ","position":{"start":{"line":25,"column":1,"offset":1752},"end":{"line":25,"column":16,"offset":1767},"indent":[]}},{"type":"link","title":null,"url":"http://tech.m6web.fr/video-phptour-worker-php/","children":[{"type":"text","value":"des ","position":{"start":{"line":25,"column":17,"offset":1768},"end":{"line":25,"column":21,"offset":1772},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"workers","position":{"start":{"line":25,"column":22,"offset":1773},"end":{"line":25,"column":29,"offset":1780},"indent":[]}}],"position":{"start":{"line":25,"column":21,"offset":1772},"end":{"line":25,"column":30,"offset":1781},"indent":[]}},{"type":"text","value":" Php","position":{"start":{"line":25,"column":30,"offset":1781},"end":{"line":25,"column":34,"offset":1785},"indent":[]}}],"position":{"start":{"line":25,"column":16,"offset":1767},"end":{"line":25,"column":83,"offset":1834},"indent":[]}},{"type":"text","value":" pour détecter les changements dans notre BDD,\\nsuite à quoi un message est publié dans une file d\'attente pour être traité par un autre ","position":{"start":{"line":25,"column":83,"offset":1834},"end":{"line":26,"column":90,"offset":1970},"indent":[1]}},{"type":"emphasis","children":[{"type":"text","value":"worker","position":{"start":{"line":26,"column":91,"offset":1971},"end":{"line":26,"column":97,"offset":1977},"indent":[]}}],"position":{"start":{"line":26,"column":90,"offset":1970},"end":{"line":26,"column":98,"offset":1978},"indent":[]}},{"type":"text","value":" qui se chargera de synchroniser les entités entre MySQL et Elasticsearch.\\nIl était primordial que le cluster de production ne soit pas impacté par les éventuelles erreurs rencontrées sur le nouveau cluster.\\nUne de nos premières intentions était de publier le message de mise à jour dans une deuxième file d\'attente, consommée par des workers dédiés eux aussi au nouveau cluster.\\n","position":{"start":{"line":26,"column":98,"offset":1978},"end":{"line":29,"column":1,"offset":2358},"indent":[1,1,1]}},{"type":"image","title":null,"url":"/static/70baddb439c5d30c3bb03c847ff78251-f79db.png","alt":"Plusieurs files d\'attentes","position":{"start":{"line":29,"column":1,"offset":2358},"end":{"line":29,"column":50,"offset":2407},"indent":[]}}],"position":{"start":{"line":25,"column":1,"offset":1752},"end":{"line":29,"column":50,"offset":2407},"indent":[1,1,1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Le gros inconvénient est que cela impliquait de doubler toutes les lectures sur la BDD, toutes les requêtes devaient être executées une fois par cluster,\\ncela risquait donc d\'impacter d\'autres services.\\nNous sommes donc partis sur une solution purement logicielle, puisque pour chaque entité mise à jour ce sont les workers qui les envoient sur chaque cluster.\\n","position":{"start":{"line":32,"column":1,"offset":2410},"end":{"line":35,"column":1,"offset":2771},"indent":[1,1,1]}},{"type":"image","title":null,"url":"/static/43a5ed3d23c7287a170e97a86ca72f93-beaed.png","alt":"File d\'attente unique","position":{"start":{"line":35,"column":1,"offset":2771},"end":{"line":35,"column":43,"offset":2813},"indent":[]}}],"position":{"start":{"line":32,"column":1,"offset":2410},"end":{"line":35,"column":43,"offset":2813},"indent":[1,1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Il est par contre nécessaire de gérer correctement les erreurs, que faire si une erreur intervient sur un cluster mais pas l\'autre?\\nSi le nouveau cluster devient instable et que l\'on renvoie les messages systématiquement dans la file d\'attente, on risque d\'accentuer inutilement la charge en écriture sur le cluster stable en production.\\nNotre compromis est de définir comme ","position":{"start":{"line":38,"column":1,"offset":2816},"end":{"line":40,"column":38,"offset":3191},"indent":[1,1]}},{"type":"emphasis","children":[{"type":"text","value":"master","position":{"start":{"line":40,"column":39,"offset":3192},"end":{"line":40,"column":45,"offset":3198},"indent":[]}}],"position":{"start":{"line":40,"column":38,"offset":3191},"end":{"line":40,"column":46,"offset":3199},"indent":[]}},{"type":"text","value":" le cluster de production (celui où les données sont lues), et seules ses erreurs provoquent la génération d\'un nouveau message.\\nLes erreurs sur le cluster ","position":{"start":{"line":40,"column":46,"offset":3199},"end":{"line":41,"column":28,"offset":3355},"indent":[1]}},{"type":"emphasis","children":[{"type":"text","value":"slave","position":{"start":{"line":41,"column":29,"offset":3356},"end":{"line":41,"column":34,"offset":3361},"indent":[]}}],"position":{"start":{"line":41,"column":28,"offset":3355},"end":{"line":41,"column":35,"offset":3362},"indent":[]}},{"type":"text","value":" sont monitorées, mais ne génèrent pas de nouveaux messages dans la file d\'attente.\\nEffectivement, puisque chaque soir nous resynchronisons ","position":{"start":{"line":41,"column":35,"offset":3362},"end":{"line":42,"column":57,"offset":3502},"indent":[1]}},{"type":"strong","children":[{"type":"text","value":"toutes","position":{"start":{"line":42,"column":59,"offset":3504},"end":{"line":42,"column":65,"offset":3510},"indent":[]}}],"position":{"start":{"line":42,"column":57,"offset":3502},"end":{"line":42,"column":67,"offset":3512},"indent":[]}},{"type":"text","value":" les données entre MySql et Elasticsearch, on peut se permettre d\'avoir des données ","position":{"start":{"line":42,"column":67,"offset":3512},"end":{"line":42,"column":151,"offset":3596},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"moins fraiches","position":{"start":{"line":42,"column":152,"offset":3597},"end":{"line":42,"column":166,"offset":3611},"indent":[]}}],"position":{"start":{"line":42,"column":151,"offset":3596},"end":{"line":42,"column":167,"offset":3612},"indent":[]}},{"type":"text","value":" sur le cluster ","position":{"start":{"line":42,"column":167,"offset":3612},"end":{"line":42,"column":183,"offset":3628},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"slave","position":{"start":{"line":42,"column":184,"offset":3629},"end":{"line":42,"column":189,"offset":3634},"indent":[]}}],"position":{"start":{"line":42,"column":183,"offset":3628},"end":{"line":42,"column":190,"offset":3635},"indent":[]}},{"type":"text","value":" le temps d\'une journée.","position":{"start":{"line":42,"column":190,"offset":3635},"end":{"line":42,"column":214,"offset":3659},"indent":[]}}],"position":{"start":{"line":38,"column":1,"offset":2816},"end":{"line":42,"column":214,"offset":3659},"indent":[1,1,1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Initialement, nous pensions que ce système ","position":{"start":{"line":44,"column":1,"offset":3661},"end":{"line":44,"column":44,"offset":3704},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"master/slave","position":{"start":{"line":44,"column":45,"offset":3705},"end":{"line":44,"column":57,"offset":3717},"indent":[]}}],"position":{"start":{"line":44,"column":44,"offset":3704},"end":{"line":44,"column":58,"offset":3718},"indent":[]}},{"type":"text","value":" serait temporaire, mais très rapidement nous avons pérennisé ces développements, cela nous permettait de tester facilement différents clusters,\\nou encore de vérifier que les données étaient bien indexées de la même manière, faire des ","position":{"start":{"line":44,"column":58,"offset":3718},"end":{"line":45,"column":91,"offset":3953},"indent":[1]}},{"type":"emphasis","children":[{"type":"text","value":"rollbacks","position":{"start":{"line":45,"column":92,"offset":3954},"end":{"line":45,"column":101,"offset":3963},"indent":[]}}],"position":{"start":{"line":45,"column":91,"offset":3953},"end":{"line":45,"column":102,"offset":3964},"indent":[]}},{"type":"text","value":" en urgence…","position":{"start":{"line":45,"column":102,"offset":3964},"end":{"line":45,"column":114,"offset":3976},"indent":[]}}],"position":{"start":{"line":44,"column":1,"offset":3661},"end":{"line":45,"column":114,"offset":3976},"indent":[1]}},{"type":"paragraph","children":[{"type":"text","value":"Une dernière difficulté était de faire cohabiter deux version différentes du ","position":{"start":{"line":47,"column":1,"offset":3978},"end":{"line":47,"column":78,"offset":4055},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"Sdk","position":{"start":{"line":47,"column":79,"offset":4056},"end":{"line":47,"column":82,"offset":4059},"indent":[]}}],"position":{"start":{"line":47,"column":78,"offset":4055},"end":{"line":47,"column":83,"offset":4060},"indent":[]}},{"type":"text","value":" ","position":{"start":{"line":47,"column":83,"offset":4060},"end":{"line":47,"column":84,"offset":4061},"indent":[]}},{"type":"link","title":null,"url":"https://github.com/elastic/elasticsearch-php","children":[{"type":"text","value":"Elasticsearch Php","position":{"start":{"line":47,"column":85,"offset":4062},"end":{"line":47,"column":102,"offset":4079},"indent":[]}}],"position":{"start":{"line":47,"column":84,"offset":4061},"end":{"line":47,"column":149,"offset":4126},"indent":[]}},{"type":"text","value":" dans le même projet.\\nIl y a effectivement une incompatibilité entre les versions ","position":{"start":{"line":47,"column":149,"offset":4126},"end":{"line":48,"column":61,"offset":4208},"indent":[1]}},{"type":"inlineCode","value":"2.*","position":{"start":{"line":48,"column":61,"offset":4208},"end":{"line":48,"column":66,"offset":4213},"indent":[]}},{"type":"text","value":" et ","position":{"start":{"line":48,"column":66,"offset":4213},"end":{"line":48,"column":70,"offset":4217},"indent":[]}},{"type":"inlineCode","value":"5.*","position":{"start":{"line":48,"column":70,"offset":4217},"end":{"line":48,"column":75,"offset":4222},"indent":[]}},{"type":"text","value":", et nous n\'avons pas eu d\'autre choix que de cloner la librairie concernée et de changer tous les ","position":{"start":{"line":48,"column":75,"offset":4222},"end":{"line":48,"column":174,"offset":4321},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"namespaces","position":{"start":{"line":48,"column":175,"offset":4322},"end":{"line":48,"column":185,"offset":4332},"indent":[]}}],"position":{"start":{"line":48,"column":174,"offset":4321},"end":{"line":48,"column":186,"offset":4333},"indent":[]}},{"type":"text","value":" pour éviter les conflits de noms.\\nMalgré tout, ce ne sont pas les écritures dans Elasticsearch qui nous ont posé le plus de problèmes.","position":{"start":{"line":48,"column":186,"offset":4333},"end":{"line":49,"column":101,"offset":4468},"indent":[1]}}],"position":{"start":{"line":47,"column":1,"offset":3978},"end":{"line":49,"column":101,"offset":4468},"indent":[1,1]}},{"type":"heading","depth":2,"children":[{"type":"text","value":"Migration des requêtes","position":{"start":{"line":51,"column":4,"offset":4473},"end":{"line":51,"column":26,"offset":4495},"indent":[]}}],"position":{"start":{"line":51,"column":1,"offset":4470},"end":{"line":51,"column":26,"offset":4495},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Il y a eu de nombreux changements apportés entre la version ","position":{"start":{"line":53,"column":1,"offset":4497},"end":{"line":53,"column":61,"offset":4557},"indent":[]}},{"type":"inlineCode","value":"1.7","position":{"start":{"line":53,"column":61,"offset":4557},"end":{"line":53,"column":66,"offset":4562},"indent":[]}},{"type":"text","value":" et ","position":{"start":{"line":53,"column":66,"offset":4562},"end":{"line":53,"column":70,"offset":4566},"indent":[]}},{"type":"inlineCode","value":"5.0","position":{"start":{"line":53,"column":70,"offset":4566},"end":{"line":53,"column":75,"offset":4571},"indent":[]}},{"type":"text","value":" et souvent pour le mieux.\\nLes différentes évolutions de syntaxes ont généralement vite été faites, car nous avions pris soin d\'encapsuler la construction des requêtes via quelques fonctions ","position":{"start":{"line":53,"column":75,"offset":4571},"end":{"line":54,"column":165,"offset":4762},"indent":[1]}},{"type":"emphasis","children":[{"type":"text","value":"helper","position":{"start":{"line":54,"column":166,"offset":4763},"end":{"line":54,"column":172,"offset":4769},"indent":[]}}],"position":{"start":{"line":54,"column":165,"offset":4762},"end":{"line":54,"column":173,"offset":4770},"indent":[]}},{"type":"text","value":" (une sorte de ","position":{"start":{"line":54,"column":173,"offset":4770},"end":{"line":54,"column":188,"offset":4785},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"query builder","position":{"start":{"line":54,"column":189,"offset":4786},"end":{"line":54,"column":202,"offset":4799},"indent":[]}}],"position":{"start":{"line":54,"column":188,"offset":4785},"end":{"line":54,"column":203,"offset":4800},"indent":[]}},{"type":"text","value":").\\nIl nous a donc suffit de changer ces quelques fonctions pour traduire les anciennes requêtes vers la nouvelle syntaxe.","position":{"start":{"line":54,"column":203,"offset":4800},"end":{"line":55,"column":119,"offset":4921},"indent":[1]}}],"position":{"start":{"line":53,"column":1,"offset":4497},"end":{"line":55,"column":119,"offset":4921},"indent":[1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Une erreur classique que nous faisions en ","position":{"start":{"line":57,"column":1,"offset":4923},"end":{"line":57,"column":43,"offset":4965},"indent":[]}},{"type":"inlineCode","value":"1.7","position":{"start":{"line":57,"column":43,"offset":4965},"end":{"line":57,"column":48,"offset":4970},"indent":[]}},{"type":"text","value":" était de se contenter d\'un ","position":{"start":{"line":57,"column":48,"offset":4970},"end":{"line":57,"column":76,"offset":4998},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"mapping","position":{"start":{"line":57,"column":77,"offset":4999},"end":{"line":57,"column":84,"offset":5006},"indent":[]}}],"position":{"start":{"line":57,"column":76,"offset":4998},"end":{"line":57,"column":85,"offset":5007},"indent":[]}},{"type":"text","value":" par ","position":{"start":{"line":57,"column":85,"offset":5007},"end":{"line":57,"column":90,"offset":5012},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"défaut","position":{"start":{"line":57,"column":91,"offset":5013},"end":{"line":57,"column":97,"offset":5019},"indent":[]}}],"position":{"start":{"line":57,"column":90,"offset":5012},"end":{"line":57,"column":98,"offset":5020},"indent":[]}},{"type":"text","value":", qui avait le mérite de fonctionner sans efforts avec nos requêtes et nos données.\\nLors du passage à la version ","position":{"start":{"line":57,"column":98,"offset":5020},"end":{"line":58,"column":30,"offset":5133},"indent":[1]}},{"type":"inlineCode","value":"5.0","position":{"start":{"line":58,"column":30,"offset":5133},"end":{"line":58,"column":35,"offset":5138},"indent":[]}},{"type":"text","value":", Elasticsearch a commencé à refuser certaines de nos requêtes car elles ne pouvaient pas être performantes.\\nIl fallait choisir, soit activer explicitement des options de mapping en faisant un compromis sur les performances générales,\\nsoit affiner le ","position":{"start":{"line":58,"column":35,"offset":5138},"end":{"line":60,"column":17,"offset":5389},"indent":[1,1]}},{"type":"emphasis","children":[{"type":"text","value":"mapping","position":{"start":{"line":60,"column":18,"offset":5390},"end":{"line":60,"column":25,"offset":5397},"indent":[]}}],"position":{"start":{"line":60,"column":17,"offset":5389},"end":{"line":60,"column":26,"offset":5398},"indent":[]}},{"type":"text","value":" pour qu\'il soit plus adapté à la nature de nos requêtes.\\nIl s\'agit d\'un bon exemple de ","position":{"start":{"line":60,"column":26,"offset":5398},"end":{"line":61,"column":31,"offset":5486},"indent":[1]}},{"type":"link","title":null,"url":"https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/","children":[{"type":"emphasis","children":[{"type":"text","value":"Leaky Abstraction","position":{"start":{"line":61,"column":33,"offset":5488},"end":{"line":61,"column":50,"offset":5505},"indent":[]}}],"position":{"start":{"line":61,"column":32,"offset":5487},"end":{"line":61,"column":51,"offset":5506},"indent":[]}}],"position":{"start":{"line":61,"column":31,"offset":5486},"end":{"line":61,"column":126,"offset":5581},"indent":[]}},{"type":"text","value":",\\non a beau utiliser des outils pour s\'abstraire de la façon dont sont stockées les données, nous sommes toujours obligés de comprendre ce qu\'il se passe à l\'intérieur pour en tirer les meilleures performances.\\nHeureusement pour nous notre mapping était assez trivial à changer, car nous n\'utilisons pas Elasticsearch pour faire de la recherche ","position":{"start":{"line":61,"column":126,"offset":5581},"end":{"line":63,"column":135,"offset":5926},"indent":[1,1]}},{"type":"link","title":null,"url":"https://en.wikipedia.org/wiki/Full-text_search","children":[{"type":"emphasis","children":[{"type":"text","value":"full-text","position":{"start":{"line":63,"column":137,"offset":5928},"end":{"line":63,"column":146,"offset":5937},"indent":[]}}],"position":{"start":{"line":63,"column":136,"offset":5927},"end":{"line":63,"column":147,"offset":5938},"indent":[]}}],"position":{"start":{"line":63,"column":135,"offset":5926},"end":{"line":63,"column":196,"offset":5987},"indent":[]}},{"type":"text","value":"\\nmais seulement pour des recherches exactes sur des identifiants, des codes… Il nous a généralement suffit d\'utiliser le nouveau type ","position":{"start":{"line":63,"column":196,"offset":5987},"end":{"line":64,"column":134,"offset":6121},"indent":[1]}},{"type":"link","title":null,"url":"https://www.elastic.co/guide/en/elasticsearch/reference/current/keyword.html","children":[{"type":"inlineCode","value":"keyword","position":{"start":{"line":64,"column":135,"offset":6122},"end":{"line":64,"column":144,"offset":6131},"indent":[]}}],"position":{"start":{"line":64,"column":134,"offset":6121},"end":{"line":64,"column":223,"offset":6210},"indent":[]}},{"type":"text","value":"\\npour que nos requêtes puissent être acceptées.","position":{"start":{"line":64,"column":223,"offset":6210},"end":{"line":65,"column":47,"offset":6257},"indent":[1]}}],"position":{"start":{"line":57,"column":1,"offset":4923},"end":{"line":65,"column":47,"offset":6257},"indent":[1,1,1,1,1,1,1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Pour s\'assurer du bon fonctionnement des APIs suite à ces nombreux changements, nous avons investi du temps pour écrire des tests fonctionnels de bout en bout,\\npour vérifier que les résultats restaient inchangés malgré le changement de version de cluster.\\nBien sûr, même si en local nos tests étaient au vert, des erreurs pouvaient apparaître en production.\\nLe scénario était alors simple, faire un ","position":{"start":{"line":67,"column":1,"offset":6259},"end":{"line":70,"column":42,"offset":6658},"indent":[1,1,1]}},{"type":"emphasis","children":[{"type":"text","value":"rollback","position":{"start":{"line":70,"column":43,"offset":6659},"end":{"line":70,"column":51,"offset":6667},"indent":[]}}],"position":{"start":{"line":70,"column":42,"offset":6658},"end":{"line":70,"column":52,"offset":6668},"indent":[]}},{"type":"text","value":", ajouter les tests correspondants aux nouvelles erreurs detectées, les faire passer en local, puis reccomencer!","position":{"start":{"line":70,"column":52,"offset":6668},"end":{"line":70,"column":164,"offset":6780},"indent":[]}}],"position":{"start":{"line":67,"column":1,"offset":6259},"end":{"line":70,"column":164,"offset":6780},"indent":[1,1,1]}},{"type":"paragraph","children":[{"type":"text","value":"Ce qui nous a peut-être le plus éprouvé dans cette migration, c\'est une ","position":{"start":{"line":73,"column":1,"offset":6783},"end":{"line":73,"column":73,"offset":6855},"indent":[]}},{"type":"link","title":null,"url":"https://github.com/elastic/elasticsearch/issues/23796","children":[{"type":"text","value":"regression introduite dans la version ","position":{"start":{"line":73,"column":74,"offset":6856},"end":{"line":73,"column":112,"offset":6894},"indent":[]}},{"type":"inlineCode","value":"5.2","position":{"start":{"line":73,"column":112,"offset":6894},"end":{"line":73,"column":117,"offset":6899},"indent":[]}}],"position":{"start":{"line":73,"column":73,"offset":6855},"end":{"line":73,"column":173,"offset":6955},"indent":[]}},{"type":"text","value":"\\nqui avait pour conséquence de changer certains de nos tableaux vides en valeur ","position":{"start":{"line":73,"column":173,"offset":6955},"end":{"line":74,"column":80,"offset":7035},"indent":[1]}},{"type":"inlineCode","value":"null","position":{"start":{"line":74,"column":80,"offset":7035},"end":{"line":74,"column":86,"offset":7041},"indent":[]}},{"type":"text","value":".\\nIl nous a fallut quasiment repasser sur chaque requête pour retransformer ces valeurs en quelque chose de cohérent.\\nQuand on avait de la chance, ce ","position":{"start":{"line":74,"column":86,"offset":7041},"end":{"line":76,"column":33,"offset":7191},"indent":[1,1]}},{"type":"emphasis","children":[{"type":"text","value":"bug","position":{"start":{"line":76,"column":34,"offset":7192},"end":{"line":76,"column":37,"offset":7195},"indent":[]}}],"position":{"start":{"line":76,"column":33,"offset":7191},"end":{"line":76,"column":38,"offset":7196},"indent":[]}},{"type":"text","value":" faisait échouer nos tests, mais il est malheureusement arrivé que ce soient les ","position":{"start":{"line":76,"column":38,"offset":7196},"end":{"line":76,"column":119,"offset":7277},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"parseurs","position":{"start":{"line":76,"column":120,"offset":7278},"end":{"line":76,"column":128,"offset":7286},"indent":[]}}],"position":{"start":{"line":76,"column":119,"offset":7277},"end":{"line":76,"column":129,"offset":7287},"indent":[]}},{"type":"text","value":" json des applications 6play de production qui en fassent les frais, avec différents plantages à la clé…","position":{"start":{"line":76,"column":129,"offset":7287},"end":{"line":76,"column":233,"offset":7391},"indent":[]}}],"position":{"start":{"line":73,"column":1,"offset":6783},"end":{"line":76,"column":233,"offset":7391},"indent":[1,1,1]}},{"type":"heading","depth":2,"children":[{"type":"text","value":"Conclusions","position":{"start":{"line":79,"column":4,"offset":7397},"end":{"line":79,"column":15,"offset":7408},"indent":[]}}],"position":{"start":{"line":79,"column":1,"offset":7394},"end":{"line":79,"column":15,"offset":7408},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Cette migration fut longue et parfois douloureuse, heureusement les résultats sont maintenant au rendez-vous!\\n","position":{"start":{"line":81,"column":1,"offset":7410},"end":{"line":82,"column":1,"offset":7520},"indent":[1]}},{"type":"image","title":null,"url":"/static/fdf35c4e8ce4d87f0bfd9c3f242f4791-e9dbf.png","alt":"Temps de réponse des APIs","position":{"start":{"line":82,"column":1,"offset":7520},"end":{"line":82,"column":50,"offset":7569},"indent":[]}}],"position":{"start":{"line":81,"column":1,"offset":7410},"end":{"line":82,"column":50,"offset":7569},"indent":[1]}},{"type":"paragraph","children":[{"type":"text","value":"De plus, cela nous a donné l\'occasion d\'investir un peu de temps pour améliorer nos tests fonctionnels, et pour développer un système robuste pour la réplication des données sur plusieurs clusters Elasticsearch.\\nOn peut néanmoins se poser des questions sur la stratégie très ","position":{"start":{"line":85,"column":1,"offset":7572},"end":{"line":86,"column":64,"offset":7847},"indent":[1]}},{"type":"emphasis","children":[{"type":"text","value":"offensive","position":{"start":{"line":86,"column":65,"offset":7848},"end":{"line":86,"column":74,"offset":7857},"indent":[]}}],"position":{"start":{"line":86,"column":64,"offset":7847},"end":{"line":86,"column":75,"offset":7858},"indent":[]}},{"type":"text","value":" de changement de version de la part de Elasticsearch,\\nautant de ","position":{"start":{"line":86,"column":75,"offset":7858},"end":{"line":87,"column":11,"offset":7923},"indent":[1]}},{"type":"emphasis","children":[{"type":"text","value":"releases","position":{"start":{"line":87,"column":12,"offset":7924},"end":{"line":87,"column":20,"offset":7932},"indent":[]}}],"position":{"start":{"line":87,"column":11,"offset":7923},"end":{"line":87,"column":21,"offset":7933},"indent":[]}},{"type":"text","value":" avec autant de changements en si peu de temps, il faut être capable de suivre!\\nPendant que nous finalisions notre production sur la version ","position":{"start":{"line":87,"column":21,"offset":7933},"end":{"line":88,"column":62,"offset":8074},"indent":[1]}},{"type":"inlineCode","value":"5.2","position":{"start":{"line":88,"column":62,"offset":8074},"end":{"line":88,"column":67,"offset":8079},"indent":[]}},{"type":"text","value":", la ","position":{"start":{"line":88,"column":67,"offset":8079},"end":{"line":88,"column":72,"offset":8084},"indent":[]}},{"type":"inlineCode","value":"5.3","position":{"start":{"line":88,"column":72,"offset":8084},"end":{"line":88,"column":77,"offset":8089},"indent":[]}},{"type":"text","value":" a eu le temps de sortir, et la ","position":{"start":{"line":88,"column":77,"offset":8089},"end":{"line":88,"column":109,"offset":8121},"indent":[]}},{"type":"inlineCode","value":"6.0","position":{"start":{"line":88,"column":109,"offset":8121},"end":{"line":88,"column":114,"offset":8126},"indent":[]}},{"type":"text","value":" est apparue en beta.\\nNous allons essayer de profiter un peu de ce nouveau cluster avant de poursuivre vers une nouvelle grande migration :)","position":{"start":{"line":88,"column":114,"offset":8126},"end":{"line":89,"column":119,"offset":8266},"indent":[1]}}],"position":{"start":{"line":85,"column":1,"offset":7572},"end":{"line":89,"column":119,"offset":8266},"indent":[1,1,1,1]}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":90,"column":1,"offset":8267}}}',
frontmatter:{date:"May 31, 2017",path:"/2017-06-01-migration-elasticsearch",title:"Elasticsearch: la grande migration",image:{childImageSharp:{resize:{src:"/static/773b8c81b0b1286a63652b3c4ffb64e9-338bd.jpg"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---2017-06-01-migration-elasticsearch-61339f79b33972c117d3.js.map