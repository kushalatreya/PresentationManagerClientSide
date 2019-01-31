import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import  './singleview.css'

export default class SingleView extends Component {
  render() {
    return(
      <div>
        <Jumbotron fluid>
          <Container fluid>
            {this.props.data.map((element) => <div>{element.description}</div>)} 
          </Container>
        </Jumbotron>
      </div>
      )
  }
}
