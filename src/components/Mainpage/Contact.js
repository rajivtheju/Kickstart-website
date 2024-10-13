import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { MDBIcon } from 'mdb-react-ui-kit';
import './Email.css';

function Contact() {
  const onHandleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fltk7fm', 'template_v65wlo5', e.target, 'Vsk_i2hT6bqWV2dPK')
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message sent successfully 👍',
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong 🙃',
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="background">
        <div className="email-box">
          <div className="cont-box">
            <h1 style={{textAlign:'left', color:'darkgreen'}}>Contact Information</h1>
            <p className="c-para">
              If you have any queries regarding kickstart, you can directly contact our team. They will guide you.
            </p>
            <div className="c-subbox">
              <div>
                <MDBIcon fas icon="phone" />
              </div>
              <div>
                <p className="c-details">+91 9550837034</p>
              </div>
            </div>
            <div className="c-subbox">
              <div>
                <MDBIcon fas icon="envelope" />
              </div>
              <div>
                <p className="c-details">rajivthejutheju@gmail.com</p>
              </div>
            </div>
            <div className="c-subbox">
              <div>
                <MDBIcon fas icon="location" />
              </div>
              <div>
                <p className="c-details">517102, Tirupati, Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          <form onSubmit={onHandleSubmit}>
            <div>
             
              <input
                className="text"
                type="text"
                placeholder="Name"
                required
                name="from_name"
              />
            </div>

            <div>
              <input
                className="text"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>

            <div>
              <textarea
                className="text"
                required
                name="message"
                placeholder="Message here..."
                style={{
                  width: '100%',
                  height: 100,
                  borderColor: '#909090',
                  borderWidth: 1.3,
                  marginBottom: '10px',
                  padding: '10px',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div >
              <button type="submit" className="btn-login" >
                SUBMIT MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
