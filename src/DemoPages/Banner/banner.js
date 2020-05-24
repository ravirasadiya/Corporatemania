import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PageTitle from '../../Layout/AppMain/PageTitle';
import {
  Card,
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
import { bannerService } from '../../_services';
import { imageResizeURL } from '../../_helpers';

export default class BannerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [],
    };

    bannerService.getAll().then((data) => {
      this.setState({
        bannerList: data,
      });
    });
  }

  componentDidMount() {}

  render() {
    const { bannerList } = this.state;
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
                  data={bannerList}
                  columns={[
                    {
                      columns: [
                        {
                          Header: 'Image',
                          Cell: (row) => (
                            <div>
                              <div className='widget-content p-0'>
                                <div className='widget-content-wrapper'>
                                  {/* {JSON.stringify(row)} */}
                                  <img
                                    src={imageResizeURL(
                                      row.original.image,
                                      row.original.imagePath,
                                      40,
                                      120
                                    )}
                                    alt=''
                                  />
                                </div>
                              </div>
                            </div>
                          ),
                        },
                        {
                          Header: 'Title',
                          accessor: 'title',
                        },
                        {
                          Header: 'Link',
                          accessor: 'link',
                        },
                        {
                          Header: 'Status',
                          accessor: 'isActive',
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
