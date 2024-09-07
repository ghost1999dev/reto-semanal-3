import { Transaction } from "../models/Transaction";

export class Account {
    private transaction:Transaction[]=[]
    private balance:number
    constructor(
       public accountNumber:string,
       public owner:string,
       public password:string,
       public initialBalance:number=0
    
    ) {
        this.balance=initialBalance
        
    }

    //We create a method about deposit
    deposit(amount:number){
        if (amount > 0) {
            this.balance += amount
            //We create a object
            const newTransaction=new Transaction(
                amount,
                'deposit',
                new Date(),
                'Deposit successfull'
            )
            //Save this transaction
            this.transaction.push(newTransaction)
            console.log(`Deposit of ${amount} succesfull. New balance ${this.balance}`);
            
        }else{
            console.log(' The amount must be positiv');
            
        }
    }

    withdraw(amount:number):void{
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount
            //Create a new object
            const newTransaction = new Transaction(
                amount,
                'withdrawal',
                new Date(),
                `Withdrawal ${amount} succesfull. New balance ${this.balance}`
            )
            this.transaction.push(newTransaction)
            console.log('Your withdrawal is succesfull');
            
        }else if(amount > this.balance){
            console.log('Your balance is insuficient');
            
        }else{
            console.log('The amount must be positive');
            
        }
    }
    //We create a method about transfer
    transfer(amount:number,accountNumber:Account):void{
        if (amount > 0 && amount <= this.balance) {
            this.balance -=amount
            this.saveTransfer(amount,this)
            console.log(`New transfer to ${accountNumber}. New balance 
                ${this.balance-amount}`);
        }else if(amount>this.balance){
            console.log('Your balance is insuficient');
            
        }else{
            console.log('Amount must be positive');
            
        }
    }

    //We create a method about save transfer
    saveTransfer(amount:number,paramsAccount:Account):void{
        this.balance +=amount
        const newTransaction=new Transaction(
            amount,
            'deposit',
            new Date(),
            `Received ${amount} from AccountNumber ${paramsAccount.accountNumber}`
        )
        this.transaction.push(newTransaction)
    }

    showBalance():number{
        return this.balance
    }

    showTransactionHistory():void{
        if (this.transaction.length ===0) {
            console.log('Transactions not found');
        }else{
            this.transaction.forEach(element => {
                console.log(`[${element.date}] - [${element.description}]`);
            });
        }
    }

    showDetails():void{
        console.log(`Account number ${this.accountNumber} \n
                    Owner ${this.owner} \n
                    Balance ${this.balance}`);
        
    }

    authenticate(password:string):boolean{
        return this.password===password
    }

}