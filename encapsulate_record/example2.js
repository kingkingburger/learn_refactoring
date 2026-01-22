// before
const organization = new Organization({name: "애크미 구스베리", country: "GB"});



class Organization {
  constructor(data) {
    this._data = data;
  }

  get name() {return this._data.name}
  set name(value) {this._data.name = value;}
}

function getRawDataOfOrganization() {return organization._data;}
function getOrganization() {return organization;}

// 이름 얻기
getOrganization().name