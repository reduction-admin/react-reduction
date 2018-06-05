import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardText, Badge, Button } from 'reactstrap';
export class SampleMapHover extends Component {
  render() {
    const style = {
      position:'absolute',
      top:this.props.top,
      left: this.props.left,
      zIndex: 1000,
      cursor: 'pointer',
      display: this.props.visible? 'block' : 'none',
      /*borderStyle: 'solid',
      borderWidth: '32px 149px 0 0',
      borderColor: 'rgba(136,136,136,.1) transparent transparent'*/
    };

    const tableStyle = {
      transform: 'scale(.7, .7)' //lazyness
    };

    return (
      <div style={style}>
        <Card>
          <CardBody>
            <div style={{ textAlign: 'center' }}>
            <span style={{ color: '#00b5b5', fontSize: '14px'}}>
              Zone Name
            </span>
            </div>
            <p></p>
            <Button color="primary" outline className="mr-1"  size="sm">
              Lowest Price <Badge color="primary">{ this.props.price }</Badge>
            </Button>
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: '#fc5c7d', fontSize: '14px', fontWeight: 'bold'}}>
                available: {this.props.available}
              </span>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}


/*
<Row>
  <Col xs={6}></Col>
  <Col xs={3}>Lowest Price</Col>
  <Col xs={3}>Tickets Left</Col>
</Row>
<Row>
  <Col xs={6}>Section X</Col>
  <Col xs={3}>$56</Col>
  <Col xs={3}>100</Col>
</Row>
*/
