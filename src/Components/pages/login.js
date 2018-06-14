import React, { Component } from "react";

import { Button,  Form,Segment } from 'semantic-ui-react'

// const FormExampleForm = () => (
//   <Form>
//     <Form.Field>
//       <label>First Name</label>
//       <input placeholder='First Name' />
//     </Form.Field>
//     <Form.Field>
//       <label>Last Name</label>
//       <input placeholder='Last Name' />
//     </Form.Field>
//     <Form.Field>
//       <Checkbox label='I agree to the Terms and Conditions' />
//     </Form.Field>
//     <Button type='submit'>Submit</Button>
//   </Form>
// )

// export default FormExampleForm


 class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
      <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Email' placeholder='Email' />
        <Form.Input fluid label='Password' placeholder='Password' />
      </Form.Group>
      
      <Button type='submit'>Login</Button>
    </Form>
  </Segment>
        {/* <form onSubmit={this.handleSubmit}> */}
        {/* <Form >
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' value={this.state.email} onChange={this.handleChange} />
     
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' value={this.state.password}
              onChange={this.handleChange} />
    </Form.Field> */}
    {/* <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field> */}
    {/* <Button type='Login' onClick={!this.validateForm()}>Login</Button>
  </Form> */}
          {/* <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button> */}
        {/* </form> */}
      </div>
    );
  }
}
export default Login