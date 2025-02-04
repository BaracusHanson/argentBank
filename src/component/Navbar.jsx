import { Link, useNavigate } from "react-router-dom";
import logo from "../designs/img/argentBankLogo.png";
import { FaUser } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../utils/slices/authSlice";
import { useEffect } from "react";
import { fetchUserProfile } from "../utils/slices/profileSlice";

const Navbar = () => {
  const userToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // Vérifier si `user` existe avant de destructurer `profile`
  const userState = useSelector((state) => state.user || {});
  const { profile } = userState;

  useEffect(() => {
    if (userToken) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, userToken]);

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userToken ? (
          <div className="userContainerLogOut">
            <Link
              to={profile ? `/profile/${profile.id}` : "/"}
              className="userLogout"
            >
              <FaUser />
            </Link>
            {profile ? (
              <h1 className="userNameConnected">
                {profile.firstName} {profile.lastName}
              </h1>
            ) : (
              <p>Chargement...</p>
            )}

            <p className="signOutWord" onClick={handleLogout}>
              <PiSignOutBold className="logoutIcon" />
              Sign out
            </p>
          </div>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
