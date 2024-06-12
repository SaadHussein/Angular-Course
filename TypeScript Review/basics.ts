type Person = {
	name: string;
	age: number;
};

let age: number;
age = 12;

let username: string;
username = "Saad";

let isInstructor: boolean;
isInstructor = false;

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: Person;

person = {
	name: "Saad",
	age: 32,
};

let people: Person[];

let course: string | number = "Angular"; //Automaticlly the type will be string and course and can not be anything else, if we need more one type we use union type.
course = 12;

function add(a: number, b: number): number {
	return a + b;
}

function print(value: any): void {
	console.log(value);
}

function insertAtBeginnig<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

class Student {
	constructor(
		public firstName: string,
		public lastName: string,
		public age: number,
		private courses: string[]
	) {}

	enroll(courseName: string) {
		this.courses.push(courseName);
	}

	listCourses() {
		return this.courses.slice();
	}
}

const student = new Student("Saad", "Hussein", 23, ["React"]);
student.enroll("Angular");

interface Human {
	firstName: string;
	age: number;

	greet: () => void;
}

let Saad: Human;
Saad = {
	firstName: "Saad",
	age: 23,
	greet() {
		console.log("Hi");
	},
};

class Instructor implements Human {
	firstName: string;
	age: number;
	greet() {
		console.log("Hello");
	}
}
