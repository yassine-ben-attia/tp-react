function StudentCard() {
  const etudiant = {

    nom: "Ben Attia",
    prenom: "yassine",
    email: "yasinebenatia1@gmail.com",
    telephone: "20 123 456",
    filiere: "Génie Informatique",
    anneeEtude: "2ème année",
    groupe: "Groupe B",
    ville: "mahdia",
    photoUrl: "https://via.placeholder.com/150" 
  };

  const meContacter = () => {
    alert(`Contacter ${etudiant.prenom} à l'adresse : ${etudiant.email}`);
  };

  return (
    <div>
    
      <img 
        src="img1.jpg" 
        alt={`Photo de ${etudiant.prenom} ${etudiant.nom}`} 
        width="150"
      />

      <h1>Fiche Étudiant</h1>
      <p><strong>Nom :</strong> {etudiant.nom}</p>
      <p><strong>Prénom :</strong> {etudiant.prenom}</p>
      <p><strong>Email :</strong> {etudiant.email}</p>
      <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
      <p><strong>Filière :</strong> {etudiant.filiere}</p>
      <p><strong>Année d'étude :</strong> {etudiant.anneeEtude}</p>
      <p><strong>Groupe :</strong> {etudiant.groupe}</p>
      <p><strong>Ville :</strong> {etudiant.ville}</p>
      <button onClick={meContacter}>Contactez-moi</button>
    </div>
  );
}

export default StudentCard;
