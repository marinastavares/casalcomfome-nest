import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { City } from '../../cities/entities/city.entity';
import { Category } from '../../categories/entities/category.entity';

import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType('Recommendation')
export class Recommendation {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  instagram: string;

  @Column()
  @Field()
  visible: string;

  @Column()
  @Field()
  recommendedBy: string;

  @ManyToOne(() => City, (city) => city.recommendations)
  @Field((type) => City)
  city: City;

  @ManyToOne(() => Category, (category) => category.recommendations)
  @Field((type) => Category)
  category: Category;
}
