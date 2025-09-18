
const names: string = "adnan"  //string type

console.log(names);

const number: number = 34  //number type

console.log(number);

const isActive: boolean = false  //boolean type

const emptyBox: null = null  //null type

console.log(emptyBox)

const marks: undefined = undefined //undefined

const largeNumber: bigint = 234324234324234234234234234234n //big int

const books: string[] = ['math', 'chemistry', 'physcis', 'bangla']  //array

const state: [string, boolean] = ['student', true]   

interface person {  //interface
    name: string,
    hight: string,
    address: string,
    weight: number,
    isMarreid: boolean,
    age: number,
    work? : string  //? means dile o hobe ...na dileo hobe
}

const user: person = {
    name: "habib",
    hight: "5'5",
    address: "Mohakhali Dhaka",
    weight: 45,
    isMarreid: false,
    age: 67
}

const role : 'user' | 'admin' = 'user'  //type literal

function addNumber (num1:number,num2:number) : number {   
    return num1 + num2
}
const ans = addNumber(5,6)

console.log(ans)

const result : any = 'failed' //any means value jekono type deya jabe 




function say (name : string) : void {
    console.log(`Hello ${name}`)
}

console.log(say("Adnan"))