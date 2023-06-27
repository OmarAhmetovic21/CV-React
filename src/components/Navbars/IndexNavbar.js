import React from "react";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand>
             <h5><b>Omar Ahmetović CV</b></h5>
            </NavbarBrand>
  
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="mailto:omarahmetovic19@gmail.com" target="_blank" id="twitter-tooltip">
                  <h5><i class="fa fa-envelope"></i></h5>
                  <p className="d-lg-none d-xl-none">Email</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="tel:061651756" target="_blank" id="twitter-tooltip">
                  <h5><i class="fa fa-phone"></i></h5>
                  <p className="d-lg-none d-xl-none">Phone</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/OmarAhmetovic21" target="_blank" id="twitter-tooltip">
                  <h5><i class="fa-brands fa-github" style={{bacgroundColor: "white"}}></i></h5>
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="mailto:omarahmetovic19@gmail.com" target="_blank" id="twitter-tooltip">
                  <h5><i class="fa fa-envelope"></i></h5>
                  <p className="d-lg-none d-xl-none">Email</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
