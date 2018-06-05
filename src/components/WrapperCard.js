import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { SampleMap } from '../components/SampleMap';
import { BidingDetails } from '../components/BidingDetails';

export class WrapperCard extends Component {

  state = { price: 22, available: 100 }

  setData(price, available) {
    this.setState({
      price,
      available
    })
  }

  render() {
    return (
      <Row>
        <Col md={9}>
          <SampleMap  clickHandler={ this.setData.bind(this) }/>
        </Col>
        <Col md={3}>
          <BidingDetails price={this.state.price} available={this.state.available} />
        </Col>
      </Row>
    )
  }
}
