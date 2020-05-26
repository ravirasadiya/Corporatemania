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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import ReactTable from 'react-table';
import { bannerService } from '../../_services';
import { imageResizeURL } from '../../_helpers';

export default class BannerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [],
      modal: false,
    };

    bannerService.getAll().then((data) => {
      this.setState({
        bannerList: data,
      });
    });
    this.toggle = this.toggle.bind(this);
  }

  editBanner(data) {
    this.props.history.push({
      pathname: this.props.match.url + '/addBanner',
      state: { detail: data },
    });
  }

  delete(e) {
    bannerService.deleteBanner(e).then((data) => {
      console.log(data);
      if (data.status) {
        const updateBanenr = this.state.bannerList.filter(function(item) {
          return item.bannerId !== e;
        });
        this.setState({
          bannerList: updateBanenr,
        });
        this.toggle();
      }
    });
  }

  toggle(bannerId) {
    this.setState({
      modal: !this.state.modal,
      activeItemId: bannerId,
    });
  }

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

          <Button
            className='mb-2'
            color='primary'
            onClick={() => {
              this.props.history.push(this.props.match.url + '/addBanner');
            }}
          >
            Add Banner
          </Button>

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
                                      90
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
                          Header: 'Content',
                          accessor: 'content',
                        },
                        {
                          Header: 'Link',
                          accessor: 'link',
                        },
                        {
                          Header: 'Position',
                          accessor: 'position',
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
                        {
                          Header: 'Action',
                          Cell: (row) => (
                            <div>
                              <Button
                                className='mb-2 mr-2 btn-icon btn-icon-only'
                                color='warning'
                                onClick={this.editBanner.bind(
                                  this,
                                  row.original
                                )}
                              >
                                <i className='lnr-pencil btn-icon-wrapper'> </i>
                              </Button>
                              <Button
                                className='mb-2 mr-2 btn-icon btn-icon-only'
                                color='danger'
                                onClick={this.toggle.bind(
                                  this,
                                  row.original.bannerId
                                )}
                              >
                                <i className='pe-7s-trash btn-icon-wrapper'>
                                  {' '}
                                </i>
                              </Button>
                            </div>
                          ),
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
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>Are you sure want to delete it?</ModalBody>
            <ModalFooter>
              <Button color='link' onClick={this.toggle}>
                Cancel
              </Button>
              <Button
                color='primary'
                onClick={this.delete.bind(this, this.state.activeItemId)}
              >
                Delete
              </Button>{' '}
            </ModalFooter>
          </Modal>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}
