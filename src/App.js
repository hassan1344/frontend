import axios from "axios";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [api_data, set_api_data] = useState([]);
  const [query, set_query] = useState([]);

  const Line1 = (x) => (
    <hr
      className="line"
      style={{
        backgroundColor: "green",
        height: 3,
        width: 25,
        padding: 0,
        transform: `rotate(${x}deg)`,
      }}
    />
  );

  const Line2 = (x) => (
    <hr
      style={{
        backgroundColor: "red",
        height: 3,
        width: 25,
        padding: 0,
        transform: `rotate(${x}deg)`,
      }}
    />
  );

  let props = {
    api_data: api_data,
    query: query,
    set_query: set_query,
    componentDidMount: componentDidMount,
    Line1: Line1,
    Line2: Line2,
  };

  async function componentDidMount(query) {
    const api_data = await axios.post(
      "http://127.0.0.1:8000/websearching/api/",
      {
        query: query,
      }
    );

    set_api_data(api_data.data);
  }

  return (
    <div>
      <Navbar {...props} />
    </div>
  );
}

export default App;
