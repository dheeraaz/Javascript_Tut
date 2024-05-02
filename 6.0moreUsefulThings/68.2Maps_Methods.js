const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  console.log(fruits);

  fruits.set("grapes",2000);
  console.log(fruits);

  console.log("----------------------");

  //set method in Map also edits existed values

  fruits.set("apples",1);
  console.log(fruits);

  //getting values from Map
  console.log("----------------------");
  console.log(fruits.get("apples"));

  console.log("----------------------");

  //for of loops in Maps

  for(let key of fruits.keys()){ //for getting only keys
    console.log(key);
  }

  console.log("----------------------");

  for(let value of fruits.values()){ //for getting only values
    console.log(value);
  }
