// let nums = [34,55,77,78,90,101,234]


// let juft = 0;
// let toq = 0;

// for(let i = 0; i < nums.length;i++){
//     if(nums[i] % 2 == 0){
//         juft++
//     }else{
//         toq++
//     }
// }
// alert(juft + 'ta juft' + 'va' + toq + 'ta toq')


let message = prompt('Isminggizni kiriting')

let arr = ['a','i','e','o','u','A','I','E','O','U',]



let count = 0


for(let i = 0; i < message.length;i++){
    for(let j =0; j < arr.length;j++){
        if(message[i] === arr[j]){
            count++
        }
    }
}

alert(message + 'sozida' + count + 'ta unli bor')