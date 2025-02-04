import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./page/Accueil.jsx";
import "./designs/css/main.css";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import SignIn from "./page/SignIn.jsx";
import Profil from "./page/Profil.jsx";
import Transaction from "./page/Transaction.jsx";
import store from "./utils/store.js";
import { Provider } from "react-redux";

function App() {
  // console.log(store);
  const accountType = [
    {
      id: 1,
      type: "Argent Bank Checking(x8349)",
      amount: 2082.79,
      valable: "Available Balance",
    },
    {
      id: 2,
      type: "Argent Bank Saving(x67124)",
      amount: 10928.42,
      valable: "Available Balance",
    },
    {
      id: 3,
      type: "Argent Bank Credit Card (x5201)",
      amount: 184.3,
      valable: "Current Balance",
    },
  ];
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/profile"
              element={<Profil accountType={accountType} />}
            />
            <Route
              path="/profile/transaction/:id"
              element={<Transaction accountType={accountType} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
