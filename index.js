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
	Capricorn:
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
	let mt = moment(date.value, 'YYYY-MM-DD').format('DD-MM');

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
	if (checkAst('01-01-2021', '19-01-2021', mt + '-2021')) {
		selectedDate = 'Capricorn';
	} else if (checkAst('20-01-2021', '18-02-2021', mt + '-2021')) {
		selectedDate = 'Aquarius';
	} else if (checkAst('19-02-2021', '20-03-2021', mt + '-2021')) {
		selectedDate = 'Pisces';
	} else if (checkAst('21-03-2021', '19-04-2021', mt + '-2021')) {
		selectedDate = 'Aries';
	} else if (checkAst('20-04-2021', '20-05-2021', mt + '-2021')) {
		selectedDate = 'Taurus';
	} else if (checkAst('21-05-2021', '20-06-2021', mt + '-2021')) {
		selectedDate = 'Gemini';
	} else if (checkAst('21-06-2021', '22-07-2021', mt + '-2021')) {
		selectedDate = 'Cancer';
	} else if (checkAst('23-07-2021', '22-08-2021', mt + '-2021')) {
		selectedDate = 'Leo';
	} else if (checkAst('23-08-2021', '22-09-2021', mt + '-2021')) {
		selectedDate = 'Virgo';
	} else if (checkAst('23-09-2021', '22-10-2021', mt + '-2021')) {
		selectedDate = 'Libra';
	} else if (checkAst('23-10-2021', '21-11-2021', mt + '-2021')) {
		selectedDate = 'Scorpio';
	} else if (checkAst('22-11-2021', '21-12-2021', mt + '-2021')) {
		selectedDate = 'Sagittarius';
	} else if (checkAst('22-12-2021', '31-12-2021', mt + '-2021')) {
		selectedDate = 'Capricorn';
	}
});

btn.addEventListener('click', () => {
	if (inp.checked == true) {
		if (!date.value) {
			appendMsg.style.color = 'red';
			appendMsg.innerHTML = 'Kindly select a date or uncheck the checkbox';
		} else {
			appendMsg.style.color = 'black';
			appendMsg.innerHTML = `${selectedDate}: ${zodiac[selectedDate]}`;
		}
	} else {
		appendMsg.style.color = 'black';
		mySelectedDate = star[Math.floor(Math.random() * star.length)];
		appendMsg.innerHTML = `${mySelectedDate}: ${zodiac[mySelectedDate]}`;
	}
});

function checkAst(Da1, Da2, Da3) {
	// Format - DD/MM/YYYY
	var Date_1 = Da1;
	var Date_2 = Da2;
	var Date_to_check = Da3;

	D_1 = Date_1.split('-');
	D_2 = Date_2.split('-');
	D_3 = Date_to_check.split('-');

	var d1 = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]);
	var d2 = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]);
	var d3 = new Date(D_3[2], parseInt(D_3[1]) - 1, D_3[0]);

	if (d3 >= d1 && d3 <= d2) {
		return true;
	} else {
		return false;
	}
}
