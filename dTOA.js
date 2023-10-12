let a = 1;
let b = a++;
let c = ++a;
// what is the value of a, b, and c?
//a=1 b=1 c=3

let d = "hello";
let e = false;

d++;
e++;
// d = NaN
// e = NaN

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
//syntax error

let price = 2.7;
price.toFixed(2);
//2.70

let price = "2.7";
price.toFixed(2);
//syntax error

isNaN(0)
//false
isNaN(1)
//false
isNaN("")
//false
isNaN("string")
//true
isNaN("0")
//false
isNaN("1")
//false
isNaN("3.145")
false
isNaN(Number.MAX_VALUE)
//true
isNaN(Infinity)
//false
isNaN("true")
//true
isNaN(true)
//false
isNaN("false")
//true
isNaN(false)
false
// to illustrate why the isNaN() function is needed:
NaN == NaN
//false

!true
//false
!false
//true
!!true
//true
!!false
//false
!!0
//0
!!-0
//false
!!1
true
!!-1

!!0.1

!!"hello"

!!""

!!''

!!"false"

!!"0"

