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
    <Page title="Course/Class" breadcrumbs={[{ name: 'course-class', active: true }]}>
      <Card>
        <CardHeader>Search Course</CardHeader>
        <CardBody>
          <Form>
            <Label>{date.toString()}</Label>
            <br></br>
            <FormGroup>
              <Label for="exampleSelect">Step 1 : Select Department School</Label>
              <Input type="select" name="selectDep">
                <option>ALL Department School</option>
                <option>Common and Graduate Studies</option>
                <option>Civil Engineering and Technology</option>
                <option>Communications, Instrumentation and Control</option>
                <option>Management Technology</option>
                <option>Manufacturing Systems and Mechanical Engineering</option>
                <option>Bio-Chemical Engineering and Technology</option>
                <option>Information and Computer Technology</option>
                <option>School of Electrical Engineering and Information Technology</option>
                <option>Information, Computer, and Communication Technology</option>

              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Step 2 : Specify the max number of record</Label>
              <Input type="select" name="specNumRec">
                <option>25</option>
                <option>50</option>
                <option>100</option>
                <option>250</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Step 3.1 : Select Academic Year</Label>
              <Input type="select" name="selectAca">
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Step 3.2 : Select Semester</Label>
              <Input type="select" name="selectSem">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Step 3.3 : Select Campus</Label>
              <Input type="select" name="selectCampus">
                <option>ALL Campus</option>
                <option>Rangsit Campus</option>
                <option>Bangkadi Campus</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Step 3.4 : Select Level</Label>
              <Input type="select" name="selectLev">
                <option>ALL Level</option>
                <option>Bachelor</option>
                <option>Master</option>
                <option>Doctoral</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Step 4 : Input CourseCode</Label>
              <Input className="mb-2" placeholder="Please input your course code" />
            </FormGroup>
            <Label for="exampleSelect">Step 5 : Click for Search </Label>
            <br></br>
            <Button>Search</Button>
          </Form>
        </CardBody>
      </Card>
    </Page>
  );
};

export default CSPage;
