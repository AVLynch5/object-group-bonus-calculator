const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

$('document').ready(function() {
  $('#showBonusButtn').on("click", function(){
    for (let employee of employees) {
      console.log(employeeBonus(employee));
      let financialObj = employeeBonus(employee);
      $('#listHere').append(`<li>Name: ${financialObj.name}; Bonus Percentage = ${financialObj.bonusPercentage}%; Bonus Sum = $${financialObj.totalBonus}; Total Compensation = $${financialObj.totalCompensation}</li>`);
    }
  })
})
  
//for (let i=0; i<employees.length; i++) {
//  console.log(employeeBonus(employees[i]));
//}

function employeeBonus(employee) {
//function input is a employee object, which is stored in employees array
  let newObject = {};
  newObject.name = employee.name;
  newObject.bonusPercentage = bonusCalc(employee);
  let realBonus = newObject.bonusPercentage*employee.annualSalary/100;//javascript treats employee.annualSalary (a string) as a number for *-/
  newObject.totalBonus = Math.round(realBonus);
  newObject.totalCompensation = newObject.totalBonus+parseInt(employee.annualSalary);//must parseInt to avoid concatenation
  return newObject;
}//end employeeBonus

console.log(employeeBonus({
  name: 'Scout',
  employeeNumber: '6243',
  annualSalary: '74750',
  reviewRating: 5
}));//expect newObject

function bonusCalc(employee) {
  //employee input is employee object, which is stored in employees array
  bonusPercent = 0;
  switch (employee.reviewRating) {
    case 1:
    case 2:
      bonusPercent += 0;
      break;
    case 3:
      bonusPercent += 4;
      break;
    case 4:
      bonusPercent += 6;
      break;
    case 5:
      bonusPercent += 10;
      break;
  }
  if (employee.employeeNumber.length == 4) {
    bonusPercent += 5;
  };
  if (parseInt(employee.annualSalary)>65000) {
    bonusPercent = bonusPercent - 1;
  };
  if (bonusPercent > 13) {
    bonusPercent = 13;
  };
  if (bonusPercent < 0) {
    bonusPercent = 0;
  };
  return bonusPercent;
}//end bonusCalc

console.log(bonusCalc({
  name: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 1
}));//Expect a number = 0

console.log(bonusCalc({
  name: 'Scout',
  employeeNumber: '6243',
  annualSalary: '74750',
  reviewRating: 5
}));//Expect a number = 13