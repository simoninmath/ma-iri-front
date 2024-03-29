export class Figurine {
  id: number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: string[];
  created:  Date;

  // Define default value for figurine Object 
  constructor(
    name: string = 'Enter a name',
    hp: number = 100,
    cp: number = 10,
    picture: string = '',
    types: string[] = ['Human'],
    created: Date = new Date
    ){
    
    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}
