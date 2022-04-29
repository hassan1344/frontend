import React, { Component, useState } from "react";
import { handleClick } from "./queryRequest";
import WebImage from "./webimage";

class Navbar extends Component {
  state = {
    loading: true,
    api_data: [],
    query: null,
  };

  async componentDidMount() {
    const url = "http://127.0.0.1:8000/playground/members";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ api_data: data, loading: false });
  }

  render() {
    return (
      <div>
        <h1 className="heading">
          <WebImage />
          Select Newspaper
        </h1>
        <div className="App">
          <h1>Enter Query</h1>
          <input
            type="text"
            onChange={(val) => {
              this.setState({ query: val.target.value });
              console.log(val);
            }}
          />
          <button onClick={handleClick(query)}> Generate</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Link</th>
              <th>Title</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {
              /* /* {this.state.api_data.map((item) => (
              <tr >
                <td>hunainarif30@gmail.com</td>
                <td>Hunain</td>
                <td>Arif</td>
              </tr>
            ))} */
              <tr>
                <td>hunain</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Navbar;
