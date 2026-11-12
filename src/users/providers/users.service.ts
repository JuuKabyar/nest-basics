import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';
import { User } from '../user.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create.user.dto';
import * as config from '@nestjs/config';
import { log } from 'console';
import authConfig from '../config/auth.config';

/**
 * Class to connet to Users table and make operations tasks
 */
@Injectable()
export class UsersService {
  /**
   * Constructor to connect with other services to make operations
   * @param authService
   */
  constructor(
    /** Inject authService */
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    /** Inject ConfigService */
    private readonly configService: config.ConfigService,

    /**Inject AuthConfig */
    @Inject(authConfig.KEY)
    private readonly authConfiguration: config.ConfigType<typeof authConfig>,

    /**
     * Inject user repository
     */
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   * Method to create new user
   * @param createUserDto
   * @returns
   */
  public async createUser(createUserDto: CreateUserDto) {
    // email exist or not
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    // handle flow
    // create new user
    let newUser = this.userRepository.create(createUserDto);
    newUser = await this.userRepository.save(newUser);

    return newUser;
  }

  /**
   * Method to get all users from the database
   * @param limit
   * @param page
   * @returns
   */
  public findAll(limit: number, page: number) {
    const isAuth = this.authService.isAuth();

    const env = this.configService.get('AUTH_KEY');
    console.log('env auth key', env);
    console.log(this.authConfiguration.fallbackurl);

    console.log('auth status', isAuth);
    return [
      {
        name: 'Mg Mg',
        email: 'mgmg@gmail.com',
      },
      {
        name: 'Kyaw Kyaw',
        email: 'kyaw@gmail.com',
      },
      limit,
      page,
    ];
  }

  /**
   * Method to find specific user with id
   * @param id
   * @returns
   */
  public async findByUserId(id: number) {
    return await this.userRepository.findOneBy({
      id,
    });
  }
}
