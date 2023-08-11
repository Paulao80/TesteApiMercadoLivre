import { Request, Response } from "express";

export default {
  async redirect(request: Request, response: Response) {
    console.log(request);
    return response.status(200).send("Sucesso!");
  },
  async notification(request: Request, response: Response) {
    console.log(request);
    return response.status(200).send("Sucesso!");
  },
};
