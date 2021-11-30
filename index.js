let messages = [
	'Hey pal, what name would you call a dog that has no both legs?...well it does not matter what name you might call him, trust me he is not coming!',
	'Since you think you know too much than me, what breed of dog can jump higher than buildings? The answer is "any dog," because buildings cannot jump.',
	'Dear besty, if you get the answer to this, then lunch is on me. What is the tallest building in the entire world?... It must be the library because it has so many stories!',
	'Hey, beautiful. Stop crying because it is over. Start smiling because that ungrateful loser is someone else problem.',
	"Don't be sad that he chose her over you, stop counting your thunderstorms, and start counting your rainbows!",
	"Hey pal, if they hurt you again, just tell me, I can make their death look like an accident! Don't worry I have got your back",
	'Please remember, do not take life too seriously. You will never get out of it alive.',
	'If you feel down, like the world is not listening, and you feel like crying, just remember, there is someone out there struggling to pull a push to open door.',
	'Before we meet tonight for the party, just remember that life is not a fairy tale. If you lose your shoe at midnight, you are drunk.',
	"Dear besty, I hope you studied well for tomorrow's exam. Today as I was reading, I noticed that the word 'Studying' was made up of two words originally…",
];

// Aries (March 21 – April 19)
// Taurus (April 20 – May 20)
// Gemini (May 21 – June 20)
// Cancer (June 21 – July 22)
// Leo (July 23 – August 22)
// Virgo (August 23 – September 22)
// Libra (September 23 – October 22)
// Scorpio (October 23 – November 21)
// Sagittarius (November 22 – December 21)
// Capricorn (December 22 – January 19)
// Aquarius (January 20 – February 18)
// Pisces (February 19 – March 20)

let months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
let star = [
	'Aries',
	'Taurus',
	'Gemini',
	'Cancer',
	'Leo',
	'Virgo',
	'Libra',
	'Scorpio',
	'Sagittarius',
	'Capricorn',
	'Aquarius',
	'Pisces',
];

let zodiac = {
	Aries:
		"The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top! ",
	Taurus:
		'What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.',
	Gemini:
		"Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. You know, NBD!",
	Cancer:
		"Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust!",
	Leo:
		"Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.",
	Virgo:
		"You know the expression, if you want something done, give it to a busy person?Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice",
	Libra:
		"Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.",
	Scorpio:
		'Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.',
	Sagittarius:
		'Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.',
	Capricon:
		'What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.',
	Aquarius:
		"Despite the 'aqua' in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.",
	Pisces:
		"If you looked up the word 'psychic' in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality.",
};

const btn = document.querySelector('button');
const inp = document.querySelector('#ast_check');
const date = document.querySelector('#ast_date');
const appendMsg = document.querySelector('#generated-text');
let selectedDate;

inp.addEventListener('click', () => {
	if (inp.checked == true) {
		date.style.display = 'block';
	} else {
		date.style.display = 'none';
	}
});

date.addEventListener('change', () => {
	let mt = moment(date.value, 'YYYY-MM-DD').format('MMMM D');
	console.log(mt);
	selectedDate = mt;
});

btn.addEventListener('click', () => {
	appendMsg.innerHTML = messages[Math.floor(Math.random() * messages.length)];
});
