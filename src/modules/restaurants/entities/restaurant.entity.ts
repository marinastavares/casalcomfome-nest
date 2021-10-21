import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { City } from '../../cities/entities/city.entity';
import { Category } from '../../categories/entities/category.entity';

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/modules/posts/entities/post.entity';

@Entity()
@ObjectType('Restaurant')
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @Column()
  @Field()
  instagram: string;

  @Column({ default: '@casalcomfomesc', nullable: true })
  @Field()
  recommendedBy?: string;

  @ManyToOne(() => City, (city) => city.restaurants)
  @Field((type) => City)
  city: City;

  @ManyToOne(() => Category, (category) => category.restaurants)
  @Field((type) => Category)
  category: Category;

  @OneToMany(() => Post, (post) => post.restaurant)
  @Field((type) => [Post])
  posts: Post[];
}
