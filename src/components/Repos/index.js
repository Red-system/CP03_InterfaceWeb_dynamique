// == Import npm
import React from 'react';
// == Import
import './style.scss';
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'

// import of my DATA

// == Composant
// On recupere ici la prop list de App
const Repos = ({ list }) => (
  <div className="repos">
  <Card.Group className="repos__card">
    {
      // On map les elements de la [list] sous le nom repoObj et leur donnant les infos contenues dans ces objets
      list.map((repoObj) => (
        <Card
        //On map alors les elements de l'objet dans l'element CSS de Semantic-UI en les faisant correspondre à la classe dans lequel ils doivent se trouver (voir donc Semantic UI)
        key={repoObj.id}
        image={repoObj.owner.avatar_url}
        header={repoObj.name}
        meta={repoObj.owner.login}
        // Petit ternaire pour afficher ou pas une description ''
        description={repoObj.description ? repoObj.description : ''}>
        </Card>
      ))
    }

   
  </Card.Group>
  </div>
);


Repos.propTypes = {
  list: PropTypes.arrayOf(
    
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
   
      owner: PropTypes.shape ({
        login: PropTypes.string,
        avatar_url: PropTypes.string,

      }),
    }),
  ).isRequired,

}
// == Export
export default Repos;
