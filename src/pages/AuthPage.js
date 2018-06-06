import logo200Image from 'assets/img/logo/logo_200.png';
import AvatarCard from 'components/Card/AvatarCard';
import React, { Component } from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

class AuthPage extends Component {
  render() {
    return (
      <Row>
        <Col md={6} sm={6} xs={12}>
          <AvatarCard avatar={logo200Image} title={process.env.REACT_APP_NAME}>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="with a placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="password placeholder"
                />
              </FormGroup>
            </Form>
          </AvatarCard>
        </Col>
      </Row>
    );
  }
}

export default AuthPage;
