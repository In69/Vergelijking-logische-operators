
const age = 18;
const isFemale = true;
const driverStatus = "bob";
const name = "Sarah";
const totalAmount = 27;



if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Je mag niet naar binnen");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting op je biertje");
}

if (isFemale) {
  console.log("Je bent een vrouw bent");
} else {
  console.log(
    "Je mag niet naar binnen"
  );
}

if (driverStatus === "bob") {
  console.log("Je bent de bob");
} else {
  console.log("Je bent geen bob");
}

if (name === "Sarah" || name === "Bram") {
  console.log("Je naam is Sarah of Bram, je krijgt een gratis biertje!");
} else {
  console.log("Je doet niet mee aan onze actie");
}

if (totalAmount >= 100) {
  console.log("gratis flesje champagne.");
} else if (totalAmount > 50) {
  console.log("gratis portie nachos");
} else if (totalAmount > 25) {
  console.log("gratis bitterballen");
} else {
  console.log("Helaas geen korting");
}
