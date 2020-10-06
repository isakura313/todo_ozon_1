// let x = 12
// let y = 10;

let obj = {
    x: 15,
    y: 16,
    sum:function(){
        return this.x + this.y;
    },
    cont: function(){
        return this;
    },
    sum_2(){
        return x + y;
    }
}



let arr  =  [2, 3, 4];
let arr_2 = arr.map((el) => Math.pow(el,2));
console.log(arr_2)


// console.log(obj.sum())
// console.log(obj.sum_2())

// let x = 10;
// function getSquare(){
//     let x = 20;
//     return x * x
// }
//
//
// console.log(getSquare())

// let x = 10;
//
// function getSquare(){
//     let x = 20;
//     return x * x
// }
// console.log(getSquare())




//
// function square(x){
//
//
//
//     console.log(obj.cont())
//     return x * x;
// }
// console.log(square(square(square(2))));
