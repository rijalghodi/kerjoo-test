import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addKecamatan, selectKecamatan, changeKecamatan } from "./kecamatanSlice";
import { selectSelectedKabupatenID } from "../kabupaten/kabupatenSlice";

export function Kecamatan() {
  const dispatch = useDispatch();
  const kecamatan = useSelector(selectKecamatan);
  const kab_id = useSelector(selectSelectedKabupatenID);

  const fetchKec = () => {
    fetch(`https://api.kerjoo.com/api/v1/reference/districts_of/${kab_id}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch(addKecamatan(jsonResponse));
      });
  };

  const handleChange = ({ target }) => {
    var kec = kecamatan.filter(function (item) {
      return item.name === target.value;
    });
    dispatch(changeKecamatan({ id: kec[0].id, name: target.value }));
  };

  useEffect(() => {
    fetchKec();
  }, [kab_id]);

  return (
    <select name="Kecamatan" onChange={handleChange}>
      {kecamatan.map((kec) => (
        <option key={kec.id}>{kec["name"]}</option>
      ))}
    </select>
  );
}
