import { InputType, Field } from '@nestjs/graphql';

@InputType()
class SlugInputRestaurant {
  @Field()
  slug: string;
}

@InputType()
export class CreateRestaurantInput {
  @Field()
  name: string;

  @Field()
  instagram: string;

  @Field()
  recommendedBy?: string;

  @Field((type) => SlugInputRestaurant, { nullable: true })
  city: SlugInputRestaurant;

  @Field((type) => SlugInputRestaurant, { nullable: true })
  category: SlugInputRestaurant;
}
