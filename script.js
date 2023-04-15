/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    // const developers=arr.filter((devProf)=>devProf.profession==='developer').map((dev)=>dev);
    // console.log(developers);
    arr.map((developer)=>{
      if(developer.profession==='developer')
      console.log(developer);
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((developer)=>{
      if(developer.profession==='developer')
      console.log(developer);
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.forEach((developer)=>{
      if(developer.profession==='admin')
      arr.pop(developer);
     
    });
    console.log(arr);
  }
  
  
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
      { id: 5, name: "joe", age: "18", profession: "team Lead" },
      { id: 6, name: "sam", age: "21", profession: "project Manager" },
      { id: 7, name: "max", age: "20", profession: "developer" },
    ];
    arr1.forEach((addEmployees)=>{
      arr.push(addEmployees);
    })
  
  console.log(arr);
  
  }
  