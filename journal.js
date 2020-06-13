console.log('it works');

const journalEntries = {
    "title":
        ["My favourite sport",
            "The song I like the most",
            "My favourite day"
        ],

    "content":
        ["When have spare time, I always to play football  as it my favourite sport.",
            "My favourite song at the moment is voclist musics,    especially it is with guitar.",
            "I'm always motivated every Monday as it is the first day of a week."
        ]

};


function displayMenu() {
    let entry = '';

    while (entry === '') {
        const entries = Number(prompt("Choose 1 to see the list of journal entries. \n Choose 2 to add a new journal entry \n Choose 3 to quit"));
        if (entries === '1') {
            alert(`${journalEntries.title[0]} \n ${journalEntries.content[0]}`);
            alert(`${journalEntries.title[1]} \n ${journalEntries.content[1]}`);
            alert(`${journalEntries.title[2]} \n ${journalEntries.content[2]}`);

        } else if (entries === '2') {
            let  newJournalEntries = prompt('Enter your new journal entry');
            // var  newEntrie = prompt('Enter your new journal content');  
            if (newJournalEntries === 'title') {
                newJournalEntries = prompt('Enter your new journal title'); 
            } else if (newJournalEntries === 'content') {
                newEntrie = prompt('Enter your new journal content'); 
            }
        
        }  
        entry = "";

        if (entries === '3') {
            saveIt = true;
            break;
        }   
    } 
}
displayMenu();