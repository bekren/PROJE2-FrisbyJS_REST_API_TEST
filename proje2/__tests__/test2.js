const frisby = require('frisby');
const Joi = frisby.Joi;


it ('should return a status of 200', function () {
        return frisby
            .get('https://restcountries.eu/rest/v2/name/turkey')
            .expect('status', 200)
            .expect('header', 'content-type', 'application/json;charset=utf-8')
            .expect('status', 200)
            .expect('jsonTypes', '*', {
                name: Joi.string(),
                population: Joi.number()
            })

        .then((resp) => {
            let respJson = resp.json;
            console.log(respJson)
            expect(respJson.length).toBe(1)
            console.log(respJson.length)
            console.log(respJson[0])
            expect(respJson[0].name).toBeDefined()
            expect(respJson[0].population).toBeDefined()
            expect(respJson[0].alpha2Code).toBeDefined()
            expect(respJson[0].area).toBeDefined()
            expect(respJson[0].name).toBe('Turkey');
            expect(respJson[0].population).toBe(78741053);

        });
});


