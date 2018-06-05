import React from 'react';

import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardLink,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback
} from 'reactstrap';

import { Line } from 'react-chartjs-2';

import { overlayCards, bgCards, gradientCards } from 'demos/cardPage';

import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';

import Page from 'components/Page';
import { UserCard } from 'components/Card';
import { SampleMap } from '../components/SampleMap';
import { BidingDetails } from '../components/BidingDetails';
import { WrapperCard } from '../components/WrapperCard';

import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';
import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import user1Image from 'assets/img/users/100_1.jpg';
import eventImg1 from 'assets/img/event/football.jpg';
import eventImg2 from 'assets/img/event/baseball.jpg';
import eventImg3 from 'assets/img/event/basketball.jpg';
import eventImg4 from 'assets/img/event/kesha.jpg';
import eventImg5 from 'assets/img/event/eimg5.jpg';
import eventImg6 from 'assets/img/event/eimg6.jpg';
import eventImg7 from 'assets/img/event/eimg7.jpg';
import eventImg8 from 'assets/img/event/eimg8.jpg';
import footballfieldsvg from 'assets/img/football-st.svg';

//const CardPage = () => {
class CardPage extends React.Component {
  state = {
    modal: false,
    modal_backdrop: false,
    modal_nested_parent: false,
    modal_nested: false,
    backdrop: true,
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  render() {
  return (
    <Page title="Cards" breadcrumbs={[{ name: 'cards', active: true }]} style={{marginTop: '80px'}}>
      <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card>
            <CardImg top src={eventImg1} />
            <CardBody>
              <CardTitle>North Carolina Tar Heels at Cal Bears Football <span style={{ color: '#00b5b5', fontSize: '16px'}}>(Sat, Sep 01, 2018)</span></CardTitle>
              <CardText>
                <span style={{fontSize: '13px', color: 'gray'}}>California Memorial Stadium, Berkeley, CA, US</span>
              </CardText>
              <Button color="primary" outline className="mr-1">
                Lowest Price <Badge color="primary">$120</Badge>
              </Button>&nbsp;&nbsp;&nbsp;
              <Button color="info" outline className="mr-1">
                Highest Price <Badge color="info">$230</Badge>
              </Button>
                <Button onClick={this.toggle('backdrop')} color="secondary" className="mr-1" style={{ float:'right'}}>
                Place Bid
              </Button>
              <Modal
                isOpen={this.state.modal_backdrop}
                toggle={this.toggle('backdrop')}
                backdrop={this.state.backdrop}>
                <ModalHeader toggle={this.toggle('backdrop')}>
                  North Carolina Tar Heels at Cal Bears Football <span style={{ color: '#00b5b5', fontSize: '16px'}}>(Sat, Sep 01, 2018)</span>
                </ModalHeader>
                <ModalBody>
                <Form className="col-sm-6">
                  <FormGroup row>
                    <Label for="exampleEmail" sm={4}>
                      Bid per Ticket ($)
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter Amount per Ticket"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleSelect" sm={4}>
                      No.Of Tickets
                    </Label>
                    <Col sm={8}>
                      <Input type="select" name="select">
                        <option>1</option>
                        <option>2</option>
                        <option>4</option>
                        <option>6</option>
                        <option>8</option>
                        <option>8</option>
                    </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleSelect" sm={4}>
                      Bid Expires on
                    </Label>
                    <Col sm={8}>
                      <Input type="select" name="select">
                        <option>Event Date</option>
                        <option>1 DAY</option>
                        <option>2 DAYS</option>
                        <option>4 DAYS</option>
                        <option>6 DAYS</option>
                        <option>10 DAYS</option>
                    </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleText" sm={4}>
                      Additional Notes
                    </Label>
                    <Col sm={8}>
                      <Input type="textarea" name="text" />
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 9 }}>
                      <Button>Place Bid</Button>
                    </Col>
                  </FormGroup>
                </Form>
                </ModalBody>
              </Modal>
            </CardBody>
          </Card>
        </Col>

        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card>
            <CardImg top src={eventImg2} />
            <CardBody>
              <CardTitle>Stockton Ports at San Jose Giants <span style={{ color: '#00b5b5', fontSize: '16px'}}>(Fri, Jun 08, 2018)</span></CardTitle>
              <CardText>
                <span style={{fontSize: '13px', color: 'gray'}}>San Jose Municipal Stadium, San Jose, CA, US</span>
              </CardText>
              <Button color="primary" outline className="mr-1">
                Lowest Price <Badge color="primary">$550</Badge>
              </Button>&nbsp;&nbsp;&nbsp;
              <Button color="info" outline className="mr-1">
                Highest Price <Badge color="info">$760</Badge>
              </Button>
              <Button onClick={this.toggle('backdrop')} color="secondary" className="mr-1" style={{ float:'right'}}>
                Place Bid
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardImg
              className="card-img-left"
              src={eventImg3}
              style={{ width: '250px', height: 225 }}
            />
            <CardBody>
              <CardTitle><span style={{ fontSize: '18px'}}>Big 3 Basketball Tournament</span> <span style={{ color: '#00b5b5', fontSize: '14px'}}>(Mon, Jun 11, 2018)</span></CardTitle>
              <CardText>
                <span style={{fontSize: '13px', color: 'gray'}}>Oracle Arena, Oakland, CA, US</span>
              </CardText>

              <div style={{ paddingTop:'70px'}}>
              <Button color="primary" outline className="mr-1" size="sm">
                Lowest Price <Badge color="primary">$190</Badge>
              </Button>&nbsp;&nbsp;&nbsp;
              <Button color="info" outline className="mr-1" size="sm">
                Highest Price <Badge color="info">$330</Badge>
              </Button>
              <Button color="secondary" className="mr-1" size="sm" style={{ float:'right'}}>
                Place Bid
              </Button>
              </div>
              <Modal
                isOpen={this.state.modal_backdrop}
                toggle={this.toggle('backdrop')}
                backdrop={this.state.backdrop}>
                <ModalHeader toggle={this.toggle('backdrop')}>
                  North Carolina Tar Heels at Cal Bears Football <span style={{ color: '#00b5b5', fontSize: '16px'}}>(Sat, Sep 01, 2018)</span>
                </ModalHeader>
                <ModalBody>
                  <WrapperCard />
                </ModalBody>
              </Modal>
            </CardBody>
          </Card>
        </Col>

        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardBody>
            <CardTitle><span style={{ fontSize: '18px'}}>Kesha and Macklemore</span> <span style={{ color: '#00b5b5', fontSize: '14px'}}>(Thu, Jun 14, 2018)</span></CardTitle>
            <CardText>
              <span style={{fontSize: '13px', color: 'gray'}}>Shoreline Amphitheatre, Mountain View, CA, US</span>
            </CardText>
            <div style={{ paddingTop:'70px'}}>
            <Button color="primary" outline className="mr-1" size="sm">
              Lowest Price <Badge color="primary">$420</Badge>
            </Button>&nbsp;&nbsp;&nbsp;
            <Button color="info" outline className="mr-1" size="sm">
              Highest Price <Badge color="info">$630</Badge>
            </Button>
            <Button color="secondary" className="mr-1" size="sm" style={{ float:'right'}}>
              Place Bid
            </Button>
            </div>
            </CardBody>
            <CardImg
              className="card-img-right"
              src={eventImg4}
              style={{ width: '250px', height: 225 }}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={8} sm={8} xs={12} className="mb-3">
          <Card>
            <CardImg top src={eventImg5} />
            <CardBody>
              <CardTitle>LAFC  at San Jose Earthquakes <span style={{ color: '#00b5b5', fontSize: '16px'}}>(Sat, Jun 09, 2018)</span></CardTitle>
              <CardText>
                <span style={{fontSize: '13px', color: 'gray'}}>Avaya Stadium, San Jose, CA, US</span>
              </CardText>
              <Button color="primary" outline className="mr-1">
                Lowest Price <Badge color="primary">$320</Badge>
              </Button>&nbsp;&nbsp;&nbsp;
              <Button color="info" outline className="mr-1">
                Highest Price <Badge color="info">$999</Badge>
              </Button>
              <Button color="secondary" className="mr-1" style={{ float:'right'}}>
                Place Bid
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col md={4} sm={4} xs={12} className="mb-3">
          <Card>
            <CardImg top src={eventImg6} />
            <CardBody>
              <CardTitle><span style={{ fontSize: '18px'}}>Beyoncé & Jay-Z Tickets</span> <span style={{ color: '#00b5b5', fontSize: '14px'}}>(Thu, Jun 14, 2018)</span></CardTitle>
                <CardText>
                <span style={{fontSize: '13px', color: 'gray'}}>Levis Stadium, Santa Clara, CA, US</span>
              </CardText>
              <div style={{ paddingTop:'7px'}}>
              <Button color="primary" outline className="mr-1"  size="sm">
                Lowest Price <Badge color="primary">$110</Badge>
              </Button>&nbsp;&nbsp;&nbsp;
              <Button color="info" outline className="mr-1"  size="sm">
                Highest Price <Badge color="info">$440</Badge>
              </Button>
              <Button color="secondary" className="mr-1"  size="sm" style={{ float:'right'}}>
                Place Bid
              </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>

      <Col md={4} sm={4} xs={12} className="mb-3">
        <Card>
          <CardImg top src={eventImg7} />
          <CardBody>
          <CardTitle><span style={{ fontSize: '18px'}}>San Francisco 49ers Packages</span> <span style={{ color: '#00b5b5', fontSize: '14px'}}>(Fri, Jun 22, 2018)</span></CardTitle>
            <CardText>
              <span style={{fontSize: '13px', color: 'gray'}}>Memorabilia San Francisco, Santa Clara, California, US</span>
            </CardText>
            <div style={{ paddingTop:'7px'}}>
            <Button color="primary" outline className="mr-1"  size="sm">
              Lowest Price <Badge color="primary">$200</Badge>
            </Button>&nbsp;&nbsp;&nbsp;
            <Button color="info" outline className="mr-1"  size="sm">
              Highest Price <Badge color="info">$940</Badge>
            </Button>
            <Button color="secondary" className="mr-1"  size="sm" style={{ float:'right'}}>
              Place Bid
            </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
        <Col md={8} sm={8} xs={12} className="mb-3">
          <Card>
            <CardImg top src={eventImg8} />
            <CardBody>
              <CardTitle>5 Seconds of Summer <span style={{ color: '#00b5b5', fontSize: '16px'}}>(Tue, Jul 17, 2018)</span></CardTitle>
              <CardText>
                <span style={{fontSize: '13px', color: 'gray'}}>Event Center at San Jose State University, San Jose, CA, US</span>
              </CardText>
              <Button color="primary" outline className="mr-1">
                Lowest Price <Badge color="primary">$100</Badge>
              </Button>&nbsp;&nbsp;&nbsp;
              <Button color="info" outline className="mr-1">
                Highest Price <Badge color="info">$560</Badge>
              </Button>
              <Button color="secondary" className="mr-1" style={{ float:'right'}}>
                Place Bid
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );

}
};

export default CardPage;
