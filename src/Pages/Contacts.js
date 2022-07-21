import React from 'react';
import {
  Button,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
} from 'react-bootstrap';

function Contacts() {
  return (
    <Container style={{ width: '500px' }}>
      <h1 className="text-center">Contact us</h1>
      <Form>
        <FormGroup controlId="formBasicEmail">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="Enter email" />
          <FormText>We'll never share your email with anyone else</FormText>
        </FormGroup>

        <FormGroup controlId="formBasicPassword">
          <FormLabel>Example textarea</FormLabel>
          <FormControl as="textarea" rows="3" />
        </FormGroup>

        <FormGroup controlId="formBasicCheckbox">
          <FormCheck type="checkbox" label="Check me out" />
        </FormGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contacts;
