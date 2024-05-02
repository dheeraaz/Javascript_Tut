//bind method

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

const func1 = about.bind(user1,"singing","myfavsong"); 
about.bind(user2,"singing2","myfavsong2"); //this does nothing, as bind returns a funcion which need to be called later

/*
bind also does exactly as the call but instead of just executing the called function, it executes and return the function
Note: it returns the function
*/

func1();