import React, { useEffect } from "react";
import "./App.scss";
import { Header, Typography } from "./components";
import { api } from "./utils/ajax/instance";
import { pokemon } from "./constants/api";

function App() {
  useEffect(() => {
    const getExampleRes = async () => {
      const response = await api.get(pokemon("pikachu")).json();
      return response;
    };

    getExampleRes().then((res) => console.log(res));
  }, []);
  return (
    <div className="App">
      <Header />
      <Typography size={"t1"}>This is typography t1</Typography>
      <Typography size={"t2"}>This is typography t1</Typography>
      <Typography size={"t3"}>This is typography t1</Typography>
      <Typography size={"t4"}>This is typography t1</Typography>
    </div>
  );
}

export default App;
