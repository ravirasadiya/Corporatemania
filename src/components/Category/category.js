import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PageTitle from '../../Layout/AppMain/PageTitle';
import { Card, Button, Row, Col, CardBody } from 'reactstrap';
import ReactTable from 'react-table';
import { categoryService } from '../../_services';

export default class CategoryHome extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
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

  editCategory(data) {
    this.props.history.push({
      pathname: this.props.match.url + '/create',
      state: { detail: data },
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
                          Header: 'Category Name',
                          accessor: 'name',
                        },
                        {
                          Header: 'Levels',
                          accessor: 'path',
                        },
                        {
                          Header: 'Sort Order',
                          accessor: 'sortOrder',
                        },
                        {
                          Header: 'Status',
                          Cell: (row) => (
                            <div>
                              {row.original.isActive != 0 && (
                                <div className='mb-2 mr-2 badge badge-success'>
                                  Active
                                </div>
                              )}
                              {row.original.isActive == 0 && (
                                <div className='mb-2 mr-2 badge  badge-danger'>
                                  Inactive
                                </div>
                              )}
                            </div>
                          ),
                        },
                      ],
                    },
                    {
                      columns: [
                        {
                          Header: 'Actions',
                          Cell: (row) => (
                            <div>
                              <Button
                                className='mb-2 mr-2 btn-icon btn-icon-only'
                                color='warning'
                                onClick={this.editCategory.bind(
                                  this,
                                  row.original
                                )}
                              >
                                <i className='lnr-pencil btn-icon-wrapper'> </i>
                              </Button>
                              <Button
                                className='mb-2 mr-2 btn-icon btn-icon-only'
                                color='danger'
                              >
                                <i className='pe-7s-trash btn-icon-wrapper'>
                                  {' '}
                                </i>
                              </Button>
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
