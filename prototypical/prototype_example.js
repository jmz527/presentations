// PROTOTYPE
//-----------------------------------------------------------------//
function CustomerPrototype(proto) {
    this.proto = proto;
 
    this.clone = function () {
        var customer = new Customer();
 
        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;
 
        return customer;
    };
}
 
function Customer(first, last, status) {
 
    this.first = first;
    this.last = last;
    this.status = status;
 
    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
              ", status: " + this.status);
    };
}
 
function run() {
 
    var proto = new Customer("n/a", "n/a", "pending");
    var prototype = new CustomerPrototype(proto);
 
    var customer = prototype.clone();
    customer.say();
}

run();


function Employee (name, profession) {
​this.name = name;
​this.profession = profession;
} // Employee () is the constructor function because we use the <em>new</em> keyword below to invoke it.​
​
​var richard = new Employee (“Richard”, “Developer”) // richard is a new object we create from the Employee () constructor function.​
​
console.log(richard.name); //richard​
console.log(richard.profession); // Developer



function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}
​
User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}

function runUser() {
	// A User ​
	firstUser = new User("Richard", "Richard@examnple.com"); 
	firstUser.changeEmail("RichardB@examnple.com");
	firstUser.saveScore(15);
	firstUser.saveScore(10); 
	​
	firstUser.showNameAndScores(); //Richard Scores: 15,10​
	​
	​// Another User​
	secondUser = new User("Peter", "Peter@examnple.com");
	secondUser.saveScore(18);
	secondUser.showNameAndScores(); //Peter Scores: 18
}
