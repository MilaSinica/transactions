import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { CreateCustomerDto } from '../dto/create-customer.dto';

export class Customer {
    public id: string;
    public merchantId: string;
    public name: string;

    constructor ({id, merchantId, name}: CreateCustomerDto & {id: string}) {
        this.id = id;
        this.merchantId = merchantId;
        this.name = name;
    }

    public update({merchantId, name}: UpdateCustomerDto) {
        this.merchantId = merchantId;
        this.name = name;
    }
}