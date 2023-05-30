const http = require("http");

const host = 'localhost';
const port = 8000;


let matk1 = {
    title: 'Oandu Koprarada',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOw_8a1H3gbPNw3y_KSpgoXHdOUYUPtiS2G_UGC=w203-h152-k-no',
    description: 'Alustame RMK Oandu looduskeskuse õuelt ',
    startTime: '24.05.2023 KELL 12:00',
    lat: 59.57184890332818,
    long: 26.1117946355822963,
    participants: ['Maarika', 'Klaarika', 'Kirsika'],
    homepage: 'https://loodusegakoos.ee/kuhuminna/rahvuspargid/lahemaa-rahvuspark/1715'
  }
  
  let matk2 = {
    title: 'Nigula raba matkarada',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOtWLe8888g2lwPdgju_ih8uvjiiC738C7oODbu=w203-h152-k-no',
    description: 'Koguneme parklas ja liigume koos matkarajale!',
    startTime: '27.05.2023 KELL 14:00',
    lat: 58.007202317060724,
    long: 24.713864372879755,
    participants: ['Merle', 'Merike'],
    homepage: 'https://loodusegakoos.ee/kuhuminna/kaitsealad/nigula-looduskaitseala/1340'
  }

  let matk3 = {
    title: 'Mukri Raba',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMgpHo1RKgyIbrLW-FO8Aa9LXbnAeGVOptORPD0=w203-h152-k-no"',
    description: 'Koguneme parklas!',
    startTime: '28.05.2023 KELL 12:00',
    lat: 58.74853598721992,
    long: 24.975054534262366,
    participants: ['Mihkel koos perega', 'Janek koos perega', 'Ruth'],
    homepage: 'https://loodusegakoos.ee/kuhuminna/puhkealad/sakala-puhkeala/mukri-raba-loodusrada'
  }
  
  let matkad = [matk1, matk2, matk3]
  
  const requestListener = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(matkad));
  };
  
  const server = http.createServer(requestListener);
  server.listen(port, host, function () {
      console.log(`Server is running on http://${host}:${port}`);
  });