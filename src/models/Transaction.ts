export class Transaction {
    constructor(
        public amount:number,
        public type: 'deposit' | 'withdrawal' | 'transfer',
        public date: Date,
        public description:string
    ) {
        
    }
}