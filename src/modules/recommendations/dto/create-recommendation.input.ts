import { InputType, Int, Field } from '@nestjs/graphql';
// import { Category } from 'src/modules/categories/entities/category.entity';
import { City } from 'src/modules/cities/entities/city.entity';

@InputType()
class SlugInput {
  @Field()
  slug: string;
}

@InputType()
export class CreateRecommendationInput {
  @Field()
  name: string;

  @Field()
  instagram: string;

  @Field()
  visible: string;

  @Field()
  recommendedBy: string;

  @Field((type) => SlugInput, { nullable: true })
  city: SlugInput;

  @Field((type) => SlugInput, { nullable: true })
  category: SlugInput;
}
