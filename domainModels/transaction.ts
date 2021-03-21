export class Transaction {
    public id: string;
    public amount: number;
    public description: string;
    public ccLastFour: string;
    public ccExpiry: string;
    public ccToken: string;
    public customerId: string;
    public date: string;

    constructor ({ id, amount, description = '', ccLastFour, ccExpiry, ccToken, customerId, date }: Transaction) {
        this.id = id;
        this.amount = amount;
        this.description = description;
        this.ccLastFour = ccLastFour;
        this.ccExpiry = ccExpiry;
        this.ccToken = ccToken;
        this.customerId = customerId;
        this.date = date;
    }
}
