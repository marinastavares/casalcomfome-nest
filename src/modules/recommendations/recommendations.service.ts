import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecommendationInput } from './dto/create-recommendation.input';
import { UpdateRecommendationInput } from './dto/update-recommendation.input';
import { Recommendation } from './entities/recommendation.entity';

@Injectable()
export class RecommendationsService {
  constructor(
    @InjectRepository(Recommendation)
    private recommendationsRepository: Repository<Recommendation>,
  ) {}
  async create(
    createRecommendationInput: CreateRecommendationInput,
  ): Promise<Recommendation> {
    const newRecommendation = await this.recommendationsRepository.create(
      createRecommendationInput,
    );
    return await this.recommendationsRepository.save(newRecommendation);
  }

  async findAll(): Promise<Recommendation[]> {
    return await this.recommendationsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} recommendation`;
  }

  update(id: number, updateRecommendationInput: UpdateRecommendationInput) {
    return `This action updates a #${id} recommendation`;
  }

  async remove(id: number): Promise<Recommendation> {
    const deleteRecommendation = await this.recommendationsRepository.findOne(id);
    return await this.recommendationsRepository.remove(deleteRecommendation);
  }
}
