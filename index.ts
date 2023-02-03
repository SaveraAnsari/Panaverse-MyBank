#! /usr/bin/env node
import chalk from "chalk";
 import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.neon(" Welcome to Savera Bank");
    await sleep();
    rainbowTitle.stop();
}
await welcome()
class bank{

    accountno:number;
    creditCardno:number;
   constructor( creditCardno: number,
       accountno:number){
this.accountno=accountno;
this.creditCardno=creditCardno;


       }
       userpin(pin:number=6666){
         console.log(`enter your ${this.accountno} ${this.creditCardno}`);
       }
      }

class   custumer extends bank {
   
   firstName:string;
   lastName:string;
   gender:string;
   age:number;
   mobilenumber:string;
    
  constructor(creditCardno:number,
             accountno:number,

   
 firstName:string,
    lastName:string,
    gender:string,
    age:number,
    mobilenumber:string){
    
    super(creditCardno,accountno);
     
this.firstName=firstName;
this.lastName=lastName;
this.age=age;

this.gender=gender;
this.mobilenumber=mobilenumber;
    }
    userpin(pin:number=6666){
return pin
super.userpin(pin)
    }

}   

let Bank = new bank(1213243422,740174017401)
let Custumer = new custumer(12131314211,23141414141 ,"Savera","Ansar","female",22,"03131234567")
console.log(Custumer.creditCardno)
console.log(Custumer.firstName);

Custumer.userpin()