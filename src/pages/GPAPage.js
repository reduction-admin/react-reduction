import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

const TablePage = () => {
  return (
    <Page
      title="GPA Results"
      breadcrumbs={[{ name: 'gpa-results', active: true }]}
      className="TablePage"
    >
    <Card className="mb-3">
      <CardHeader>Semester 1/2020</CardHeader>
        <CardBody>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>Class GPA.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EL172</td>
                <td>English Course III</td>
                <td>3</td>
                <td>B</td>
                <td>2.31</td>
              </tr>
              <tr>
                <td>GTS101</td>
                <td>Skills Development for Technical Studies</td>
                <td>3</td>
                <td>A</td>
                <td>2.56</td>
              </tr>
              <tr>
                <td>GTS116</td>
                <td>Mathematics for Technologist I</td>
                <td>3</td>
                <td>A</td>
                <td>2.48</td>
              </tr>
              <tr>
                <td>GTS133</td>
                <td>Environmental Studies</td>
                <td>3</td>
                <td>A</td>
                <td>2.59</td>
              </tr>
              <tr>
                <td>ITS100</td>
                <td>Introduction to Computers and Programming</td>
                <td>3</td>
                <td>A</td>
                <td>2.81</td>
              </tr>
              <tr>
                <td>MTS252</td>
                <td>Material Science</td>
                <td>3</td>
                <td>A</td>
                <td>2.85</td>
              </tr>
              <tr>
                <td>SCS138</td>
                <td>Applied Physics I</td>
                <td>3</td>
                <td>B+</td>
                <td>1.93</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Row>
          <Col>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">This Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
                <td colspan = "4">21</td>
                <td colspan = "2">21</td>
                <td colspan = "1">21</td>
                <td colspan = "1">79.5</td>
                <td colspan = "1">3.79</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        <Col>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">Cumulative GPA</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
                <td colspan = "4">21</td>
                <td colspan = "2">21</td>
                <td colspan = "1">21</td>
                <td colspan = "1">79.5</td>
                <td colspan = "1">3.79</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        </Row>
        </CardBody>
    </Card>
    </Page>
  );
};

export default TablePage;
