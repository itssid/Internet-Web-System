var movies = [
	{
		"movieid":1,
		"category":"action_movies",
		"name":"Ant Man",
		"summary":"Con artist Scott gains the ability to shrink in scale with the help of a futuristic suit. Now he must rise to the occasion of his superhero status and protect his secret from unsavoury elements",
		"image":"action/AntMan_poster.jpeg",
		"price":300
	},
	{
		"movieid":2,
		"category":"action_movies",
		"name":"Iron Man",
		"summary":"When an industrialist is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces and save the world.",
		"image":"action/IronMan_poster.jpeg",
		"price":300
	},
	{
		"movieid":3,
		"category":"action_movies",
		"name":"Iron Man 2",
		"summary":"Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.",
		"image":"action/IronMan2_poster.jpeg",
		"price":300
	},
	{
		"movieid":4,
		"category":"action_movies",
		"name":"Juarassic Park",
		"summary":"A joyride at a wildlife amusement park, which contains cloned dinosaurs, soon becomes a horrifying experience when a power breakdown afflicts the park and the dinosaurs begin to react violently.",
		"image":"action/JuarassicPark_poster.jpg",
		"price":300
	},
	{
		"movieid":5,
		"category":"action_movies",
		"name":"Matrix Revolution",
		"summary":"Neo, humanity's only hope of stopping the war and saving Zion, attempts to broker peace between the machines and humans. However, he must first confront his arch nemesis, the rogue agent Smith",
		"image":"action/MatrixRevolution_poster.jpg",
		"price":300
	},
	{
		"movieid":6,
		"category":"action movies",
		"name":"The Matrix",
		"summary":"Thomas, a computer programmer, is led to fight an underground war against powerful computers who now rule the world with a system called 'The Matrix'.",
		"image":"action/TheMatrix_poster.jpg",
		"price":300
	},
	{
		"movieid":7,
		"category":"horror_movies",
		"name":"Annabelle",
		"summary":"A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists.",
		"image":"horror/Anabelle_poster.jpg",
		"price":300
	},
	{
		"movieid":8,
		"category":"horror_movies",
		"name":"Annabelle Creation",
		"summary":"12 years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, where they soon become the target of the dollmaker's possessed creation, Annabelle.",
		"image":"horror/AnabelleCreation_poster.jpg",
		"price":300
	},
	{
		"movieid":9,
		"category":"horror_movies",
		"name":"IT",
		"summary":"A group of bullied kids band together when a shapeshifting demon, taking the appearance of a clown, begins hunting children.",
		"image":"horror/IT_poster.jpeg",
		"price":300
	},
	{
		"movieid":10,
		"category":"horror_movies",
		"name":"The Conjuring",
		"summary":"Rod and Carolyn find their pet dog dead under mysterious circumstances and experience a spirit that harms their daughter Andrea. They finally call investigators who can help them get out of the mess.",
		"image":"horror/TheConjuring_poster.jpeg",
		"price":300
	},
	{
		"movieid":11,
		"category":"horror_movies",
		"name":"The Exorcist",
		"summary":"An actress notices dangerous changes in the behavior and physical make-up of her 12-year-old daughter. Meanwhile, a young priest begins to doubt his faith while dealing with his mother's sickness.",
		"image":"horror/TheExorcist_poster.jpg",
		"price":300
	},
	{
		"movieid":12,
		"category":"horror_movies",
		"name":"The Shining",
		"summary":" Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members",
		"image":"horror/TheShining_poster.jpg",
		"price":300
	},
	{
		"movieid":13,
		"category":"comedy_movies",
		"name":"Airplane",
		"summary":"A man afraid to fly must ensure that a plane lands safely after the pilots become sick.",
		"image":"comedy/airplane_poster.jpg",
		"price":300
	},
	{
		"movieid":14,
		"category":"comedy_movies",
		"name":"Mr. Beans Holiday",
		"summary":" Mr. Bean wins a trip to Cannes where he unwittingly separates a young boy from his father and must help the two come back together. On the way he discovers France, bicycling, and true love, among other things.",
		"image":"comedy/BeanHoliday_poster.jpg",
		"price":300
	},
	{
		"movieid":15,
		"category":"comedy_movies",
		"name":"The Hangover",
		"summary":"For a bachelor party, three best men and the groom take a road trip to Las Vegas. They wake up the next morning to realise that not only have they lost the groom but also have no recollection.",
		"image":"comedy/Hangover_poster.jpg",
		"price":300
	},
	{
		"movieid":16,
		"category":"comedy_movies",
		"name":"Home Alone",
		"summary":"Eight-year-old Kevin is accidentally left behind when his family leaves for France. At first, he's happy to be in charge; but when thieves try to break into his home, he puts up a fight like no other.",
		"image":"comedy/HomeAlone_poster.jpg",
		"price":300	
	},
	{
		"movieid":17,
		"category":"comedy_movies",
		"name":"Ace Ventura: Pet Detective",
		"summary":"Ace Ventura, a private detective, specialises in finding lost animals. When Snowflake, a football team's aquatic mascot, goes missing, he is called to investigate",
		"image":"comedy/PetDetective_poster.jpg",
		"price":300
	},
	{
		"movieid":18,
		"category":"comedy_movies",
		"name":"When Harry Met Sally",
		"summary":"A chance encounter between two graduates culminates in a short-term friendship. But when fate brings them back together five years later, they are forced to deal with how they feel about each other.",
		"image":"comedy/WhenHarryMetSally_poster.jpg",
		"price":300
	},
	{
		"movieid":19,
		"category":"animated_movies",
		"name":"The Boss Baby",
		"summary":" A new baby's arrival impacts a family, told from the point of view of a delightfully unreliable narrator -- a wildly imaginative 7-year-old named Tim. The most unusual Boss Baby (Alec Baldwin) arrives at Tim's home in a taxi, wearing a suit and carrying a briefcase. The instant sibling rivalry must soon be put aside when Tim discovers that Boss Baby is actually a spy on a secret mission, and only he can help thwart a dastardly plot that involves an epic battle between puppies and babies.",
		"image":"animated/BossBaby_poster.jpg",
		"price":300
	},
	{
		"movieid":20,
		"category":"animated_movies",
		"name":"Despicable Me 2",
		"summary":"When a new criminal comes to town, the Anti-Villain League decides to hire Gru in order to fight him off. While Gru initially refuses, he eventually agrees after his aide goes back to his evil ways",
		"image":"animated/DespicableMe2_poster.jpg",
		"price":300
	},
	{
		"movieid":21,
		"category":"animated_movies",
		"name":"Kung Fu Panda 2",
		"summary":"Dragon Warrior Po takes it upon himself to foil the plans of murderous peacock Shen who intends to conquer China and destroy kung fu. For this, Po has to unveil the mystery of his own past.",
		"image":"animated/KungFuPanda2_poster.jpg",
		"price":300
	},
	{
		"movieid":22,
		"category":"animated_movies",
		"name":"Kung Fu Panda",
		"summary":" When an obese Po the Panda, a kung fu enthusiast, gets selected as the Dragon Warrior, he decides to team up with the Furious Five and destroy the evil forces that threaten the Valley of Peace",
		"image":"animated/KungFuPanda_poster.jpg",
		"price":300
	},
	{
		"movieid":23,
		"category":"animated_movies",
		"name":"Despicable Me",
		"summary":"Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see the evildoer as their potential father.",
		"image":"animated/DespicableMe_poster.jpg",
		"price":300
	},
	{
		"movieid":24,
		"category":"animated_movies",
		"name":"The Lion King",
		"summary":"Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble",
		"image":"animated/LionKing.jpeg",
		"price":300
	},
	{
		"movieid":25,
		"category":"biography_movies",
		"name":"A Beautiful Mind",
		"summary":"John Nash, a brilliant but asocial mathematical genius, finds himself in pain when he encounters a cruel disorder. He ultimately overcomes his struggles and emerges free of any trauma.",
		"image":"Biography/ABeautifulMind_poster.jpg",
		"price":300
	},
	{
		"movieid":26,
		"category":"biography_movies",
		"name":"Catch Me if You Can",
		"summary":"The story of Frank Abagnale Jr., before his 19th birthday, successfully forged millions of dollars' worth of checks while posing as a Pan Am pilot, a doctor, and legal prosecutor as a seasoned and dedicated FBI agent pursues him.",
		"image":"Biography/CatchMeIfYouCan_poster.jpg",
		"price":300
	},
	{
		"movieid":27,
		"category":"biography_movies",
		"name":"Chaplin",
		"summary":"An aged Charlie Chaplin narrates his life to his autobiography's editor, including his rise to wealth and comedic fame from poverty, his turbulent personal life and his run-ins with the FBI.",
		"image":"Biography/Chaplin_poster.jpeg",
		"price":300
	},
	{
		"movieid":28,
		"category":"biography_movies",
		"name":"Jobs",
		"summary":" After revolutionizing the home computers, Steve Jobs and his friend Steve Wozniak co-found Apple Inc. But as a leader and a visionary, Jobs' rocky tenure leads to his ouster from the company.",
		"image":"Biography/Jobs_poster.jpg",
		"price":300
	},
	{
		"movieid":29,
		"category":"biography_movies",
		"name":"The Imitation Game",
		"summary":"British mathematician Alan Turing builds a machine that is a prototype of the modern computer to decipher German codes. However, when the police learn about it, they arrest him.",
		"image":"Biography/TheImitationGame_poster.jpeg",
		"price":300
	},
	{
		"movieid":30,
		"category":"biography_movies",
		"name":"The Pursuit of Happyness",
		"summary":"Chris Gardner takes up an unpaid internship in a brokerage firm after he loses his life's earnings selling a product he invested in. His wife leaves him and he is left with the custody of his son.",
		"image":"Biography/ThePursuitofHappyness_poster.jpg",
		"price":300
	},
]