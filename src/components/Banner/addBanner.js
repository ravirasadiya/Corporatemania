import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from 'reactstrap';
import { toBase64 } from '../../_helpers';
import { connect } from 'react-redux';
import { bannerActions } from '../../_actions';

class AddBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      url: '',
      position: '',
      selectedOption: 1,
      image: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { image } = this.state;
    const { dispatch } = this.props;
    if (image) {
      dispatch(bannerActions.addBanner(this.state));
    }
  }

  handlePicture = async (e) => {
    this.setState({
      image: await toBase64(e.target.files[0]),
    });
  };

  render() {
    const {
      title,
      content,
      url,
      selectedOption,
      position,
      image,
      submitted,
    } = this.state;
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
          <Container fluid>
            <Card className='main-card mb-3'>
              <CardBody>
                <CardTitle>Add New Banner</CardTitle>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label for='title' sm={2}>
                      Title
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='text'
                        name='title'
                        value={title}
                        onChange={this.handleChange}
                        id='title'
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='content' sm={2}>
                      Content
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='text'
                        name='content'
                        id='content'
                        value={content}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='url' sm={2}>
                      URL
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='text'
                        name='url'
                        id='url'
                        value={url}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='position' sm={2}>
                      Position
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='text'
                        name='position'
                        id='position'
                        value={position}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='image' sm={2}>
                      Picture
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='file'
                        name='image'
                        id='image'
                        onChange={(e) => this.handlePicture(e)}
                      />
                      <FormText color='muted'>
                        Used in the Main Banner area on the homepage
                      </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='status' sm={2}>
                      Status
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='select'
                        name='status'
                        id='status'
                        onChange={this.handleChange}
                      >
                        <option key={'active'} value={1}>
                          Active
                        </option>
                        <option key={'de-active'} value={0}>
                          Inactive
                        </option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                      <Button type='submit'>Submit</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Container>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default connect()(AddBanner);
