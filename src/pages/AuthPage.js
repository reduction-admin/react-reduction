import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import AuthForm, { STATE_LOGIN } from './AuthForm';

class ModalExample extends React.Component {
  state = {
    show: true,
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
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Login
        </Button>
        <Modal
          isOpen={this.state.show}
          toggle={this.toggle}
          size="sm"
          fade={false}
          centered>
          <ModalBody>
            <AuthForm
              authState={this.state.authState}
              onChangeAuthState={this.handleAuthState}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
