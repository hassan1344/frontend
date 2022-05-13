import React, { Component } from "react";
import WebImage from "./webimage";

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">
          <WebImage />
          NewSmart
        </h1>
        <div className="App">
          <h1 className="query">Enter Query : </h1>
          <input
            type="text"
            value={this.props.query}
            onChange={(e) => this.props.set_query(e.target.value)}
          />

          <button
            onClick={() => this.props.componentDidMount(this.props.query)}
          >
            Execute
          </button>
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
                <td>
                  {this.props.Line1(item.angle)}
                  {this.props.Line2(0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Navbar;
