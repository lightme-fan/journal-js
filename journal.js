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

// let entry = 0;
// while (entries === "1" && entries === "2" && entries === "3") {
// while (entry === "") {
    const entries = prompt("Choose 1 to see the list of journal entries. \n Choose 2 to add a new journal entry \n Choose 3 to quit");
        while (entries > "0" && entries < "4") {
        if (entries === "1") {
            for (let i = 0; i < entries.length; i++) {
                alert(`Title: ${journalEntries[i].title} \n Content: ${journalEntries[i].content}`);
            }
        }
        else if (entries === "2") {
            let newTitleJournalEntries = prompt('Enter your new title');
            newTitleJournalEntries = journalEntries[0].title;
            let newContentJournalEntries = prompt('Enter your new content');
            newContentJournalEntries = journalEntries[0].content;
            
            for (let i = 0; i < journalEntries.length; i++) {
                    alert(`Title: ${newTitleJournalEntries[i].title} \n Content: ${newContentJournalEntries[i].content}`);
            }
        }
        
        else if (entries === "3") {
            break;
        }
    // }
    }