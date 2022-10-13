import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addKabupaten, selectKabupaten, changeKabupaten } from "./kabupatenSlice";
import { selectSelectedProvinsiID } from "../provinsi/provinsiSlice";

export function Kabupaten() {
  const dispatch = useDispatch();
  const kabupaten = useSelector(selectKabupaten);
  const provinsi_id = useSelector(selectSelectedProvinsiID);

  const fetchKab = () => {
    fetch(`https://api.kerjoo.com/api/v1/reference/regencies_of/${provinsi_id}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch(addKabupaten(jsonResponse));
      });
  };

  const handleChange = ({ target }) => {
    var kab = kabupaten.filter(function (item) {
      return item.name === target.value;
    });
    dispatch(changeKabupaten({ id: kab[0].id, name: target.value }));
  };

  useEffect(() => {
    fetchKab();
  }, [provinsi_id]);

  return (
    <select name="kabupaten" onChange={handleChange}>
      {kabupaten.map((prov) => (
        <option key={prov.id}>{prov["name"]}</option>
      ))}
    </select>
  );
}
