import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';

@Controller('items')
@ApiTags('Items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':uniqueEntryId')
  @ApiResponse({
    description: 'Returns a single Item Variant',
    status: 200,
    type: Item,
  })
  async findOneVariantByUnqiueId(
    @Param('uniqueEntryId') uniqueEntryId: string,
  ): Promise<Item> {
    return await this.itemsService.findOneVariantByUnqiueId(uniqueEntryId);
  }
}
