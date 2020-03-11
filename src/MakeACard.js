import React from "react";
import { Form } from "semantic-ui-react"

export default class MakeACard extends React.Component {
  state = {front: "", back: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ front:"", back: "",});
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
          label="Front"
          placeholder="Text for Front of Card"
          name="front"
          value={this.state.name}
          onChange={this.handleChange}
          />

          <Form.Input
          label="Back"
          placeholder="Text for Back of Card"
          name="back"
          value={this.state.name}
          onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}