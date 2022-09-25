// let a = 20;
// if(a === 10) {
//     console.log("The Answer Is True");
// }

// else{
//     console.log("Go And Study More");
// }

// for( var i = 0; i<=100; ++i) {
//     console.log(i);
// }

// for( var i = 100; i>=1; --i) {
//     console.log(i);
// }

// var i = 0;
// while(i<=100){
//     console.log(i);
//     i++;
// }

// var i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<=100);

// var b = [12,20,7,8];
// console.log(b[2]);

// var b = [12,20,7,8];
// console.log(b.lenght);

// var c = [5,7,9,10,54]
// for(var i = 0; i<c.lenght; i++){
//     console.log(c[i])
// }

// var c = [10,3,7,6,8,5];
// for(var i = 0; i<c.length; ++i){
//     if(i%2 === 0){
//         console.log(c[i])
//     }
// }

// var array = [10,26,30,47,50];
// var jk = array.length
// var sum = 0;
// for(var i = 0; i < jk; i++){
//     sum += array[i]
// var average = sum / jk
// }
// console.log("The average is: " +average)

//  Functions 
// function addition(){
//     let l = 20;
//     let m = 45;
//     let n = l+m;
//     console.log("The answer is "+n)
// }
// addition()

// function addition(l,m){
//     let n = l+m;
//     console.log("The answer is "+n)
// }
// addition(15,70)

function press(){
    var text = document.getElementById("name").value 
    if(text === "blue"){
        document.getElementById("header").style.color = "blue"
    }

    else if(text === "aquamarine"){
        document.getElementById("header").style.color = "aquamarine"
    }

    else if(text === "purple"){
        document.getElementById("header").style.color = "purple"
    }

}
press()