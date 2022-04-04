const getLocation = (ip: string) =>
  fetch(`http://api.ipstack.com/${ip}?access_key=b5b4b9fc8e9507a8814a326344dd87f6
  `);

export default getLocation;
