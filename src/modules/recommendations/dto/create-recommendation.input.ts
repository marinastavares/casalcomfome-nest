import { InputType, Field } from '@nestjs/graphql';

@InputType()
class SlugInput {
  @Field()
  slug: string;
}
@InputType()
class SlugInputCity {
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
  visible?: string;

  @Field()
  recommendedBy: string;

  @Field((type) => SlugInputCity, { nullable: true })
  city: SlugInputCity;

  @Field((type) => SlugInput, { nullable: true })
  category: SlugInput;
}
