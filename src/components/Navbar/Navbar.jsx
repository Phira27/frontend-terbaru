import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [expand, setExpanded] = useState(false);
  const [navColour, setNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={`${navColour ? "sticky" : "navbar"} py-2`}
    >
      <Container fluid="md" className="position-relative">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={closeMenu}>
          <img src={logo} className="img-fluid logo me-2" alt="brand" style={{maxHeight: '40px', maxWidth:'40px'}} />
          <div className="brand-title text-wrap" style={{fontSize: 'clamp(0.8rem, 2vw, 1.2rem)'}}>
            Pemantauan Kualitas Udara<br className="d-none d-sm-block" /> Kabupaten Lumajang
          </div> 
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expand)}
          className="position-absolute top-50 end-0 translate-middle-y"
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={closeMenu}>
                Home
              </Nav.Link>
            </Nav.Item>

            <NavDropdown title="History" id="basic-nav-dropdown">
              {['Pasirian', 'Lumajang', 'Senduro'].map((location) => (
                <NavDropdown.Item
                  key={location}
                  as={Link}
                  to={`/history/${location.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {location}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={closeMenu}
              >
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;