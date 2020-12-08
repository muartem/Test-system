fetch('qa.json').then(function(response) {
    if(response.ok) {
        response.json().then(function(json) {
            QuationsJSON = json;
            Quations = JSON.parse(QuationsJSON.toString());
            console.log(Quations)
        });
    } else {
        console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
    }
});