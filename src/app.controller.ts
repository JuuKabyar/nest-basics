import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controller to connect with other services
 */
@Controller()
export class AppController {
  /**
   * Injected UserService fo ruser business logic 
   * @param appService 
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Method to get datas
   * @returns 
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
