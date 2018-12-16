import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async resolve(name: string): Promise<MiddlewareFunction> {
    await new Promise(r => setTimeout(r, 234));
    return async (req, res, next) => {
      await new Promise(r => setTimeout(r, 1234));
      console.log('Request...', name);
      next();
    };
  }
}
