import React, { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

import { useAuth } from '../../context/AuthProvider';

function Userprofile() {
  const { user, signOut } = useAuth();
  const [showProfile, setShowProfile] = useState(true);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setShowProfile(false);
  };

  return (
    <MDBContainer style={{ position: 'absolute', top: '60px', right: '0' }}>
      {showProfile && (
        <MDBRow className="justify-content-end">
          <MDBCol md="9" lg="7" xl="5" className="mt-3 justify-content-end">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      fluid
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{user.email}</MDBCardTitle>
                    <MDBCardText>Senior Journalist</MDBCardText>

                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}
                    >
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1" onClick={handleClose}>
                        Close
                      </MDBBtn>
                      <MDBBtn className="flex-grow-1" onClick={handleLogout}>
                        LogOut
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
}

export default Userprofile;
