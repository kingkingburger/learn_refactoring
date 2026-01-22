// before
const organization = new Organization({name: "애크미 구스베리", country: "GB"});



class Organization {
  constructor(data) {
    this._data = data;
  }
}

function getRawDataOfOrganization() {return organization._data;}
function getOrganization() {return organization;}