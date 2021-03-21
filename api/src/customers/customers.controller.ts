import { CustomersService } from './customers.service';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { Customer } from '../../../domainModels/customer';
import { CreateCustomerDto } from '../../../dto/create-customer.dto';
import { UpdateCustomerDto } from '../../../dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  getAll(): Customer[] {
    return this.customersService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Customer {
    return this.customersService.getById(id);
  }

  @Post()
  create(@Body() product: CreateCustomerDto): Customer {
    return this.customersService.create(product);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Customer {
    return this.customersService.remove(id);
  }

  @Put(':id')
  update(
    @Body() product: UpdateCustomerDto,
    @Param('id') id: string,
  ): Customer {
    return this.customersService.update(id, product);
  }
}
