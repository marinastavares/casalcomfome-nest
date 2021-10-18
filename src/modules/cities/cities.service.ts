import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringToSlug } from 'src/utils/helpers';
import { Repository } from 'typeorm';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
  ) {}
  async create(createCityInput: CreateCityInput): Promise<City> {
    const newCity = await this.citiesRepository.create({
      ...createCityInput,
      slug: stringToSlug(createCityInput.name),
    });
    return await this.citiesRepository.save(newCity);
  }

  async findAll() {
    return await this.citiesRepository.find();
  }

  async findOne(slug: string): Promise<City> {
    return await this.citiesRepository.findOne({ where: { slug } });
  }

  update(id: number, updateCityInput: UpdateCityInput) {
    return `This action updates a #${id} City`;
  }

  remove(id: number) {
    return `This action removes a #${id} City`;
  }
}
