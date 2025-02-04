import { useSelector } from "react-redux";
import Account from "../component/Account";
import UpdataUserName from "../component/UpdataUserName";
import "../designs/css/main.css";
import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";

const Profil = ({ accountType }) => {
  // Récupère le token de l'état global
  const userToken = useSelector((state) => state.auth.token);

  // Si le token est absent, redirige vers la page de connexion
  if (!userToken) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="page userPage">
      {/* Mise à jour du nom d'utilisateur */}
      <UpdataUserName />

      {/* Affichage des informations de compte */}
      {accountType.length > 0 ? (
        accountType.map((acc, index) => <Account key={index} infos={acc} />)
      ) : (
        <p>Aucun compte disponible.</p> // Message si aucune donnée de compte n'est passée
      )}
    </section>
  );
};

Profil.propTypes = {
  // Validation de la prop accountType, qui doit être un tableau d'objets
  accountType: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Profil;
