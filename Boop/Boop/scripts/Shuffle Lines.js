/**
	{
		"api":1,
		"name":"Shuffle Lines",
		"description":"Randomize",
		"author":"@Clarko",
		"icon":"unknown",
		"tags":"shuffle,random"
	}
**/

function main(input) {
	let lines = input.text.split('\n');
	let j = lines.length;

	// Fisher-Yates Shuffle
	while (j) {
		i = Math.floor(Math.random() * j--);
		temp = lines[j];
		lines[j] = lines[i];
		lines[i] = temp;
	}
	
	input.text = lines.join('\n');
}