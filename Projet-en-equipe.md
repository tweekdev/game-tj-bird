# Projet JS En équipe

Le but de l'exercice est de reproduire la mécanique du jeu duck hunt avec un joueur qui contrôle le canard et l'autre qui doit lui tirer dessus.
Vous devrez travailler en équipe. La personne la moins à l'aise sera celle qui devra coder, l'autre devra lui expliquer la démarche, la logique, la syntaxe **avec patience et bienveillance**.

En cas de blocage, n'hésitez pas à utiliser le panic-button pour contacter le développeur senior. À la fin de la journée, vous devrez archiver (zipper) votre projet de jeu et l'envoyer à l'adresse webmaster@washaweb.com.

## 1 - Gestion des déplacements

Le cube doit pouvoir se déplacer dans tout la fenêtre.

### AIDE

1 - créer une div carré bleu (100px) en position absolute.
2 - quand on presse BAS, changer la propriété top, pour déplacer le carré vers le bas
3 - Faire la même chose pour DROITE, HAUT, GAUCHE

#### AIDE DÉTAILLÉE

- Ajouter une écoute du clavier "keydown" et trouver le event.keycode correspondant
- changer la propriété css "top" avec la variable +=1%

Code de correction Vanilla JS :

    function onDocumentKeyDown(event) {

        var cube = document.querySelector("#cube");
        if( event.key == 'ArrowDown':) {
            cube.style.top = ( parseInt(cube.style.top) + 1)+ '%';
        }
    }
    document.addEventListener('keydown', onDocumentKeyDown);


## 2 - Attention aux collisions

Le cube peut ne peut se déplacer que dans une espace restreint : Une aire de jeux. Quand il atteint le bas, il se téléport en haut
Donc si la position est inférieur à 0%, la position devient égale à 100%.

### AIDE

Il va falloir ajuster notre traitement

1. Définir une variable "posTop" qui va stocker cette position verticale.
2. Quand la touche préssée est BAS, on incrémente la variable  "posTop"
3. Si la limite est atteinte, on ajuste la valeur
4. On effectue l'animation

### AIDE DÉTAILLÉE

Vanilla JS :

    var posTop = 0;
    var speed = 2;

    function onDocumentKeyDown(event){
        
        //gestion du déplacement
        if( event.key == 'ArrowDown') {
            posTop+= speed;
        }
    
        //gestion des limites
        if(posTop < 0){
            posTop = 100;
        }else if(posTop >= 100){
            posTop=0;
        }
        
        //animation
        var cube = document.querySelector("#cube");
        cube.style.top = ( parseInt(cube.style.top) + posTop ) + "%";
    }
    document.addEventListener('keydown', onDocumentKeyDown);


## 3 - Ajout du joueur à la souris

Lorsque la souris click sur le cube :

- Le cube devient rouge
- l'écoute du clavier s'arrête.
- alerte : Le jeux est terminé :  c'est la victoire !

### AIDE

Realy ?

### Aide détaillée

**Click**

Vanilla JS:

    var cube = document.querySelector("#cube");
    function onPlayerClick(){
            //traitement
    }
    cube.addEventListener('click', onPlayerClick);


**Off Keydown**
    
Vanilla JS:

    document.removeEventListener('click', onDocumentKeyDown);

**Alert**
    
    alert("victoire !");


## 4 - Cas de victoire pour le joueur au clavier

Nous allons autoriser le joueur au clavier à gagner s'il arrive à échapper au joueur souris pendant plus de 30 sec. Ajoutez donc un timer au jeux qui fera gagner le joueur au clavier.

- Au bout de 30 secondes, la fonction de victoireClavier se lance
- Le cube devient vert
- Les event listener sont désactivés
- Alert : le jeu est terminé, victoire du joueur au clavier

### AIDE

**SetTimeout**

    setTimeout( victoireClavier, 30*1000);

**off events**

Vanilla JS :

    document.removeEventListener('keydown', onDocumentKeyDown);
    cube.removeEventListener('click', onPlayerClick);

**Alert**

    alert("victoire !");


## 5 - Score

Les deux joueurs ont un score et dispose de 5 ou 8 manches.

### AIDE

1. Demander à chaque joueur son nom
2. Créer deux éléments HTML pour afficher les nom et les score
3. Créer une variable pour stocker le score de chacun des joueurs
4. Augmenter cette valeur à chacune de leur victoire et mettre à jour la zone HTML correspondante
5. Si le score dépasse 5, un message félicite le gagnant.


## 6 - Personnalisation

- changer le curseur pour une cible par exemple
- changer le joueur au clavier avec l'image d'un canard par exemple
- changer le background

## 7 - Équilibrage automatique

Si le joueur à la souris gagne trop souvent, on augmente la vitesse de déplacement du carré et sa taille.

## BONUS 1 - Modo solo : CPU challenge

Si il n'y a que le joueur à la souris et le carré se déplace de facon alétoire dans votre page.

## BONUS 2  - Modo solo avancé

Ajouter plus d'une cible : il est possible de jouer avec un joueur à la souris, un autre au clavier et 1 CPU.

Pour obtenir un chiffre aléatoire:

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    //récupère un chiffre aléatoire entre 0 et 100
    var randomNumber = getRandomInt(100);


## BONUS 3  - Ammo

l'utilisateur à la souris dispose d'un certain nombre d'essai pour réussir. Ce nombre est affiché à l’écran sous forme de munitions.

## BONUS 4 - CPU Challenge 2

Gérer l'augmentation de la difficulté dans une fonction du type :

    function gameStart(nbCibles, cibleSpeed, ammo){
        //traitement...
        return true si le niveau est fini en gagnant,
        return false si le niveau est perdu (ammo==0)
    }.

## BONUS 5  - Make it awesome challenge

- Gérer les trois état de la cible : en vol, shootée, morte. Adapter les comportements et sprites à chacun des états
- Gestion des cheatcode, etc...


