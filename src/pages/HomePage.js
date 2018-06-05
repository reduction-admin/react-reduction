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
} from 'reactstrap';

import { Line } from 'react-chartjs-2';

import { overlayCards, bgCards, gradientCards } from 'demos/cardPage';

import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';

import Page from 'components/Page';
import { UserCard } from 'components/Card';

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

//const CardPage = () => {
class CardPage extends React.Component {
  state = {
    modal: false,
    modal_backdrop: false,
    modal_nested_parent: false,
    modal_nested: false,
    backdrop: false,
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
    <Page title="Cards" breadcrumbs={[{ name: 'cards', active: true }]}>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
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
