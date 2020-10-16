import React from 'react';

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
        title="FAQs"
        breadcrumbs={[{ name: 'faqs', active: true }]}
      >
        <Card className="mb-3">
          <CardHeader>Lists of FAQs</CardHeader>
          <CardBody>
            <Button outline color="link">
            FAQs for Registration Section
            </Button>
            <Button outline color="link">
            FAQs for Academic Service Section
            </Button>
          </CardBody>
        </Card>
      </Page>
    );
  }
}

export default ButtonPage;
