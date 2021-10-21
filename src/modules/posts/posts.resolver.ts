import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import {
  CreatePostInput,
  CreatePostRestaurantInput,
} from './dto/create-post.input';
import { CitiesService } from '../cities/cities.service';
import { CategoriesService } from '../categories/categories.service';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private postsService: PostsService,
    private citiesService: CitiesService,
    private categoriesService: CategoriesService,
    private restaurantService: RestaurantsService,
  ) {}

  @Mutation(() => Post)
  async createPostAndRestaurant(
    @Args('CreatePostRestaurantInput')
    createPostRestaurantInput: CreatePostRestaurantInput,
  ): Promise<Post> {
    const city = await this.citiesService.findOne(
      createPostRestaurantInput.restaurant.city.slug,
    );
    const category = await this.categoriesService.findOne(
      createPostRestaurantInput.restaurant.category.slug,
    );

    const restaurant = await this.restaurantService.create({
      ...createPostRestaurantInput.restaurant,
      city,
      category,
    });

    return await this.postsService.create({
      ...createPostRestaurantInput,
      restaurant,
    });
  }

  @Mutation(() => Post)
  async createPost(
    @Args('createPostInput')
    createPostInput: CreatePostInput,
  ): Promise<Post> {
    const restaurant = await this.restaurantService.findOne(
      createPostInput.restaurant.id,
    );
    console.log(
      '🚀 ~ file: posts.resolver.ts ~ line 53 ~ PostsResolver ~ restaurant',
      restaurant,
    );

    return await this.postsService.create({
      ...createPostInput,
      restaurant,
    });
  }

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  // @Query(() => Post, { name: 'post' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.postsService.findOne(id);
  // }

  // @Mutation(() => Post)
  // updatePost(
  //   @Args('updatePostInput')
  //   updatePostInput: UpdatePostInput,
  // ) {
  //   return this.postsService.update(
  //     updatePostInput.id,
  //     updatePostInput,
  //   );
  // }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.remove(id);
  }
}
