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
    <Page title="Professor Timetable" breadcrumbs={[{ name: 'Ins-search', active: true }]}>
      <Card>
        <CardHeader>Instructor Search</CardHeader>
        <CardBody>
          <Form>
            <Label>{date.toString()}</Label>
            <br></br>
            <FormGroup>
              <Label for="exampleSelect">Instructor Name :</Label>
              <Input className="mb-2" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Instructor Surname :</Label>
              <Input className="mb-2" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select School</Label>
              <Input type="select" name="selectLev">
                <option>ALL</option>
                <option>Common and Graduate Studies</option>
                <option>Master of Science</option>
                <option>Doctor of Philosophy</option>
                <option>Office & Services</option>
                <option>Civil Engineering and Technology</option>
                <option>Communications, Instrumentation and Control</option>
                <option>Management Technology</option>
                <option>Manufacturing Systems and Mechanical Engineering</option>
                <option>Bio-Chemical Engineering and Technology</option>
                <option>Information and Computer Technology</option>
                <option>School of Electrical Engineering and information Technology</option>
                <option>Information and Management Technology</option>
                <option>Informaion, Computer, and Communication Technology</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Specify the max number of record</Label>
              <Input type="select" name="specNumRec">
                <option>100</option>
                <option>50</option>
                <option>25</option>
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
