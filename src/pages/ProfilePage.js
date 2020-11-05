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
var CGPA = 3.59;
var CreditAtm = 121;
var CreditAch = 100;
var test = 1;
var EngStat = "Pass";
var tofelscr = 30;
var ieltsce = 9;
var tu_get_scr = 800;
var tu_get_cbt_scr = 120;
var tofel_pbt_scr = 30;
var tofel_cbt_scr = 30;
var tofel_ibt_scr = 30;
var tofel_institute_scr = 30;
var gts401_scr = "pass";
var toeic_scr = 990;
var FCE_scr = 190 ;
var CEFR_scr = 220;
var tu005_scr;
var tu006_scr;
var native = "Native";


const TablePage = () => {
  
  let tableType, tableType2;
  if (CGPA <= 2.00){
    tableType = "table-warning"
  }else{tableType="table-success"};

  if (EngStat == "Pass")
  {
    tableType2="table-success"
  } else {tableType2="table-warning"}


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
{/* 
              {test === 0 &&
              <tr className="table-info">
              <th scope="row">ConditionTest:</th>
              <td colspan="100%">Test</td>
            </tr>
               } */}
              
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
                <td rowSpan="3"><img src="./assets/img/Happy.gif" /> Will Fixed Later</td>
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
              <tr className="table-light">
              <th scope="row">Credit Achieved:</th>
              <td colspan="100%">{CreditAch}</td>
              </tr>
              <tr className = {tableType}>
              <th scope="row">GPAX:</th>
              <td colspan="100%">{CGPA}</td>
              </tr>
            </tbody>
          </Table>
        </Card>

        <Card body>
          <Table {...{ ['default']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "3">English Proficiency</th>
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
            </thead>
            <tbody>
              <tr className = {tableType2}>
              <th colspan="2">English Status:</th>
              <td>{EngStat}</td>
              </tr>

              { tofelscr != null &&
              <tr>
              <th colspan="2">TOEFEL: </th>
              <td>{String(tofelscr)}</td>
              </tr>
              }

              { ieltsce != null &&
              <tr>
              <th colspan="2">IELTS: </th>
              <td>{String(ieltsce)}</td>
              </tr>
              }

              { tu_get_scr != null &&
              <tr>
              <th colspan="2">TU-GET: </th>
              <td>{String(tu_get_scr)}</td>
              </tr>
              }

              { tu_get_cbt_scr != null &&
              <tr>
              <th colspan="2">TU-GET(CBT): </th>
              <td>{String(tu_get_cbt_scr)}</td>
              </tr>
              }
              { tofel_pbt_scr != null &&
              <tr>
              <th colspan="2">TOEFEL(PBT): </th>
              <td>{String(tofel_pbt_scr)}</td>
              </tr>
              }  

              { tofel_cbt_scr != null &&
                <tr>
                <th colspan="2">TOEFEL(CBT): </th>
                <td>{String(tofel_cbt_scr)}</td>
                </tr>
                }  
                
              { tofel_ibt_scr != null &&
                <tr>
                <th colspan="2">TOEFEL(IBT): </th>
                <td>{String(tofel_ibt_scr)}</td>
                </tr>
                }   

              { tofel_institute_scr != null &&
                <tr>
                <th colspan="2">TOEFEL(Institutional): </th>
                <td>{String(tofel_institute_scr)}</td>
                </tr>
                }

              { gts401_scr != null &&
                <tr>
                <th colspan="2">GTS401 Intensive English: </th>
                <td>{String(gts401_scr)}</td>
                </tr>
                }   

              { toeic_scr != null &&
                <tr>
                <th colspan="2">TOEIC: </th>
                <td>{String(toeic_scr)}</td>
                </tr>
                }

              { FCE_scr != null &&
                <tr>
                <th colspan="2">First Certificate in English(FCE): </th>
                <td>{String(FCE_scr)}</td>
                </tr>
                }      
              { CEFR_scr != null &&
                <tr>
                <th colspan="2">CEFR: </th>
                <td>{String(CEFR_scr)}</td>
                </tr>
                } 
                { tu005_scr != null &&
                <tr>
                <th colspan="2">TU005 (for MasterOnly): </th>
                <td>{String(tu005_scr)}</td>
                </tr>
                } 

                { tu006_scr != null &&
                <tr>
                <th colspan="2">TU006 (for MasterOnly): </th>
                <td>{String(tu006_scr)}</td>
                </tr>
                }     

              { native != null &&
                <tr>
                <th colspan="2">Native English Speaker: </th>
                <td>{String(native)}</td>
                </tr>
                }   


            </tbody>
          </Table>
        </Card>


    </Card>
    </Page>
  );
};

export default TablePage;
