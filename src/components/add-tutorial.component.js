import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import {v4} from "uuid";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      name: "",
      phone: "", 
      photo: "", 
      email: "", 
     
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangePhoto(e) {
    this.setState({
      photo: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  saveTutorial() {
    let data = {
      id: v4(),
      name: this.state.name,
      phone: this.state.phone,
      photo: this.state.photo,
      email: this.state.email
    };

    TutorialDataService.create(data)
      .then(response => {
        // this.setState({
        //   id: response.data.id,
        //   title: response.data.title,
        //   description: response.data.description,
        //   published: response.data.published,

        //   submitted: true
        // });
        console.log(response);
       
      })
      .catch(e => {
        console.log(e);
      });
      this.newTutorial();
  }

  newTutorial() {
    this.setState({
      id: null,
      name: "",
      phone: "",
      photo: "",
      email: ""
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="photo">Photo</label>
              <input
                type="text"
                className="form-control"
                id="photo"
                required
                value={this.state.photo}
                onChange={this.onChangePhoto}
                name="photo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
