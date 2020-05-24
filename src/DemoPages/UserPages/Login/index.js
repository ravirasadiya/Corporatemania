import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import bg1 from '../../../assets/utils/images/originals/city.jpg';
import bg2 from '../../../assets/utils/images/originals/citydark.jpg';
import bg3 from '../../../assets/utils/images/originals/citynights.jpg';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { userActions } from '../../../_actions';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(userActions.logout());

    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }

  render() {
    const { email, password, submitted } = this.state;
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      initialSlide: 0,
      autoplay: true,
      adaptiveHeight: true,
    };
    return (
      <Fragment>
        <div className='h-100'>
          <Row className='h-100 no-gutters'>
            <Col lg='4' className='d-none d-lg-block'>
              <div className='slider-light'>
                <Slider {...settings}>
                  <div className='h-100 d-flex justify-content-center align-items-center bg-plum-plate'>
                    <div
                      className='slide-img-bg'
                      style={{
                        backgroundImage: 'url(' + bg1 + ')',
                      }}
                    />
                    <div className='slider-content'>
                      <h3>Perfect Balance</h3>
                      <p>
                        ArchitectUI is like a dream. Some think it's too good to
                        be true! Extensive collection of unified React Boostrap
                        Components and Elements.
                      </p>
                    </div>
                  </div>
                  <div className='h-100 d-flex justify-content-center align-items-center bg-premium-dark'>
                    <div
                      className='slide-img-bg'
                      style={{
                        backgroundImage: 'url(' + bg3 + ')',
                      }}
                    />
                    <div className='slider-content'>
                      <h3>Scalable, Modular, Consistent</h3>
                      <p>
                        Easily exclude the components you don't require.
                        Lightweight, consistent Bootstrap based styles across
                        all elements and components
                      </p>
                    </div>
                  </div>
                  <div className='h-100 d-flex justify-content-center align-items-center bg-sunny-morning'>
                    <div
                      className='slide-img-bg opacity-6'
                      style={{
                        backgroundImage: 'url(' + bg2 + ')',
                      }}
                    />
                    <div className='slider-content'>
                      <h3>Complex, but lightweight</h3>
                      <p>
                        We've included a lot of components that cover almost all
                        use cases for any type of application.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </Col>
            <Col
              lg='8'
              md='12'
              className='h-100 d-flex bg-white justify-content-center align-items-center'
            >
              <Col lg='9' md='10' sm='12' className='mx-auto app-login-box'>
                <div className='app-logo' />
                <h4 className='mb-0'>
                  <div>Welcome back,</div>
                  <span>Please sign in to your account.</span>
                </h4>
                <h6 className='mt-3'>
                  No account?{' '}
                  <Link to='/register' className='text-primary'>
                    Sign up now
                  </Link>
                </h6>
                <Row className='divider' />
                <div>
                  <Form onSubmit={this.handleSubmit}>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for='email'>
                            <span className='text-danger'>*</span> Email
                          </Label>
                          <Input
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            id='email'
                            placeholder='E-Mail here...'
                            invalid={submitted && !email}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for='password'>
                            <span className='text-danger'>*</span> Password
                          </Label>
                          <Input
                            type='password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            id='password'
                            placeholder='Password here...'
                            invalid={submitted && !password}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup check>
                      <Input type='checkbox' name='check' id='exampleCheck' />
                      <Label for='exampleCheck' check>
                        Keep me logged in
                      </Label>
                    </FormGroup>
                    <Row className='divider' />
                    <div className='d-flex align-items-center'>
                      <div className='ml-auto'>
                        <Link
                          to='/forgot-password'
                          className='btn-lg btn btn-link'
                        >
                          Recover Password
                        </Link>{' '}
                        <Button type='submit' color='primary' size='lg'>
                          Login to Dashboard
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default connect()(Login);
