import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import MyAccount from "../component/MyAccount";
import { useEffect, useState } from "react";
import Articles from "../component/Articles";

const Transaction = ({ accountType }) => {
  //   console.log(accountType);
  const { id } = useParams();
  const [infos, setInfos] = useState({});
  useEffect(() => {
    const account = accountType.find((el) => el.id === parseInt(id));
    setInfos(account);
  }, [id]);

  if (!infos || Object.keys(infos).length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    <main className="page transactionPage">
      <MyAccount infos={infos} />
      <section className="transactionsTable">
        <div className="tr">
          <p className="table__title">Date</p>
          <p className="table__title">Description</p>
          <p className="table__title">Amount</p>
          <p className="table__title">Balance</p>
        </div>
        {[...Array(5)].map((_, index) => (
          <Articles key={index} />
        ))}
      </section>
    </main>
  );
};
Transaction.propTypes = {
  accountType: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Transaction;
