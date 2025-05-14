let ejercicio = "My favorite dessert is jello.";

console.log(ejercicio[23]);

const name = prompt('Favorite Game of Thrones main character:');
let house = '';

switch (name) {
  case 'Khal Drogo':
    house = 'Dothraki Horselord';
    break;
  case 'Daenerys':
    house = 'Targaryen';
    break;
  case 'Jon Snow':
  case 'Sansa':
  case 'Arya':
    house = 'Stark';
    break;
  case "Cersy":
  case "Tywin":
  case "Joanna":
  case  "Jaime":
  case "Tyron":
  case "Kevan":
  case "Lancel":
  case "Genna":
    house = "Lannister";
    break;
  default:
    house = "other";
}

console.log(`Your favorite character is from the house ${house}.`);

const idioma = prompt("que idioma hablas?: español, ingles, frances o italiano")

switch(idioma){
    case español:
        console.log("Hola mundo");
        break;
    case ingles:
        console.log("Hello world");
        break;
    case frances:
        console.log("Bonjour tout le monde");
        break;
    case italiano:
        console.log("Ciao mondo");
        break;
    default:
        console.log("Ese idioma no esta disponible");
}


