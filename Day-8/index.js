
const message = "I can do it";

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) { 
    return calc(a, b);
}

getResult(8, 5);
// Execution Context (GEC + FEC) with CP & EP Flow

// 🔹 Global Execution Context (GEC)
// 	•	Creation Phase (CP):
// 	•	message → uninitialized (Temporal Dead Zone, because of const)
// 	•	sum → reference to function object in heap
// 	•	mul → reference to function object in heap
// 	•	calc → reference to function object in heap
// 	•	getResult → reference to function object in heap
// 	•	Execution Phase (EP):
// 	•	message = "I can do it"
// 	•	Code executes → getResult(8, 5) is invoked

// 🔹 FEC: getResult(8, 5)
// 	•	CP:
// 	•	a, b bindings created
// 	•	EP:
// 	•	a=8, b=5
// 	•	Calls calc(8,5)

// 🔹 FEC: calc(8, 5)
// 	•	CP:
// 	•	a, b bindings created
// 	•	EP:
// 	•	a=8, b=5
// 	•	Calls sum(8,5) → returns 13
// 	•	Calls mul(8,5) → returns 40
// 	•	Returns (13 + 40)/2 = 26.5

// 🔹 FEC: sum(8, 5)
// 	•	CP:
// 	•	a, b, result created
// 	•	EP:
// 	•	result = 13
// 	•	Return 13

// 🔹 FEC: mul(8, 5)
// 	•	CP:
// 	•	a, b, result created
// 	•	EP:
// 	•	result = 40
// 	•	Return 40

// Stack & Heap Flow
// 	•	Heap: string + function objects
// 	•	Stack Flow:
// 	•	Push GEC
// 	•	Push getResult
// 	•	Push calc
// 	•	Push sum → return → pop
// 	•	Push mul → return → pop
// 	•	Pop calc
// 	•	Pop getResult
// 	•	End: pop GEC

// Call Stack Push/Pop
// 	1.	GEC
// 	2.	getResult(8,5)
// 	3.	calc(8,5)
// 	4.	sum(8,5) → pop
// 	5.	mul(8,5) → pop
// 	6.	calc → pop
// 	7.	getResult → pop
// 	8.	End: GEC → pop


