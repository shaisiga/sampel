
const key = (prompt("הוסף תכונה לחתול:"));
const value = (prompt(`מה ערך התכונה? ${key}:`));



const cat = {
  name: "cat",
  color: "black",
  age: 1,
  sayMeow: function() {
    console.log("Meow!");
  }
};

cat[key]=value;
console.log(cat);
