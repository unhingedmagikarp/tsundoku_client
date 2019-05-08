import React from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Button,
  Alert,
  Label,
  Input
} from "reactstrap";

import * as Api from "../lib/Api";

class AuthSignUpComponent extends React.Component {
  defaultState() {
    return {
      email: {
        value: "",
        error: "Email is required."
      },
      password: {
        value: "",
        error: "Password is required."
      },
      name: {
        value: ""
      },
      submit: {
        error: ""
      },
      formSubmitted: false
    };
  }

  constructor(props) {
    super(props);

    this.state = this.defaultState();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setEmail = this.setEmail.bind(this);
  }

  getFormErrors = () => {
    let fields = ["email", "password", "submit"];
    let errors = [];
    fields.map(field => {
      let fieldError = this.state[field].error || "";
      if (fieldError.length > 0) {
        errors.push(fieldError);
      }
    });
    return errors;
  };

  setEmail = event => {
    let newVal = event.target.value || "";
    let errorMessage = newVal.length === 0 ? "Email is required." : "";
    this.setState({
      email: {
        value: newVal,
        error: errorMessage
      },
      submit: {
        error: ""
      }
    });
  };

  setPassword = event => {
    let newVal = event.target.value || "";
    let errorMessage = newVal.length === 0 ? "Password is required." : "";
    this.setState({
      password: {
        value: newVal,
        error: errorMessage
      },
      submit: {
        error: ""
      }
    });
  };

  setName = event => {
    this.setState({
        name: {
            value: event.target.value
        }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      formSubmitted: true,
      submit: {
        error: ""
      }
    });

    if (this.getFormErrors().length > 0) {
      return false;
    }

    Api.signupUser(
      this.state.email.value,
      this.state.password.value,
      this.state.name.value
    ).then(jwt => {
      if (jwt) {
        this.props.propagateSignIn(jwt, this.props.history);
      } else {
        this.setState({
          submit: {
            error:
              "Sorry, we could not log you in with the credentials provided. Please try again."
          }
        });
      }
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={12}>
            {this.getFormErrors().length > 0 && this.state.formSubmitted && (
              <Alert color="danger">
                <strong>Please correct the following errors:</strong>
                <ul>
                  {this.getFormErrors().map((message, index) => (
                    <li key={"error_message_" + index}>{message}</li>
                  ))}
                </ul>
              </Alert>
            )}

            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  id="authEmail"
                  type="email"
                  label="Email address"
                  placeholder="Enter email"
                  onChange={this.setEmail}
                />
              </FormGroup>

              <FormGroup>
                <Label>Name</Label>
                <Input
                  id="name"
                  type="text"
                  label="name"
                  placeholder="Enter name"
                  onChange={this.setName}
                />
              </FormGroup>

              <FormGroup>
                <Label>Password</Label>
                <Input
                  id="authPassword"
                  type="password"
                  label="Password"
                  placeholder="Enter password"
                  onChange={this.setPassword}
                />
              </FormGroup>

              <Button type="submit">Log in</Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AuthSignUpComponent;
