
var request = require('request');


const fsConfig = require('./fs-config');

var fsCredentials = '&client_id=' + fsConfig.client_id + '&client_secret=' + fsConfig.client_secret + '&v=20140601';

console.log(fsConfig.base_url + 'near=Waterford,IE' + fsCredentials);

function loadVenues(locationName, venueKeyword) {
  var requestOptions = {
    url: fsConfig.base_url + 'near=' + locationName + '&query=' + venueKeyword + fsCredentials,
    method: 'GET',
    json: {},
  };
  request(requestOptions, (err, response, body) => {
    const venues = body.response.groups[0].items;
    const checkins = [];

    for (let venue of venues) {
      const checkin = {
        name: venue.venue.name,
        checkins: venue.venue.stats.checkinsCount,
        users: venue.venue.stats.usersCount,
      };
      checkins.push(checkin);
    }
    console.log(checkins);
  });
}

var locationName = 'Waterford, IE';
loadVenues(locationName, '');