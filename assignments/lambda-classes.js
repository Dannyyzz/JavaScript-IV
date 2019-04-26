// CODE here for your Lambda Classes


class Person {
    constructor(lambda) {
        this.name = lambda.name,
        this.location = lambda.location,
        this.age = lambda.age,
        this.gender = lambda.gender        
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructors extends Person {
    constructor(teach) {
        super(teach),
        this.favLanguage = teach.favLanguage,
        this.specialty = teach.specialty,
        this.catchPhrase = teach.catchPhrase
    }

    demo(subject) {
        return `Today we are learning about ${subject}!`
    }
    
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}!`
    }
}

class Student extends Person {
    constructor(student) {
        super(student),
        this.previousBackground = student.previousBackground,
        this.className = student.className,
        this.favSubjects = student.favSubjects
    }

    listsSubjects() {
        return `My favorite subjects are ${this.favSubjects}.`
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructors {
    constructor(pm) {
        super(pm),
        this.gradClassName = pm.gradClassName,
        this.favInstructor = pm.favInstructor
    }

    standUp(channel) {
        return `${this.name} to ${channel}, @channel study time!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const dan = new Instructors({
    name: 'Dan',
    location: 'West Coast',
    age: 33,
    gender: 'Male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Lambda hats are cool`
});

const girr = new Student({
    name: 'Girr',
    location: 'a Lab',
    age: 26,
    gender: 'Robot disguised as a Dog',
    previousBackground: "Destroying the world",
    className: "WEBPT6",
    favSubjects: [
        'HTML',
        ' CSS',
        ' JavaScript',
        ' React'
    ]
});

const andrew = new ProjectManager({
    name: 'Andrew',
    location: 'East Coast',
    age: 28,
    gender: 'Male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `When I play with my fidget I'm listening to you. Don't Worry.`,
    gradClassName: "WEB1",
    favInstructor: "Dan"
});

// Everyone's Info
console.log(dan, girr, andrew);

// Instructor 

console.log(dan.speak());
console.log(dan.age);
console.log(dan.gender);
console.log(dan.favLanguage);
console.log(dan.specialty);
console.log(dan.catchPhrase);
console.log(dan.demo('JavaScript'));
console.log(dan.grade(girr, "JavaScript"));

// Student
console.log(girr.speak());
console.log(girr.age);
console.log(girr.gender);
console.log(girr.previousBackground);
console.log(girr.className);
console.log(girr.listsSubjects());
console.log(girr.PRAssignment("JavaScript IV"));
console.log(girr.sprintChallenge("JavaScript Fundamentals"));

//PM 
console.log(andrew.speak());
console.log(andrew.age);
console.log(andrew.gender);
console.log(andrew.favLanguage);
console.log(andrew.specialty);
console.log(andrew.catchPhrase);
console.log(andrew.demo('React'));
console.log(andrew.grade(girr, "JavaScript IV"));
console.log(andrew.standUp("sprint03"));
console.log(andrew.debugsCode(girr, "JavaScript"));





