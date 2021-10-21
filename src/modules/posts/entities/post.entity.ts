import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Restaurant } from 'src/modules/restaurants/entities/restaurant.entity';

@Entity()
@ObjectType('Post')
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  url: string;

  @Column()
  @Field()
  thumbnail: string;

  @Column('simple-array')
  @Field((type) => [String])
  tags: string[];

  @Column()
  @Field((type) => Date)
  visitedAt: Date;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.posts)
  @Field((type) => Restaurant)
  restaurant: Restaurant;

  @Column('int')
  @Field((type) => Int)
  viviScore: number;

  @Column('int')
  @Field((type) => Int)
  mstScore: number;
}
