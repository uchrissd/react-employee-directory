//Import REACT requirements and componenets
import React, { Component } from "react";
import DataArea from "../DataArea/index";
import DataBody from "../DataBody/index";
import EmployeeTable from "../DataTable/index";
import Nav from "../Nav/index";
import Header from "../Header/index";
import SearchBox from "../SearchBox/index";
import Wrapper from "../Wrapper/index";
import API from "../../utils/API";

class MainContainer extends Component {
  state = {
    searchEmployees: "",
    results: []
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.employeeSearch();
  }

  employeeSearch = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      employeeSearch: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.employeeSearch);
  };

  // Render compoments to the DOM here
  render() {
    return (
      <div>
        <Header />
        <EmployeeTable />
      </div>
    );
  }
}

export default MainContainer;
