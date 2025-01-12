import { createContext } from "react";

const UserContext = createContext(
    {loggedInUser: "Rahul"}
);

export default UserContext;