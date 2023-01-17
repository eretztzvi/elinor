class Person {
  firstName;
  lastName;
  errors;

  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.errors = {};
  }

  consoleFullname() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  validation() {
    if (!this.firstName) {
      this.errors.firstName = "Insert first name";
    }
    if (!this.lastName) {
        this.errors.lastName = "Insert last name";
    }
  }
}

document.getElementById("submition").addEventListener("click", () => {
  const fName = document.getElementById("fName");
  const lName = document.getElementById("lName");
  const Elinor = new Person(fName.value, lName.value);
  
  Elinor.validation()

  if(Object.keys(Elinor.errors).length > 0){
    alert(JSON.stringify(Object.values(Elinor.errors)))
    return
  }

  Elinor.consoleFullname();
});
