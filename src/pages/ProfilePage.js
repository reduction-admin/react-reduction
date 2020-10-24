import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const tableTypes = ['', 'bordered', 'striped', 'hover'];
//Variable for Database Connection
var StdID = 6000000001;
var FName = "Mark";
var LName = "PhpScript";
var Dep = "Information, Computer, and Communication Technology";
var Camp = "Bangkadi Campus";
var Prog = "Computer Engineering Curricullum (20XX)";
var Minor = "CPE20XX-OptionXX: Game Production Technology";
var Lv = "Bachelor";
var DegName = "Bachelor of Engineering (Computer Engineering)";
var CurName = "Bachelor of Engineering Program in Computer Engineering (International Program)"
var AdmY = "20XX/1";
var Status = "Active";
var AdmT = "WE";
var Prev = "M.6 / Grade 12";
var PrevGPA = "3.XX";
var PrevSch = "SKR";
var Adv = "Assoc. Prof. Dr.Ekawit Nantajeewarawat";
var CGPA = 2.00;
var CreditAtm = 121

const TablePage = () => {
  let tableType;
  if (CGPA <= 2.00){
    tableType = "table-warning"
  }else{tableType="table-info"};



  return (
    <Page
      title="Student Proile"
      breadcrumbs={[{ name: 'Profile', active: true }]}
      className="ProfilePage"
    >
    <Card className="mb-3">
        <CardHeader>Profile</CardHeader>
        
        <Card body>
          <Table {...{ ['default']: true }}>
            <thead>
              <tr className="table-primary">
                <th colspan = "100%">Education Information</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-info">
                <th scope="row">Student ID:</th>
                <td>{StdID}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="table-info">
                <th scope="row">Name:</th>
                <td colspan="100%">{FName} {LName}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">School:</th>
                <td colspan="100%">{Dep}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Campus:</th>
                <td colspan="100%">{Camp}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Program:</th>
                <td colspan="100%">{Prog}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Minor:</th>
                <td colspan="100%">{Minor}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Level:</th>
                <td colspan="100%">{Lv}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Degree Name:</th>
                <td colspan="100%">{DegName}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Curricullum Name:</th>
                <td colspan="100%">{CurName}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Admission Year:</th>
                <td colspan="100%">{AdmY}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Student Status:</th>
                <td colspan="100%">{Status}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Admission Type:</th>
                <td colspan="100%">{AdmT}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Previous Certificate:</th>
                <td colspan="4">{Prev}</td>
                <th scope= "row"> Previous GPA: </th>
                <td colspan="100%">{PrevGPA}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Previous School:</th>
                <td colspan="100%">{PrevSch}</td>
              </tr>
              <tr className="table-info">
                <th scope="row">Academic Advisor:</th>
                <td colspan="100%">{Adv}</td>
              </tr>
            </tbody>
          </Table>
        </Card>

        <Card body>
          <Table {...{ ['default']: true }}>
            <thead>

              <tr className="table-secondary">
                <th colspan = "100%">Academic Status</th>
              </tr>
            </thead>
            <tbody>
            <tr className="table-light">
                <td rowSpan="3"><img src="/img/Happy.gif" /> Will Fixed Later</td>
                <th scope="row">Credit Attempt:</th>
                <td>{CreditAtm} </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className = {tableType}>
              <th scope="row">GPAX:</th>
              <td colspan="100%">{CGPA}</td>
              </tr>
            </tbody>
          </Table>
        </Card>

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


    </Card>
    </Page>
  );
};

export default TablePage;
