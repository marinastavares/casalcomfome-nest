import { Recommendation } from 'src/modules/recommendations/entities/recommendation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType('Category')
export class Category {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @OneToMany(
    () => Recommendation,
    (recommendations) => recommendations.category,
  )
  @Field((type) => Recommendation)
  recommendations: Recommendation[];
}
