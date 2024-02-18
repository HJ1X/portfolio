import users from "../data/users";
import { User } from "../types";

class UserService {
  private static user: User = users[import.meta.env.VITE_USER_NAME];

  public static getUserName() {
    if (!UserService.user) return;
    return UserService.user.name;
  }

  public static getEmail() {
    if (!UserService.user) return;
    return UserService.user.email;
  }

  public static getProjects() {
    if (!UserService.user) return;
    return UserService.user.projects;
  }

  public static getProject(projectId?: string) {
    if (!UserService.user) return;
    return UserService.user.projects?.find(
      (project) => project.id === projectId
    );
  }
}

export default UserService;
