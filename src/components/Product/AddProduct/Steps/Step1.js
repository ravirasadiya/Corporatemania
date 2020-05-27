import React, { Fragment } from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import CKEditor from 'react-ckeditor-component/lib/ckeditor';

export default class WizardStep1 extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='form-wizard-content'>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Product Name'
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for='sku'>SKU</Label>
                <Input type='text' name='sku' id='sku' placeholder='SKU' />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for='upc'>UPC</Label>
                <Input type='text' name='upc' id='upc' placeholder='UPC' />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for='name'>Product Descriptions</Label>
            <CKEditor
              events={{
                blur: this.onBlur,
                afterPaste: this.afterPaste,
                change: this.onChange,
              }}
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='meta-title'>Meta Title</Label>
                <Input
                  type='text'
                  name='meta-title'
                  id='meta-title'
                  placeholder='Meta Title'
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='meta-keyword'>Meta Keyword</Label>
                <Input
                  type='text'
                  name='meta-keyword'
                  id='meta-keyword'
                  placeholder='Meta Keyword'
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for='name'>Meta Descriptions</Label>
            <CKEditor
              events={{
                blur: this.onBlur,
                afterPaste: this.afterPaste,
                change: this.onChange,
              }}
            />
          </FormGroup>
        </div>
      </Fragment>
    );
  }
}
