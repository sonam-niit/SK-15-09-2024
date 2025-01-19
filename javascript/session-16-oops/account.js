//Hinding the properties from direct access called encaptulation
//These we can achieve by adding # symbol before variable
//You can declare the variables in class and use in class but not outside the class
class Account {
    #accNo; //private variable
    #holderName; //private variable
    #balance; //private variable
    constructor(accNo, holderName, balance) {
        this.#accNo = accNo;
        this.#holderName = holderName;
        this.balance = balance
    }
    getUserDetails(){
        console.log('Account No: ' + this.#accNo)
        console.log('Account Holders Name: ' + this.#holderName)
        console.log('Available Balance: ' + this.#balance)
    }
    getBalance() {
        console.log('Available Balance: ' + this.#balance)
    }
    diposit(amt) {
        this.#balance += amt;
        console.log(`${amt} is credited to the accountNo XXXXXX${this.#accNo.slice(6)}
        Available Balance is ${this.#balance}`);
    }
    withdraw(amt) {
        if (this.#balance > amt) {
            this.#balance -= amt;
            console.log(`${amt} is debited from accountNo XXXXXX${this.#accNo.slice(6)}
            Available Balance is ${this.#balance}`);
        }else{
            console.log('Insufficient Balance')
        }
    }
}

const sonamAccount = new Account('9098762453','Sonam Soni',50000);
sonamAccount.getBalance()
sonamAccount.diposit(100000);
sonamAccount.withdraw(200000);
sonamAccount.withdraw(10000);
console.log('Account HolderName: ',sonamAccount.holderName)