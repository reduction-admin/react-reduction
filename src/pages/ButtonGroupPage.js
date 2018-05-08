import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  Button,
  ButtonGroup,
  ButtonToolbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import Page from 'components/Page';

const ButtonGroupPage = () => {
  return (
    <Page
      title="Button Groups"
      breadcrumbs={[{ name: 'button groups', active: true }]}
    >
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Button Groups</CardHeader>
            <CardBody>
              <ButtonGroup className="mr-3 mb-3">
                <Button color="primary">Left</Button>
                <Button color="primary">Middle</Button>
                <Button color="primary">Right</Button>
              </ButtonGroup>

              <ButtonGroup className="mr-3 mb-3">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>Button Toolbar</CardHeader>
            <CardBody>
              <ButtonToolbar>
                <ButtonGroup className="mr-2">
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button>5</Button>
                  <Button>6</Button>
                  <Button>7</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2">
                  <Button>8</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Nesting</CardHeader>
            <CardBody>
              <ButtonGroup>
                <Button>1</Button>
                <Button>2</Button>
                <ButtonDropdown>
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Dropdown Link</DropdownItem>
                    <DropdownItem>Dropdown Link</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>Vertical variation</CardHeader>
            <CardBody>
              <ButtonGroup vertical>
                <Button>1</Button>
                <Button>2</Button>
                <ButtonDropdown>
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Dropdown Link</DropdownItem>
                    <DropdownItem>Dropdown Link</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Sizing</CardHeader>
            <CardBody>
              <CardText>Large</CardText>
              <ButtonGroup size="lg">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>

              <CardText className="mt-3">Default</CardText>
              <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>

              <CardText className="mt-3">Small</CardText>
              <ButtonGroup size="sm">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default ButtonGroupPage;
