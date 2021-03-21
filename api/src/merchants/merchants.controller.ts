import { MerchantsService } from './merchants.service';
import { Controller, Get, Param } from '@nestjs/common';
import { Merchant } from '../../../domainModels/merchant';

@Controller('merchants')
export class MerchantsController {
  constructor(private readonly merchantsService: MerchantsService) {}

  @Get()
  getAll(): Merchant[] {
    return this.merchantsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Merchant {
    return this.merchantsService.getById(id);
  }
}
