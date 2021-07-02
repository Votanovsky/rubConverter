"use strict";

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', ()=> {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.jso1n');
    request.setRequestHeader('Content-type', 'applicatiton/json; charset=utf-8');
    request.send();

    request.addEventListener('load', ()=> {
        if (request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response);

            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "ERROR! Конвертация не выполнена";
        }
    });
    // status
    // statusText
    // response
    // readyState
}); 