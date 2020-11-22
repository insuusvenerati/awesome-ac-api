import {
  Controller,
  Get,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  findOneByInternalId(@Param('id') id: number) {
    return this.itemsService.findOneByInternalId(id);
  }

  @Get(':id')
  findOneVariantByUnqiueId(@Param('id') id: string) {
    return this.itemsService.findOneVariantByUnqiueId(id);
  }
}
