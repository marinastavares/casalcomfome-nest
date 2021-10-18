import { ObjectType, Field, Int } from '@nestjs/graphql';

import { City } from '../../cities/entities/city.entity';
// import { Category } from '../../categories/entities/category.entity';

@ObjectType('Recommendation')
export class RecommendationDTO {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  instagram: string;

  @Field()
  visible: string;

  @Field()
  recommendedBy: string;

  @Field((type) => City, { nullable: true })
  city: City;

  // @Field((type) => Category, { nullable: true })
  // category: Category;
}
