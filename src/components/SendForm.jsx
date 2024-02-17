import { Component } from "react";
import {
  Button,
  Container,
  Form,
} from "react-bootstrap";

export default class SendForm extends Component {
  render() {
    return (
      <Container>
        <h1> Свяжитесь с нами </h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Введите Вашу электронную почту</Form.Label>
            <Form.Control type="email" placeholder="Enter email"></Form.Control>
            <Form.Text> </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Ваше обращение</Form.Label>
            <Form.Control as="textarea" rows="5"></Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out"/> */}
          </Form.Group>
          <Button variant="" type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
