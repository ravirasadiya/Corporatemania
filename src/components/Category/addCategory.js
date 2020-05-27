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
import { toBase64, imageResizeURL, URLToBase64 } from '../../_helpers';
import { categoryActions } from '../../_actions';
import { categoryService } from '../../_services';
import { connect } from 'react-redux';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    if (props.location.state != undefined && props.location.state.detail) {
      const data = props.location.state.detail;
      URLToBase64(imageResizeURL(data.image, data.imagePath, 690, 1920)).then(
        (data) => {
          this.setState({
            image: data,
          });
        }
      );
      this.state = {
        name: data.name,
        active: data.isActive,
        sortOrder: data.sortOrder,
        submitted: false,
        edit: true,
        categoryList: [],
        categoryId: data.categoryId,
        parentInt: data.parentInt,
      };
    } else {
      this.state = {
        name: '',
        categoryId: '',
        image: '',
        active: 1,
        sortOrder: 0,
        submitted: false,
        parentInt: 0,
        edit: false,
        categoryList: [],
      };
    }

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
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handlePicture = async (e) => {
    this.setState({
      image: await toBase64(e.target.files[0]),
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { edit } = this.state;
    const { dispatch } = this.props;
    if (!edit) {
      dispatch(categoryActions.addCategory(this.state));
    } else if (edit) {
      dispatch(categoryActions.updateCategory(this.state));
    }
  }

  render() {
    const {
      name,
      submitted,
      categoryList,
      parentInt,
      sortOrder,
      edit,
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
                {!edit && <CardTitle>Add a New Category</CardTitle>}
                {edit && <CardTitle>Edit a Category</CardTitle>}
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
                    <Label for='parentInt' sm={2}>
                      Parent Category
                    </Label>
                    <Col sm={10}>
                      <Input
                        type='select'
                        name='parentInt'
                        id='parentInt'
                        value={parentInt}
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

export default connect()(AddCategory);
