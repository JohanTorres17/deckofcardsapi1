export default async function mostrarHome() {
  const app = document.getElementById("app");
  app.innerHTML = `<h2>Baraja de Cartas</h2><div id="lista" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between; padding: 10px;"></div>`;

  const lista = document.getElementById("lista");

  try {
    // Solicita una baraja nueva y la baraja
    const resDeck = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const deck = await resDeck.json();

    // Saca las 52 cartas de la baraja
    const resCards = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=52`);
    const cardsData = await resCards.json();

    cardsData.cards.forEach((card) => {
      const item = document.createElement("div");
      item.style.textAlign = "center";
      item.innerHTML = `
        <p>${card.value} de ${card.suit}</p>
        <img src="${card.image}" style="width: 100px; height: 140px;" />
      `;
      lista.appendChild(item);
    });
  } catch (error) {
    app.innerHTML = `<p>Error al cargar las cartas: ${error.message}</p>`;
  }
}

