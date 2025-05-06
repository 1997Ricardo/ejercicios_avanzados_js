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

  function calcularMediaVolumen(users) {
    let totalVolumen = 0;
    let cantidadVolumenes = 0;

    for (const user of users) {
        for (const sound in user.favoritesSounds) {
            totalVolumen += user.favoritesSounds [sound].volume;
            cantidadVolumenes++;
            }
        }
        const media = totalVolumen / cantidadVolumenes;
        return media;
    }

    const mediaVolumen = calcularMediaVolumen(users);
    console.log("🔊 Media de volumen de todos los sonidos favoritos:", mediaVolumen.toFixed(2));
    