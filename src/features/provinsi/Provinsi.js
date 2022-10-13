import { addProvinsi, changeProvinsi, selectProvinsi } from "./provinsiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export function Provinsi() {
  const dispatch = useDispatch();
  // const provinsi_id = useSelector(selectSelectedProvinsiID);
  const provinsi = useSelector(selectProvinsi);

  const fetchProv = () => {
    fetch("https://api.kerjoo.com/api/v1/reference/provinces")
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch(addProvinsi(jsonResponse));
      });
  };

  // const fetchKab = () => {
  //   fetch(`https://api.kerjoo.com/api/v1/reference/regencies_of/${provinsi_id}`)
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       dispatch(addKabupaten(jsonResponse));
  //     });
  // };

  useEffect(() => {
    fetchProv();
  }, []);

  // useEffect(() => {
  //   fetchKab();
  // }, [provinsi_id]);

  const handleChange = ({ target }) => {
    var prov = provinsi.filter(function (item) {
      return item.name === target.value;
    });
    dispatch(changeProvinsi({ id: prov[0].id, name: target.value }));
  };

  return (
    <select name="provinsi" onChange={handleChange}>
      {provinsi.map((prov) => (
        <option key={prov["id"]} id={prov["name"]}>
          {prov["name"]}
        </option>
      ))}
    </select>
  );
}
