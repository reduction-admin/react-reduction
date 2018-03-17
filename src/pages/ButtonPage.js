import React from 'react';

import classNames from 'classnames';

import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardSubtitle,
  CardBody,
  CardText,
} from 'reactstrap';

import Page from 'components/Page';

class ButtonPage extends React.Component {
  state = {
    rSelected: null,
    cSelected: [],
  };

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Page
        className="ButtonPage"
        title="Buttons"
        breadcrumbs={[{ name: 'buttons', active: true }]}
      >
        <Row>
          <Col md="6" sm="12" xs="12">
            <Card className="mb-3">
              <CardHeader>Buttons</CardHeader>
              <CardBody>
                <Button color="primary">primary</Button>
                <Button color="secondary">secondary</Button>
                <Button color="success">success</Button>
                <Button color="info">info</Button>
                <Button color="warning">warning</Button>
                <Button color="danger">danger</Button>
                <Button color="link">link</Button>
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card className="mb-3">
              <CardHeader>Outline Buttons</CardHeader>
              <CardBody>
                <Button outline color="primary">
                  primary
                </Button>
                <Button outline color="secondary">
                  secondary
                </Button>
                <Button outline color="success">
                  success
                </Button>
                <Button outline color="info">
                  info
                </Button>
                <Button outline color="warning">
                  warning
                </Button>
                <Button outline color="danger">
                  danger
                </Button>
                <Button outline color="link">
                  link
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Different Button Sizes</CardHeader>
              <CardBody>
                <Button color="primary" size="sm">
                  Small Button
                </Button>
                <Button color="secondary" size="sm">
                  Small Button
                </Button>
                <Button color="success" size="sm">
                  Small Button
                </Button>
                <Button color="info" size="sm">
                  Small Button
                </Button>
                <Button color="warning" size="sm">
                  Small Button
                </Button>
                <Button color="danger" size="sm">
                  Small Button
                </Button>
                <Button color="link" size="sm">
                  Small Button
                </Button>
              </CardBody>
              <CardBody>
                <Button color="primary">Normal Button</Button>
                <Button color="secondary">Normal Button</Button>
                <Button color="success">Normal Button</Button>
                <Button color="info">Normal Button</Button>
                <Button color="warning">Normal Button</Button>
                <Button color="danger">Normal Button</Button>
                <Button color="link">Normal Button</Button>
              </CardBody>
              <CardBody>
                <Button color="primary" size="lg">
                  Large Button
                </Button>
                <Button color="secondary" size="lg">
                  Large Button
                </Button>
                <Button color="success" size="lg">
                  Large Button
                </Button>
                <Button color="info" size="lg">
                  Large Button
                </Button>
                <Button color="warning" size="lg">
                  Large Button
                </Button>
                <Button color="danger" size="lg">
                  Large Button
                </Button>
                <Button color="link" size="lg">
                  Large Button
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Block Buttons</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body className="mb-3">
                      <Button color="primary" size="sm" block>
                        Small Block Button
                      </Button>
                      <Button color="secondary" size="sm" block>
                        Small Block Button
                      </Button>
                      <Button color="success" size="sm" block>
                        Small Block Button
                      </Button>
                      <Button color="info" size="sm" block>
                        Small Block Button
                      </Button>
                      <Button color="warning" size="sm" block>
                        Small Block Button
                      </Button>
                      <Button color="danger" size="sm" block>
                        Small Block Button
                      </Button>
                      <Button color="link" size="sm" block>
                        Small Block Button
                      </Button>
                    </Card>
                  </Col>
                  <Col>
                    <Card body className="mb-3">
                      <Button color="primary" block>
                        Normal Block Button
                      </Button>
                      <Button color="secondary" block>
                        Normal Block Button
                      </Button>
                      <Button color="success" block>
                        Normal Block Button
                      </Button>
                      <Button color="info" block>
                        Normal Block Button
                      </Button>
                      <Button color="warning" block>
                        Normal Block Button
                      </Button>
                      <Button color="danger" block>
                        Normal Block Button
                      </Button>
                      <Button color="link" block>
                        Normal Block Button
                      </Button>
                    </Card>
                  </Col>
                  <Col>
                    <Card body>
                      <Button color="primary" size="lg" block>
                        Large Block Button
                      </Button>
                      <Button color="secondary" size="lg" block>
                        Large Block Button
                      </Button>
                      <Button color="success" size="lg" block>
                        Large Block Button
                      </Button>
                      <Button color="info" size="lg" block>
                        Large Block Button
                      </Button>
                      <Button color="warning" size="lg" block>
                        Large Block Button
                      </Button>
                      <Button color="danger" size="lg" block>
                        Large Block Button
                      </Button>
                      <Button color="link" size="lg" block>
                        Large Block Button
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Button State</CardHeader>
              <CardBody>
                <Button color="primary" active>
                  primary active
                </Button>
                <Button color="secondary" active>
                  secondary active
                </Button>
                <Button color="success" active>
                  success active
                </Button>
                <Button color="info" active>
                  info active
                </Button>
                <Button color="warning" active>
                  warning active
                </Button>
                <Button color="danger" active>
                  danger active
                </Button>
                <Button color="link" active>
                  link active
                </Button>
              </CardBody>
              <CardBody>
                <Button color="primary" disabled>
                  primary disabled
                </Button>
                <Button color="secondary" disabled>
                  secondary disabled
                </Button>
                <Button color="success" disabled>
                  success disabled
                </Button>
                <Button color="info" disabled>
                  info disabled
                </Button>
                <Button color="warning" disabled>
                  warning disabled
                </Button>
                <Button color="danger" disabled>
                  danger disabled
                </Button>
                <Button color="link" disabled>
                  link active
                </Button>
              </CardBody>

              <CardBody>
                <Button color="primary" outline active>
                  primary outline active
                </Button>
                <Button color="secondary" outline active>
                  secondary outline active
                </Button>
                <Button color="success" outline active>
                  success outline active
                </Button>
                <Button color="info" outline active>
                  info outline active
                </Button>
                <Button color="warning" outline active>
                  warning outline active
                </Button>
                <Button color="danger" outline active>
                  danger outline active
                </Button>
                <Button color="link" outline active>
                  link outline active
                </Button>
              </CardBody>
              <CardBody>
                <Button color="primary" outline disabled>
                  primary outline disabled
                </Button>
                <Button color="secondary" outline disabled>
                  secondary outline disabled
                </Button>
                <Button color="success" outline disabled>
                  success outline disabled
                </Button>
                <Button color="info" outline disabled>
                  info outline disabled
                </Button>
                <Button color="warning" outline disabled>
                  warning outline disabled
                </Button>
                <Button color="danger" outline disabled>
                  danger outline disabled
                </Button>
                <Button color="link" outline disabled>
                  link outline active
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Checkbox and Radio Buttons</CardHeader>
              <CardBody>
                <CardSubtitle>Radio Buttons</CardSubtitle>
                <ButtonGroup>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ rSelected: 1 })}
                    active={this.state.rSelected === 1}
                  >
                    One
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ rSelected: 2 })}
                    active={this.state.rSelected === 2}
                  >
                    Two
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => this.setState({ rSelected: 3 })}
                    active={this.state.rSelected === 3}
                  >
                    Three
                  </Button>
                </ButtonGroup>
                <CardText>Selected: {this.state.rSelected}</CardText>
              </CardBody>
              <CardBody>
                <CardSubtitle>Checkbox Buttons</CardSubtitle>
                <ButtonGroup>
                  <Button
                    color="primary"
                    onClick={() => this.onCheckboxBtnClick(1)}
                    active={this.state.cSelected.includes(1)}
                  >
                    One
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => this.onCheckboxBtnClick(2)}
                    active={this.state.cSelected.includes(2)}
                  >
                    Two
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => this.onCheckboxBtnClick(3)}
                    active={this.state.cSelected.includes(3)}
                  >
                    Three
                  </Button>
                </ButtonGroup>
                <CardText>
                  Selected: {JSON.stringify(this.state.cSelected)}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default ButtonPage;
