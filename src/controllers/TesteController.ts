import { Request, Response } from "express";

export default {
  async redirect(request: Request, response: Response) {
    console.log(request.body);
    console.log(request.params);
    return response.status(200).send("ok");
  },
  async notification(request: Request, response: Response) {
    console.log(request.body);
    console.log(request.params);
    return response.status(200).send("ok");
  },
};
