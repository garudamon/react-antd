export interface geoType {
  lat: string;
  lng: string;
}

export interface addressType {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geoType;
}

export interface companyType {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface ItemProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: addressType;
  phone: string;
  website: string;
  company: companyType;
}
