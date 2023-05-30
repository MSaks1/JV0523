const app = document.querySelector('#app');

fetch('http://localhost:8000')
.then((response) => {
    return response.json();
}) 
.then ((data) => {
    console.log('õnnestus', data);
    for (let matk of data){
        
        console.log(matk);
        app.innerHTML += `
        <div class="matk">
          <h2>${matk.title}</h2>
          <div class="date"
          <div>Kuupäev: ${matk.startTime}</div>
          </div>
          <div>${matk.description} </div>
        
          <a href="${matk.homepage}" target target="_blank">Tutvu ka kodulehega!</a><br>
          <a href="https://www.google.com/maps/@${matk.lat},${matk.long},17z" target="_blank">Koguneme siin!</a><br>
          <div>Lat: ${matk.lat}</div>
          <div>Long: ${matk.long}</div>
          <div>Registreerunud osalejad: ${matk.participants}</div>
          <img src="${matk.imageUrl}">
          
          
        </div>
      `;
    }
  })


    
.catch(function() {
    console.log('ei õnnestunud :/');
});
 