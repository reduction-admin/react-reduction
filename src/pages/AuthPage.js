/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import logo200Image from 'assets/img/logo/logo_200.png';
import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
} from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Login
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          fade={false}
          centered>
          <ModalBody>
            <div className="text-center pb-4">
              <img
                src={logo200Image}
                className="rounded"
                style={{ width: 60, height: 60 }}
                alt="logo"
              />
            </div>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" placeholder="your@email.com" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" placeholder="your password" />
              </FormGroup>
              <Button
                size="lg"
                className="bg-gradient-theme-left border-0"
                block>
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
