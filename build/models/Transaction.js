"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(amount, type, date, description) {
        this.amount = amount;
        this.type = type;
        this.date = date;
        this.description = description;
    }
}
exports.Transaction = Transaction;
