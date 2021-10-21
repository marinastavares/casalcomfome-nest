import { CreatePostRestaurantInput } from './create-post.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostRestaurantInput) {
  @Field(() => Int)
  id: number;
}
