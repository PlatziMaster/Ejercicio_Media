let values = [];

let sum = 0;
for (let i = 0; i < values.length; i++) {
	sum += parseInt(values[i]);
}

let mean = sum / values.length;
console.log(`Mean: ${mean}`);
