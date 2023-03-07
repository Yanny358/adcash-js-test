import { Express, Request, Response  } from "express"
import { createUserHandler } from "./controllers/user.controller"
import validate from "./middleware/validation";
import { createUserSchema } from "./schemas/user.schema";

function routes (app: Express) {
    app.post("/api/user", validate(createUserSchema), createUserHandler);
}

export default routes