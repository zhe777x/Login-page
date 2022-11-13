let email = document.getElementById("email")
let password = document.getElementById("password")
let pass = document.getElementById("hello world")
let b1 = document.getElementById("button1")
let b2 = document.getElementById("button2")
let bata = document.getElementById("bata")
let database = [] //資料庫
let frequency = 0 //輸入次數
let time = new Date() //Time

class usdata{ //資料上傳標準化

    constructor(email,password){
        this.email = email
        this.password = password
        this.time = time.getFullYear(),"-",time.getMonth(),"-",time.getDate(),"-",time.getHours(),"-",time.getMinutes()
    }

    fun(){
        setTimeout(function(){
			console.log("bata")
		},100)
    }

}

b1.addEventListener("click",function(){ //確定按鈕
    if(frequency >= 2){
        alert("Please again input after 1 hr")
        return;
    }
    alert("hello world")
    console.log("Email:",email.value)
    console.log("Password:",password.value)
    frequency++ //確定次數
    i=0 //先宣告i search data user【Email & Password】 0 ~ database.length
    check = false //確認是否過審核
    hf = true //確認是否有輸入Data
    console.log("輸入第",frequency,"次")
    console.log("database email:",database[i].email)
    console.log("database password:",database[i].password)
    console.log("-------------------------------------------------")
    if(email.value === "" || password.value === ""){ //check user whether input Email and Password
        alert("email or password not input ! ")
        hf = false
    }
    
    while(i < database.length && (check === false && hf === true)){ 
        //When i input user information 【Email and password】database.length === 2
        //User input email and password ,the user information is in the database[1] 
        //I === 0 enter judgment passed i++ >>> I === 1 enter judgment passed i++ "inside while" >> (if --- passed >>> check === true) >>> I === 3 while judgment fail
        
        console.log("Search database data boolean",i < database.length) // Test this judgment boolean
        console.log("Test user data boolean:",database[i].email !== email.value || database[i].password !== password.value)// Test this judgment boolean
        console.log(i < database.length)
        console.log(check === false && hf === true)
        console.log("User Email boolean:",database[i].email !== email.value)
        console.log("User Email boolean:",database[i].password !== password.value)
        if(database[i].email === email.value && database[i].password === password.value){
            check = true
            console.log("Data correct!")
        }
        console.log("boolean:",database[i].email !== email.value) //Test this judgment boolean
        i++
        console.log(i)
        console.log("database 的第",i,"位")
        //console.log("Email",database[i].email)
        //console.log("Password",database[i].password)
        
    }
    
    console.log("---------------------------")
    if(check){
        console.log("Pass")
    }else{
        console.log("No data from the database")
        return;
    }
    console.log("check:",check)
    console.log("hf:",hf)

    if(check && hf){
        console.log("Welcome to system!")
    }else{
        console.log("Data error")
    }
    
})

b2.addEventListener("click",function(){ //註冊按鈕
    ema = prompt("Please input email")
    pass =  prompt("Please input password")
    console.log(ema)
    if(ema === null && pass === null && ema === "" && pass === ""){
        alert("No input!")
        return;
    }
    console.log("hello world")
    database.push(new usdata(ema,pass))
    console.log(database)    
})

//上架時記得把他刪除!!!!!!
bata.addEventListener("click",function(){
    console.log()
    console.log(new usdata("chris","google"))
    usdata.fun()
    console.log("Database裡的數量",database.length)
    console.log("--------------------------------------")
    console.log("check user password and email",database[0].email === "hello world"&&database[0].password === "hello world2")
    if(database[0].password === undefined){
        console.log("No data!")
    }
    if(email.value === ""){
        console.log("Email的值",email.value)
    }
    if(database[0] === undefined){
        console.log("Hello world")
    }
    for(let i = 0;i<database.length;i++){
        console.log("第",i,"位:","Email:",database[i].email,"Password:",database[i].password)//可以正常執行
    }
    a = 0
    bool = false
    console.log(bool)
    console.log("-------------------------")
    while(a < database.length){ //可以執行
        console.log(a)
        console.log(database[a].email)
        bool = trueK
        a++
        
    } // When database.length === 1 ， then 0 "會多跑出一個"
    console.log("----------------------------------")
    // Ex: Database.length:2 >>>> while cen run >>>> 0 , 1
})
