import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

const CSPage = () => {
  return (
    <Page title="Student Timetable" breadcrumbs={[{ name: 'stu-search', active: true }]}>
      <Card>
        <CardHeader>Student Search</CardHeader>
        <CardBody>
          <Form>
            <Label>{date.toString()}</Label>
            <br></br>
            <FormGroup>
              <Label for="exampleSelect">Please insert Student ID :</Label>
              <Input className="mb-2" placeholder="60XXXXXXXX" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Student Name :</Label>
              <Input className="mb-2" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Student Surname :</Label>
              <Input className="mb-2" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select Level</Label>
              <Input type="select" name="selectLev">
                <option>ALL Level</option>
                <option>Bachelor</option>
                <option>Master</option>
                <option>Doctoral</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Specify the max number of record</Label>
              <Input type="select" name="specNumRec">
                <option>25</option>
                <option>50</option>
                <option>100</option>
                <option>250</option>
              </Input>
            </FormGroup>
            
            <Label for="exampleSelect">Click for Search </Label>
            <br></br>
            <Button>Search</Button>
          </Form>
        </CardBody>
      </Card>
    </Page>
  );
};

export default CSPage;
