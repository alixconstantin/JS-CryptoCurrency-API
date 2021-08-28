//166. Utiliser une API : récupérer le prix du bitcoin (XMLHttpRequest)


const url = 'https://blockchain.info/ticker';

// Création de la requête
let requete = new XMLHttpRequest();

// Ouverture de la requête en Get, avec l'url cible
requete.open('GET', url); 

// pour être sur de recevoir du Json
requete.responseType = 'json'; 

// envoie de la requete
requete.send(); 

// Dès qu'on recoit une réponse, cette fonction est executé
requete.onload = function(){
    // Verifie l'etat accomplie de la requete
    if(requete.readyState === XMLHttpRequest.DONE){

        // verifie le code de statut de réponse HTTP 200 : réussite de la requête
        if(requete.status === 200){
            // reponse stocker
            let reponse = requete.response;
            let prixEnEuros = reponse.USD.buy;
            document.querySelector('.price_label').textContent = prixEnEuros;
            console.log('plop');
            
        }
        else {
            alert('Un problème de requête est intervenu, merci de revenir plus tard.')
        }
    }
}




