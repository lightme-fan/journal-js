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
const listEntries = () => {
	for (let i = 0; i < journal.length; i++) {
		let entryString = `Title : ${journal[i].title}
Content : ${journal[i].content}`;
		alert(entryString);
	}
};
// this function will add a new entry to the journal array
const addNewEntry = () => {
	const entryTitle = prompt('What is the title of your entry?');
	const entryContent = prompt('What is the content?');
	let entry = {
		title: entryTitle,
		content: entryContent,
	};
	journal.push(entry);
	return;
};
// this is my menu string, that we will pass to the prompt call
const menuString = `Welcome to my Onja Journal! 📕
Choose (1) for listing all the entries.
Choose (2) for adding a new entry.
Choose (3) to quit.
Choose (4) to delete the last entry.
Choose (5) to delete a specific entry. (with its index)
`;
let menuChoice = Number(prompt(menuString));
// we run the program until the user enters 3 (the quit option)
while (menuChoice !== 3) {
	switch (menuChoice) {
		case 1:
			listEntries();
			break;
		case 2:
			addNewEntry();
			break;
		case 4:
			const entryDeleted = journal.pop();
			alert(`We deleted the last entry : ${entryDeleted.title}`);
			break;
		case 5:
			let indexToDelete = Number(
				prompt(`Enter the entry's index to delete (1 to ${journal.length})`)
			);
			let deletedEntry = journal.splice(indexToDelete--, 1);
			console.log(deletedEntry);
			alert(`You just deleted ${deletedEntry[0].title}`);
			break;
		default:
			alert('Please enter a correct choice. (1,2,3,4,5)');
	}
	menuChoice = Number(prompt(menuString));
}
// here, this is the end of the program. It's the last instruction.
alert('Thank you for using my program');





