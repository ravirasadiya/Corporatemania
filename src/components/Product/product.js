import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PageTitle from '../../Layout/AppMain/PageTitle';
import { Button } from 'reactstrap';
export default class ProductHome extends Component {
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
          <PageTitle
            heading='Products'
            subheading='This is an example dashboard created using build-in elements and components.'
            icon='pe-7s-car icon-gradient bg-mean-fruit'
          />
          <Button
            className='mb-2'
            color='primary'
            onClick={() => {
              this.props.history.push(this.props.match.url + '/addProduct');
            }}
          >
            Add Product
          </Button>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}
