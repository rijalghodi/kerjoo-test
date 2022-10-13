import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addDesa, selectDesa, changeDesa } from "./desaSlice";
import { selectSelectedKecamatanID } from "../kecamatan/kecamatanSlice";

export function Desa() {
  const dispatch = useDispatch();
  const desa = useSelector(selectDesa);
  const kec_id = useSelector(selectSelectedKecamatanID);

  const fetchDes = () => {
    fetch(`https://api.kerjoo.com/api/v1/reference/villages_of/${kec_id}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch(addDesa(jsonResponse));
      });
  };

  const handleChange = ({ target }) => {
    var des = desa.filter(function (item) {
      return item.name === target.value;
    });
    dispatch(changeDesa({ id: des[0].id, name: target.value }));
  };

  useEffect(() => {
    fetchDes();
  }, [kec_id]);

  return (
    <select name="Desa" onChange={handleChange}>
      {desa.map((des) => (
        <option key={des.id}>{des["name"]}</option>
      ))}
    </select>
  );
}
