import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../../actions';
import Slider from "react-slick";

import bg3 from '../../../assets/utils/images/originals/citynights.jpg';

import {Col, Row, Button, Form, FormGroup, FormFeedback, Label, Input} from 'reactstrap';

  const Register = (props) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email:'',
        password: '',
        rpassword:'',
        userGroupId:1
    });
    const [submitted, setSubmitted] = useState(false);
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
      adaptiveHeight: true

  };

    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password) {
          dispatch(userActions.register(user));
        }
    }

    return (
      <Fragment>
        <div className="h-100">
            <Row className="h-100 no-gutters">
                <Col lg="7" md="12" className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center">
                    <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                        <div className="app-logo"/>
                        <h4>
                            <div>Welcome,</div>
                            <span>It only takes a <span className="text-success">few seconds</span> to create your account</span>
                        </h4>
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="firstName">First Name</Label>
                                            <Input type="text" name="firstName" value={user.firstName} onChange={handleChange} id="firstName" placeholder="First Name here..." invalid={submitted && !user.firstName}/>
                                            {submitted && !user.firstName &&
                                            <FormFeedback>Oh noes! that name is already taken</FormFeedback>}
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="lastName">Last Name</Label>
                                            <Input type="text" name="lastName" value={user.lastName} onChange={handleChange} id="lastName" placeholder="Last Name here..." invalid={submitted && !user.lastName}/>
                                            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="username">Username</Label>
                                            <Input type="text" name="username" value={user.username} onChange={handleChange} id="username" placeholder="User Name here..." invalid={submitted && !user.username}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="email">
                                                <span className="text-danger">*</span>
                                                {' '}Email
                                            </Label>
                                            <Input type="email" name="email" value={user.email} onChange={handleChange} id="email" placeholder="E-Mail here..." invalid={submitted && !user.email}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="password">
                                                <span className="text-danger">*</span>
                                                {' '}Password
                                            </Label>
                                            <Input type="password" name="password" value={user.password} onChange={handleChange} id="password" placeholder="Password here..." invalid={submitted && !user.password}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="PasswordRep">
                                                <span className="text-danger">*</span>
                                                {' '}Repeat Password
                                            </Label>
                                            <Input type="password" name="rpassword" value={user.rpassword} onChange={handleChange} id="rpassword" placeholder="Repeat Password here..." invalid={submitted && (user.rpassword != user.password || !user.rpassword)}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup className="mt-3" check>
                                    <Input type="checkbox" name="check" id="exampleCheck"/>
                                    <Label for="exampleCheck" check>Accept our <Link to="/">Terms and Conditions</Link>.</Label>
                                </FormGroup>
                                <div className="mt-4 d-flex align-items-center">
                                    <h5 className="mb-0">
                                        Already have an account?{' '}
                                        <Link to="/login" className="text-primary">Sign in</Link>
                                    </h5>
                                    <div className="ml-auto">
                                        <Button type="submit" color="primary" className="btn-wide btn-pill btn-shadow btn-hover-shine" size="lg">Create Account</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Col>
                <Col lg="5" className="d-lg-flex d-xs-none">
                    <div className="slider-light">
                        <Slider  {...settings}>
                            <div
                                className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                <div className="slide-img-bg"
                                    style={{
                                        backgroundImage: 'url(' + bg3 + ')'
                                    }}/>
                                <div className="slider-content">
                                    <h3>Scalable, Modular, Consistent</h3>
                                    <p>
                                        Easily exclude the components you don't require. Lightweight, consistent
                                        Bootstrap based styles across all elements and components
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Col>
            </Row>
        </div>
      </Fragment>
    );
}

export default Register;