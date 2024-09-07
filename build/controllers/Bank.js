"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const Account_1 = require("./Account");
class Bank {
    constructor() {
        this.account = [];
    }
    createAccount(accountNumber, owner, password, initialBalance) {
        const newAccount = `DEVELOPER${accountNumber}${this.account.length + 1}`;
        const newAccountBank = new Account_1.Account(newAccount, owner, password, initialBalance);
        this.account.push(newAccountBank);
        console.log(`Account created for ${owner}. Your new accountnumber is
             ${newAccount}`);
        return newAccountBank;
    }
    findAccount(accountNumber) {
        return this.account.find(ac => ac.accountNumber === accountNumber);
    }
    authenticateAccount(accountNumber, password) {
        const authenticateAccount = this.findAccount(accountNumber);
        if (authenticateAccount && authenticateAccount.authenticate(password)) {
            return authenticateAccount;
        }
        else {
            return undefined;
        }
    }
    showAllAccounts() {
        if (this.account.length === 0) {
            console.log(`Accounts not found`);
        }
        else {
            this.account.forEach(element => {
                element.showDetails();
            });
        }
    }
}
exports.Bank = Bank;
