import { Account } from "./Account";

export class Bank {
    private account: Account[]=[]

    createAccount(
        accountNumber:string,
        owner:string,
        password:string,
        initialBalance:number
    ):Account{
        const newAccount = `DEVELOPER${accountNumber}${this.account.length+1}`
        const newAccountBank = new Account(
            newAccount,
            owner,
            password,
            initialBalance
        )
        this.account.push(newAccountBank)
        console.log(`Account created for ${owner}. Your new accountnumber is
             ${newAccount}`);
        return newAccountBank
    }

    findAccount(accountNumber:string):Account|undefined{
        return this.account.find(ac=> ac.accountNumber === accountNumber)
    }

    authenticateAccount(accountNumber:string, password:string):Account|undefined{
        const authenticateAccount=this.findAccount(accountNumber)
        if (authenticateAccount && authenticateAccount.authenticate(password)) {
            return authenticateAccount
        }else{
            return undefined
        }
    }

    showAllAccounts():void{
        if (this.account.length === 0) {
            console.log(`Accounts not found`);
            
        }else{
            this.account.forEach(element => {
                element.showDetails()
            });
        }
    }


}