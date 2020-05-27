import React, { Fragment } from 'react';
import {
  FormGroup,
  Label,
  CustomInput,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DatePicker from 'react-datepicker';

export default class WizardStep2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <Fragment>
        <div className='form-wizard-content'>
          <FormGroup>
            <Label for='exampleCustomSelect'>Category</Label>
            <CustomInput
              type='select'
              id='exampleCustomSelect'
              name='customSelect'
            >
              <option value=''>Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </CustomInput>
          </FormGroup>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <div className='input-group-text'>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
            </InputGroupAddon>
            <DatePicker
              className='form-control'
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </InputGroup>
          <FormGroup>
            <Label for='exampleCustomFileBrowser'>File Browser</Label>
            <CustomInput
              type='file'
              id='exampleCustomFileBrowser'
              name='customFile'
            />
          </FormGroup>
          <FormGroup>
            <Label for='exampleCustomFileBrowser'>
              File Browser with Custom Label
            </Label>
            <CustomInput
              type='file'
              id='exampleCustomFileBrowser'
              name='customFile'
              label='Yo, pick a file!'
            />
          </FormGroup>
          <FormGroup>
            <Label for='exampleCustomFileBrowser'>File Browser Disabled</Label>
            <CustomInput
              type='file'
              id='exampleCustomFileBrowser'
              name='customFile'
              disabled
            />
          </FormGroup>
        </div>
      </Fragment>
    );
  }
}
