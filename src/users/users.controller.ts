import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { GetUserDto } from './dtos/get.user.dto';
import { PutUserDto } from './dtos/put.user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

/**
 * Controller to handle HTTP requests for the users resource
 */
@Controller('users')
export class UsersController {
  /**
   * Injected UserService fo ruser business logic
   * @param usersService
   */
  constructor(private readonly usersService: UsersService) {}
  /**
   * Return a paginated list of all registered users
   * @param limit
   * @param page
   * @returns
   */
  @Get()
  @ApiOperation({
    summary: 'Fetches a list of users on the app',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully.',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of users return per query',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'The number of page per query',
    example: 1,
  })
  getAllUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(20), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(limit, page);
  }

  /**
   * Returns a single user by their ID
   * @param getUserDto
   * @returns
   */
  @Get(':id')
  @ApiOperation({
    summary: 'Fetches registered user info with specific id',
  })
  @ApiResponse({
    status: 200,
    description: 'User fetched successfully',
  })
  getUser(@Param() getUserDto: GetUserDto) {
    // console.log(params)
    // console.log(params.id);
    console.log(getUserDto);
    return 'Get user endpoint.';
  }

  /**
   * Creates a new user
   * @param createUserDto
   * @returns
   */
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  /**
   * Fully replaces an existing user's data
   * @param putUserDto
   * @returns
   */
  @Put()
  updateUser(@Body() putUserDto: PutUserDto) {
    console.log(putUserDto);

    return 'Update User endpoint hit';
  }
}
