const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

let questions = {
  name: 'What\'s your name? Nicknames are also acceptable :) ',
  activity: 'What\'s an activity you like doing?' ,
  music: 'What do you listen to while doing that?' ,
  meal: 'Which meal is your favourite (eg: dinner, brunch, etc.)' ,
  food: 'What\'s your favourite thing to eat for that meal?' ,
  sport: 'Which sport is your absolute favourite?' ,
  superpower: 'What is your superpower? In a few words, tell us what you are amazing at!'
}
let questionKeys = Object.keys(questions);
let questionCounter = 0;

let profile = {};

console.log(questions[questionKeys[0]]);

rl.on('line', line => {
  profile[questionKeys[questionCounter]] = line
  questionCounter += 1;

  if (questionCounter >= questionKeys.length) {
    rl.close();
    console.log(
      profile.name, 
      'loves listening to', 
      profile.music, 
      'while',
      profile.activity + ', devouring',
      profile.food, 
      'for',
      profile.meal + ', prefers',
      profile.sport, 
      'over any other sport, and is amazing at',
      profile.superpower + '.'
    );
  }

  console.log(questions[questionKeys[questionCounter]]);
});