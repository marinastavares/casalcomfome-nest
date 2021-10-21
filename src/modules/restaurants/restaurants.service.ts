import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringToSlug } from 'src/utils/helpers';
import { Repository } from 'typeorm';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantsRepository: Repository<Restaurant>,
  ) {}

  async create(
    createRestaurantInput: CreateRestaurantInput,
  ): Promise<Restaurant> {
    const newRestaurant = await this.restaurantsRepository.create({
      ...createRestaurantInput,
      slug: stringToSlug(createRestaurantInput.instagram.replace('@', '')),
    });
    return await this.restaurantsRepository.save(newRestaurant);
  }

  async findAll(): Promise<Restaurant[]> {
    return await this.restaurantsRepository.find();
  }

  async findOne(id: number): Promise<Restaurant> {
    return await this.restaurantsRepository.findOne(id);
  }

  async findName(name: string): Promise<Restaurant[]> {
    return await this.restaurantsRepository.find({ where: { name } });
  }

  update(id: number, updateRestaurantInput: UpdateRestaurantInput) {
    return `This action updates a #${id} restaurant`;
  }

  async remove(id: number): Promise<Restaurant> {
    const deleteRestaurant = await this.restaurantsRepository.findOne(id);
    return await this.restaurantsRepository.remove(deleteRestaurant);
  }
}
