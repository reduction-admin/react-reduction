/* eslint-disable jsx-a11y/href-no-hash */

import Page from 'components/Page';
import Typography from 'components/Typography';
import React from 'react';
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  UncontrolledAlert,
} from 'reactstrap';

const AlertPage = () => {
  return (
    <Page title="Alerts" breadcrumbs={[{ name: 'alerts', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Alerts</CardHeader>
            <CardBody>
              <Alert color="primary">
                Give it a{' '}
                <a href="#link" className="alert-link">
                  click
                </a>{' '}
                if you like.
              </Alert>
              <Alert color="secondary">
                Give it a{' '}
                <a href="#link" className="alert-link">
                  click
                </a>{' '}
                if you like.
              </Alert>
              <Alert color="success">
                Give it a{' '}
                <a href="#link" className="alert-link">
                  click
                </a>{' '}
                if you like.
              </Alert>
              <Alert color="danger">
                Give it a{' '}
                <a href="#link" className="alert-link">
                  click
                </a>{' '}
                if you like.
              </Alert>
              <Alert color="warning">
                Give it a{' '}
                <a href="#link" className="alert-link">
                  click
                </a>{' '}
                if you like.
              </Alert>
              <Alert color="info">
                Give it a{' '}
                <a href="#link" className="alert-link">
                  click
                </a>{' '}
                if you like.
              </Alert>
              <Alert color="light">
                Give it a{' '}
                <a href="#link" className="alert-link">
                  click
                </a>{' '}
                if you like.
              </Alert>
              <Alert color="dark">
                Give it a{' '}
                <a href="#link" className="alert-link">
                  click
                </a>{' '}
                if you like.
              </Alert>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardHeader>Dismiss</CardHeader>
            <CardBody>
              <UncontrolledAlert color="primary">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="secondary">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="success">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="danger">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="warning">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="info">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="light">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
              <UncontrolledAlert color="dark">
                I am an alert and I can be dismissed!
              </UncontrolledAlert>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardHeader>Additional Content</CardHeader>
            <CardBody>
              <Alert color="success">
                <Typography type="h4" className="alert-heading">
                  Well done!
                </Typography>
                <Typography>
                  Aww yeah, you successfully read this important alert message.
                  This example text is going to run a bit longer so that you can
                  see how spacing within an alert works with this kind of
                  content.
                </Typography>
                <hr />
                <Typography className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </Typography>
              </Alert>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default AlertPage;
