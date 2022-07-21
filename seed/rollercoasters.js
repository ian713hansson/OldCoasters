const db = require('../db')

const {RollerCoaster, State} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
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
         state: Alabama[0]._id

        }

    ]

    await RollerCoaster.insertMany(coaster)
    console.log('Made some coasters')
}

const run = async () => {
    await main()
    db.close()
  }

run()