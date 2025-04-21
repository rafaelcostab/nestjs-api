import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { InvalidCredentialsError } from '../erros';
import { Response } from 'express';

@Catch(InvalidCredentialsError)
export class InvalidCredentialsErrorFilter implements ExceptionFilter {
  catch(exception: InvalidCredentialsErrorFilter, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(401).json({
      statusCode: 401,
      message: 'Invalid credentials',
    });
  }
}
