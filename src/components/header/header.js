
import Nav from "../nav/nav";

const Header = () => {

  return (
    <header className="spaceBetween">
      <a href="/">
        <img src="/icons_assets/Logo.svg" alt="Little Lemon Logo"/>
      </a>
      <Nav></Nav>
    </header>
  );

};

export default Header;