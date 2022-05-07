import React, { Component } from "react";
import WebImage from "./webimage";

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">
          <WebImage />
          Select Newspaper
        </h1>
        <div className="App">
          <h1>Enter Query</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Link</th>
              <th>Title</th>
              <th>Cosine Score</th>
              <th>Angle</th>
            </tr>
          </thead>
          <tbody>
            {this.props.api_data.map((item) => (
              <tr key={item.id}>
                <td>{item.link}</td>
                <td>{item.title}</td>
                <td>{item.score}</td>
                <td>{item.angle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Navbar;
