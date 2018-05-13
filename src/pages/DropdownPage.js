import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap';
import { getThemeColors } from 'utils/colors';

const colors = getThemeColors();

const DropdownPage = () => {
  return (
    <Page title="Dropdowns" breadcrumbs={[{ name: 'dropdowns', active: true }]}>
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Single button dropdowns</CardHeader>
            <CardBody>
              {colors.map((color, index) => (
                <UncontrolledButtonDropdown key={index}>
                  <DropdownToggle
                    caret
                    color={color}
                    className="text-capitalize m-1">
                    {color}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              ))}
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>Split button dropdowns</CardHeader>
            <CardBody>
              {colors.map((color, index) => (
                <UncontrolledButtonDropdown
                  key={index}
                  className="text-capitalize m-1">
                  <Button color={color}>{color}</Button>
                  <DropdownToggle caret color={color} />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Sizing</CardHeader>
            <CardBody>
              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret size="lg">
                  Large
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>

              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret>Normal</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>

              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret size="sm">
                  Small
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>Dropup</CardHeader>
            <CardBody>
              <UncontrolledButtonDropdown direction="up">
                <DropdownToggle caret size="lg">
                  Dropup
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Alignment</CardHeader>
            <CardBody>
              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret>
                  This dropdown's menu is right-aligned
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>

              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret>
                  This dropdown's menu is left-aligned
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default DropdownPage;
