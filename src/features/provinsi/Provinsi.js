// import { getProvinsi } from "../../helpers/helpers";
import { useEffect } from "react";

const url = "https://api.kerjoo.com/api/v1/reference/provinces";

const getProvinsi = () => {
  fetch(url, { cache: "no-cache" })
    .then(
      (response) => {
        if (response.ok) {
          return response.json(); //
        }
        throw new Error("Request failed!");
      },
      (networkError) => {
        console.log(networkError.message);
      }
    )
    .then((jsonResponse) => {
      jsonResponse.map((provinsi) => {
        return <option key={provinsi.id}>{provinsi.name}</option>;
      });
    });
};

export function Provinsi() {
  return <select name="provinsi">{getProvinsi}</select>;
}
