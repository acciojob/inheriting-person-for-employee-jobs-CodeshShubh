// complete this js code
function Person(name, age) {
	class Person {
		constructor(name, age){
		this.name= name;
		this.age = age;
	}
	get greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
		
	}
	const Person = new Person("Alice", 25);
	Person.greet();
}
Person(); 
	





function Employee(name, age, jobTitle) {
	class Employee extends Person{
		constructor(name , age , jobTitle){
			super(name, age);
			this.jobTitle = jobTitle;
		}
		get jobGreet(){
			console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`)
		}
	}
	const employee = new Employee('Bob', 30)
	
	
}





// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
