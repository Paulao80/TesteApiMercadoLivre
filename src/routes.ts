import { Router } from "express";
import TesteController from "./controllers/TesteController";

const routes = Router();

routes.get("/redirect", TesteController.redirect);
routes.get("/notification", TesteController.notification);
routes.post("/notification", TesteController.notification);

export default routes;
