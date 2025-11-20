const data = {
  "Andromeda": "Named after the princess Andromeda, it contains the Andromeda Galaxy, our nearest spiral neighbor.",
  "Antlia": "A faint southern constellation representing an air pump.",
  "Apus": "Represents the Bird of Paradise, located near the south celestial pole.",
  "Aquarius": "One of the zodiac constellations, representing the water bearer.",
  "Aquila": "Represents the eagle and contains the bright star Altair.",
  "Ara": "Symbolizes an altar and lies in the southern sky.",
  "Aries": "A zodiac constellation representing the ram.",
  "Auriga": "Known as the charioteer and contains the bright star Capella.",
  "Boötes": "Contains Arcturus, one of the brightest stars in the night sky.",
  "Caelum": "A faint constellation representing a sculptor’s chisel.",
  "Camelopardalis": "Represents a giraffe and is large but dim.",
  "Cancer": "A zodiac constellation representing the crab.",
  "Canes Venatici": "Represents hunting dogs and contains beautiful galaxies.",
  "Canis Major": "Contains Sirius, the brightest star in the night sky.",
  "Canis Minor": "Contains Procyon, a bright star in the winter sky.",
  "Capricornus": "A zodiac constellation representing the sea-goat.",
  "Carina": "Part of the former Argo Navis, contains Canopus—the second brightest star.",
  "Cassiopeia": "Forms a 'W' shape and is visible all year in the northern hemisphere.",
  "Centaurus": "Contains Alpha Centauri, the closest star system to Earth.",
  "Cepheus": "A house-shaped constellation representing King Cepheus.",
  "Cetus": "Represents a sea monster in Greek mythology.",
  "Chamaeleon": "A small southern constellation named after the chameleon.",
  "Circinus": "Represents a drawing compass; faint and southern.",
  "Columba": "Represents a dove flying near Canis Major.",
  "Coma Berenices": "Represents Queen Berenice’s hair; rich in galaxies.",
  "Corona Australis": "Represents the southern crown.",
  "Corona Borealis": "A northern constellation representing a crown.",
  "Corvus": "Represents a crow; small and distinctive.",
  "Crater": "Represents a cup or goblet in mythology.",
  "Crux": "The Southern Cross, an iconic southern-sky constellation.",
  "Cygnus": "Represents the swan and contains the Northern Cross asterism.",
  "Delphinus": "A small constellation representing a dolphin.",
  "Dorado": "Contains part of the Large Magellanic Cloud.",
  "Draco": "A long, winding constellation representing a dragon.",
  "Equuleus": "One of the smallest constellations, representing a horse’s head.",
  "Eridanus": "Represents a great celestial river.",
  "Fornax": "Means 'furnace'; home to many galaxies.",
  "Gemini": "A zodiac constellation representing the twins Castor and Pollux.",
  "Grus": "Represents a crane, located in the southern sky.",
  "Hercules": "One of the largest northern constellations.",
  "Horologium": "Represents a clock, created by Lacaille.",
  "Hydra": "The largest constellation in the sky, representing a water serpent.",
  "Hydrus": "A small southern constellation near the south pole.",
  "Indus": "Represents a native person holding weapons.",
  "Lacerta": "A faint northern constellation known as the lizard.",
  "Leo": "A zodiac constellation representing the lion.",
  "Leo Minor": "A small constellation just above Leo.",
  "Lepus": "A hare located beneath Orion.",
  "Libra": "A zodiac constellation representing the scales.",
  "Lupus": "Represents a wolf, found near Centaurus.",
  "Lynx": "A faint, elongated northern constellation.",
  "Lyra": "Contains Vega, one of the brightest stars.",
  "Mensa": "Contains part of the Large Magellanic Cloud.",
  "Microscopium": "Represents a microscope.",
  "Monoceros": "The unicorn; faint but stretches across the Milky Way.",
  "Musca": "Represents a fly; located near Crux.",
  "Norma": "Represents a carpenter’s square.",
  "Octans": "Contains the south celestial pole.",
  "Ophiuchus": "The serpent-bearer; sometimes called the 13th zodiac sign.",
  "Orion": "One of the brightest constellations, famous for Orion’s Belt.",
  "Pavo": "Represents a peacock, visible in the southern sky.",
  "Pegasus": "Contains the Great Square asterism.",
  "Perseus": "A hero constellation with the famous variable star Algol.",
  "Phoenix": "Represents the mystical phoenix.",
  "Pictor": "Represents a painter’s easel.",
  "Pisces": "A zodiac constellation representing two fish.",
  "Piscis Austrinus": "Contains the bright star Fomalhaut.",
  "Puppis": "Part of Argo Navis, representing the ship’s stern.",
  "Pyxis": "Represents a ship's compass.",
  "Reticulum": "Represents a net or grid.",
  "Sagitta": "One of the smallest constellations, representing an arrow.",
  "Sagittarius": "A zodiac constellation representing an archer; rich in nebulae.",
  "Scorpius": "Known for Antares, the heart of the scorpion.",
  "Sculptor": "Represents a sculptor’s workshop.",
  "Scutum": "Contains star clouds of the Milky Way.",
  "Serpens": "The only constellation split into two: Serpens Caput and Serpens Cauda.",
  "Sextans": "Represents the astronomer's sextant.",
  "Taurus": "A zodiac constellation with the bright star Aldebaran.",
  "Telescopium": "Represents a telescope.",
  "Triangulum": "A small constellation shaped like a triangle.",
  "Triangulum Australe": "The southern triangle; bright and distinct.",
  "Tucana": "Contains most of the Small Magellanic Cloud.",
  "Ursa Major": "Contains the Big Dipper and points to the North Star.",
  "Ursa Minor": "Contains Polaris, the North Star.",
  "Vela": "Represents the sails of the Argo ship.",
  "Virgo": "A zodiac constellation representing a maiden; large and bright.",
  "Volans": "Represents a flying fish.",
  "Vulpecula": "Represents a little fox.",
  "Cassiopeia": "Forms a distinctive 'W' shape and stays visible year-round.",
  "Scorpius": "Contains Antares, a bright red supergiant."
};

const container = document.getElementById("constellation-container");

Object.keys(data).forEach(name => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.name = name;
  card.innerHTML = `<h2>${name}</h2>`;
  container.appendChild(card);
});

// Popup logic
const popup = document.querySelector(".popup");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");
const closeBtn = document.querySelector(".close");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("card")) {
    const name = e.target.dataset.name;
    popupTitle.textContent = name;
    popupDesc.textContent = data[name];
    popup.classList.remove("hidden");
  }
});

closeBtn.addEventListener("click", () => popup.classList.add("hidden"));
popup.addEventListener("click", e => {
  if (e.target === popup) popup.classList.add("hidden");
});
