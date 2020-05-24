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
import { iconData } from '../../../assets/data/iconData';
import { toBase64 } from '../../../_helpers';
import { categoryActions } from '../../../_actions';
import { categoryService } from '../../../_services';
import { connect } from 'react-redux';

class CreateCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      slug: '',
      description: '',
      icon: '',
      image: '',
      active: 1,
      sortOrder: 0,
      submitted: false,
      categoryList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePicture = this.handlePicture.bind(this);
  }

  componentDidMount() {
    categoryService.categorylist().then((data) => {
      this.setState({
        categoryList: data,
      });
    });
  }

  handleChange(e) {
    console.log(e);
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state.parentInt);
  }

  handlePicture = async (e) => {
    this.setState({
      image: await toBase64(e.target.files[0]),
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { dispatch } = this.props;
    dispatch(categoryActions.addCategory(this.state));
  }

  render() {
    const {
      name,
      slug,
      description,
      submitted,
      categoryList,
      sortOrder,
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
                <CardTitle>Add a New Category</CardTitle>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label for='exampleEmail' sm={2}>
                      Category Name
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                        id='name'
                        invalid={submitted && !name}
                      />
                      {/* {submitted && !user.firstName && (
                        <FormFeedback>Please Enter Category Name</FormFeedback>
                      )} */}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='slug' sm={2}>
                      Slug
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='text'
                        name='slug'
                        id='slug'
                        value={slug}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='description' sm={2}>
                      Description
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='textarea'
                        name='description'
                        id='description'
                        value={description}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='picture' sm={2}>
                      Picture
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='file'
                        name='picture'
                        id='picture'
                        onChange={(e) => this.handlePicture(e)}
                      />
                      <FormText color='muted'>
                        Used in the categories area on the homepage (Related to
                        the type of display: "Picture as Icon").
                      </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='icon' sm={2}>
                      Icon
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='select'
                        name='icon'
                        id='icon'
                        onChange={this.handleChange}
                      >
                        {[...iconData].map((x, i) => (
                          <option key={i} value={x}>
                            {x}
                          </option>
                        ))}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='parentInt' sm={2}>
                      Parent Category
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='select'
                        name='parentInt'
                        id='parentInt'
                        onChange={this.handleChange}
                      >
                        {[...categoryList].map((x, i) => (
                          <option key={i} value={x.categoryId}>
                            {x.name}
                          </option>
                        ))}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='sortOrder' sm={2}>
                      Sort Order
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='number'
                        name='sortOrder'
                        id='sortOrder'
                        value={sortOrder}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='type' sm={2}>
                      Type
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='select'
                        name='type'
                        id='type'
                        onChange={this.handleChange}
                      >
                        <option key={'active'} value={1}>
                          Active
                        </option>
                        <option key={'de-active'} value={0}>
                          De-Active
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

export default connect()(CreateCategory);
