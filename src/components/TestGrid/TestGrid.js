import React from "react";
import "./TestGrid.css";

class TestGrid extends React.Component {
  render() {
    return (
      <div className="my-container grid">
        <div class="box a">A</div>
        <div class="box b">B</div>
        <div class="box c">C</div>
        <div class="box d">D</div>
      </div>
    );
  }
}

export { TestGrid };
