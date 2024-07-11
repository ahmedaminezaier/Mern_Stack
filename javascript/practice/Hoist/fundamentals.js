var hello 
console.log(hello);//logs undefined
var hello = 'world';

//example2
var needle = 'haystack';
test();
function test(){
var needle = 'magnet';
console.log(needle);
}
///
var needle = 'haystack';
test();
function test(){
var needle = 'magnet';//logs 'magnet'
console.log(needle);
}
///example3
var brendan = 'super cool';
function print(){
brendan = 'only okay';
console.log(brendan);
}
console.log(brendan);
///
var brendan = 'super cool';
function print(){
brendan = 'only okay';
console.log(brendan);
}
console.log(brendan);///log="super cool"
///example 4

var food = 'chicken';
console.log(food);
eat();
function eat(){
food = 'half-chicken';
console.log(food);
var food = 'gone';
}
///
var food = 'chicken';
eat();
food = 'half-chicken';
console.log(food);
var food = 'gone';

//version 2
var food = 'chicken';
eat();
food = 'half-chicken';
var food = 'gone';
console.log(food);// logs half-chicken

////example 5
mean();
console.log(food);
var mean = function() {
food = "chicken";
console.log(food);///output : chicken
var food = "fish"; /// output : fish
console.log(food);
}
console.log(food); ///ouutput : error
///
///
var food ="fish";
mean();
food = "chicken";
console.log(food); // logs= error
/// example 6
console.log(genre);
var genre = "disco";
rewind();
console.log(genre);///undefined
var genre = "disco";
rewind();
function rewind() {
genre = "rock";
console.log(genre);/// rock
var genre = "r&b";
console.log(genre); /// r&b
}
console.log(genre); /// disco

var genre = "disco";
var genre = "rock";
var genre = "r&b";
rewind();
console.log(genre);// logs rock r&b disco

///example 7

dojo = "san jose";
console.log(dojo);/// san jose
learn();
function learn() {
dojo = "seattle"; 
console.log(dojo); /// seattle
var dojo = "burbank";
console.log(dojo); //// burbank
}
console.log(dojo); /// san jose
////
var dojo = "burbank";
learn();
dojo = "seattle";
dojo = "san jose";
console.log(dojo);/// logs :san jose ,seattle ,burbank ,san jose

///example 8

console.log(makeDojo("Chicago", 65)); ///{name : Chicago, age :  65, hiring : true}
console.log(makeDojo("Berkeley", 0)); /// error
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
////////solution of it : 
console.log(makeDojo("Chicago", 65)); ///{name : Chicago, age :  65, hiring : true}
console.log(makeDojo("Berkeley", 0)); /// closed for now
function makeDojo(name, students){
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}




