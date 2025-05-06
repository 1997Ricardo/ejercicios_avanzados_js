const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];

  function extractUniqueCategories(movies) {
    const categoriasUnicas = [];

    for (const movie of movies) {
        for (const categoria of movie.categories) {
            if (!categoriasUnicas.includes(categoria)) {
                categoriasUnicas.push(categoria);
            }
        }
    }
    return categoriasUnicas;
  }

  const categorias = extractUniqueCategories(movies);
  console.log("🎬 Categorias únicas:", categorias);