const apiKey = '409af9ba05d6fee1831334579ff1ad7d';

document.getElementById('searchBtn').addEventListener('click', function() {
  const inputElement = document.getElementById('searchInput');
  const inputValue = inputElement.value;
  //console.log(inputValue);

  const city = inputValue;

  localStorage.setItem(city, city);
  console.log(localStorage);
  document.getElementById('history').innerHTML += `
        <button id="${city}" onclick="retrieveData('${city}')"> ${city} </button>
    `;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    const today = new Date().toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
      console.log(today);

    const temperature = data.main.temp;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;

    document.getElementById('apiData').innerHTML = `
        <p> ${city} ${today} </p>
        <p>Temperature: ${temperature} C</p>
        <p>Wind: ${wind} </p>
        <p>Humidity: ${humidity} </p>
    `;
    
})

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data.list);


  for (let i = 1; i <= 5; i++) {
    let j = i*8-1
    //console.log(i);
    let date = Date.parse(data.list[j].dt_txt)
    let dateFormatted = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(date);

    // console.log(dateFormatted);

    let temp = data.list[j].main.temp;
    let wind = data.list[j].wind.speed;
    let humidity = data.list[j].main.humidity;

    // console.log(temp);
    // console.log(wind);
    // console.log(humidity);

    let card_id = "card" + i;

    document.getElementById(card_id).innerHTML = `
        <p> ${dateFormatted} </p>
        <p>Temperature: ${temp} C</p>
        <p>Wind: ${wind} </p>
        <p>Humidity: ${humidity} </p>
    `;
    
    }

})

});

function retrieveData(city) {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    const today = new Date().toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
      console.log(today);

    const temperature = data.main.temp;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;

    document.getElementById('apiData').innerHTML = `
        <p> ${city} ${today} </p>
        <p>Temperature: ${temperature} C</p>
        <p>Wind: ${wind} </p>
        <p>Humidity: ${humidity} </p>
    `;
    
})

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data.list);


  for (let i = 1; i <= 5; i++) {
    let j = i*8-1
    //console.log(i);
    let date = Date.parse(data.list[j].dt_txt)
    let dateFormatted = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(date);

    // console.log(dateFormatted);

    let temp = data.list[j].main.temp;
    let wind = data.list[j].wind.speed;
    let humidity = data.list[j].main.humidity;

    // console.log(temp);
    // console.log(wind);
    // console.log(humidity);

    let card_id = "card" + i;

    document.getElementById(card_id).innerHTML = `
        <p> ${dateFormatted} </p>
        <p>Temperature: ${temp} C</p>
        <p>Wind: ${wind} </p>
        <p>Humidity: ${humidity} </p>
    `;
    
    }

})
}
