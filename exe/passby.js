//  Pass by value
const a = 9;
// a/Ashdod, flowers st, 4/8 = mv038hg9h845 ---> [9]
const b = 'Hey!👋';
// b = mfi304t083 ---> ['Hey!👋']
{
    g038h5g0h8: null;
    vmpwvkniwrv: null;
    mv038hg9h845: 9;
    mfi304t083: 'Hey!👋'
}

//  Pass by refrenece

const cat = {
    name: "cat",
    color: "black",
    age: 1, 
    sayMeow: function() {
      console.log("Meow!");
    }
  };
 // cat = mvfn03h5t80 ---> [ff923th84]
  
function hey(){
      console.log('hey!👋');
    }
// hey = f24t4f3 ---> [d23g43]

const __arr = [0, 8, 9, 345];

// __arr = mg03h8g85 ---> [vn390v3]

function fn(arr){
    arr.pop();
    arr.pop();
    arr.pop();
}

function fn2(num){
    num = 4;
}

let array = [1,2,3, 4]
let number = 2;

fn(array);
fn2(number);

console.log(array)
// console.log(number)
