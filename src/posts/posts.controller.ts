import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create.post.dto';
import { PatchPostDto } from './dtos/patch.post.dto';

/**
 * Controller to connect with post services
 */
@Controller('posts')
export class PostsController {
  /**
   * Constructor to connect with post business logic
   * @param postsService
   */
  constructor(private readonly postsService: PostsService) {}

  /**
   * Method to get all posts
   * @param userId
   * @returns
   */
  @Get('/:userId')
  @ApiOperation({
    summary: 'Fetched a list of post.',
  })

  /**
   * Method psot by specific id
   */
  @ApiResponse({
    status: 200,
    description: 'Posts fetched sucfessfully.',
  })
  getPostsByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.postsService.findAllByUserId(userId);
  }

  /**
   * Returns all posts
   * @returns
   */
  @Get('/')
  public getPosts() {
    return this.postsService.findAll();
  }

  /**
   * Method to add a post
   * @param createPostDto
   */
  @ApiOperation({
    summary: 'Created a Post',
  })
  @ApiResponse({
    status: 201,
    description: 'Post crated successfully.',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  /**
   * Method to update a post
   * @param patchpostDto
   */
  @ApiOperation({
    summary: 'Update a extends post',
  })
  @ApiResponse({
    status: 200,
    description: 'If you got 200 response, your post is updated.',
  })
  @Patch()
  public updatePost(@Body() patchpostDto: PatchPostDto) {
    return this.postsService.update(patchpostDto);
  }

  /**
   * Delete post by post id
   * @param id post id
   * @returns deleted post
   */
  @ApiOperation({
    summary: 'Delete a post',
  })
  @ApiResponse({
    status: 200,
    description: 'Post deleted successfully.',
  })
  @Delete('/:id')
  public deletePost(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
