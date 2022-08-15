var shape = "circle";
var topics = ["HTML", "CSS", "Git", "JavaScript"];
var topic = "HTML";

for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}

if (0) {
	console.log("I'm 0!");
} else if (null) {
	console.log("I'm null!");
} else if (true) {
	console.log("I'm true!");
}

if (topic === "HTML") {
	console.log("Let's study HTML!");
} else if (topic === "CSS") {
	console.log("Let's study CSS!");
} else if (topic === "Git") {
	console.log("Let's study Git!");
} else if (topic === "JavaScript") {
	console.log("Let's study JavaScript");
} else {
	console.log("Please try again!");
}
