import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';
import user1Image from 'assets/img/users/100_1.jpg';
import { UserCard } from 'components/Card';
import Page from 'components/Page';
import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

const CardPage = () => {
  return (
    <Page title="News Boards" breadcrumbs={[{ name: 'news-board', active: true }]}>
      
      <Card inverse className={`border-0 bg-gradient-theme-top`} style={{ height: 280}}>
        <CardBody className="d-flex flex-column justify-content-start align-items-start">
          <CardTitle>Announcement from AS&R Division (HIGHEST PRIORITY)</CardTitle>
          <CardText>
            Process for online course withdrawal with "W" on Academic Record 
            Withdrawal deadline for 1/2020 semester is October 27, 2020.
            Please contact your advisor for unlocking the system before withdrawing online course.
            <br></br>
            <br></br>
            Student must check the result of complete withdrawal at SIIT registration website. 
            Course dropped will be shown “W” in your enrollment lists.
          </CardText>
        </CardBody>

        <CardBody className="d-flex justify-content-between align-items-center">
          <CardText>ANNOUNCED BY   AS&R Division   ANNOUNCED DATE   8 October 2020</CardText>
          <Button outline color="light">
            Click
          </Button>
        </CardBody>
      </Card>
      <br></br>
      <Card inverse className={`border-0 bg-gradient-theme-top`} style={{ height: 200}}>
        <CardBody className="d-flex flex-column justify-content-start align-items-start">
          <CardTitle>Announcement : Curriculum Evaluation (HIGHEST PRIORITY)</CardTitle>
          <CardText>Students who expected to graduate in academic year 2020, please go to the link below for curriculum evaluation.</CardText>
        </CardBody>

        <CardBody className="d-flex justify-content-between align-items-center">
          <CardText>ANNOUNCED BY   -   ANNOUNCED DATE   8 October 2020</CardText>
          <Button outline color="light">
            Click
          </Button>
        </CardBody>
      </Card>
      <br></br>
      <Card inverse className={`border-0 bg-gradient-theme-top`} style={{ height: 280}}>
        <CardBody className="d-flex flex-column justify-content-start align-items-start">
          <CardTitle>Announcement : TU Online Registration for Graduation (HIGHEST PRIORITY)</CardTitle>
          <CardText>The Graduates who are graduated in Academic Year 2019 required to register on TU online registration (www.reg.tu.ac.th)
            <br></br>
            Only those who are approved by Thammasat University Council.
            Please check your status on www.reg.tu.ac.th
            <br></br>
            <br></br>
            Please note that the online registration will be completed after the payment.
          </CardText>
        </CardBody>

        <CardBody className="d-flex justify-content-between align-items-center">
          <CardText>ANNOUNCED BY   -   ANNOUNCED DATE   6 October 2020</CardText>
          <Button outline color="light">
            Click
          </Button>
        </CardBody>
      </Card>
      <br></br>
      <Card inverse className={`border-0 bg-gradient-theme-top`} style={{ height: 280}}>
        <CardBody className="d-flex flex-column justify-content-start align-items-start">
          <CardTitle>Graduation Certificate (Degree Certificate) (HIGHEST PRIORITY)</CardTitle>
          <CardText>Graduates in the name list who have been approved for requesting the graduation certificate (degree certificate) 
            <br></br>
            before the graduation ceremony, graduates can get the certificate at the TU office of registrar at Rangsit campus 
            <br></br>
            until 15th October 2020 or 10 days after the ceremony (by 9th November 2020).
          </CardText>
        </CardBody>

        <CardBody className="d-flex justify-content-between align-items-center">
          <CardText>ANNOUNCED BY   AS&R   ANNOUNCED DATE   29 September 2020</CardText>
          <Button outline color="light">
            Click
          </Button>
        </CardBody>
      </Card>
      <br></br>
      
      
    </Page>
  );
};

export default CardPage;
