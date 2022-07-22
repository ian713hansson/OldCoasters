const db = require('../db')


const { Coaster, State } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const alabama = await State.find({ name: 'Alabama' })
  const alaska = await State.find({ name: 'Alaska' })
  const arizona = await State.find({ name: 'Arizona' })
  const arkansas = await State.find({ name: 'Arkansas' })
  let california = await State.find({ name: 'California' })
  let colorado = await State.find({ name: 'Colorado' })
  let connecticut = await State.find({ name: 'Connecticut' })
  let florida = await State.find({ name: 'Florida' })
  let georgia = await State.find({ name: 'Georgia' })
  let idaho = await State.find({ name: 'Idaho' })
  let illinois = await State.find({ name: 'Illinois' })
  let indiana = await State.find({ name: 'Indiana' })
  let iowa = await State.find({ name: 'Iowa' })
  let kansas = await State.find({ name: 'Kansas' })
  let kentucky = await State.find({ name: 'Kentucky' })
  let louisiana = await State.find({ name: 'Louisiana' })
  let maine = await State.find({ name: 'Maine' })
  let maryland = await State.find({ name: 'Maryland' })
  let massachusetts = await State.find({ name: 'Massachusetts' })
  let michigan = await State.find({ name: 'Michigan' })
  let minnesota = await State.find({ name: 'Minnesota' })
  let mississippi = await State.find({ name: 'Mississippi' })
  let missouri = await State.find({ name: 'Missouri' })
  let montana = await State.find({ name: 'Montana' })
  let nebraska = await State.find({ name: 'Nebraska' })
  let nevada = await State.find({ name: 'Nevada' })
  let newHampshire = await State.find({ name: 'New Hampshire' })
  let newJersey = await State.find({ name: 'New Jersey' })
  let newMexico = await State.find({ name: 'New Mexico' })
  let newYork = await State.find({ name: 'New York' })
  let northCarolina = await State.find({ name: 'North Carolina' })
  let northDakota = await State.find({ name: 'North Dakota' })
  let ohio = await State.find({ name: 'Ohio' })
  let oklahoma = await State.find({ name: 'Oklahoma' })
  let oregon = await State.find({ name: 'Oregon' })
  let pennsylvania = await State.find({ name: 'Pennsylvania' })
  let southCarolina = await State.find({ name: 'South Carolina' })
  let southDakota = await State.find({ name: 'South Dakota' })
  let tennessee = await State.find({ name: 'Tennessee' })
  let texas = await State.find({ name: 'Texas' })
  let utah = await State.find({ name: 'Utah' })
  let vermont = await State.find({ name: 'Vermont' })
  let virginia = await State.find({ name: 'Virginia' })
  let washington = await State.find({ name: 'Washington' })
  let westVirginia = await State.find({ name: 'West Virginia' })
  let wisconsin = await State.find({ name: 'Wisconsin' })
  let wyoming = await State.find({ name: 'Wyoming' })

    const coaster = [
        {
         name: 'Rampage',
         location: 'Alabama Adventure & Splash Adventure',
         dateBuilt: '1998',
         themeOfRide: 'Destruction and Chaos',
         topSpeed: '56 mph',
         dropLength: '102.0 feet',
         description: 'A wooden rollercoaster who`s sole purpose is that of a bull in a china shop!',
         image: 'https://rcdb.com/475.htm#',
         review: '',
         state: alabama[0]._id
        },
        {
            name: 'Aftershock',
            location: 'Alaska State Fair',
            dateBuilt: '2021',
            themeOfRide: 'Shared Trauma',
            topSpeed: '35 mph',
            dropLength: '25 feet',
            description: 'Although this is now defunct, it is included as it was the one and only coaster to grace the icy tundras of Alaska. This coaster will shock you both during AND after!!', 
            image: 'https://rcdb.com/19525.htm#',
            review: '',
            state: alaska[0]._id
        },
        {
            name: 'Desert Storm',
            location: 'Castles n` Coasters',
            dateBuilt: '1992',
            themeOfRide: 'War',
            topSpeed: 'unavailable',
            dropLength: 'unavailable',
            description: 'What better way to honor our brave soldiers fighting the war of their forefathers in 1992 than with a loop dee loo or two...',
            image: 'https://rcdb.com/350.htm#',
            review: '',
            state: arizona[0]._id
        },
        {
            name: 'Arkansas Twister',
            location: 'Magic Springs Theme and Water Park',
            dateBuilt: '1992',
            themeOfRide: 'Tornadoes and Natural Disaster',
            topSpeed: '50 mph',
            dropLength: '95.0 feet',
            description: 'A wooden rollercoaster originally opening in 1978 as The Roaring Tiger, was purchased in 1991 and reopened in 1992 at its current location. Was also known as Florida Hurricane from 1987-1990, and Michael Jackson`s Thrill Coaster from 1980-1987...cuz this is Twisterrrrr Twister night!',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Arkansas-twister1.jpg',
            review: '',
            state: arkansas[0]._id
        },
        {
            name: 'Giant Dipper',
            location: 'Santa Cruz Beach Boardwalk',
            dateBuilt: '1924',
            themeOfRide: 'Dippin and Trippin',
            topSpeed: '55 mph',
            dropLength: '65.0 feet',
            description: 'The thrill of a plunge down a mine shaft, a balloon ascent, a parachute jump, airplane acrobatics, a cyclone, a toboggan ride, and a ship in a storm.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/SantaCruz_BeachBoardwalk_GiantDipperTrack2_DSCN9390.JPG/500px-SantaCruz_BeachBoardwalk_GiantDipperTrack2_DSCN9390.JPG',
            review: '',
            state: california[0]._id
        },
        {
            name: 'Wild Chipmunk',
            location: 'Lakeside Amusement Park',
            dateBuilt: '1955',
            themeOfRide: 'The most insane chipmunk you will ever encounter.',
            topSpeed: '21 mph',
            dropLength: '41.0 feet',
            description: 'The chipmunk called, it thinks this ride is nuts...',
            image: 'https://rcdb.com/289.htm#',
            review: '',
            state: colorado[0]._id
        },
        {
            name: 'Wildcat',
            location: 'Lake Compounce',
            dateBuilt: '1927',
            themeOfRide: 'The opposite of a house cat',
            topSpeed: '48 mph',
            dropLength: '78 feet',
            description: 'Jump on the back one wild ass cat and zip down this rickety ole wooden coaster on the way to perhaps your last thrill.',
            image: 'https://rcdb.com/420.htm#',
            review: '',
            state: connecticut[0]._id
        },
        {
            name: 'Space Mountain',
            location: 'Walt Disney World-Magic Kingdom',
            dateBuilt: '1975',
            themeOfRide: 'Outer Space',
            topSpeed: '27 mph',
            dropLength: '90 feet',
            description: 'Outer space, indoor coaster, fan favorite, if you haven`t been, it is about time.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Space_Mountain_in_the_Magic_Kingdom_in_2021.jpg/500px-Space_Mountain_in_the_Magic_Kingdom_in_2021.jpg',
            review: '',
            state: florida[0]._id
        },
        {
            name: 'Dahlonega Mine Train',
            location: 'Six Flags Over Georgia',
            dateBuilt: '1967',
            themeOfRide: 'Runaway Mine Train going down a Mine and you are the Miner',
            topSpeed: '29 mph',
            dropLength: '37 feet',
            description: 'Imagine you are a miner headed down into the mines for a day of mining. Suddenly the chain on your mine train car snaps and you are sent plummeting into the mines at an uncontrollable speed. This is a very scary idea if you are a miner, and a very fun ride if you are at Six Flags.',
            image: 'https://rcdb.com/42.htm#',
            review: '',
            state: georgia[0]._id
        },
        {
            name: 'Corkscrew',
            location: 'Silverwood Theme Park',
            dateBuilt: '1990',
            themeOfRide: 'Opening a bottle of bordeux',
            topSpeed: '46 mph',
            dropLength: '62 feet',
            description: 'This steel coaster features two back to back loops, turning its passengers into a virtual wine opener',
            image: 'https://rcdb.com/178.htm#',
            review: '',
            state: idaho[0]._id
        },
        {
            name: 'Whizzer',
            location: 'Six Flags Great America',
            dateBuilt: '1976',
            themeOfRide: 'Public Urination',
            topSpeed: '42 mph',
            dropLength: '64 feet',
            description: 'If you can`t hold it, this is the ride for you!',
            image: 'https://rcdb.com/113.htm#',
            review: '',
            state: illinois[0]._id
        },
        {
            name: 'Tig`rr Coaster',
            location: 'Indiana Beach',
            dateBuilt: '1984',
            themeOfRide: 'Lions and Tigers and Bears oh my',
            topSpeed: '42 mph',
            dropLength: '64 feet',
            description: 'If you can`t hold it, this is the ride for you!',
            image: 'https://rcdb.com/113.htm#',
            review: '',
            state: indiana[0]._id
        },
        {
            name: 'Little Coaster',
            location: 'Arnolds Park',
            dateBuilt: '1959',
            themeOfRide: 'It is a tiny coaster for all kinds of fun',
            topSpeed: 'Probably not too fast',
            dropLength: '15 feet',
            description: 'Kiddie coasters are the best',
            image: 'https://rcdb.com/346.htm#',
            review: '',
            state: iowa[0]._id
        },
        {
            name: 'Roller Coaster, yup it is called Roller Coaster',
            location: 'Kiddieland',
            dateBuilt: '1960',
            themeOfRide: 'For the kiddos',
            topSpeed: 'not available',
            dropLength: '5 feet',
            description: 'Having a big ole blast as a kid',
            image: 'https://rcdb.com/9273.htm#',
            review: '',
            state: kansas[0]._id
        },
        {
            name: 'Roller Skater',
            location: 'Kentucky Kingdom',
            dateBuilt: '1994',
            themeOfRide: 'Sitting inside of a big roller skate',
            topSpeed: '21.7 mph',
            dropLength: '27.9 feet',
            description: 'You are a foot, get ready to ride.',
            image: 'https://rcdb.com/172.htm#',
            review: '',
            state: kentucky[0]._id
        },
        {
            name: 'Mega Zeph',
            location: 'Six Flags New Orleans',
            dateBuilt: '2005',
            themeOfRide: 'Extreme',
            topSpeed: '57 mph', 
            dropLength: '110 feet',
            description: 'This big ole drop re-opened after Hurricane Katrina and has been operating since 2005.',
            image: 'https://rcdb.com/589.htm#',
            review: '',
            state: louisiana[0]._id
        },
        {
            name: 'Excalibur',
            location: 'Funtown Splashtown U.S.A.',
            dateBuilt: '1998',
            themeOfRide: 'Swords and Sorcery',
            topSpeed: '55 mph', 
            dropLength: '100 feet',
            description: 'A mythical sword',
            image: 'https://rcdb.com/471.htm#',
            review: '',
            state: maine[0]._id
        },
        {
            name: 'Roller Coaster 5',
            location: 'Hebron Fireman`s Carnival',
            dateBuilt: '1973',
            themeOfRide: 'Sketchiness',
            topSpeed: 'Depends on how heavy the passengers are', 
            dropLength: '5 feet',
            description: 'This thing looks sketchy as hell.',
            image: 'https://rcdb.com/20044.htm#',
            review: '',
            state: maryland[0]._id
        },
        {
            name: 'Thunderbolt',
            location: 'Six Flags New England',
            dateBuilt: '1941',
            themeOfRide: 'A bolt of thunder',
            topSpeed: '40 mph', 
            dropLength: '70 feet',
            description: 'A wooden coaster which sounds not unlike a thunder crack in the sky',
            image: 'https://rcdb.com/182.htm#',
            review: '',
            state: massachusetts[0]._id
        },
        {
            name: 'Corkscrew',
            location: 'Michigan`s Adventure',
            dateBuilt: '1979',
            themeOfRide: 'Loops on Loops',
            topSpeed: '45 mph', 
            dropLength: '70 feet',
            description: 'Two loops in a row make this an extreme ride for 1979!',
            image: 'https://rcdb.com/218.htm#',
            review: '',
            state: michigan[0]._id
        },
        {
            name: 'High Roller',
            location: 'Valleyfair!',
            dateBuilt: '1976',
            themeOfRide: 'Rollin High!',
            topSpeed: '50 mph', 
            dropLength: '70 feet',
            description: 'This wooden coaster has been getting high since the 70`s',
            image: 'https://rcdb.com/117.htm#',
            review: '',
            state: minnesota[0]._id
        },
        {
            name: 'All American Coaster',
            location: 'Brookhaven Exchange Club Park',
            dateBuilt: '1971',
            themeOfRide: 'U S A, U S A, U S A...',
            topSpeed: 'The speed of a bald eagle', 
            dropLength: 'unavailable',
            description: 'Grab your apple pie folks',
            image: 'https://rcdb.com/2619.htm#',
            review: '',
            state: mississippi[0]._id
        },
        {
            name: 'River King Mine Train',
            location: 'Six Flags St. Louis',
            dateBuilt: '1971',
            themeOfRide: 'Travelling the mines',
            topSpeed: '37 mph', 
            dropLength: '41 feet',
            description: 'Runaway train, never coming back, runaway on a runway track',
            image: 'https://rcdb.com/125.htm#',
            review: '',
            state: missouri[0]._id
        },
        {
            name: 'Monster Mouse',
            location: 'Amusement Park Drive In Laurel, MO',
            dateBuilt: '2009',
            themeOfRide: 'Being a big ole mouse',
            topSpeed: 'unavailable', 
            dropLength: 'unavailable',
            description: 'Monster Mouse looks like it has taken a few lives',
            image: 'https://rcdb.com/4345.htm#',
            review: '',
            state: montana[0]._id
        },
        {
            name: 'Go-Gator',
            location: 'Fun Plex',
            dateBuilt: '2004',
            themeOfRide: 'Alligator with a smile',
            topSpeed: 'slow', 
            dropLength: 'low',
            description: 'On the backs of gators we go',
            image: 'https://rcdb.com/2890.htm#',
            review: '',
            state: nebraska[0]._id
        },
        {
            name: 'Canyon Blaster',
            location: 'Adventuredome',
            dateBuilt: '1993',
            themeOfRide: 'Dynamite',
            topSpeed: '41 mph', 
            dropLength: '66 feet',
            description: 'Pink like the mountains surroundig Las Vegas, this coaster comes with a free Baja Blast.',
            image: 'https://rcdb.com/104.htm#',
            review: '',
            state: nevada[0]._id
        },
        {
            name: 'Swamp Fox',
            location: 'Family Kingdom Amusement Park',
            dateBuilt: '1966',
            themeOfRide: 'I`m ole Gregg',
            topSpeed: '50 mph', 
            dropLength: '72 feet',
            description: 'Do you love me?',
            image: 'https://rcdb.com/337.htm#',
            review: '',
            state: southCarolina[0]._id
        },
        {
            name: 'Yankee Cannonball',
            location: 'Canobie Lake Park',
            dateBuilt: '1936',
            themeOfRide: 'A cannonball forged in Northeast',
            topSpeed: '35 mph', 
            dropLength: '63.5 feet',
            description: 'Fast like a cannonball headed straight at old Dixie',
            image: 'https://rcdb.com/298.htm#',
            review: '',
            state: newHampshire[0]._id
        },
        {
            name: 'Runaway Mine Train NJ',
            location: 'Six Flags Great Adventure',
            dateBuilt: '1974',
            themeOfRide: 'You are a miner',
            topSpeed: '38 mph',
            dropLength: '39 feet',
            description: 'If you know, you know...',
            image: 'https://rcdb.com/131.htm#',
            review: '',
            state: newJersey[0]._id
        },
        {
            name: 'Galaxi',
            location: 'Cliff`s amusement Park',
            dateBuilt: '1977',
            themeOfRide: 'Outer Space',
            topSpeed: 'unavailable',
            dropLength: 'unavailable',
            description: 'Take a trip to the galaxy, but do not spell it right',
            image: 'https://rcdb.com/392.htm#',
            review: '',
            state: newMexico[0]._id
        },
        {
            name: 'Jack Rabbit',
            location: 'Seabreeze Rochester',
            dateBuilt: '1920',
            themeOfRide: 'A fast rabbit',
            topSpeed: 'unavailable',
            dropLength: '75 feet',
            description: 'I can only imagine how frightening this ride really is, if you have been there please write a review',
            image: 'https://rcdb.com/227.htm#',
            review: '',
            state: newYork[0]._id
        },
        {
            name: 'Carolina Goldrusher',
            location: 'Carowinds',
            dateBuilt: '1973',
            themeOfRide: 'Gold panning',
            topSpeed: 'unavailable',
            dropLength: 'unavailable',
            description: 'Get your pick ready cuz we are going gold diggin',
            image: 'https://rcdb.com/83.htm#',
            review: '',
            state: northCarolina[0]._id
        },
        {
            name: 'Runaway Train',
            location: 'Super Slide Amusement Park',
            dateBuilt: '2009',
            themeOfRide: 'Train',
            topSpeed: '',
            dropLength: '',
            description: 'This train`s brakes have broken and it is out of control',
            image: 'https://rcdb.com/9060.htm#',
            review: '',
            state: northDakota[0]._id
        },
        {
            name: 'Little Dipper',
            location: 'Memphis Kiddie Park',
            dateBuilt: '1952',
            themeOfRide: 'Kiddie',
            topSpeed: 'Well, it`s not the Big Dipper',
            dropLength: '',
            description: 'When you dip, I dip, when we dip we dip we dip',
            image: 'https://rcdb.com/635.htm#',
            review: '',
            state: ohio[0]._id
        },
        {
            name: 'Little Fire Ball',
            location: 'Kiddie Park Bartlesville',
            dateBuilt: '1953',
            themeOfRide: 'Terrifying children',
            topSpeed: '',
            dropLength: '',
            description: 'Many children have been permenantly mentally damaged due to the unstable nature of the relationships between the structure of this coaster and the ground it lays upon',
            image: 'https://rcdb.com/1765.htm#',
            review: '',
            state: oklahoma[0]._id
        },
        {
            name: 'Ice Mountain Bobsled',
            location: 'Enchanted Forest',
            dateBuilt: '1983',
            themeOfRide: 'Cool Runnings',
            topSpeed: '',
            dropLength: '',
            description: 'Tucked into an enchanted forest, lies a snow covered mountain, upon which you will bobsled down with four happy go lucky Jamaicans',
            image: 'https://rcdb.com/238.htm#',
            review: '',
            state: oregon[0]._id
        },
        {
            name: 'Thunderhawk',
            location: 'Dorney Park & Wildwater Kingdom',
            dateBuilt: '1924',
            themeOfRide: 'A mythical hawk who is made of thunder',
            topSpeed: '45 mph',
            dropLength: '65 feet',
            description: 'This writer`s first coaster and it is so much fun, completely unhinged, feels like it is about to fall apart and worth every bit of sweat.',
            image: 'https://rcdb.com/239.htm#',
            review: '',
            state: pennsylvania[0]._id
        },
        {
            name: 'Humpty Dumpty`s Great Fall',
            location: 'Storybook Land',
            dateBuilt: '2015',
            themeOfRide: 'Mother Goose',
            topSpeed: '',
            dropLength: '',
            description: 'Couldn`t put all those pieces back together again could you',
            image: 'https://rcdb.com/12095.htm#',
            review: '',
            state: southDakota[0]._id
        },
        {
            name: 'Blazing Fury',
            location: 'Dollywood!',
            dateBuilt: '1978',
            themeOfRide: 'Joleen',
            topSpeed: '22 mph',
            dropLength: '22 feet',
            description: 'This is what happens when you cross Dolly Parton',
            image: 'https://rcdb.com/501.htm#',
            review: '',
            state: tennessee[0]._id
        },
        {
            name: 'Cyclone',
            location: 'Wonderland Amusement Park',
            dateBuilt: '1968',
            themeOfRide: 'Whirlwind',
            topSpeed: '',
            dropLength: '',
            description: 'It is yellow and blue and fun for you',
            image: 'https://rcdb.com/256.htm#',
            review: '',
            state: texas[0]._id
        },
        {
            name: 'Roller Coaster',
            location: 'Lagoon',
            dateBuilt: '1921',
            themeOfRide: 'Being a roller coaster',
            topSpeed: '45 mph',
            dropLength: '62 feet',
            description: 'Old school fun!',
            image: 'https://rcdb.com/196.htm#',
            review: '',
            state: utah[0]._id
        },
        {
            name: 'Timber Ripper Mountain Coaster',
            location: 'Okemo Mountain Resort',
            dateBuilt: '2010',
            themeOfRide: 'Rippin timber',
            topSpeed: '',
            dropLength: '',
            description: 'Mountain coasters are just the best, you control your own speed',
            image: 'https://rcdb.com/13318.htm#',
            review: '',
            state: vermont[0]._id
        },
        {
            name: 'Woodstock Express',
            location: 'Kings Dominion',
            dateBuilt: '1974',
            themeOfRide: 'Snoopy`s bird pal',
            topSpeed: '35 mph',
            dropLength: '35 feet',
            description: 'Old school and it is baby blue',
            image: 'https://rcdb.com/89.htm#',
            review: '',
            state: virginia[0]._id
        },
        {
            name: 'Classic Coaster',
            location: 'Washington State Fair',
            dateBuilt: '1935',
            themeOfRide: 'Being a classic',
            topSpeed: '50 mph',
            dropLength: '52 feet',
            description: 'This is just a stone cold classick!',
            image: 'https://rcdb.com/257.htm#',
            review: '',
            state: washington[0]._id
        },
        {
            name: 'Big Dipper',
            location: 'Camden Park',
            dateBuilt: '1958',
            themeOfRide: 'Outer Space',
            topSpeed: '',
            dropLength: '',
            description: 'You have seen the little dipper, now move over bacon!',
            image: 'https://rcdb.com/315.htm#',
            review: '',
            state: westVirginia[0]._id
        },
        {
            name: 'Mad Mouse',
            location: 'Little Amerricka',
            dateBuilt: '1993',
            themeOfRide: 'This mouse is mad',
            topSpeed: '',
            dropLength: '',
            description: 'You are a mouse. Someone has stolen your cheese. You are suitably angry as that cheese was your dinner.',
            image: 'https://rcdb.com/330.htm#',
            review: '',
            state: wisconsin[0]._id
        },
        {
            name: 'Cowboy Coaster',
            location: 'Snow King Mountain',
            dateBuilt: '2015',
            themeOfRide: 'Cowboy',
            topSpeed: '27 mph',
            dropLength: '',
            description: 'You are a cowboy, now coast',
            image: 'https://rcdb.com/13510.htm#',
            review: '',
            state: wyoming[0]._id
        }
    ]

    await Coaster.insertMany(coaster)
    console.log('Made some coasters')

  
}

const run = async () => {
  await main()
  db.close()
}

run()
