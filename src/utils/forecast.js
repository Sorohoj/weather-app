const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/19b7482e7792a32f573809a3f22e9c59/' + latitude + ',' + longitude + '?units=si&lang=da'

    request({ url, json : true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback(body.error, undefined)
        }else{
            const currently = body.currently
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + currently.temperature + " degress out. There is a " + currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast