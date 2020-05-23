import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, Route } from 'react-router-dom';
import PageTitle from '../../../../Layout/AppMain/PageTitle';
import { Card, CardTitle,Button, Row } from 'reactstrap';

export default class CategoryDefault extends Component {

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
                    <PageTitle
                        heading="Categories"
                        subheading="This is an example dashboard created using build-in elements and components."
                        icon="pe-7s-car icon-gradient bg-mean-fruit"
                    />
                    <Row> 
                        <Button className="mb-2 mr-2" color="primary" onClick={() => {this.props.history.push(this.props.match.url+'/create')}}>Add Category</Button>
                        <Button className="mb-2 mr-2" color="secondary">Reorder Categories</Button>
                        <Button className="mb-2 mr-2" color="danger">Delete Selected Items</Button>
                    </Row>
                    
                </ReactCSSTransitionGroup>
                
            </Fragment>
        )
    }
}
