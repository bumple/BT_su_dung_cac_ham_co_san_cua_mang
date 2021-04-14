let a = prompt("nhap vao 1 chuoi gia tri")
let str = a.toString()
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];

for (let i = 0; i <str.length ; i++) {
    if (UPPER.indexOf(str[i]) !== -1){
        result.push(str[i].toLowerCase());
    }else if (LOWER.indexOf(str[i]) !== -1){
        result.push(str[i].toUpperCase());
    }else {result.push(str[i])}
}
document.write(result.join(" "))