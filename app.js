                                    //Task1

// const shopList = [
//     { pName: 'Банан', amount: 2, bought: true },
//     { pName: 'Апельсин', amount: 5, bought: false},
//     { pName: 'Молоко', amount: 3, bought: true},
//     { pName: 'Груша', amount: 10, bought: false },
//   ]

//   function show(arr){
//       for(let i = 0; i<arr.length;i++){
//           if(arr[i].bought == false){
//             console.log(arr[i].pName)
//           }}
//       for(let i = 0; i<arr.length;i++){
//           if(arr[i].bought == true){
//             console.log(arr[i].pName)
//         }}
//   }
//   show(shopList)


// function addProd(arr, product, amount, bought){
//     let j=0;
//     let arrCheck =[]

// for(let i = 0; i<arr.length;i++){
//      arrCheck[i] = arr[i].pName
//     if(product == arr[i].pName&&bought==false){
//         arr[i].amount+=amount
//         arr[i].bought=bought
//         break   
//     }else if(product == arr[i].pName&&bought==true){
//         arr[i].amount-=amount
//         arr[i].bought=bought
//         break   
//     }
// }
//     for(j=0;arrCheck.length>j;j++){
//         if(arrCheck[j]==product){
//             j++
//         }
//     }

//     if(j==arrCheck.length){
//         arr[arr.length]={pName: product, amount: amount, bought:false}
//     }

// console.log(arr)
// console.log(arrCheck)
// }
// addProd(shopList, "Груша", 3, false)

                                        //Task 2
// const shopList = [
//     { product: 'Банан', amount: 2, price: 30 },
//     { product: 'Апельсин', amount: 5, price: 45},
//     { product: 'Молоко', amount: 3, price: 28},
//     { product: 'Груша', amount: 10, price: 63 },
//   ]
//Show list

// let print = document.querySelector('#arrShop')

// shopList.forEach(function(item){
//     for(let key in item){
//         print.innerHTML += (key+': '+item[key])+`<br/>
//         <br/>`
//     }
// })

//Total price

// function sumPrice(arr){
//     let sum=0;
//     for(let i = 0;i<arr.length; i++){
//         sum += parseInt(arr[i].price) 
//     }
//     console.log('In total: '+sum)
// }
// sumPrice(shopList)

//The most of expencive product

// function sumPrice(arr){
//     let sum=[];

//     for(let i = 0;i<arr.length; i++){
//         sum[i]= arr[i].price
//     }
//     for(let key in arr){
//         if(arr[key].price == Math.max.apply(null, sum)){

//             console.log(arr[key].product+' - '+arr[key].amount+' pcs, '+arr[key].price+' UAH')
//         }
//     }
// }
// sumPrice(shopList)

//Middle price

// function sumPrice(arr){
//     let sum=0;
//     for(let i = 0;i<arr.length; i++){
//         sum += parseInt(arr[i].price) 
//     }
//     console.log('Middle price: '+sum/arr.length)
// }
// sumPrice(shopList)

                                    //Task 3

// let arrCss = [
//     {value: 'red',
//     type: 'color'},
//     {value: '70px',
//     type: 'font-size'},
//     {value: 'center',
//     type: 'text-align'},
//     {value: 'underline',
//     type: 'text-decoration'},
// ]

// let test = document.querySelector('#arrShop')

// function arrStyle(arr, text){
//     test.innerHTML= `${text}`
//     for(let i = 0; i<arrCss.length;i++){
//         test.style[arrCss[i].type] = arrCss[i].value
//     }
// }
// arrStyle(arrCss, 'Some text')

                                    //Task 4

// let classroom = [
//     {nameRoom: '1', numbStud: 10, faculty: 'griffindor'},
//     {nameRoom: '2', numbStud: 20, faculty: 'slytherin'},
//     {nameRoom: '3', numbStud: 15, faculty: 'slytherin'},
//     {nameRoom: '4', numbStud: 18, faculty: 'hufflepuff'},
//     {nameRoom: '5', numbStud: 18, faculty: 'griffindor'},
//     {nameRoom: '6', numbStud: 19, faculty: 'ravenclaw'}
// ]

// let group = {groupName: 'Student`s',
//             numbStud:16,
//             faculty: 'griffindor'}
//Show classroom

// function showClass(arr){
//     for(let i = 0; i<arr.length; i++){
//         console.log(arr[i])   
//     }  
// }
// showClass(classroom)

//classroom for faculty

// function showClass(arr, faculty){
//     for(let i = 0; i<arr.length; i++){

//         if(arr[i].faculty == faculty){

//             console.log('Room: '+arr[i].nameRoom)
//         }  
//     }  
// }
// showClass(classroom, 'slytherin')

//Show classroom for group

// function showClass(arr, faculty){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i].faculty == group.faculty&&arr[i].numbStud>group.numbStud){
//             console.log('Room: '+arr[i].nameRoom)
//         }  
//     }  
// }

// showClass(classroom, group)

// function showClass(arr, faculty){
//     for(let i = 0; i<arr.length; i++){
//         arr.sort((a, b)=> a.numbStud>=b.numbStud ? 1 : -1)
//         console.log(arr[i])
//     }  
// }
// showClass(classroom, group)

//showClass(alphabet)

// function showClass(arr, faculty){
//     for(let i = 0; i<arr.length; i++){

//         arr.sort((a, b)=> a.faculty>=b.faculty ? 1 : -1)

//         console.log(arr[i])
//     }  
// }
// showClass(classroom, group)