import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Ctrquestions from './Ctrquestion';
import Cplustrquestions from './Cplustr';
import Javatrquestions from './Javatr';
import Pythontrquestions from './Pythontr';
import Htmltrquestions from './HTMLtr';
import Csstrquestions from './CSStr';
import './TRstyles.css'; 
import Navbar2 from '../../data/Navbar2';

export default function Trpage() {
  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <div>
      <Navbar2/>
    <MDBRow className="mx-0">
      <MDBCol md='2' className="p-0 sticky-sidebar" style={{backgroundColor:'white'}}>
        <MDBTabs className='flex-column text-center'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
              C Programming
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
              C++
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
              Java
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleVerticalClick('tab4')} active={verticalActive === 'tab4'}>
              Python
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleVerticalClick('tab5')} active={verticalActive === 'tab5'}>
              Javascript
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleVerticalClick('tab6')} active={verticalActive === 'tab6'}>
              HTML
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleVerticalClick('tab7')} active={verticalActive === 'tab7'}>
              CSS
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </MDBCol>
      <MDBCol md='10' className="p-0">
        <MDBTabsContent>
          <MDBTabsPane open={verticalActive === 'tab1'}><Ctrquestions/></MDBTabsPane>
          <MDBTabsPane open={verticalActive === 'tab2'}><Cplustrquestions/></MDBTabsPane>
          <MDBTabsPane open={verticalActive === 'tab3'}><Javatrquestions/></MDBTabsPane>
          <MDBTabsPane open={verticalActive === 'tab4'}><Pythontrquestions/></MDBTabsPane>
          <MDBTabsPane open={verticalActive === 'tab5'}><Javatrquestions/></MDBTabsPane>
          <MDBTabsPane open={verticalActive === 'tab6'}><Htmltrquestions/></MDBTabsPane>
          <MDBTabsPane open={verticalActive === 'tab7'}><Csstrquestions/></MDBTabsPane>
        </MDBTabsContent>
      </MDBCol>
    </MDBRow>
    </div>
  );
}
