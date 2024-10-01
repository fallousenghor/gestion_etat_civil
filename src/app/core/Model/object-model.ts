export class User{
  prenom!:string;
  nom!:string;
  
  
  maire!:string;
  region!:Address;
  departement!:string;
  commune!:string;
  email!:string;
  password!:string;
  idagent!:boolean;
  
}
export class Address{
  id!:number;
  addLine1!:string;
  addLine2!:string;
  city!:string;
  state!:string
  zipCode!:number;
}
export class Product{
  id!:number;
  name!:string
  uploadPhoto!:string;
  productDesc!:string;
  mrp!:number;
  dp!:number;
  status!:boolean;
}
export class Order{
  id!:number;
  userId!:number;
  sellerId!:number;
  product!:Product;
  deliveryAddress!:Address;
  contact!:number;
  dateTime!:string;
}
