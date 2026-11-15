import StudentCard from "./components/StudentCard";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import monImage from "./assets/monimage.jpeg";
import {useState} from "react";
//rq importations et declarations(const ,let ) simples  en dehors de fonction app 
function App() {
const[Etudiants,setEtudiants]=useState([// 1. Le useState et les fontions doit etre doit être à l'intérieur de App() mais dans le return en met seul le html
  {
    prenom: "Yassine",
    nom: "Ben Attia",
    email: "yassinebenattia1@gmail.com",
    telephone: "20 123 456",
    filiere: "Genie logicielle",
    anneeEtude: "2ème année",
    groupe: "Groupe C",
    ville: "Mahdia",
    image: monImage 
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "22 345 678",
    filiere: "Systemes d information",
    anneeEtude: "2ème année",
    groupe: "Groupe A",
    ville: "Sousse",
    image: "/src/assets/img1.png"
  },
  {
    prenom: "salem",
    nom: "alaya",
    email: "salemalaya@gmail.com",
    telephone: "22 555 678",
    filiere: "mathematiques",
    anneeEtude: "2ème année",
    groupe: "Groupe D",
    ville: "Sfax",
    image: "/src/assets/img1.png"
  }//valeur initiale de l'etat etudiant
]);
function ajouteretudiant(){
  const nouveletudiant ={
    nom:"Mouhamed",
    prenom:"Amri",
    email:"mohamedamri@gmail.com",
    telephone:"123 55 55",
    filiere:"technologie",
    anneeEtude: "2eme annee ",
    groupe:"groupe E",
    ville :"Ariana",
    image : "/src/assets/img1.png"
}//declaration de nouvel etudiant 
setEtudiants([...Etudiants,nouveletudiant]);//"..."operateur de decomposition pour creer un nouveau tableau 
//etudiants:liste precedente ,...etudiants extracte le contenu de tableau pour ne pas creer un tableau dans un tableau,les crochets [] creent un nouveau tableau //le useState et la liste doivent obligatoirement être à l'intérieur de la fonction App pour que React puisse surveiller les changements et mettre à jour l'écran
}
  function supprimerEtudiant(id){//id est un choix de nommage de la variable
    setEtudiants(
      (anciensetudiants,)=>anciensetudiants.filter((etudiant) => etudiant.email !==id),//filter conserve  l element etudiant si condition satisfaite //rq etudiant.email pas etudiant.id car etudiant ne contient pas id 
    ) ;//anciensEtudiants : représente l'ancienne valeur du state, fournie automatiquement par React.//filter() : parcourt le tableau et crée un nouveau tableau.//À retenir : On utilise une fonction callback pour être sûr de travailler avec la dernière valeur du state.
  }
  function modifierEtudiant(id){
    console.log("Le bouton modifier a été cliqué ! ID:", id);
    const newPrenom=prompt("donner le nouveau prenom :");
    if (newPrenom !== null && newPrenom.trim() !== "")
    {
      setEtudiants(ancienEtudiants => ancienEtudiants.map(etudiant =>
    
        etudiant.email === id 
        ? {...etudiant ,
         prenom : newPrenom.trim()}// accolades pour obtenir un seul element  puisque on a utilise le spread operator ...
        : etudiant    
    )
  );//; a la fin de set 
    }
  }
  const [recherche,setRecherche]=useState("")//setRecherche est une fonction fournie automatiquement par React (via le hook useState) qui sert exclusivement à modifier la valeur de recherche et à demander à React de mettre à jour l'affichage à l'écran.//Note : Techniquement, tu pourrais l'appeler modifierRecherche, mais utiliser setRecherche est la norme universelle que tous les développeurs et enseignants attendent en React
  const etudiantsFiltres = Etudiants.filter((etudiant) =>
        etudiant.filiere.toLowerCase().includes(recherche.toLowerCase()))
  return (//rq html dans le return
    <div className="container">
      <Header />
      <Navbar />
      <input type="text" 
      placeHolder="Recherche par filiere..." //texte en gris avant la recherche
      value={recherche}//la valeur de champ correspondant au state recherche
       onChange={e=>setRecherche(e.target.value)}//e n'est pas l'ancienne valeur, c'est l'objet événement (event) généré automatiquement par le navigateur au moment où tu tapes au clavier. e.target désigne la balise <input> elle-même, et e.target.value récupère le texte actuel écrit dedans.//cette foction onchange  s execute lorsque on change le texte de input  //e.target.value :recupere la valeur entree par l utilisateur// la modification de state recherche n'est pas dans une fonction en dehors de return comme pour un bouton mais onChange maintenant fait appel a setRecherche pour modifier l etat  
       />
      <div className="actions">
      <button onClick={ajouteretudiant}>ajouter</button> 
      </div>
      {etudiantsFiltres.map((etudiant) => (//etudiant n est pas un props//"=>" transforme l element etudiant dans un student card (et la boucle de map permet d afficher plusieurs cartes)
        <StudentCard
          key={etudiant.email}
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          email={etudiant.email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          anneeEtude={etudiant.anneeEtude}
          groupe={etudiant.groupe}
          ville={etudiant.ville} 
          image={etudiant.image}//props 
          onSupprimer={supprimerEtudiant}//on veut supprimer un etudiant de tabeau a partir de son id // permet l utilisation de la fonction par props dans le composant student card 
          onModifier={modifierEtudiant}//transmet la fonction a student card 
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;