import { Recommendation } from 'src/modules/recommendations/entities/recommendation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Restaurant } from 'src/modules/restaurants/entities/restaurant.entity';

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

  @OneToMany(() => Restaurant, (restaurant) => restaurant.category)
  @Field((type) => Restaurant)
  restaurants: Restaurant[];
}
