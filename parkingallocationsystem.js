import readline from 'readline'
import { ParkingAllocationSystem } from './parking-allocation.js'
let parking = new ParkingAllocationSystem()

console.log("\n");
console.log('                    *****************************************************************                  ');
console.log();
console.log("                             *********************************************           ");
console.log("                               |  Object-Oriented Mall Parking System  |             ");
console.log("                             *********************************************           ");
console.log();
console.log('                    *****************************************************************                  ');
console.log("\n");

let prompt = 'Choose an action [ park => PARK A VEHICLE, unpark => UNPARK A VEHICLE, map => PARKING SLOT, exit => EXIT ]:'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt
})

rl.prompt()

rl.on('line', (line) => {
    switch (line.trim()) {
      case 'exit':
        rl.close()
        break
      case 'park':
        console.log("\n");
        rl.question('Types of Vehicles [ 0-S, 1-M, 2-L ]: ', function ( v ) {
            let strEntrance = parking.ENTRANCE.map( (e) => e.name).join(',')
            console.log("\n");
            rl.question(`Entry Points  [${strEntrance}]: `, function (entrance) {
                parking.park(v, entrance)
                console.log("\n");
                rl.prompt()
            })

        })

        break

      case 'unpark':
        console.log("\n");
        rl.question('Location of vehicle to unpark. Seperate by a space [row column]: ', function (loc) {
            let strLoc = loc.trim().split(' ')
            if ( strLoc.length >= 2 ) {
                let row = strLoc[0]
                let col = strLoc[1]
                parking.unpark(row, col)
                console.log('\n.................')
                console.log('Vehicle Unparked ✔')
                console.log('.................')
            }
        })
      break
      case 'map':
        parking.viewMap()
        break
      default:
        break;
    }
    
    rl.prompt();

  }).on('close', () => {
    console.log("\n");
    console.log('                    -----------------------------------------------------------------                  ');
    console.log();
    console.log("                       ---------------------------------------------------------          ");
    console.log("                       |  Thank you for using the Object-Oriented Mall System! |          ");
    console.log("                       ---------------------------------------------------------          ");
    console.log();
    console.log('                    -----------------------------------------------------------------                  ');
    console.log("\n");
    process.exit(0);

  });

