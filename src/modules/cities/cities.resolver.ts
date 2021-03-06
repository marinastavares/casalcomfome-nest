import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CitiesService } from './cities.service';
import { City } from './entities/city.entity';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';

@Resolver(() => City)
export class CitiesResolver {
  constructor(private citiesService: CitiesService) {}

  @Mutation(() => City)
  createCity(
    @Args('createCityInput')
    createCityInput: CreateCityInput,
  ) {
    return this.citiesService.create(createCityInput);
  }

  @Query(() => [City], { name: 'cities' })
  findAll(): Promise<City[]> {
    return this.citiesService.findAll();
  }

  @Query(() => City, { name: 'cities' })
  findOne(@Args('slug', { type: () => String }) slug: string): Promise<City> {
    return this.citiesService.findOne(slug);
  }

  // @Mutation(() => City)
  // updateCity(
  //   @Args('updateCityInput')
  //   updateCityInput: UpdateCityInput,
  // ) {
  //   return this.citiesService.update(updateCityInput.id, updateCityInput);
  // }

  // @Mutation(() => City)
  // removeCity(@Args('id', { type: () => Int }) id: number) {
  //   return this.citiesService.remove(id);
  // }
}
