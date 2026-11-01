import StudentCard from "./components/StudentCard";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import monImage from "./assets/monimage.jpeg";

const etudiants = [
  {
    prenom: "Yassine",
    nom: "Ben Attia",
    email: "yassinebenattia1@gmail.com",
    telephone: "20 123 456",
    filiere: "Génie Informatique",
    anneeEtude: "2ème année",
    groupe: "Groupe B",
    ville: "Mahdia",
    image: monImage 
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "22 345 678",
    filiere: "Génie Logiciel",
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
    filiere: "Génie Logiciel",
    anneeEtude: "2ème année",
    groupe: "Groupe D",
    ville: "Sfax",
    image: "/src/assets/img1.png"
  }
];

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      
      {etudiants.map((etudiant) => (
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
          image={etudiant.image}
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;