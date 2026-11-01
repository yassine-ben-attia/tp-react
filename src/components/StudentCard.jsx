function StudentCard(props) {
  
  const meContacter = () => {
    alert(`Contacter ${props.prenom} à l'adresse : ${props.email}`);
  };

  return (
    <div className="card">
    
      <img 
        src={props.image}
        alt={`Photo de ${props.prenom} ${props.nom}`} 
        className="avatar"
        width={150}
      />

      <h2>Fiche Étudiant</h2>
      <p><strong>Nom & prenom </strong> {props.nom} {props.prenom}</p>
      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Téléphone :</strong> {props.telephone}</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {props.ville}</p>
     <button className="btn-contact" onClick={meContacter}>Contactez-moi</button>
    </div>
  );
}

export default StudentCard;
