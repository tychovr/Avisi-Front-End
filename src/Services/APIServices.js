import axios from "axios";

const baseUrl = "https://localhost:7037/api";

export default class APIServices {
  static GetTopVacancies(amount) {
    return axios.get(baseUrl + "/Vacancy/GetTopVacancies/" + amount);
  }
}
