import { User } from "../types";

interface Users {
  [userName: string]: User;
}

const users: Users = {
  arpit: {
    name: "Arpit Das",
    email: "arpitdas118@gmail.com",
  },
  himanshu: {
    name: "Himanshu Jaroli",
    email: "jaroli.himanshu.work@gmail.com",
  },
};

export default users;
