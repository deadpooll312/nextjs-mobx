import axiosInstance from "../../api";

export class AuthAction {
  getTestData() {
    axiosInstance.get(`tasks/`)
      .then(({data}) => this.tasks = data);
  }
}
