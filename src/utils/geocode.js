const request = require('request')

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1Ijoic29yb2hvaiIsImEiOiJjaW1zYXU5YngwMDVudndtMWl1dW4yczZqIn0.1r2MNcaoq-j4SB8tnZzZ6g'

    request({ url, json : true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}
module.exports = geocode