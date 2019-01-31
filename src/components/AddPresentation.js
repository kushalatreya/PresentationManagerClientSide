import React, { Component } from "react";
/* import "./addPresentation.css"; */
import {
  Jumbotron,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class AddPresentation extends Component {
  state = {
    id: "",
    presenter_name: "",
    evaluator_name: "",
    presentaion_topic: "",
    presentation_URL: ""
  };
  saveSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state);
  };
  handleSubmit = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    const _id = this.props.post.posts[this.props.post.posts.length - 1].id + 1;
    this.setState({ [name]: value, id: _id });
  };

  render() {
    
    
    return <div>
        <Jumbotron>
          <Form className="form" onSubmit={this.saveSubmit}>
            {console.log(this.props)}
            <FormGroup row>
              <Label sm={2}>Presenter Name: </Label>
              <Col sm={10}>
                <Input type="text" name="presenter_name" placeholder="presenter name here" onChange={this.handleSubmit} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Evaluator Name: </Label>
              <Col sm={10}>
                <Input type="text" name="evaluator_name" placeholder="Evaluator name here" onChange={this.handleSubmit} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Presentation Topic: </Label>
              <Col sm={10}>
                <Input type="text" name="presentation_topic" placeholder="Presentation Topic here:" onChange={this.handleSubmit} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Description: </Label>
              <Col sm={10}>
                <Input type="textarea" rows="5" name="description" placeholder="Describe your project here:" onChange={this.handleSubmit} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Presentation URL: </Label>
              <Col sm={10}>
                <Input type="url" name="presentation_URL" placeholder="https://example.com" onChange={this.handleSubmit} />
              </Col>
            </FormGroup>
            <Button size="lg" color="primary">
              Add Presentation
            </Button>
          </Form>
        </Jumbotron>
      </div>;
  }
}
