import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindBySlugInput {
  @Field()
  slug: string;
}
