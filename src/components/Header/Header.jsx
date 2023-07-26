const Header = () => {
    return ( 
        <header className="header-container"> 
        <h1>Restaurant Menu</h1>
          <nav>
            {/* <img src={Logo} alt="Logo" /> */}
              <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
    );
  };
  
  export default Header;





  