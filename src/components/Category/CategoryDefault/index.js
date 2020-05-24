import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, Route } from 'react-router-dom';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import {
  Card,
  CardTitle,
  Button,
  Row,
  Col,
  CardBody,
  UncontrolledButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import ReactTable from 'react-table';
import { makeData } from './utils';
import { categoryService } from '../../../_services';

export default class CategoryDefault extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
    this.state = {
      data: makeData(),
    };
  }

  componentDidMount() {
    categoryService.categorylist().then((data) => {
      console.log(data);
      this.setState({
        categoryList: data,
      });
    });
  }

  render() {
    const { data, categoryList } = this.state;
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
            heading='Categories'
            subheading='This is an example dashboard created using build-in elements and components.'
            icon='pe-7s-car icon-gradient bg-mean-fruit'
          />
          <Row>
            <Button
              className='mb-2 mr-2'
              color='primary'
              onClick={() => {
                this.props.history.push(this.props.match.url + '/create');
              }}
            >
              Add Category
            </Button>
          </Row>
          <Col md='12'>
            <Card className='main-card mb-3'>
              <CardBody>
                <ReactTable
                  data={categoryList}
                  columns={[
                    {
                      columns: [
                        {
                          Header: 'Image',
                          accessor: 'image',
                          Cell: (row) => (
                            <div>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  <img
                                    className='rounded-circle'
                                    src={
                                      `http://localhost:9000/api/media/image-resize?path=category/&name=` +
                                      row.value +
                                      `&width=60&height=60`
                                    }
                                    alt=''
                                  />
                                </div>
                              </div>
                            </div>
                          ),
                        },
                        {
                          Header: 'Name',
                          accessor: 'name',
                        },
                        {
                          Header: 'Sort Order',
                          accessor: 'sortOrder',
                        },
                        {
                          Header: 'Status',
                          accessor: 'isActive',
                        },
                      ],
                    },
                    {
                      columns: [
                        {
                          Header: 'Actions',
                          accessor: 'actions',
                          Cell: (row) => (
                            <div className='d-block w-100 text-center'>
                              <UncontrolledButtonDropdown>
                                <DropdownToggle
                                  caret
                                  className='btn-icon btn-icon-only btn btn-link'
                                  color='link'
                                >
                                  <i className='lnr-menu-circle btn-icon-wrapper' />
                                </DropdownToggle>
                                <DropdownMenu className='rm-pointers dropdown-menu-hover-link'>
                                  <DropdownItem header>Header</DropdownItem>
                                  <DropdownItem>
                                    <i className='dropdown-icon lnr-inbox'> </i>
                                    <span>Menus</span>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <i className='dropdown-icon lnr-file-empty'>
                                      {' '}
                                    </i>
                                    <span>Settings</span>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <i className='dropdown-icon lnr-book'> </i>
                                    <span>Actions</span>
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    <i className='dropdown-icon lnr-picture'>
                                      {' '}
                                    </i>
                                    <span>Dividers</span>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledButtonDropdown>
                            </div>
                          ),
                        },
                      ],
                    },
                  ]}
                  defaultPageSize={10}
                  className='-striped -highlight'
                />
              </CardBody>
            </Card>
          </Col>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}
