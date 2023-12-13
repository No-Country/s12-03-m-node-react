import { routesPetsControllerAPIValue } from "./pets.js";
import { routesUsersControllerAPIValue } from "./users.js";
import { routesSessionControllerAPIValue } from "./session.js";

export const paths = {
    ...routesPetsControllerAPIValue,
    ...routesUsersControllerAPIValue,
    ...routesSessionControllerAPIValue,
    };
