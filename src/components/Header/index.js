import React from 'react'

import PropTypes from 'prop-types';
import './style.scss';
// La possibilité de chercher depuis src directement est une foncionnalité webpack
import gitHubImg from 'src/assets/logo-github.png'


import {Segment, Input} from 'semantic-ui-react';
//Props recues du composant App
// inputValue : le texte que je veux afficher 
// onInputChange: fonction pour ecouter le change / a executer lors du changement
// onFormSubmit au submit je dois executer la fonction 
//  
const Header = ( {inputValue, onInputChange, onFormSubmit, loading  }) =>  (
<header className="header">
  <img src={gitHubImg} alt="logo github" className="header__logo" />

{/* Pour faire une recherche lorsque l'user tap "entrée" il faut mettre un iput dans un form*/}

<Segment >
  <form className="header__form"
  onSubmit={(evt) => {
    // Empeche la page de se recharger a chaque lettre tapées.
    evt.preventDefault();
    onFormSubmit();
  }}> 
    <Input 
    fluid 
    loading={loading}
    icon="search"
    iconPosition="left" 
    className="header__input"
    placeholder="recherchez un repo"
    value={inputValue}
    // A chaque fois qu'on tape un lettre cela déclenche un event 
    onChange={(evt) => {
    const text = evt.target.value;
    onInputChange(text); 
    }} />
  </form>
</Segment>

</header>

);

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};


export default Header; 
