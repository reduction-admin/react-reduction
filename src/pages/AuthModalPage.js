import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  Row,
} from 'reactstrap';

class AuthModalPage extends React.Component {
  state = {
    show: false,
    authState: STATE_LOGIN,
  };

  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleAuthState = authState => {
    this.setState({
      authState,
    });
  };

  render() {
    const externalCloseBtn = (
      <button
        className="close"
        style={{
          position: 'absolute',
          top: '15px',
          right: '20px',
          fontSize: '3rem',
        }}
        onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <Page
        title="Login Modal"
        breadcrumbs={[{ name: 'login modal', active: true }]}>
        <Row>
          <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Login Modal Example</CardHeader>
              <CardBody>
                <Button color="danger" onClick={this.toggle}>
                  Click to Login
                </Button>
                <Modal
                  isOpen={this.state.show}
                  toggle={this.toggle}
                  size="sm"
                  backdrop="static"
                  backdropClassName="modal-backdrop-light"
                  external={externalCloseBtn}
                  centered>
                  <ModalBody>
                    <AuthForm
                      authState={this.state.authState}
                      onChangeAuthState={this.handleAuthState}
                    />
                  </ModalBody>
                </Modal>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default AuthModalPage;
