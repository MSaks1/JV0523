const app = document.querySelector('#app');

fetch('http://localhost:8000')
.then((response) => {
    return response.json();
}) 
.then ((data) => {
    console.log('õnnestus', data);
    app.innerHTML = `
      Title: ${data.title}<br>,
      <img src="${data.imageUrl}"><br>,
      description: ${data.description}<br>,
      longitude: ${data.longitude}<br>,
      lattitude: ${data.latitude}<br>,
      participants:${data.participants}<br>
    `
})
    
.catch(function() {
    console.log('ei õnnestunud :/');
});
