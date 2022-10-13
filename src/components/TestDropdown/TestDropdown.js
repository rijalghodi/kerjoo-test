import React from "react";
import "../TestGrid/TestGrid.css";
import "./TestDropdown.css";
import { Provinsi } from "../../features/provinsi/Provinsi";
import { Kabupaten } from "../../features/kabupaten/Kabupaten";
import { Kecamatan } from "../../features/kecamatan/Kecamatan";
import { Desa } from "../../features/desa/Desa";

class TestDropdown extends React.Component {
  render() {
    return (
      <div className="my-container grid region">
        <Provinsi />
        <Kabupaten />
        <Kecamatan />
        <Desa />
      </div>
    );
  }
}

export { TestDropdown };
