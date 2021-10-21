import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostRestaurantInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async create(
    CreatePostRestaurantInput: CreatePostRestaurantInput,
  ): Promise<Post> {
    const newPost = await this.postsRepository.create(
      CreatePostRestaurantInput,
    );
    return await this.postsRepository.save(newPost);
  }

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  async remove(id: number): Promise<Post> {
    const deletePost = await this.postsRepository.findOne(id);
    return await this.postsRepository.remove(deletePost);
  }
}
