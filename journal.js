console.log('it works');

const journalEntries = [
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

let entry = 1;
while (entry < 4) {
    const entries = prompt("Choose 1 to see the list of journal entries. \n Choose 2 to add a new journal entry \n Choose 3 to quit");
    if (entries == 1) {
            alert(`Title: ${journalEntries[0].title} \n Content: ${journalEntries[0].content}`);
            alert(`Title: ${journalEntries[1].title} \n Content: ${journalEntries[1].content}`);
            alert(`Title: ${journalEntries[2].title} \n Content: ${journalEntries[2].content}`);
        
    }
    else if (entries == 2) {
        let newTitle = prompt('Enter your new title');
        let newContent = prompt('Enter your new content');
        let newEntry = {title: newTitle, content: newContent}
        newEntry.newTitle = newTitle;
        newEntry.newContent = newContent;
        journalEntries.push(newEntry);

        alert(`Title: ${journalEntries[3].title} \n Content: ${journalEntries[3].content}`);
        
        // for (let i = 0; i < journalEntries.length; i++) {
        //     alert(`Title: ${journalEntries[i].title} \n Content: ${journalEntries[i].content}`);
        // }
    }
    else if (entries !== 3) {
        break;
    }
    entry++;
}
