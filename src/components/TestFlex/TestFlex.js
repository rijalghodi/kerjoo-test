import React from "react";
import "./TestFlex.css";

class TestFlex extends React.Component {
  render() {
    return (
      <div className="flex-container my-container">
        <div className="buttons">
          <button>Tambah</button>
          <button>import</button>
          <button>Eksport</button>
        </div>
        <div className="input-search">
          <input type="text" placeholder="Masukkan kata" name="search" />
        </div>
        <div className="tahun-dropdown">
          <select name="tahun">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
    );
  }
}

export { TestFlex };
