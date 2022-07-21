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
      description:
        'A wooden rollercoaster who`s sole purpose is that of a bull in a china shop!',
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
      description:
        'Although this is now defunct, it is included as it was the one and only coaster to grace the icy tundras of Alaska. This coaster will shock you both during AND after!!',
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
      description:
        'What better way to honor our brave soldiers fighting the war of their forefathers in 1992 than with a loop dee loo or two...',
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
      description:
        'A wooden rollercoaster originally opening in 1978 as The Roaring Tiger, was purchased in 1991 and reopened in 1992 at its current location. Was also known as Florida Hurricane from 1987-1990, and Michael Jackson`s Thrill Coaster from 1980-1987...cuz this is Twisterrrrr Twister night!',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/d8/Arkansas-twister1.jpg',
      review: '',
      state: arkansas[0]._id
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
