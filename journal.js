console.log('it works');

// this is my main journal array
const journal = [
	{
		title: "My favourite sport",
		content: "When have spare time, I always to play football  as it my favourite sport."
	},

	{
		title: "The song I like the most",
		content: "My favourite song at the moment is voclist musics,    especially it is with guitar."
	},

	{
		title: "My favourite day",
		content: "I'm always motivated every Monday as it is the first day of a week."
	}

];

// this function will list all the entries from the journal
const listJournal = () => {
	for (let i = 0; i < journal.length; i++) {
		let allEntries = `Title: ${journal[i].title} \n Content: ${journal[i].content}`;
		alert(allEntries);
	}
}

// this function will add a new entry to the journal array
const addNewEntry = () => {
	let newTitle = prompt("Enter a new title of your journal");
	let newContent = prompt('Write your content');

	let newJournal = {
		title: newTitle,
		content: newContent
	};

	journal.push(newJournal);
}

const deletingJournal = () => {
	journal.splice(-1);
}

// this is my menu string, that we will pass to the prompt call
let listOfChoice = ` Welcome to this journal
Choose (1) to see the list of journal
Choose (2) to add a new journal
Choose (3) to quit
Choose (4) to remove a journal
`;
let choice = Number(prompt(listOfChoice));

//we run the program until the user enters 3 (the quit option)
while (choice !== 3) {
	if (choice === 1) {
		listJournal();
	}
	else if (choice === 2) {
		addNewEntry();
	}
	else if (choice === 4) {
		deletingJournal();
	}
	else {
		alert("Enter the right choice");
	}
	choice = Number(prompt(listOfChoice));
}

// here, this is the end of the program. It's the last instruction.
alert("Thanks of seeing and adding journal entries");
