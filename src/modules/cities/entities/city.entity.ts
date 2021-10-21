import { Recommendation } from 'src/modules/recommendations/entities/recommendation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Restaurant } from 'src/modules/restaurants/entities/restaurant.entity';

@Entity()
@ObjectType('City')
export class City {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @OneToMany(() => Recommendation, (recommendations) => recommendations.city)
  @Field((type) => Recommendation)
  recommendations: Recommendation[];

  @OneToMany(() => Restaurant, (restaurant) => restaurant.city)
  @Field((type) => Restaurant)
  restaurants: Restaurant[];
}
