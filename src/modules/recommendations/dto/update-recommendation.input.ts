import { CreateRecommendationInput } from './create-recommendation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRecommendationInput extends PartialType(
  CreateRecommendationInput,
) {
  @Field(() => Int)
  id: number;
}
