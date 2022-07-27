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
  constructor() {
  
  }
  
  basicSalary() {
    return this.hoursWorked * this.rate;
  }
  
  overviewSalary() {
    return this.basicSalary() + this.TAX;
  }
}

/*

  Implementasi pada kodenya di bawah ini

  class Worker {
    constructor(hoursWorked, rate, TAX) {
      this.hoursWorked = hoursWorked;
      this.rate = rate;
      this.TAX = TAX;
    }
    
    basicSalary() {
      return this.hoursWorked * this.rate;
    }

    overviewSalary() {
      return this.basicSalary() + this.TAX;
    }
  }

  let person = new Worker(5, 5, 5);
  console.log(person.basicSalary());
  console.log(person.overviewSalary());

*/