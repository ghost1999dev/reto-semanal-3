import { Bank } from "./controllers/Bank";

//I create a instance of the bank
const accountBank = new Bank
//Create account

const androso = accountBank.createAccount('DEV1','Anibal','admin123',100)
const elias = accountBank.createAccount('DEV2','Elias','12345',200)

//Authenticate account 
const androsoAuthenticate=accountBank.authenticateAccount(androso.accountNumber,
    androso.password)

const eliasAuthenticate=accountBank.authenticateAccount(elias.accountNumber,
    elias.password
)

//To do a validation

if (androsoAuthenticate && eliasAuthenticate) {
    androsoAuthenticate.transfer(100,eliasAuthenticate)
    androsoAuthenticate.deposit(300)
    androsoAuthenticate.withdraw(100)
    androsoAuthenticate.showTransactionHistory()
    
}else{
    console.log("The users not exists");
    
}