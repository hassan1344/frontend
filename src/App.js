import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [api_data, set_api_data] = useState([]);

  async function componentDidMount() {
    const api_data = await axios.get("http://127.0.0.1:8000/websearching/");

    set_api_data(api_data.data);
  }

  useEffect(() => {
    componentDidMount();
    console.log("test");
  }, []);

  return <Navbar api_data={api_data} />;
}

export default App;
