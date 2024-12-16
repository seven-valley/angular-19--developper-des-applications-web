# Module 10 - Mise en place d'un Service
:one: Pourquoi mettre en place un service ?  
:two: Création d’un service  
:three: Appeler le service depuis le composant principal  
:four: Récupérer les données du service  
:five: Modifier les données du service    
:six: Appeler le service depuis un autre composant    
 <img src="../img/td/td10/2-piment.png" width="100">

## :one: Pourquoi mettre en place un service ?

- Partager les données
- Centraliser les données
- Une seule source à jour de vérité  

--------------------------------

 $\color{red}{\text{SANS Le service}}$  
<img src="../img/td/td10/1-avant.png" width="400">

--------------------------------

 $\color{green}{\text{AVEC Le Service}}$
 - Le service contient désormais **le tableau** d'objets
<img src="../img/td/td10/2-apres.png" width="350">

--------------------------------
 
 Pour modifier les données :
- Chaque componsant appelle désormais **les méthodes** du service
<img src="../img/td/td10/3-apres.png" width="350">

--------------------------------

# :two: Création du Service
Création du répertoires <code>services</code> dans le répertoire <code>app</code>
- Création du fichier <code>personne.service.ts</code>
;;


