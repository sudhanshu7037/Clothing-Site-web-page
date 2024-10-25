// settimeout - settimeout ka code kuch der baad chalta hai
// console.log("hey 1")
// console.log("hey 2")
// setTimeout(function(){
//   console.log("hey 3")
// },1000)
// console.log("hey 4")

// setinterval - set interval ka code kuch der baad chalta hai baar baar ek paticular interval mein
// setInterval(function(){
//   console.log("hello world")
// },1000)

// var count =1;
// const humarainterval = setInterval(function(){
//   count++;
//   console.log(count);
//   if(count===3) clearInterval(humarainterval)
//   })

//  fetch(`https://randomuser.me/api/`)
//  .then(raw => raw.json())
//  .then(readable => console.log(readable.results)) 

// axios.get(`https://randomuser.me/api/`)
// .then(result=> console.log(result.data))

// callbacks - callback kucch bhi ek function hai jisme pass kiya gya ho kisi aur function mein aur jo wo function chala to aap us pass kiye gye function ko chala paayenge 
function abcd(a, b){
    b();
}
abcd(1,function(){console,log("calback chala ")})