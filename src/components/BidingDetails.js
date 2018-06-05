import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import './bidding.css';

const boxStyle = {
  border: '1px solid rgba(0, 0, 0, 0.125)',
  padding: 20,
  fontSize: 14
}

export class BidingDetails extends Component {
  render() {
    return (
      <div style={boxStyle}>
        <div class="byo-event-info">
          <div class="event-meta ">
            <div class="date-stamp-standard date-container ">
              <span class="date-stamp-standard">
                <span class="date-divider-top"></span>
                <span class="date-stamp-day ">Fri</span>
                <time class="date-stamp-month-dd">Aug 24</time>
                <time class="date-stamp-month-dd"></time>
              </span>
            </div>
          </div>
          <div class="event-details">
            <div class="event-details-box">
              <h1 class="header">
                <a class="performer" href="javascript:void(0);">Green Bay Packers</a> at <a class="performer pid-139" href="/oakland-raiders-tickets/performer/139/">Oakland Raiders</a> Preseason Tickets</h1>
                <div class="event-location-info">
                  <span class="event-time">7:30 PM</span>
                  <span> at </span>
                  <a class="venue" href="javascript:void(0);">
                  <span class="event-venue">Oakland Coliseum</span></a>,
                  <span class="event-location"> Oakland, CA</span>
                </div>
              </div>
            </div>
            <div class="separator"></div>
            <div class="listing-summary">
              <div class="qty-container">
                <div class="titles qty-text">NUMBER OF TICKETS</div>
                <div class="ticket-qty">
                  <span class="qty">{this.props.available} tickets</span>
                </div>
              </div>
              <div class="total-cont">
                <div class="titles ticket-price">TICKET PRICE</div>
                <div class="amount">{ this.props.price }</div>
                <div class="each">each</div>
              </div>
            </div>
            <div class="separator-2"></div>
            <Input className="mb-2" placeholder="Enter your bid" />
            <Button color="secondary" size="sm" block>
              Place Bid
            </Button>
          </div>
      </div>
    )
  }
}
