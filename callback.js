const axios = require('axios');
var instance = axios.create({ baseURL: 'https://unsplash.it/' });

function getData(callback) {
    /*step2 รับ function เข้ามาผ่าน parameter ด้วยตัวแปร callback*/
    instance.get('/list').then(function (response) {
        /*step3 โยนค่ากับไป โดยเรากำหนด param ตัวแรก
       เป็นที่สำหรับกรณี error  ตัวที่สอง สำหรับส่ง ข้อมูลกลับ*/
        callback(null, response.data);
    }).catch(function (error) {
        callback(error, null);/*step3 กรณี error*/
    });
}

function main() {
    console.log('main work');
    /*step1 เราโยน function ลงไปเป็น parameter*/
    getData(function (error, result) {
        /*step4 รอรับค่าจากที่ step3 ส่งกลับมา โดยเราอาจดัก error เเบบนี้
        if(error){
             ทำบางอย่างเมื่อ error
        }*/
        console.log('main todo');
        console.log("response total %s <", result.length);
        console.log("main end")
    });
}
main();
//reference https://medium.com/bakatest-me/control-flow-in-nodejs-js-5bf346a9321b