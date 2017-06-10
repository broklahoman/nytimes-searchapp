import React from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";
const Main = props => (
  <div>
    <Search />
    {props.children}
    <Results />
    <Saved />
  </div>
);

export default Main;
