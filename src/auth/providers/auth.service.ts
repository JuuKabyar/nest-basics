import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

/**
 * Service to connect with auth controller
 */
@Injectable()
export class AuthService {
  /**
   * Constructor to connect business logic
   * @param usersService
   */
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  /**
   * Function to login a user
   * @param email
   * @param password
   * @param id
   * @returns
   */
  public login(email: string, password: string, id: number) {
    // check user exit
    const user = this.usersService.findByUserId(id);

    // token
    return 'TOKEN';
  }

  /**
   * Function to check user auth
   * @returns
   */
  public isAuth() {
    return true;
  }
}
