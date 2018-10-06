const axios = require('axios');
var instance = axios.create({ baseURL: 'https://unsplash.it/' });
function getData() {
    instance.get('/list').then(function (response) {
        console.log('main todo');
        console.log("response total %s <", response.data.length);
    }).catch(function (error) {
        console.log("if error");
    });
}
function main() {
    console.log('main work');
    getData();
    console.log("main end");
}
main();

//reference https://medium.com/bakatest-me/control-flow-in-nodejs-js-5bf346a9321b