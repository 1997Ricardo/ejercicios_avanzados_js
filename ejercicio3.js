const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

  function contarSonidosFavoritos(users) {
    const conteoSonidos = {};
  
    for (const user of users) {
      for (const sonido in user.favoritesSounds) {
        if (conteoSonidos[sonido]) {
          conteoSonidos[sonido]++;
        } else {
          conteoSonidos[sonido] = 1;
        }
      }
    }
  
    return conteoSonidos;
  }

  const resultado = contarSonidosFavoritos(users);
console.log("🎧 Sonidos más favoritos entre usuarios:", resultado);
