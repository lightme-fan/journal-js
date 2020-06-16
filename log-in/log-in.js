console.log("Hello");

const socialProgram = [
    {
      title: "Confidence",
      link: '"http://confidence.com"',
      author: "Jonshon"
    },
    
    {
      title: "Motivation",
      link: '"https://www.motivation.com"',
      author: "Ariane"
    },
    
    {
      title: "Diligence",
      link: '"http://diligence.org"',
      author: "Sonia"
    }
  ];
  
  console.log(socialProgram);
  
  const listStartMenu = `Choose an option:
  1: Show links
  2: Add a link
  3: Remove link
  0: Quit
  `;
  
  
  let startMenu = Number(prompt(listSartMenu));
  console.log(startMenu);