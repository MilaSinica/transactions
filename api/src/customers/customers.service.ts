import { Injectable } from '@nestjs/common';
import { Customer } from '../../../domainModels/customer';
import { CreateCustomerDto } from '../../../dto/create-customer.dto';
import { UpdateCustomerDto } from '../../../dto/update-customer.dto';

@Injectable()
export class CustomersService {
  mock = [
    {
      id: '001',
      merchantId: '001',
      name: 'Alfred Jones',
    },
    {
      id: '002',
      merchantId: '001',
      name: 'Sally Brian',
    },
    {
      id: '003',
      merchantId: '001',
      name: 'Jeffery Shorts',
    },
    {
      id: '004',
      merchantId: '002',
      name: 'Hugo Boss',
    },
    {
      id: '005',
      merchantId: '002',
      name: 'Paul Notpete',
    },
    {
      id: '006',
      merchantId: '002',
      name: 'Maggy Spencer',
    },
    {
      id: '007',
      merchantId: '003',
      name: 'Dave Telle',
    },
    {
      id: '008',
      merchantId: '003',
      name: 'Simon Pegstine',
    },
    {
      id: '009',
      merchantId: '003',
      name: 'Andrew Dahoot',
    },
  ];
  customers = this.mock.map((customerMock: any) => new Customer(customerMock));

  getAll(): Customer[] {
    return this.customers;
  }

  getById(id: string): Customer {
    return this.customers.find((cust: Customer) => cust.id === id);
  }

  getLast(): Customer {
    return this.customers[this.customers.length - 1];
  }

  create(customerData: CreateCustomerDto): Customer {
    const id = Number(parseInt(this.getLast().id) + 1);
    const newCustomer = new Customer({ ...customerData, id: `${id}` });
    const length = this.customers.push(newCustomer);
    return this.customers[length - 1];
  }

  remove(id: string): Customer {
    const customer = this.getById(id);
    this.customers = this.customers.filter((cust: Customer) => cust.id !== id);
    return customer;
  }

  update(id: string, customerUpdate: UpdateCustomerDto): Customer {
    const customer = this.getById(id);
    customer.update(customerUpdate);
    return customer;
  }
}
