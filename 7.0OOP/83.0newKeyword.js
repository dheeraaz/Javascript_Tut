//new keyword 

/*
function createUser(name, email){
    const user = Object.create(createUser.prototype);

    user["name"] = name;
    user["email"] = email;

    return user;
}

createUser.prototype["about"] = function(){
    console.log(this.name, this.email);
}

const user1 = createUser("dhiraj", "abc");
user1.about();
*/

function createUser(name, email){
    this.name = name;
    this["email"] = email;
}
createUser.prototype.about = function(){
    console.log(this.name, this.email);
}
 
const user1 = new createUser("dhiraj", "abc");
user1.about();

/*mathi ko comment vako dherai code lai new ley replace garyo
//new keyword
1. it created an empty object, i.e this = {}  //mathi ko ma jasto const user garera empty object banairakhna parena
2. similarly, it created link between this object and createUser.prototype
    - const this = Object.create(createUser.prototype) garirakhna parena
    - user1 ko __proto__ ma directly createUser.prototype rakhdiyo
3. this obejct return garirakhna parena like we did in top- return user

*/