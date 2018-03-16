import React from 'react';

import classNames from 'classnames';

import { Row, Col } from 'reactstrap';

import Page from 'components/Page';
import { NumberWidget, IconWidget } from 'components/Widget';

import { iconWidgetsData, numberWidgetsData } from 'demos/widgetPage';

const WidgetPage = ({ className, ...restProps }) => {
  const classes = classNames('WidgetPage', className);

  return (
    <Page
      className={classes}
      title="Widgets"
      breadcrumbs={[{ name: 'widgets', active: true }]}
    >
      <Row>
        {numberWidgetsData.map(({ color }, index) => (
          <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-3">
            <NumberWidget
              title="Total Profit"
              subtitle="This month"
              number="$17,800"
              color={color}
              progress={{
                value: 75,
                label: 'Last month',
              }}
            />
          </Col>
        ))}
      </Row>

      <Row>
        {iconWidgetsData.map(
          ({ bgColor, icon, title, subtitle, ...restProps }, index) => (
            <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-3">
              <IconWidget
                bgColor={bgColor}
                icon={icon}
                title={title}
                subtitle={subtitle}
                {...restProps}
              />
            </Col>
          )
        )}
      </Row>
    </Page>
  );
};

export default WidgetPage;
