//dont do this mistake

const user1 = {
    firstName: "dhiraj",
    age:23,

    about: function(){
        console.log(this.firstName, this.age);
    }
}

// user1.about(); //this correctly works

const myFunc = user1.about; //storing about function in some other variable
myFunc(); //now calling, but this gives undefined undefined output

/*
mathi actually ma yesto vako ho👇👇

const myFunc = function(){
        console.log(this.firstName, this.age);
}

aba myFunc call garda--> window.myFunc() vaira hunxa so, this ko value window object ko ho
ani window object ma firstName ra age xaina
*/

//to solve this issue, use bind

const myFunc2 = user1.about.bind(user1);
myFunc2();