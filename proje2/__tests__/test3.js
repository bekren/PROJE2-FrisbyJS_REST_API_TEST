const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions
const testHost = 'https://restcountries.eu/rest/v2/alpha';

it ('should return a status of 200', function () {
    return frisby
        .get('https://restcountries.eu/rest/v2/name/turkey')
        .expect('status', 200)
        .then((resp) => {
            let respJson = resp.json;
            console.log(respJson)
            expect(respJson.length).toBe(1)
            let name = resp.json[0].borders[1];
            console.log(name)
            return frisby.get('https://restcountries.eu/rest/v2/alpha/' + name )
                .expect('status', 200)
                .then((response) => {
                    let resp = response.json;
                    console.log(resp)
                    let name_capital = resp.capital;
                    console.log(name_capital)
                    expect(resp.capital).toBe('Baku');

                });
        });
});
