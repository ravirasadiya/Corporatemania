import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Col, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input, FormText, Container
} from 'reactstrap';
import { iconData }from '../../../../assets/data/iconData';
export default class CreateCategory extends Component {

    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Container fluid>
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Add a New Category</CardTitle>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>Name</Label>
                                        <Col sm={10}>
                                            <Input type="email" name="email" id="exampleEmail"
                                                   placeholder="with a placeholder"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="examplePassword" sm={2}>Slug</Label>
                                        <Col sm={10}>
                                            <Input type="password" name="password" id="examplePassword"
                                                   placeholder="password placeholder"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleText" sm={2}>Description</Label>
                                        <Col sm={10}>
                                            <Input type="textarea" name="text" id="exampleText"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleFile" sm={2}>Picture</Label>
                                        <Col sm={10}>
                                            <Input type="file" name="file" id="exampleFile"/>
                                            <FormText color="muted">
                                                Used in the categories area on the homepage (Related to the type of display: "Picture as Icon").
                                            </FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleSelect" sm={2}>Icon</Label>
                                        <Col sm={10}>
                                            <Input type="select" name="select" id="exampleSelect">
                                            {[...iconData].map((x, i) =>
                                                <option key={i}>{x}</option>
                                            )}
                                                
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleSelect" sm={2}>Type</Label>
                                        <Col sm={10}>
                                            <Input type="select" name="select" id="exampleSelect"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup check row>
                                        <Col sm={{size: 10, offset: 2}}>
                                            <Button>Submit</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Container>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
