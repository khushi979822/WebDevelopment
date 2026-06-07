import logo from "../images/craveing logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Craving Logo" className="logo" />

      <div className="nav-links">
        <a href="/login">Login</a>

        <a href="/register" className="register-btn">
          Register
        </a>
      </div>
    </header>
  );
}

export default Header;
