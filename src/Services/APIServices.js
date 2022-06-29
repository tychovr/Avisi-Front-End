import axios from "axios";

const baseUrl = "https://localhost:7037/api";

export default class APIServices {
  static GetAllVacancies() {
    return axios.get(baseUrl + "/Vacancy/GetVacancies");
  }
}
