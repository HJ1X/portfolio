import users from "../data/users";
import { User } from "../types";

class UserService {
  private static user: User = users[import.meta.env.VITE_USER_NAME];

  public static getUserName() {
    if (!UserService.user) return null;
    return UserService.user.name;
  }

  public static getEmail() {
    if (!UserService.user) return null;
    return UserService.user.email;
  }
}

export default UserService;
