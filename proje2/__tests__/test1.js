
const frisby = require('frisby');
const Joi = frisby.Joi;
it ('should return a status of 200', function () {
     return frisby
         .get('https://restcountries.eu/rest/v2')
         .expect('status', 200).expect('header', 'content-type', 'application/json;charset=utf-8')
         .then((resp) => {
         let respJson = resp.json;
         console.log(respJson)
         expect(respJson.length).toBe(250)
         console.log(respJson.length)
         console.log(respJson[231])
         expect(respJson[231].name).toBe('Turkey')
         expect(respJson[231].alpha2Code).toBe('TR')
         expect(respJson[231].alpha3Code).toBe('TUR')
     });
 });
