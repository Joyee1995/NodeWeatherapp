const request=require('request')
const geocode = (address,callback)=>{
 
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoiam95ZWUxOTk1IiwiYSI6ImNrOWRjb3pkMzAyZGUzZ3Ftc2pxNnE5eTMifQ.tUbC6O7biJXz67KhwE0UQg"
        request({url:url, json:true},(error,res)=>{
            if(error){
                callback('Unable to connect to location services!',undefined)
            }else if(res.body.features.length === 0){
                callback('Unable to find location',undefined)
            }else{
                callback(undefined, {
                    latitude: res.body.features[0].center[1],
                    longitude:res.body.features[0].center[0],
                    location: res.body.features[0].place_name
                })
            }
        })
    }
    
module.exports = geocode