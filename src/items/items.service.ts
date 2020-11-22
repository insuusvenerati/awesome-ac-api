import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  findAll() {
    return this.itemModel.find().exec();
  }

  async findOneByInternalId(id: number) {
    return await this.itemModel.find({ 'variants.internalId': id }).exec();
  }

  async findOneVariantByUnqiueId(id: string) {
    console.log(typeof id);
    return await this.itemModel
      .findOne({ 'variants.uniqueEntryId': id })
      .exec();
  }
}
