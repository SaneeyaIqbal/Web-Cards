import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as action from "./store/actions/action.js";

class App extends Component {
  deleteItem = id => {
    const updatedList = this.props.user.filter(item => item.id !== id);
    this.props.updateUserData(updatedList);
  };

  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    return (
      <div className="App">
        {this.props.user
          ? this.props.user.map((items, index) => (
            <div className="details" key={index}>
              <h2>User Details</h2>
              <div className="display">
                <img src={items._links.avatar.href} />
                <label>Id:{items.id}</label>
                <label>First Name: {items.first_name}</label>
                <label>Last Name: {items.last_name}</label>
                <label>DOB:{items.dob}</label>
                <label>Gender:{items.gender}</label>
                <label>Email:{items.email}</label>
                <label>Phone:{items.phone}</label>
                <label>Website:{items.website}</label>
                <label>Address:{items.address}</label>
                <label>Status:{items.status}</label>
                <label>Self:{items._links.self.href}</label>
                <label>Edit:{items._links.edit.href}</label>

              </div>
              <button onClick={() => this.deleteItem(items.id)}>Delete</button>
            </div>
          ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => dispatch(action.getUserData()),
    updateUserData: updatedUserDetails =>
      dispatch(action.deleteItem(updatedUserDetails))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);