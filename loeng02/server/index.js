const http = require("http");

const host = 'localhost';
const port = 8000;


let matk1 = {
    title: 'Oandu matkarada',
    imageURL: 'https://lh3.googleusercontent.com/p/AF1QipOvFKn70-Crjf7CCLXi5vYXzJUnvyVqPaGs9M4b=s1360-w1360-h1020',
    description: 'Lähme kõnnime looduses',
    longitude: '59.56518693124138,',
    lattitude: '26.100610726109867',
    participants:['Merle', 'Tiina', 'Marina']
}

let matk2 = {
    title: 'mingi pealkiri',
    imageURL: '',
    description: '',
    longitude: '',
    lattitude: '',
    participants:['Merle']
}

let matk3 = {
    title: 'mingi pealkiri',
    imageURL: '',
    description: '',
    longitude: '',
    lattitude: '',
    participants:['Merle']
}

let matkad = [matk1, matk2, matk3]

const requestListener = function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify(matk1));
    
};

const server = http.createServer(requestListener);
server.listen(port, host, function() {
    console.log(`Server is running on http://${host}:${port}`);
});