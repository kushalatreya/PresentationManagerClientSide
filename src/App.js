import React, { Component } from "react";
import "./App.css";
import AddPresentation from "./components/AddPresentation";
import EachPresentation from "./components/EachPresentation";
import Navigation from "./components/Navigation";
import SingleView from "./components/SingleView";
import EditPresentaion from "./components/EditPresentation";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        presenter_name: "kushal Atreya",
        evaluator_name: "Asabeneh Teacher",
        presentation_topic: "po-mo-do-ro techniques",
        presentation_URL: "https://www.google.com/maps",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum corrupti, sapiente ducimus corporis, quos minus nisi eveniet voluptas ut, quibusdam molestias similique. Quod maxime dolor, a voluptate at temporibus aperiam aut eos adipisci libero repudiandae. Tempore rem nihil at corporis."
      },
      {
        id: 2,
        presenter_name: "Adam Smith",
        evaluator_name: "Misk Termin",
        presentation_topic: "CSS Specificity",
        presentation_URL: "https://www.google.com/maps",
        description: "adipisicing elit. Porro, cumque."
      },
      {
        id: 3,
        presenter_name: "John Martin",
        evaluator_name: "Birendranath Tamang",
        presentation_topic: "HTTP Request",
        presentation_URL: "https://www.google.com/maps",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, cumque."
      }
    ],
    editnumber: null
  };

  addPost = obj => {
    const posts = this.state.posts.slice();
    posts.push(obj);
    this.setState({ posts });
  };

  editPresentaion = newState => {
    this.setState({
      posts: this.state.posts.map(post =>
        post.id === newState.id ? newState : post
      )
    });

    // this.setState({ posts: currPresentation });
  };
  deleteHandaler = id => {
    console.log(id);
    const post = this.state.posts.slice();
    post.splice(id, 1);
    this.setState({ posts: post });
  };
  /* generates the id later using true false (boolean) */
  getId = id => {
    const data = this.state;
    data.editnumber = id;
    console.log(id);
    this.setState({ state: data });
  };
  /* single view component, when clicked */
  descriptionHandler = () => {
    const oldList = this.state.posts.slice();
    const newList = oldList.filter(
      (element, index) => element.id === this.state.editnumber
    );
    return newList;
  };
  /* Edit code here:  */
  editHandler = id => {
    const dataCopy = this.state.posts.slice();
    const filteredData = dataCopy.filter(
      (element, index) => element.id === this.state.editnumber
    );
    console.log(filteredData);
    return filteredData;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route
                exact
                path="/"
                component={props => (
                  <EachPresentation
                    post={this.state}
                    deleteclicked={this.deleteHandaler}
                    getId={this.getId}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/add"
                component={props => (
                  <AddPresentation addPost={this.addPost} post={this.state} />
                )}
              />
              <Route
                exat
                path="/view"
                component={props => (
                  <SingleView data={this.descriptionHandler()} />
                )}
              />
              <Route
                exact
                path="/edit"
                component={props => {
                  return (
                    <EditPresentaion
                      selectedPresentation={this.state.posts.find(
                        post => post.id === this.state.editnumber
                      )}
                      selectedId={this.state.editnumber}
                      saveEdit={this.editPresentaion}
                      forEdit={this.editHandler}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
