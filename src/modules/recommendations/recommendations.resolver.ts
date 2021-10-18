import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RecommendationsService } from './recommendations.service';
import { Recommendation } from './entities/recommendation.entity';
import { CreateRecommendationInput } from './dto/create-recommendation.input';
import { UpdateRecommendationInput } from './dto/update-recommendation.input';
import { CitiesService } from '../cities/cities.service';
import { CategoriesService } from '../categories/categories.service';

@Resolver(() => Recommendation)
export class RecommendationsResolver {
  constructor(
    private recommendationsService: RecommendationsService,
    private citiesService: CitiesService,
    private categoriesService: CategoriesService,
  ) {}

  @Mutation(() => Recommendation)
  async createRecommendation(
    @Args('createRecommendationInput')
    createRecommendationInput: CreateRecommendationInput,
  ): Promise<Recommendation> {
    const city = await this.citiesService.findOne(
      createRecommendationInput.city.slug,
    );
    const category = await this.categoriesService.findOne(
      createRecommendationInput.category.slug,
    );
    return await this.recommendationsService.create({
      ...createRecommendationInput,
      city,
      category,
    });
  }

  @Query(() => [Recommendation], { name: 'recommendations' })
  findAll() {
    return this.recommendationsService.findAll();
  }

  // @Query(() => Recommendation, { name: 'recommendation' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.recommendationsService.findOne(id);
  // }

  // @Mutation(() => Recommendation)
  // updateRecommendation(
  //   @Args('updateRecommendationInput')
  //   updateRecommendationInput: UpdateRecommendationInput,
  // ) {
  //   return this.recommendationsService.update(
  //     updateRecommendationInput.id,
  //     updateRecommendationInput,
  //   );
  // }

  @Mutation(() => Recommendation)
  removeRecommendation(@Args('id', { type: () => Int }) id: number) {
    return this.recommendationsService.remove(id);
  }
}
