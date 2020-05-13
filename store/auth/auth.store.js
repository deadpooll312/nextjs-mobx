import { decorate, observable } from "mobx";
import { AuthAction } from "./auth.action";

class AuthStore extends AuthAction {
  tasks = [];
}

AuthStore = decorate(AuthStore, {
  tasks: observable
});

export default new AuthStore();
