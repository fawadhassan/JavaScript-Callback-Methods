//Tis repository shows the implementation of most impotant JS Functions
// Map Foreach filter find reduce


// Parent array
const people= [
    {name: 'Luna' , age:  25 , position:  'Developer', id:  2, Salary:  100},
    {name:  'Lily' , age:  27 , position:  'Senior Developer', id:  2, Salary:  200},
    {name:  'Hermoine' , age:  25 , position:  'Designer', id:  4, Salary:  200},
    {name:  'Bellatrix' , age:  25 , position:  'Developer', id:  3, Salary:  500},
];

//MAP
//Iterate the array and is a higer order function
//return a new array
//new array depends upon  original values

// const data=people.map(function(person){
//     console.log(person);
//     return `Hello World`; //to show that the new array value depends on original values
// });

// console.log(data);


// // Accessing the particular value from array
// const newAge=people.map(function(person){
   
//    return `New ages are ${person.age+20}`;
// });

// console.log(newAge);


// //Creating A New Array
// const newPeople=people.map(function(person){
   
//     return {
//         firstName: person.name,
//         newSalary:person.Salary+200,
//     }
//  });
 
//  console.log(newPeople);

 //Filter
 //Return a new array
 //Its Value Depends on programmed conditions and original values of array
 //it returns all the matching entities
 
 
// const data=people.filter(function(person){
//     return person.id === 2;
// }); 

// console.log(data);

// //to access a specific value of the returned array you have to treat it as a regular array
// console.log(data[0].name);
// console.log(data[0].age);
// console.log(data[1].name);
// console.log(data[1].Salary);


//find
//it returns  a single instance or objects
 //it also returns value dependding on conditon and original value
 //it returns only the first match
 //Great for unique value not good for repeating values

//  let info=people.find(function(person){
//    return    person.name === 'Lily';   
//  });

//  console.log(info);

//  //Foreach
//  //Least Powerful of all functions
//  //Is an array iterator
//  //doesnot return an array but object

//  let zoom=people.forEach(function(item){
//      console.log(item);
//  }) ;

//  //As it returns object we can use different properties of object type as well
//  let boom=people.forEach(function(item){
//     console.log(item.name.toLocaleUpperCase());
// }) ;

//Reduce
//Iterates over array as like map, filter, find, and Foreach
//returns a single value -number, array object
//unlike other callback functions it requires two params
//first 'acc' the accumlater (the total of all calculation)
//second is 'curr' the current item

people.reduce(function(acc,curr){
   console.log(`Total ${acc}`);
   console.log(`Name: ${curr.name} Salary: ${curr.Salary}`);
    acc+=curr.Salary;
    return acc;
},0);