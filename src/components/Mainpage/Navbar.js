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
import './About.css'
export default function NavbarComponent() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="light" className="fixed-top">
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
                <MDBNavbarLink href="https://forms.gle/t3MRah8xNfcBrm8y5">
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
      <div style={{ height: "105px" }}></div>
    </div>
  );
}
