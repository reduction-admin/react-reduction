import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  Input,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';

import Page from 'components/Page';

const InputGroupPage = () => {
  return (
    <Page
      title="Input Groups"
      breadcrumbs={[{ name: 'Input Groups', active: true }]}
    >
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Input Group</CardHeader>
            <CardBody>
              <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input placeholder="username" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Check it out" />
              </InputGroup>
              <br />
              <InputGroup>
                <Input placeholder="username" />
                <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Dolla dolla billz yo!" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>$</InputGroupText>
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input placeholder="Amount" type="number" step="1" />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>Addons</CardHeader>
            <CardBody>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>To the Left!</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
              <br />
              <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                  <InputGroupText>To the Right!</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>To the Left!</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="and..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>To the Right!</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Addon Sizing</CardHeader>
            <CardBody>
              <InputGroup size="lg">
                <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>
                <Input />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">@normal</InputGroupAddon>
                <Input />
              </InputGroup>
              <br />
              <InputGroup size="sm">
                <InputGroupAddon addonType="prepend">@sm</InputGroupAddon>
                <Input />
              </InputGroup>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>Buttons / Dropdowns</CardHeader>
            <CardBody>
              <InputGroup>
                <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
                <Input />
              </InputGroup>
              <br />
              <InputGroup>
                <Input />
                <UncontrolledButtonDropdown addonType="append">
                  <DropdownToggle caret>
                    Button Dropdown
            </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </InputGroup>
              <br />
              <InputGroup>
                <UncontrolledButtonDropdown addonType="prepend">
                  <Button outline>Split Button</Button>
                  <DropdownToggle split outline />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
                <Input placeholder="and..." />
                <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default InputGroupPage;
