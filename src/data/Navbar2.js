import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import '../components/Mainpage/About.css'
export default function Navbar2() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="light" >
        <MDBContainer fluid>
          <div className="d-flex justify-content-between w-100">
            <MDBNavbarBrand href="#"><h1> <MDBIcon fas icon="book-open" /> Kickstart</h1></MDBNavbarBrand>
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
          </div>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mb-2 mb-lg-0 justify-content-end">
              <MDBNavbarItem>
                <MDBNavbarLink  href="#home">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="https://rajiv145.hashnode.dev/kickstart-strat-learning-from-scracth">
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="https://docs.google.com/forms/d/e/1FAIpQLSee60AuAbnRjGsd1lvgHUHu8O_c4TeSHBmm8xq3Vssu9tjd6g/viewform">
                  Feedback
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="mailto:rajivthejutheju@gmail.com">
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
