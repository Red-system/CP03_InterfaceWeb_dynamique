

// import axios
import axios from 'axios';
// == Import npm
import React, {useState } from 'react';
// using message from semantic ui 
import { Message } from 'semantic-ui-react';
// import of semantic ui for CSS 
import 'semantic-ui-css/semantic.min.css'

// == Import of style and my component 
import './styles.scss';
import Header from '../Header';
import Repos from '../Repos';
//import my data 


const BASE_URL = 'https://api.github.com/search/repositories?q='

// == Composants

const App = () => {

  //Ici se trouve le message par défaut de la landing page
  const [message, setMessage] = useState('Veuillez taper une recherche');

  const [loading, setLoading] = useState(false)

  //Voici le state qui stock la list des git, il ne s'update pas automatiquement car c'est une liste vide par defaut ([])
  const [repos, setRepos] = useState([]);

 
  //J'ai un input vierge que je veux changer et je veux le changer grace à la méthode ligne 38 appelée ligne 76
  const [inputText, setInputText] = useState('');

  // Changer le state ligne 35
  const handleInputChange = (textSaisi) => {
    setInputText(textSaisi);
  };  
  
  // Changer le state de la liste des repos ET de l'activité du loading le temps de la recherche
  const handleFormSubmit= () => {
  setLoading(true);
  //Requete Axios vers l'API (définie ligne 19) ici
  axios ({
    method: 'get',
    url: `${BASE_URL}${inputText}`,
  })
  //Si la demande renvoie quelque chose en réponse alors:
  .then((res) => {
    // Les résultats AXIOS sont toujours sous le nom .data car il renvoie égaleemnt des infos non utilisables. Ici on appelle donc res.data
  
    // On modifie alors le state ligne 31
    setRepos(res.data.items);
    const newMessage = `La recherche a donné ${res.data.total_count} repos`;
    //On modifie ici le message de base ligne 26
    setMessage(newMessage);
  })
  // Si tout cela ne marche pas => Envoyer un message d'erreur
    .catch((err) => {
    console.trace(err);
  })
    //Enfin on arrete le chargement 
  .finally(() => {
    setLoading(false);
  })
  };


return (
  <div className="app">
  <Header
  loading={loading}
  //Ici inputText recoie l'info du state ligne 35 ET renvoie l'event du header
  inputValue={inputText}
  onInputChange={handleInputChange}
  onFormSubmit={handleFormSubmit}/> 
  <Message content={message}/>
  {/* Mon Repos a besoin de la liste contenue dans le state ligne 31 set up en ligne 55. Il l'envoie sous le nom de la prop list appelée dans le composant */}
  <Repos list={repos} /> 
  </div>
);

}

// == Export
export default App;
