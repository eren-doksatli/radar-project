export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.730701",
    bl_lng: "25.976602",
    tr_lat: "43.099326",
    tr_lng: "43.987685",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "e82d60d14emshac33eedaf2a1be0p18ddb9jsn6b6da6aff6bd",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
export const options2 = {
  headers: {
    "X-RapidAPI-Key": "e82d60d14emshac33eedaf2a1be0p18ddb9jsn6b6da6aff6bd",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
