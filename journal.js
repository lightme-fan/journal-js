console.log('it works');

const journalEntries =
    [
        {
            "title": "My favourite sport",
            "content": "When have spare time, I always to play football as it my favourite sport."
        },

        {
            "title": "The song I like the most",
            "content": "My favourite song at the moment is voclist musics, especially it is with guitar."
        },

         {
            "title": "My favourite day",
            "content": "I'm always motivated every Monday as it is the first day of a week."
        }
    ];

const journalEntry = function () {
    return journalEntries.map(function(entry) {
         return entry.title + " \n " + entry.content;
    })
// for (let i = 0; i <= journalEntries.length; i++) {
//     return journalEntries[i].title + '\n ' + journalEntries[i].content;
// }
}
journalEntry();

const entries = Number(prompt("Choose 1 to see the list of journal entries. \n Choose 2 to add a new journal entry \n Choose 3 to quit"))
if (entries === 1) {
    alert(journalEntry());
} // } else if (entries === 2) {
//     const newJournalEntry = prompt("Add a new journal entry");
//     for (let {title, content} of anotherEntry) {
//         for (let newTitle of title) {
//             newJournalEntry.push({newTitle, content});
//         }
//     }
// } else if (entries === 3) {

// }