import {useState } from "react";
function StudentCard(props) {// ou on peut reecrire tout les props dans des accolades 

  const [coordonneesVisibles , setcoordonneesVisibles] = useState(false);
  function basculerInformation (){
    setcoordonneesVisibles(!coordonneesVisibles);// !:0 ttransforme true en false 
  }

  const meContacter = () => {
    alert(`Contacter ${props.prenom} à l'adresse : ${props.email}`);
  };

  return (//html dans le return 
    <div className="card">
    
      <img 
        src={props.image}
        alt={`Photo de ${props.prenom} ${props.nom}`} 
        className="avatar"
        width={150}
      />

      <h2>Fiche Étudiant</h2>
      <p><strong>Nom & prenom </strong> {props.nom} {props.prenom}</p>
      {coordonneesVisibles && (
      <>
      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Téléphone :</strong> {props.telephone}</p>
      </>
)}
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {props.ville}</p>
     <button className="btn-contact" onClick={meContacter}>Contactez-moi</button>
     <button onClick={basculerInformation}>{coordonneesVisibles
      ? "Masquer les coordonnees"
      : "Afficher les coordonnees"}
      </button>
     <button onClick={() =>props.onSupprimer(props.email)}>supprimer</button>
     <button onClick={() =>props.onModifier(props.email)}>Modifier</button>
      </div>//Pourquoi () => .... ? C'est une fonction fléchée anonyme. Elle sert de "barrière" : elle dit à React "N'exécute pas la fonction tout de suite, attends s'il te plaît que l'utilisateur clique sur le bouton, et ensuite déclenche props.onSupprimer avec l'email de cet étudiant".
  );
      
   
}//condition ? valeurSiVraie    : valuerSiFausse

export default StudentCard;
