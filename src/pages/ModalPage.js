import Page from 'components/Page';
import React from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';

class ModalPage extends React.Component {
  state = {
    modal: false,
    modal_backdrop: false,
    modal_nested_parent: false,
    modal_nested: false,
    backdrop: true,
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  render() {
    return (
      <Page title="Modals" breadcrumbs={[{ name: 'modals', active: true }]}>
        <Row>
          <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Modal</CardHeader>
              <CardBody>
                <Button onClick={this.toggle()}>Launch Modal</Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle()}
                  className={this.props.className}>
                  <ModalHeader toggle={this.toggle()}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle()}>
                      Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={this.toggle()}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </Col>

          <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader className="d-flex justify-content-between">
                Backdrop
                <ButtonGroup size="sm">
                  <Button
                    onClick={() => this.setState({ backdrop: true })}
                    color="primary"
                    active={this.state.backdrop}>
                    true
                  </Button>
                  <Button
                    onClick={() => this.setState({ backdrop: false })}
                    color="primary"
                    active={!this.state.backdrop}>
                    false
                  </Button>
                  <Button
                    onClick={() => this.setState({ backdrop: 'static' })}
                    color="primary"
                    active={this.state.backdrop === 'static'}>
                    static
                  </Button>
                </ButtonGroup>
              </CardHeader>
              <CardBody>
                <p>Backdrop state: {`${this.state.backdrop}`}</p>
                <Button onClick={this.toggle('backdrop')}>Launch Modal</Button>
                <Modal
                  isOpen={this.state.modal_backdrop}
                  toggle={this.toggle('backdrop')}
                  backdrop={this.state.backdrop}>
                  <ModalHeader toggle={this.toggle('backdrop')}>
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle('backdrop')}>
                      Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={this.toggle('backdrop')}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </Col>

          <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Modal</CardHeader>
              <CardBody>
                <Button color="danger" onClick={this.toggle('nested_parent')}>
                  Launch Modal
                </Button>
                <Modal
                  isOpen={this.state.modal_nested_parent}
                  toggle={this.toggle('nested_parent')}
                  className={this.props.className}>
                  <ModalHeader toggle={this.toggle('nested_parent')}>
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <Button color="success" onClick={this.toggle('nested')}>
                      Show Nested Model
                    </Button>
                    <Modal
                      isOpen={this.state.modal_nested}
                      toggle={this.toggle('nested')}>
                      <ModalHeader>Nested Modal title</ModalHeader>
                      <ModalBody>Stuff and things</ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggle('nested')}>
                          Done
                        </Button>{' '}
                        <Button
                          color="secondary"
                          onClick={this.toggle('nested_parent')}>
                          All Done
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      onClick={this.toggle('nested_parent')}>
                      Do Something
                    </Button>{' '}
                    <Button
                      color="secondary"
                      onClick={this.toggle('nested_parent')}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default ModalPage;
