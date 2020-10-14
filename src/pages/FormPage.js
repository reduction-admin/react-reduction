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

const FormPage = () => {
  return (
    <Page title="Request Forms" breadcrumbs={[{ name: 'Forms', active: true }]}>
      <Card>
        <CardHeader>Request Certificate</CardHeader>
        <CardBody>
          <Form>
            <Label>{date.toString()}</Label>
            <FormGroup>
              <Label for="exampleSelect">Step 1 : Select Type of Document</Label>
              <Input type="select" name="selectDoc">
                <option>Academic Record (Transcript)</option>
                <option>Bachelor-Rank (Current/English Version)-RS</option>
                <option>Bachelor-Status (Current) - RS (Student Status For Bachelor/English Version)</option>
                <option>Eng-Instruction Certificate - RS (English Version)</option>
                <option>ปริญญาตรี-ใบรับรองสถานภาพนักศึกษาปัจจุบัน - RS (Thai Version)</option>
                <option>Status_Eng_ExpectR (Expected to Graduate for 4 th year student Bachelor/English Version)</option>
                <option>ปริญญาตรี-ใบรับรองคาดว่าจะจบการศึกษา (สำหรับนักศึกษาชั้นปีที่ 4 ขึ้นไป/Thai Version)</option>
                <option>Official Transcript</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Step 2 : Select Number of Copy</Label>
              <Input type="select" name="selectNum">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Step 3 : Pick Up Campus</Label>
              <Input type="select" name="selectCampus">
                <option>Rangsit Campus</option>
                <option>Bangkadi Campus</option>
              </Input>
            </FormGroup>
            <Label for="exampleSelect">Step 4 : Click for Confirm Request --> </Label>
            
            <Button>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </Page>
  );
};

export default FormPage;
