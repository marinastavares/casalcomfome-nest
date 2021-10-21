import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { CitiesService } from '../cities/cities.service';
import { CategoriesService } from '../categories/categories.service';
import { stringToSlug } from 'src/utils/helpers';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  constructor(
    private restaurantsService: RestaurantsService,
    private citiesService: CitiesService,
    private categoriesService: CategoriesService,
  ) {}

  @Mutation(() => Restaurant)
  async createRestaurant(
    @Args('createRestaurantInput')
    createRestaurantInput: CreateRestaurantInput,
  ): Promise<Restaurant> {
    const city = await this.citiesService.findOne(
      createRestaurantInput.city.slug,
    );
    const category = await this.categoriesService.findOne(
      createRestaurantInput.category.slug,
    );
    return await this.restaurantsService.create({
      ...createRestaurantInput,
      city,
      category,
    });
  }

  @Query(() => [Restaurant], { name: 'restaurants' })
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Query(() => Restaurant, { name: 'restaurant' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.restaurantsService.findOne(id);
  }

  @Query(() => [Restaurant], { name: 'restaurants' })
  findName(@Args('name', { type: () => String }) name: string) {
    return this.restaurantsService.findName(name);
  }

  // @Mutation(() => Restaurant)
  // updateRestaurant(
  //   @Args('updateRestaurantInput')
  //   updateRestaurantInput: UpdateRestaurantInput,
  // ) {
  //   return this.restaurantsService.update(
  //     updateRestaurantInput.id,
  //     updateRestaurantInput,
  //   );
  // }

  @Mutation(() => Restaurant)
  removeRestaurant(@Args('id', { type: () => Int }) id: number) {
    return this.restaurantsService.remove(id);
  }
}
