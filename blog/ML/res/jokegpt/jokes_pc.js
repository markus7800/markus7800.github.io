function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('#jokebutton').on('click', function () {
  i = getRandomInt(0, selected_jokes.length-1)
  console.log(i)
  $('#joke').text(selected_jokes[i])
})



var selected_jokes = [
"I used to think cigarettes were good for the environment\n\
But I was wrong",


"A Mexican magician tells his audience he will disappear on the count of 3. He says he will disappear on the count of seven.\n\
He disappeared on Juan, without a tres.",


"My wife asked me to go shopping today\n\
So I went and saw a dwarf with his hands up",


"I got a vasectomy five years ago.\n\
Now it just changes the colour of the baby.",


"How do you milk a sheep?\n\
Boil the hell out of them!",


"I was at a party dressed as a chicken and when I noticed a tablecloth on it.\n\
Turns out my wife was just frying a coconut on the stove.",


"A Roman walks into a bar and orders a Martini. \"Can I have a Martini?\" The bartender asks.\n\
The Roman replies, \"No you will not.\"",


"What does the left butt cheek say to the right butt cheek?\n\
You got there.",


"I can't stand abortions.\n\
They're killing me.",


"My wife accused me of being immature.\n\
I told her to get out, and went to the toilet.",


"How to get a man to stop going to the toilet...\n\
...preferably by knocking him over",


"I was born in Compton.\n\
My parents didn\'t approve of me until they saw my newspaper.",


"I got my girlfriend a brain transplant\n\
It\'s a real turn off. ",


"What's the difference between a priest and acne?\n\
Acne waits until you're 13 until it's acne free.",


"I got a call from my ex-wife the other day, telling me that she is pregnant with her first child\n\
I said, “that’s not going to help” ",


"Why did the farmer fail his field training?\n\
Because he wore his seatbelts on his back.",


"Why are there so many blind people?\n\
It's because they can't see that far.",


"I tried to play chess with my brother at age 13\n\
But he didn't seem to care. ",


"I heard yesterday that my first football game would be at St. Patrick's Day weekend…\n\
Well that's not going to happen…",


"What does the moon do when it's hungry?\n\
It rises above.",


"I bought my friend a fridge for his birthday\n\
He says it was the best gift he’s ever received.\n\
\n\
“I’m not sure if it was the fridge or the life jacket, but it was the best gift I’ve ever got!” I said. \n\
\n\
“Yeah, my dad died when he couldn’t stand to take it home.”",


"If you can find a woman who is attractive, handsome, and sexy online, I recommend you give them a try.\n\
That way they'll eventually find you attractive enough to try your father's business.",


"What are the three most commonly found bones in a woman?\n\
Triceratops  \n\
Or as the doctor wrote on his heart: 'Some women are so ugly... they only look at me when I'm not there.' ",


"I tried to teach my brother to walk the plank.\n\
I think he's gonna love it.",


"The bartender asks, \"Do you have a coke?\" The bartender says, \"Yes, coke is amazing.\"\n\
\n\
The bartender looks at her in the eye and says, \"Great! I'll have some.\"",


"Why can't you hear a pterodactyl go to sleep?\n\
Because the light is on.",


"I'm so mad at people saying I'm condescending.\n\
I saw a midget prisoner yesterday.",


"There are 5 seasons in Russia...\n\
 seasons 4, 5, 6, 7 and 8. ",


"Knock Knock.\n\
Who’s there?\n\
Dave. \n\
\n\
Dave proceeds to beg for a cup of coffee and a packet of crisps",


"Knock Knock.\n\
Knock Knock \n\
\n\
Who's there, Knock \n\
\n\
Who's there, Who's there, Who's there, Who's there, Who's there? Who's there?\n\
\n\
Who's there?\n\
\n\
I'm not sure, but I can tell you I have the body of a 25 year old man.",


"Knock Knock.\n\
Knock Knock.\n\
\n\
Who's there?\n\
\n\
Kevin Spacey.\n\
\n\
Kevin Spacey, I think you know him.  You should see his movie. You should never go to Chernobyl, you idiot.",


"Knock Knock.\n\
Who's there?  \n\
Dave, the man from the hospital, who has been malingering after a stroke.\n\
Dave's cousin and his wife go to meet him.    \n\
Dave opens a cold beer bottle of coffe.  \n\
The wife thinks for a second and says,  \"I don't think the beer can fix it.\"",


"Knock Knock.\n\
Who's there?\n\
\n\
Dave\n\
\n\
Dave proceeds to stab his wife in the kitchen, he then stabs another man in the back. \n\
\n\
Dave wins a point,  but stabs another man in the back.\n\
\n\
Dave is very upset.\n\
\n\
Dave walks straight to the door of Dave's parents home and shouts to the lock calmly.\n\
\n\
\"Dave, i'm not mad, this is Dave!\" \n\
\n\
Dave replies",


"Knock Knock.\n\
Who is it?\n\
\n\
Hispanic.",


"Knock Knock.\n\
Who's there?\n\
\n\
Dave. \n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave who?",



"Knock Knock.\n\
Knock knock.\n\
Who's there?\n\
\n\
Dave.\n\
Dave who?\n\
\n\
Dave who?\n\
\n\
Dave proceeds to his knees.\n\
\n\
Dave who?\n\
\n\
Dave proceeds to shout back at his grandmother.\n\
\n\
Dave who?\n\
\n\
Dave proceeds to open his coffin and holds it up in front of his grandmother.\n\
\n\
She says, \"this is for the kids who didn't get a hand.\"\n\
\n\
Dave, calm and collected",


"What do you call a dog who doesn't poop?\n\
A labracadabrador.",


"What do you call a bee that lays eggs on a branch?\n\
A golden opportunity ",


"What do you call an alligator that only eats sand?\n\
A paragraph.",


"What do you call a Mexican trying to eat his own pizza?\n\
A Rooster Cannibal. ",


"What do you call a Russian homosexual?\n\
A four leaf clover\n\
\n\
Source: r/aww",


"What do you call a bunch of rabbits walking backwards?\n\
Attempted murder.",


"What do you call a gay pirates girlfriend?\n\
A baked potato.",


"White people can't be black\n\
They can only be assholes",


"White people are better cooks..\n\
.. than black people ",


"White people are allowed to say \"black paint\" all the time.\n\
But black paint is still illegal in paintball.",


"Black people can't be black\n\
They've gotta work at it. ",


"Black people are like Wal-Marts.\n\
White people are like McDonald's.\n\
\n\
McDonald's is a real drag. ",


"Black people won't stop asking me how I got off my bike\n\
They already know I rode my bike",


"Black people are so polite\n\
You cant even say \"hey Jamal\". ",


"Black people can’t be blacksmiths\n\
Unless you work at a high skilled brothel",


"Mexicans are the fastest readers...\n\
They have an amazing ability to read the paper without being bored.",


"Mexicans are so bad at driving\n\
They take all the green cards they have.",


"Mexicans believe the bible says that God created 24 hours of alternating darkness and light.\n\
Well now they're thinking that God was a black man.",


"Mexicans get in trouble all the time because they steal food.\n\
When they steal land, they usually get stoned.",


"Mexicans don't smoke...\n\
but they do make several jalapeño.",


"Mexicans don't drink water\n\
Because of their lack of culture.",


"Asians do not like fast food\n\
They are thick, tired and can not drive",


"Asians are so great,\n\
that they never get angry in a bar",


"Asians take part in a pilot's exam\n\
The pilot asks, \"How do you know your airplane can fly?\"\n\
\n\
The Asian responded, \"Screw me.\" \n\
\n\
The pilot said, \"Screw you.\"",


"Christians are so great\n\
that it's worth all the hassle they'll have in getting their Messiah nailed to a piece of wood",


"Christians, Jews and atheists all have some common ground\n\
On one hand, we like to eat more\n\
\n\
And on the other, we don't like to touch things.",


"Christians don't get divorced...\n\
...because Jesus died for us.",


"Jews must have had a problem with homosexuals because they were attracted only to Adam and Eve.\n\
The problem, however, was with being attracted to a little lamb, because they killed Harambe.",


"Jews are...\n\
A lot like yogurt, in that Jewish women won't touch anything unless it's 100% Israeli.",


"Jews don't have babies\n\
Because they're afraid of a Yoghurt. ",


"I hate when people make fun of me because they think I'm nuts...\n\
They'll say I'm nuts or that I have nuts.",


"I hate it when people say that we can't impeach Trump because he doesn't have tourettes.\n\
That's ridiculous.",


"I hate how batteries feel like they were built for purpose, they are pointless.\n\
It's like they were built for purpose. ",


"I hate being bipolar.\n\
You get what you deserve. ",


"I hate all these people making fun of me. I really did just get my new BMW, but I gotta say my suspension is damn near perfect.\n\
I feel like i'm in the 6th best car ever.",


"I hate it when people talk about their favorite things just by saying them...\n\
Like: \"It's ok honey, you've been around a while\".\n\
\n\
And then they ignore it all and say \"Ahh, that's nice, how can you say it?\".\n\
\n\
Like: \"Oh my god.\"",


"I hate my job as a road worker, but when I got home I realized I work really hard to get home.\n\
Apparently, all I have to do is drive around in my van and complain about it every day for the rest of my life.",


"I hate it when homeless dudes shake their cups of money at me.\n\
Like it or not, I'll have my shit back.",


"I love summer in Canada...\n\
Because the temperature is -273C.",


"I love my wife and I would make a boob joke about her\n\
Lovely woman, I’m a fan",


"I love my wife and kids. They always seem to like me.\n\
I think they're listening.",


"What is the difference between a BMW and a porcupine?\n\
A porcupine has a pricks on the outside.",


"What has 6 legs and bleeds a lot?\n\
Half of a cat.",


"What happened to the pirate who fell in love with the woman that married him?\n\
Marriage was a pain.",


"What is the difference between a plumber and a pickpocket?\n\
A plumber does unspeakable things to women. A pickpocket does unspeakable things to people.",


"What did Cinderella do when she got to the ball?\n\
She got a nose job!",


"How does an Irish man open his refrigerator door?\n\
With two shots of scotch ",


"How many men does it take to make a Japanese man cry?\n\
One.\n\
\n\
“You and me?” \n\
\n\
“Me too!” \n\
\n\
“Nah, that’s easy.” \n\
\n\
“OK, shut up, I’m just trying to make a Japanese man cry.” ",


"How do you break up two blind people fighting?\n\
Call the police.",


"How do you make a blonde laugh at a dark alley?\n\
Tell her it's past midnight.",


"How do you get an Italian out of a Swiss bank?\n\
Give him a Swiss bank card and tell him to ask for another.",


"How to start a riot?\n\
Give the rioters a piece of asphalt.",


"Who is the most hated man in Russia?\n\
Clerk, the guy who hacked my Facebook",


"Who's the best at hoeing?\n\
the skilled hoeing instructor.",


"Donald Trump just threatened to fire a journalist for Daily Post he wrote.\n\
I think I wrote about a midget in NYC that I respect very much. ",


"Donald Trump says...\n\
\"If the president of Russia, the one with birth control, and I want to be President, I will be on your Bill.\"",


"Donald Trump was asked \"How much did the CEO of Pepsi have?\"\n\
He responded \"I don't know, I think I'll have a Coke and some eggs\"",


"Donald Trump is really, really upset that Hillary Clinton is the first black president of the United States.\n\
He says \"I hope you bring a criminal to justice.\"\n\
\n\
And Hillary Clinton says \"I'm not qualified to be president.\"",


"Donald Trump: \"I'm not building a wall\"\n\
Pence: \"I'm not building a wall\"\n\
\n\
Trump: \"I'm building a fence.\"\n\
\n\
Pence: \"I'm not building a fence!\"\n\
\n\
Trump: \"I'm building a de-facto wall!\"",


"Chuck Norris got arrested.\n\
He's wanted dead and alive.",


"Chuck Norris once said:\n\
\"If you are a comedian, don't make fun of me.\" ",

"Chuck Norris is a real hero\n\
He is the man who stopped a bunch of kids on skydiving",


"Chuck Norris Syndrome is when two people have one leg, one leg, and one knee.",


"Chuck Norris' wife has the heart of a lion.\n\
Lucky for her, she's also an idiot too",


"Chuck Norris doesn't know what \"beef stew\" means...\n\
He doesn't know that ANYBODY IS FUCKING DRUNK BEFORE BRUNCH.",


"I asked my parents to pass me two aspirin because I have Alzheimer's...\n\
They said \"Don't be silly\"\n\
\n\
So I went and got one...",


"I just saw a guy being chased by a lion, he got out of his car, took out a hunting rifle and yelled \"Quick, grab that damn animal and drive!\" I thought to myself, \"Man, that's gonna give me a headache\"",


"I just found out I'm colorblind.\n\
It doesn't matter how good I thought about it. ",


"I went to the doctors the other day and said, \"My knees hurt.\"\n\
\"It's ok,\" they replied. \"They tend to get tired after a while.\"",


"I asked my mum what she does for a living. She smiled and said...\n\
\"...just to have a bit of company.\"\n\
\n\
I asked her...\n\
\n\
\"...and how many?\"\n\
\n\
She winked and said.... \"I don't know.\"",


"I've spent all day trying to figure out how to turn off the light from my carbon monoxide alarm.\n\
It's really starting to get annoying.",


"You know why Mexicans don't smoke weed?\n\
Because they don't like high-fives and high-fives.",


"You won't BELIEVE how much money someone in Chicago gets for their coffee every year!\n\
I don't know, I just don't know what else to tell my kids...",


"You see those two old ladies sitting around the table?\n\
There, smoking some weed.\n\
\n\
One looks at the other and says, \"I bet you two don't know each other.\"",


"You know what's black and can't pee?\n\
The ability to talk to dead people.",


"Coronavirus is the best medicine for sore throat\n\
It gives your legs a good workout",


"Coronavirus\n\
One day, my Grandma asked me to pass her a virus, so I passed her the poliovirus. But then I passed her the diarrhea, then I passed her the anal.",


"Coronavirus is a fun and dangerous virus.\n\
It is the reason why kids are so scared of clowns.",


"Coronavirus, like all viruses, should never be transmitted via landline telephones.\n\
They should just be spread through married couples.",


"Coronavirus was found in 17% of all dog breeds.\n\
All dogs are vaccinated.\n\
\n\
All vaccinated dogs are reared.\n\
\n\
All vaccinated dogs are in a stable environment."

]

