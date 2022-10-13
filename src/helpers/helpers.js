// /*------------------------------------
//  Get Province
//  ------------------------------------*/

// const url = "https://api.kerjoo.com/api/v1/reference/provinces";

// export const getProvinsi = () => {
//   fetch(url, { cache: "no-cache" })
//     .then(
//       (response) => {
//         if (response.ok) {
//           return response.json(); //
//         }
//         throw new Error("Request failed!");
//       },
//       (networkError) => {
//         console.log(networkError.message);
//       }
//     )
//     .then((jsonResponse) => {
//       console.log(jsonResponse);
//       return jsonResponse;
//     });
// };
