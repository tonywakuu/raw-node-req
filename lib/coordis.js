let lat1,lat2,lon1,lon2;
let list = [];
const R = 6371e3; // metres

const apd = require('../airportdata.json')

const fuelCycle = (a,b) => {
    // find all airports between point a and b 
    if (a > b) {
        apd.forEach(ap => {
            if (ap.ID === a) {
                list.push(ap);
            }
            if (ap.ID === b) {
                list.push(ap);
            }
            if (ap.ID < a && ap.ID > b) {
                console.log(ap)
                console.log(list)
            }
        });
    } else {
        apd.forEach(ap => {
            if (ap.ID === a) {
                list.push(ap);
            } else if (ap.ID === b) {
                list.push(ap);
            }
            if (ap.ID > a && ap.ID < b) {
                console.log(ap)
                console.log(list)
            }
        });
    }
    // optimize for maxmimum fuel usage
    // const p1 = lat1 * Math.PI/180; // p, l in radians
    // const p2 = lat2 * Math.PI/180;
    // const dp = (lat2-lat1) * Math.PI/180;
    // const dl = (lon2-lon1) * Math.PI/180;

    // const a = Math.sin(dp/2) * Math.sin(dp/2) +
    //         Math.cos(p1) * Math.cos(p2) *
    //         Math.sin(dl/2) * Math.sin(dl/2);
    // const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    // const d = (R * c) * 0.621371; // in metres * to miles
    

    // while (d > 500) {
        
    // }

}

module.exports = fuelCycle