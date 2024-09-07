"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const Transaction_1 = require("../models/Transaction");
class Account {
    constructor(accountNumber, owner, password, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.password = password;
        this.initialBalance = initialBalance;
        this.transaction = [];
        this.balance = initialBalance;
    }
    //We create a method about deposit
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            //We create a object
            const newTransaction = new Transaction_1.Transaction(amount, 'deposit', new Date(), 'Deposit successfull');
            //Save this transaction
            this.transaction.push(newTransaction);
            console.log(`Deposit of ${amount} succesfull. New balance ${this.balance}`);
        }
        else {
            console.log(' The amount must be positiv');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            //Create a new object
            const newTransaction = new Transaction_1.Transaction(amount, 'withdrawal', new Date(), `Withdrawal ${amount} succesfull. New balance ${this.balance}`);
            this.transaction.push(newTransaction);
            console.log('Your withdrawal is succesfull');
        }
        else if (amount > this.balance) {
            console.log('Your balance is insuficient');
        }
        else {
            console.log('The amount must be positive');
        }
    }
    //We create a method about transfer
    transfer(amount, accountNumber) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.saveTransfer(amount, this);
            console.log(`New transfer to ${accountNumber}. New balance 
                ${this.balance - amount}`);
        }
        else if (amount > this.balance) {
            console.log('Your balance is insuficient');
        }
        else {
            console.log('Amount must be positive');
        }
    }
    //We create a method about save transfer
    saveTransfer(amount, paramsAccount) {
        this.balance += amount;
        const newTransaction = new Transaction_1.Transaction(amount, 'deposit', new Date(), `Received ${amount} from AccountNumber ${paramsAccount.accountNumber}`);
        this.transaction.push(newTransaction);
    }
    showBalance() {
        return this.balance;
    }
    showTransactionHistory() {
        if (this.transaction.length === 0) {
            console.log('Transactions not found');
        }
        else {
            this.transaction.forEach(element => {
                console.log(`[${element.date}] - [${element.description}]`);
            });
        }
    }
    showDetails() {
        console.log(`Account number ${this.accountNumber} \n
                    Owner ${this.owner} \n
                    Balance ${this.balance}`);
    }
    authenticate(password) {
        return this.password === password;
    }
}
exports.Account = Account;
