import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

/**
 * Controller to connect with auth operations
 */
@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService){}

}
