import React, { Component } from "react";
/* import "./eachPost.css"; */
/* import SingleView from "./SingleView" ; */
import { Jumbotron, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default class EachPresentation extends Component {
  render() {
    return (
      <div>
        {this.props.post.posts.map((element, index) => {
          return <div className="each_post" key={element.id}>
              <Jumbotron fluid>
                <Container fluid>
                  {console.log(this.props)}
                  <p>ID: {element.id}</p>
                  <p>Presenter: {element.presenter_name}</p>
                  <p>Evaluator: {element.evaluator_name}</p>
                  <p>Topic: {element.presentation_topic}</p>
                  {/* <p>Description: {element.description}</p> */}
                  <p>
                    Link:
                    <a href={element.presentation_URL} target="blank">
                      {element.presentation_URL}
                    </a>
                  </p>
                  <Link to="/edit">
                    <Button outline color="info" onClick={() => this.props.getId(element.id)}>
                      Edit
                    </Button>
                  </Link> <Link to="/view/:id">
                    <Button outline color="primary" onClick={() => this.props.getId(element.id)}>
                      View
                    </Button>
                  </Link>{" "}
                  <Button outline color="danger" onClick={() => this.props.deleteclicked(index)}>
                    Delete
                  </Button>
                </Container>
              </Jumbotron>
            </div>;
        })}
      </div>
    );
  }
}
