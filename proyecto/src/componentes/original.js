export default async function mostrarOriginal() {
  const app = document.getElementById('app');
  app.innerHTML = `<h2>Carta con Reto</h2><div id="carta-reto" style="display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 10px;"></div>`;

  const retos = [
    "Haz 10 sentadillas",
    "Cuenta un chiste",
    "Imita a un animal",
    "Canta una canción",
    "Haz una mueca graciosa",
    "Dinos tu comida favorita",
    "Baila por 10 segundos",
    "Haz una adivinanza",
    "Cuenta una anécdota divertida",
    "Haz 5 flexiones",
    "Di un trabalenguas",
    "Haz una declaración de amor ficticia",
    "Haz una pregunta incómoda a alguien",
    "Haz una pose de superhéroe",
    "Dibuja algo en 10 segundos",
    "Haz una voz rara",
    "Di el abecedario al revés",
    "Haz una rima improvisada",
    "Haz una imitación de un famoso",
    "Cuenta hasta 20 en voz alta"
  ];

  const cartaRetoDiv = document.getElementById("carta-reto");

  try {
    // Solicita una baraja nueva y la baraja
    const resDeck = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const deck = await resDeck.json();

    // Saca 1 carta de la baraja
    const resCard = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
    const cardData = await resCard.json();
    const card = cardData.cards[0];

    // Selecciona un reto aleatorio
    const reto = retos[Math.floor(Math.random() * retos.length)];

    // Muestra la carta y el reto
    const item = document.createElement("div");
    item.style.textAlign = "center";
    item.innerHTML = `
      <p>${card.value} de ${card.suit}</p>
      <img src="${card.image}" style="width: 120px; height: 170px;" />
      <p><strong>Reto:</strong> ${reto}</p>
    `;
    cartaRetoDiv.appendChild(item);

  } catch (error) {
    app.innerHTML = `<p>Error al cargar la carta: ${error.message}</p>`;
  }
}