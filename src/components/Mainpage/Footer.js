import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import ks from './images/kickstartimg.png'
export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/rajivtheju/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://x.com/466Rajiv' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='https://www.instagram.com/rajivtheju/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com/in/muddukuppam-rajiv-01604b267/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com/rajivtheju' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section >
        <MDBContainer className='text-center text-md-start mt-5' >
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                {/* <MDBIcon color='secondary' icon='gem' className='me-3' /> */}
              <img src={ks} 
              style={{width:"100%",
                borderRadius:'10px',
                boxShadow:'0 0 2px blue'
              }} />
              </h6>
              <p>
                kickstart is specially made for beginners if it helps for your career that was the best gift for us.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Courses</h6>
              <p>
                <a href='#!' className='text-reset'>
                  C
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  C++
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Java
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Python
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='https://rajiv145.hashnode.dev/kickstart-strat-learning-from-scracth' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='https://t.me/fresher_offcampus_drives' className='text-reset'>
                  Freshers jobs
                </a>
              </p>
              <p>
                <a href='https://www.overleaf.com/latex/templates/tagged/cv' className='text-reset'>
                  Edit resume
                </a>
              </p>
              <p>
                <a href='mailto:rajivthejutheju@gmail.com' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Design & developed by</h6>
              <p>
                <MDBIcon color='secondary' icon='user' className='me-2' />
                 Rajiv Muddukuppam
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' />Junior Frontend developer
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                rajivthejutheju.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' />+ 91 9550837034
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:Rajivtheju
        {/* <a className='text-reset fw-bold' href='https://mdbootstrap.com/'> */}
          {/* MDBootstrap.com
        </a> */}
      </div>
    </MDBFooter>
  );
}