const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=b21ea0d9c1309d586438a021698f1d43&query=&units=f'
const test = "https://api.mapbox.com/geocoding/v5/mapbox.places/Taipei.json?access_token=pk.eyJ1Ijoiam95ZWUxOTk1IiwiYSI6ImNrOWRjb3pkMzAyZGUzZ3Ftc2pxNnE5eTMifQ.tUbC6O7biJXz67KhwE0UQg"

// request({url:url,json:true},(error,res)=>{
    // const data = JSON.parse(res.body)
    // const temperature = data.current.temperature
    // const ftemperature = data.current.feelslike
    // const forecast = data.current.weather_descriptions[0]
    // if (error){
    //     console.log('You are not connected to the internet')
    // }else if (res.body.error){
    //     console.log('location is not given')
    // }else{
    //     console.log(res.body.current.weather_descriptions[0]+'. It is currently'+ res.body.current.temperature +' degrees out.')}
    // console.log(`${forecast} . It is currently ${temperature} degrees out. It feels like ${ftemperature} degrees out.`) }
// })

request({url:test, json:true},(error,res)=>{
    // const testdata = JSON.parse(res.body);
    // const latitude = testdata.features[0].center[1]
    // const longitude = testdata.features[0].center[0]
    // console.log(latitude,longitude)
    if (error){
        console.log('You are not connected to the internet')
    }else if (res.body.features.length===0){
        console.log('unable to find location')
    }else{
        console.log(res.body.features[0].center[1],res.body.features[0].center[0])}
})