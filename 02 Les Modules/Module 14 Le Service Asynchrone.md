# Module 14 - Le Service Asynchrone
- Création d'un service asynchrone
- Le service devient Injectable
- Création d'un Observable
- La méthode emit
- L'envoie de données avec la méthode emit
- Abonnement aux données du service

## Un service Asynchrone : c'est quoi ?

Si notre service communique avec une API
- Nous devons attendre une réponse de l'API
- Et donc les données arriveront après le chargement du composant

----------------

Le Service va émettre un objet de type **subject**
- Un abonnement à un <code>subject</code> est nécessaire
- Avec l'objet <code>subscription</code> depuis le composant qui veut s'abonner

----------------
## Observer / Observable
un **Observable** est un objet qui **émet** des informations auxquelles on souhaite réagir.
- il "emet" un code qui sera exécuté à chaque fois que l'Observable émet une information
- Pour observer l'obserbable on utilise la fonction <code>subscribe()</code> :
- Grace à un objet de type <code>Subscription</code>

**Le service va emmètre un subject**
- Le composant va prendre un abonnement <code>subscription</code>
par example ***comparaison avec un abonnement à Sciences & vie***

