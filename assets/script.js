const apiKey = '409af9ba05d6fee1831334579ff1ad7d';
const city = 'New York';

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

    let temperature = data.main.temp;
    let wind = data.wind.speed;

    document.getElementById('apiData').innerHTML = `
        <p> ${today} </p>
        <p>Temperature: ${temperature} C</p>
        <p>Wind: ${wind} </p>

    `;
  
  });

  