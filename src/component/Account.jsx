import PropTypes from "prop-types";
import "../designs/css/main.css";
import { Link } from "react-router-dom";

const Account = ({ infos }) => {
  const formatAmount = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Link to={`/profile/transaction/${infos.id}`} className="accountsLinks">
      <div className="userAccount">
        <section className="userAccount-details">
          <p className="userAccount-title">{infos.type}</p>
          <h1 className="userAccount-balance">${formatAmount(infos.amount)}</h1>
          <p className="userAccount-available"> {infos.valable} </p>
        </section>
        <section className="userAccount-actions">
          <button className="userAccount-button">View transactions</button>
        </section>
      </div>
    </Link>
  );
};

Account.propTypes = {
  infos: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    valable: PropTypes.string.isRequired,
  }).isRequired,
};

export default Account;
