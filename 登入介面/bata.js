console.log("hello world")

i = 0

//console.log(((true,false)||false||i<10))
let database = []
let hello = "hello world"
console.log((true,false))

console.log("--------------------------------")
console.log(database[0])
console.log(true && true)
while(false && true){
	console.log("Hello world")
}


console.log("hello rich!",true&&true)
console.log(!true)
console.log("---------------------------------")
let a = 1
for(let i = 0;i<a;i++){
	
	console.log(a)

}

function fun(initName){ //構造function >>> 讓物件標準化
	this.name = initName
}

let a1 = new fun("Jing")
console.log(a1)

class People {
	constructor(){ //構造function
		console.log("hello world")
	}
}
class People2{
	constructor(){
		this.name = "Jing"
		this.age = 15
		this.gender = "man"
	}
}
let userel = new People2();
console.log(Date()) //Using this syntax can log deta and time
console.log(userel.name , userel.age)

let arrow = () => console.log("hello world")

arrow()

class Arrowbata{
	constructor(name){
		this.name = name
	}
	printarrow(){
		setTimeout(() => {
			console.log("Arrow function:",this.name)
		},100)
	}
	printfunction(){
		setTimeout(function(){
			console.log("Function:",this.name)
		},100)
	}
	
}

let array2 = new Arrowbata("jing")
console.log("loading.........")
setTimeout(() => {
	array2.printarrow()
	array2.printfunction()
},3000)

console.log(8787>6+8978798)

function Person() {
	// Person() 建構式將 this 定義為它自己的一個實體
	this.age = 0;

	setInterval(function growUp() {
	  // 在非嚴格模式下, growUp() 函式把 this 定義為全域物件
	  // (因為那是 growUp()執行的所在)，
	  // 與 Person() 建構式所定義的 this 有所不同
	  this.age++;
	}, 1000);
  }

console.log("----------------------------------")
let time = new Date()
console.log(time.getTime)
console.log("----------------------------------")
const moonLanding = new Date();

console.log(moonLanding.getUTCFullYear);
// expected output: 1969
const moonLanding2 = new Date('July 20, 69 00:20:18');
console.log(typeof time)
console.log(typeof moonLanding2)
console.log(time.getFullYear())
console.log(time.getFullYear())
// expected output: 1969

let list = [{email:"hello world",password:"hello world2"},
		{email:"hello world3",password:"hello world4"}]
console.log(typeof list[0].email)
console.log(Date.now())
console.log("========================================")
let time2 = new Date()
console.log(time2.getFullYear(),"-",time2.getMonth(),"-",time2.getDate(),"-",time2.getHours(),"-",time2.getMinutes())
console.log("----------------------------------------")
const d = new Date();
let day = d.getUTCDate();
console.log(d.getUTCDay())

