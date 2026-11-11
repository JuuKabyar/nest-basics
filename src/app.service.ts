import { Injectable } from '@nestjs/common';

/**
 * Injected AppService for business logic
 */
@Injectable()
export class AppService {
  /**
   * Returns 
   * @returns 
   */
  getHello(): string {
    return 'Hello Nest!';
  }
}

