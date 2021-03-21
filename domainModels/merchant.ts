import { Transaction } from './transaction';

export class Merchant {
    public id: string;
    public name: string;
    public isTrading: boolean;
    public currency: string;
    public transactions: Transaction[];

    constructor ({id, name, isTrading = false, currency = 'AUD', transactions = []}: Merchant) {
        this.id = id;
        this.name = name;
        this.isTrading = isTrading;
        this.currency = currency;
        this.transactions = transactions;
    }

}
