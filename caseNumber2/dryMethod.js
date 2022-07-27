/*
2. Implementasi Metode DRY (DO NOT REPEAT YOURSELF) principele di dalam snippet kode
berikut: (10 Point)
class Worker {
  constructor() {
  
  }
  
  basicSalary() {
    return this.hoursWorked * this.rate;
  }
  
  overviewSalary() {
    return this.hoursWorked * this.rate + this.TAX;
  }
}
*/

// Answer
  class Worker {
    constructor(hoursWorked, rate) {
      this.hoursWorked = hoursWorked;
      this.rate = rate;
      this.TAX = 0.2;
    }
    
    basicSalary() {
      return this.hoursWorked * this.rate;
    }

    overviewSalary() {
      return this.basicSalary() + this.TAX;
    }
  }

  let person = new Worker(10, 50);
  console.log(person.basicSalary());
  console.log(person.overviewSalary());