import React, { Component } from "react";
import WebImage from "./webimage";

class Navbar extends Component {
  state = {
    loading: true,
    api_data: [],
  };

  async componentDidMount() {
    const url = "http://127.0.0.1:8000/playground/members";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ api_data: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.api_data) {
      return <div>Unable to Fetch the Data!</div>;
    }

    return (
      <div>
        <h1 className="heading">
          <WebImage />
          Select Newspaper
        </h1>

        <table>
          <thead>
            <tr>
              <th>Link</th>
              <th>Title</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {this.state.api_data.map((item) => (
              <tr key={item.id}>
                <td>{item.email}</td>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Navbar;
