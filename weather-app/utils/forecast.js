const request = require('request')


const forecast = (f1, f2, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b21ea0d9c1309d586438a021698f1d43&query=' + f1 + ',' + f2 
    request({ url: url, json: true }, (error, res) => {
        if (error) {
            callback('You are not connected to the internet',undefined)
        } else if (res.body.error) {
            callback('location is not given',undefined)
        } else {
            callback(undefined,res.body.current.weather_descriptions[0] + '. It is currently ' + res.body.current.temperature + ' degrees out.')
        }
    })
}

module.exports=forecast
