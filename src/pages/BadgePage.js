import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Button,
} from 'reactstrap';

import Page from 'components/Page';

const BadgePage = () => {
  return (
    <Page title="Badges" breadcrumbs={[{ name: 'badges', active: true }]}>
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Scale to parent</CardHeader>
            <CardBody>
              <h1>
                Heading <Badge color="secondary">New</Badge>
              </h1>
              <h2>
                Heading <Badge color="secondary">New</Badge>
              </h2>
              <h3>
                Heading <Badge color="secondary">New</Badge>
              </h3>
              <h4>
                Heading <Badge color="secondary">New</Badge>
              </h4>
              <h5>
                Heading <Badge color="secondary">New</Badge>
              </h5>
              <h6>
                Heading <Badge color="secondary">New</Badge>
              </h6>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>with buttons</CardHeader>
            <CardBody>
              <Button color="primary" className="mr-1">
                Notifications <Badge color="secondary">4</Badge>
              </Button>
              <Button color="info" className="mr-1">
                Notifications <Badge color="danger">4</Badge>
              </Button>
              <Button color="secondary" className="mr-1">
                Notifications <Badge color="secondary">4</Badge>
              </Button>
            </CardBody>

            <CardBody>
              <Button color="primary" outline className="mr-1">
                Notifications <Badge color="primary">4</Badge>
              </Button>
              <Button color="info" outline className="mr-1">
                Notifications <Badge color="info">4</Badge>
              </Button>
              <Button color="secondary" outline className="mr-1">
                Notifications <Badge color="secondary">4</Badge>
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card>
            <CardHeader>Contextual variations</CardHeader>
            <CardBody>
              <Badge color="primary" className="mr-1">
                Primary
              </Badge>
              <Badge color="secondary" className="mr-1">
                Secondary
              </Badge>
              <Badge color="success" className="mr-1">
                Success
              </Badge>
              <Badge color="danger" className="mr-1">
                Danger
              </Badge>
              <Badge color="warning" className="mr-1">
                Warning
              </Badge>
              <Badge color="info" className="mr-1">
                Info
              </Badge>
              <Badge color="light" className="mr-1">
                Light
              </Badge>
              <Badge color="dark" className="mr-1">
                Dark
              </Badge>
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <CardHeader>Pills</CardHeader>
            <CardBody>
              <Badge color="primary" pill className="mr-1">
                Primary
              </Badge>
              <Badge color="secondary" pill className="mr-1">
                Secondary
              </Badge>
              <Badge color="success" pill className="mr-1">
                Success
              </Badge>
              <Badge color="danger" pill className="mr-1">
                Danger
              </Badge>
              <Badge color="warning" pill className="mr-1">
                Warning
              </Badge>
              <Badge color="info" pill className="mr-1">
                Info
              </Badge>
              <Badge color="light" pill className="mr-1">
                Light
              </Badge>
              <Badge color="dark" pill className="mr-1">
                Dark
              </Badge>
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <CardHeader>Links</CardHeader>
            <CardBody>
              <Badge href="#" color="primary" className="mr-1">
                Primary
              </Badge>
              <Badge href="#" color="secondary" className="mr-1">
                Secondary
              </Badge>
              <Badge href="#" color="success" className="mr-1">
                Success
              </Badge>
              <Badge href="#" color="danger" className="mr-1">
                Danger
              </Badge>
              <Badge href="#" color="warning" className="mr-1">
                Warning
              </Badge>
              <Badge href="#" color="info" className="mr-1">
                Info
              </Badge>
              <Badge href="#" color="light" className="mr-1">
                Light
              </Badge>
              <Badge href="#" color="dark" className="mr-1">
                Dark
              </Badge>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default BadgePage;
