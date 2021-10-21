import { InputType, Field, Int } from '@nestjs/graphql';

import { CreateRestaurantInput } from 'src/modules/restaurants/dto/create-restaurant.input';

@InputType()
export class CreatePostRestaurantInput {
  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  thumbnail: string;

  @Field((type) => [String])
  tags: string[];

  @Field((type) => Date)
  visitedAt: Date;

  @Field((type) => CreateRestaurantInput, { nullable: true })
  restaurant: CreateRestaurantInput;

  @Field((type) => Int)
  viviScore: number;

  @Field((type) => Int)
  mstScore: number;
}

@InputType()
export class RestaurantInput {
  @Field(() => Int)
  id: number;
}

@InputType()
export class CreatePostInput {
  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  thumbnail: string;

  @Field((type) => [String])
  tags: string[];

  @Field((type) => Date)
  visitedAt: Date;

  @Field((type) => RestaurantInput, { nullable: true })
  restaurant: RestaurantInput;

  @Field((type) => Int)
  viviScore: number;

  @Field((type) => Int)
  mstScore: number;
}
