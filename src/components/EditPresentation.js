import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Jumbotron,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class EditPresentaion extends Component {
  state = {
    ...this.props.selectedPresentation
  };

  // handle input change
  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  // handle save changes
  handleSaveUpdate = e => {
    this.props.saveEdit(this.state);
    // send to home screen after update
    this.props.history.push("/");
  };

  // handle cancel edit
  handleCancelSave = e => {
    // send to home screen after cancel
    this.props.history.push("/");
  };

  render() {
    const {
      id,
      presenter_name,
      evaluator_name,
      presentation_topic,
      presentation_URL,
      description
    } = this.state;

    return (
      <div>
        <Jumbotron>
          <Form className="form">
            <FormGroup row>
              <Label sm={2}>Presenter Name: </Label>
              <Col sm={10}>
                <Input
                  value={presenter_name}
                  type="text"
                  name="presenter_name"
                  placeholder="Edit Presenter name here"
                  onChange={e => this.handleInputChange(e)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Evaluator Name: </Label>
              <Col sm={10}>
                <Input
                  value={evaluator_name}
                  type="text"
                  name="evaluator_name"
                  placeholder="Edit Evaluator name here"
                  onChange={e => this.handleInputChange(e)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Presentation Topic: </Label>
              <Col sm={10}>
                <Input
                  value={presentation_topic}
                  type="text"
                  name="presentation_topic"
                  placeholder="Edit Presentation Topic here:"
                  onChange={e => this.handleInputChange(e)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Description: </Label>
              <Col sm={10}>
                <Input
                  value={description}
                  type="textarea"
                  rows="5"
                  name="description"
                  placeholder="Edit Describe your project here:"
                  onChange={e => this.handleInputChange(e)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Presentation URL: </Label>
              <Col sm={10}>
                <Input
                  value={presentation_URL}
                  type="url"
                  name="presentation_URL"
                  placeholder="https://example.com"
                  onChange={e => this.handleInputChange(e)}
                />
              </Col>
            </FormGroup>
            <Button
              size="sm"
              color="primary"
              onClick={() => this.handleSaveUpdate()}
            >
              Save
            </Button>{" "}
            <Button
              size="sm"
              color="danger"
              onClick={() => this.handleCancelSave()}
            >
              Cancel
            </Button>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default withRouter(EditPresentaion);
