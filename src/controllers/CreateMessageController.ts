import { Request, Response } from 'express';
import { CreateMessageServices } from '../service/CreateMessageService';

class CreateMessageController {
  async handle( request: Request, response: Response ) {
    const { message } = request.body;

    const { user_id } = request;

    const service = new CreateMessageServices();

    const result = await service.execute(message, user_id);

    return response.json(result);
  };
};

export { CreateMessageController };