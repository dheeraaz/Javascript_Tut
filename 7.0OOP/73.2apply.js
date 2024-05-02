//apply method

//apply method is similar to call except instead of passing arugment individually, you need to pass all the arguments as an array

function about(hobby,favsong){
    console.log(this.firstName, this.age, hobby, favsong);
}

const user1={
    firstName:"dhiraj",
    age:23,
}

const user2={
    firstName:"dhiraj2",
    age:33,
}

about.call(user1,"singing","myfavsong"); 
about.apply(user2,["singing2","myfavsong2"]); 
// about.apply(user2,"singing2","myfavsong2"); //this gives an error