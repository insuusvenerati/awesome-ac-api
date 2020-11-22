import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reaction, ReactionDocument } from './entities/reaction.entity';

@Injectable()
export class ReactionsService {
  constructor(
    @InjectModel('Reaction') private reactionModel: Model<ReactionDocument>,
  ) {}

  async findAll(): Promise<Reaction[]> {
    return await this.reactionModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} reaction`;
  }
}
