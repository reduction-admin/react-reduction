import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Progress, Row } from 'reactstrap';
import { getThemeColors } from 'utils/colors';

const colors = getThemeColors();

const getRandomInt = () => {
  return Math.floor(Math.random() * (100 - 20) + 20);
};

const ProgressPage = () => {
  return (
    <Page title="Progress" breadcrumbs={[{ name: 'progress', active: true }]}>
      <Row>
        <Col md="6" sm="12" xs="12">
          <Card>
            <CardHeader>Colors</CardHeader>
            <CardBody>
              {colors.map((color, index) => (
                <Progress
                  key={index}
                  color={color}
                  value={getRandomInt()}
                  className="mb-3"
                />
              ))}
            </CardBody>
          </Card>
        </Col>

        <Col md="6" sm="12" xs="12">
          <Card>
            <CardHeader>Labels</CardHeader>
            <CardBody>
              {colors.map((color, index) => {
                const ranInt = getRandomInt();

                return (
                  <Progress
                    key={index}
                    color={color}
                    value={ranInt}
                    className="mb-3"
                  >
                    {ranInt}%
                  </Progress>
                );
              })}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md="6" sm="12" xs="12">
          <Card>
            <CardHeader>Striped</CardHeader>
            <CardBody>
              {colors.map((color, index) => (
                <Progress
                  key={index}
                  striped
                  color={color}
                  value={getRandomInt()}
                  className="mb-3"
                />
              ))}
            </CardBody>
          </Card>
        </Col>

        <Col md="6" sm="12" xs="12">
          <Card>
            <CardHeader>Animated</CardHeader>
            <CardBody>
              {colors.map((color, index) => (
                <Progress
                  key={index}
                  animated
                  color={color}
                  value={getRandomInt()}
                  className="mb-3"
                />
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md="6" sm="12" xs="12">
          <Card>
            <CardHeader>Multiple Bars / Stacked</CardHeader>
            <CardBody>
              <p className="text-center mt-3">Plain</p>
              <Progress multi>
                <Progress bar value="15" />
                <Progress bar color="success" value="20" />
                <Progress bar color="info" value="25" />
                <Progress bar color="warning" value="20" />
                <Progress bar color="danger" value="15" />
              </Progress>
              <p className="text-center mt-3">With Labels</p>
              <Progress multi>
                <Progress bar value="15">
                  Meh
                </Progress>
                <Progress bar color="success" value="35">
                  Wow!
                </Progress>
                <Progress bar color="warning" value="25">
                  25%
                </Progress>
                <Progress bar color="danger" value="25">
                  LOOK OUT!!
                </Progress>
              </Progress>
              <p className="text-center mt-3">Stripes and Animations</p>
              <Progress multi>
                <Progress bar striped value="15">
                  Stripes
                </Progress>
                <Progress bar animated color="success" value="30">
                  Animated Stripes
                </Progress>
                <Progress bar color="info" value="25">
                  Plain
                </Progress>
              </Progress>
            </CardBody>
          </Card>
        </Col>

        <Col md="6" sm="12" xs="12">
          <Card>
            <CardHeader>Max value</CardHeader>
            <CardBody>
              <div className="text-center">1 of 5</div>
              <Progress value="1" max="5" />
              <div className="text-center">50 of 135</div>
              <Progress value={50} max="135" />
              <div className="text-center">75 of 111</div>
              <Progress value={75} max={111} />
              <div className="text-center">463 of 500</div>
              <Progress value="463" max={500} />

              <div className="text-center">Various (40) of 55</div>
              <Progress multi>
                <Progress bar value="5" max={55}>
                  5
                </Progress>
                <Progress bar color="success" value="15" max={55}>
                  15
                </Progress>
                <Progress bar color="warning" value="10" max={55}>
                  10
                </Progress>
                <Progress bar color="danger" value="10" max={55}>
                  10
                </Progress>
              </Progress>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default ProgressPage;
