import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Card, CardBody, Row, Col } from 'reactstrap';

import MultiStep from '../../../_helpers/Wizard';
import WizardStep2 from './Steps/Step2';
import WizardStep1 from './Steps/Step1';
import WizardStep4 from './Steps/Step4';

const steps = [
  { name: 'Product Information', component: <WizardStep1 /> },
  { name: 'Payment Information', component: <WizardStep2 /> },
  { name: 'Finish Wizard', component: <WizardStep4 /> },
];

class AddProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component='div'
          transitionName='TabsAnimation'
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Row>
            <Col md='12'>
              <Card className='main-card mb-3'>
                <CardBody>
                  <div className='forms-wizard-vertical'>
                    <MultiStep showNavigation={true} steps={steps} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default AddProduct;
