function about(hobby,favsong){
    console.log(this);
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
// about("singing0", "myfavsong0");
about.call(user1,"singing","myfavsong"); //about vanni function bhitra vako this keyword, user1 object ho vanna khojeko ra baaki 2 ota 
                                            // arguments haru ho
about.call(user2,"singing2","myfavsong2"); 