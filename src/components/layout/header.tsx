import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="home-link">
          🏠 Inicio
        </Link>
      </div>
      <div className="header-center">
        <h1 className="header-title">MuniDenuncia</h1>
      </div>
    </header>
  );
};

export default Header;
