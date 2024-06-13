import http from "k6/http"; // installed via brew k6

export const options = {
  vus: 100,
  duration: "10s",
}

export default function () {
  http.get("http://localhost:8000");
}
