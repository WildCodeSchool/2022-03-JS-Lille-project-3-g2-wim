import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import arrow from "../../assets/Images/arrow-retour.png";
import SAccordion from "./style";

export default function Informations() {
  const { id } = useSelector((state) => state.user);

  const [active, setActive] = useState(" ");
  const datas = [
    {
      id: 1,
      title: "Politique de confidentialité",
      text: "Les données personnelles recueillies sur notre site seront utilisées uniquement aux fins précisées dans la présente politique ou indiquées sur les pages pertinentes de notre site. Nous n'utiliserons pas vos données au-delà de ce que nous divulguerons.",
    },
    {
      id: 2,
      title: "Conditions générales d’utilisation",
      text: "Les présentes CGU ou Conditions Générales d’Utilisation encadrent juridiquement Constituant le contrat entre la société Work in music, l’Utilisateur, l’accès au site doit être précédé de l’acceptation de ces CGU. L’accès à cette plateforme signifie l’acceptation des présentes CGU. L’édition du site wim.fr est assurée par la société Work in music au RCS sous le numéro 451 432 228, dont le siège social est localisé au 3 Rue Docteur Joubert, 59110, La Madeleine, France Métropolitaine.L’hébergeur du site wim.fr est la société WCS, sise au 5 Rue Keller, 59100 Roubaix, Francee. Le site est accessible gratuitement depuis n’importe où par tout utilisateur disposant d’un accès à Internet. Tous les frais nécessaires pour l’accès aux services (matériel informatique, connexion Internet…) sont à la charge de l’utilisateur. L’accès aux services dédiés aux membres s’effectue à l’aide d’un identifiant et d’un mot de passe. Pour des raisons de maintenance ou autres, l’accès au site peut être interrompu ou suspendu par l’éditeur sans préavis ni justification. Pour la création du compte de l’Utilisateur, la collecte des informations au moment de l’inscription sur le site est nécessaire et obligatoire. Conformément à la loi n°78-17 du 6 janvier relative à l’informatique, aux fichiers et aux libertés, la collecte et le traitement d’informations personnelles s’effectuent dans le respect de la vie privée. Suivant la loi Informatique et Libertés en date du 6 janvier 1978, articles 39 et 40, l’Utilisateur dispose du droit d’accéder, de rectifier, de supprimer et d’opposer ses données personnelles.",
    },
    {
      id: 3,
      title: "Informations",
      text: "Work in music version alpha 0.1.2",
    },
  ];
  return (
    <SAccordion>
      <div className="infos-container">
        <Link
          className="button-return"
          to={`/profil/${id}`}
          style={{ textDecoration: "none" }}
        >
          <img src={arrow} alt="fleche" />
        </Link>
        <h1>À propos</h1>
      </div>
      <div className="accordion">
        {datas.map((data) => (
          <div key={data.id}>
            <div className="accordionHeading">
              <div className="container">
                <button
                  className="containerbutton"
                  type="button"
                  onClick={() => setActive(data.title)}
                >
                  <div className="titleCategory">
                    <p> {data.title}</p>
                  </div>
                </button>
              </div>
            </div>
            <div
              className={`${
                active === data.title ? "show" : ""
              }accordionContent`}
            >
              <div className="for-text">
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SAccordion>
  );
}
