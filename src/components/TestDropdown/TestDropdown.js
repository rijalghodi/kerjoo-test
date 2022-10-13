import React from "react";
import "../TestGrid/TestGrid.css";
import "./TestDropdown.css";
import { Provinsi } from "../../features/provinsi/Provinsi";

class TestDropdown extends React.Component {
  render() {
    return (
      <div className="my-container grid region">
        <Provinsi />

        <select name="kabupaten/kota">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>

        <select name="kecamatan">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>

        <select name="desa">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    );
  }
}

export { TestDropdown };
