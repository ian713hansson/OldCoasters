const db = require('../db')
const { State } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection errrrr:'))

const main = async () => {
  const states = [
    {
      name: 'Alabama'
    },
    {
      name: 'Alaska'
    },
    {
      name: 'Arizona'
    },
    {
      name: 'Arkansas'
    },
    {
      name: 'California'
    },
    {
      name: 'Colorado'
    },
    {
      name: 'Connecticut'
    },
    {
      name: 'Florida'
    },
    {
      name: 'Georgia'
    },
    {
      name: 'Idaho'
    },
    {
      name: 'Illinois'
    },
    {
      name: 'Indiana'
    },
    {
      name: 'Iowa'
    },
    {
      name: 'Kansas'
    },
    {
      name: 'Kentucky'
    },
    {
      name: 'Louisiana'
    },
    {
      name: 'Maine'
    },
    {
      name: 'Maryland'
    },
    {
      name: 'Massachusetts'
    },
    {
      name: 'Michigan'
    },
    {
      name: 'Minnesota'
    },
    {
      name: 'Mississippi'
    },
    {
      name: 'Missouri'
    },
    {
      name: 'Montana'
    },
    {
      name: 'Nebraska'
    },
    {
      name: 'Nevada'
    },
    {
      name: 'New Hampshire'
    },
    {
      name: 'New Jersey'
    },
    {
      name: 'New Mexico'
    },
    {
      name: 'New York'
    },
    {
      name: 'North Carolina'
    },
    {
      name: 'North Dakota'
    },
    {
      name: 'Ohio'
    },
    {
      name: 'Oklahoma'
    },
    {
      name: 'Oregon'
    },
    {
      name: 'Pennsylvania'
    },
    {
      name: 'South Carolina'
    },
    {
      name: 'South Dakota'
    },
    {
      name: 'Tennessee'
    },
    {
      name: 'Texas'
    },
    {
      name: 'Utah'
    },
    {
      name: 'Vermont'
    },
    {
      name: 'Virginia'
    },
    {
      name: 'Washington'
    },
    {
      name: 'West Virginia'
    },
    {
      name: 'Wisconsin'
    },
    {
      name: 'Wyoming'
    }
  ]
  await State.insertMany(states)
  console.log('Made some states')
}

const run = async () => {
  await main()
  db.close()
}

run()
