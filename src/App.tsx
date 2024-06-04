import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components";
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
    </div>
  );
}

export default App;
