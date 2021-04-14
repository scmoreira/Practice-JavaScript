// Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map(movie => movie['director'])
}

// Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const dramasByStevenSpielberg = movies.filter(movie => movie['director'] === 'Steven Spielberg' && movie['genre'].includes('Drama'))
    return dramasByStevenSpielberg.length
}

// All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if ( movies.length === 0) {
        return 0
    }
    const totalRate = movies.filter(movie => movie['rate']).reduce((accumulator, currentValue) => accumulator + currentValue['rate'], 0)
    const averageRate = parseFloat((totalRate / movies.length).toFixed(2))
    return averageRate
}

// Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const filteredDramaMovies = movies.filter(movie => movie['genre'].includes('Drama'))
    if (filteredDramaMovies.length === 0) {
        return 0
    }
    const totalRateDramaMovies = filteredDramaMovies.reduce((accumulator, currentValue) => accumulator + currentValue['rate'], 0)
    const averageRateDramaMovies = parseFloat((totalRateDramaMovies / filteredDramaMovies.length).toFixed(2))
    return averageRateDramaMovies 
}

// Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const moviesCopy = [...movies]
    moviesCopy.sort((movie1, movie2) => {
        if ((movie1['year'] - movie2['year']) === 0) {
          const sortedByTitle =  movie1['title'].localeCompare(movie2['title'])
          if (sortedByTitle > 0) {
            return 1;
          }
          else if (sortedByTitle < 0) {
            return -1;
          }
          else {
            return 0;
          }
        }
        else {
            return (movie1['year'] - movie2['year'])
        }
    })
    return moviesCopy
}

// Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let moviesTitlesCopy = [...movies.map(movie => movie['title'])]
    moviesTitlesCopy.sort((movie1, movie2) => {
        const sortedByTitle = movie1.localeCompare(movie2)
        if (sortedByTitle > 0) {
            return 1;
        }
        else if (sortedByTitle < 0) {
            return -1;
        }
        else {
            return 0;
        }
    })
    
    if (moviesTitlesCopy.length > 20) {
      moviesTitlesCopy = moviesTitlesCopy.slice(0, 20)
    }
    return moviesTitlesCopy
}

// Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    let moviesCopy = JSON.parse(JSON.stringify(movies))  // .slice() y spread operator no funcionan
    moviesCopy.map(movie => {
        let duration = movie['duration']
        const movieDuration = duration.split(' ')        // si hay un espacio en el string de duración, se crea un array de dos elementos 
        let totalMinutes = 0
        if (movieDuration.length === 2) {                      // si hay horas y minutos
          totalMinutes = getHours(movieDuration[0]) * 60       //movieDuration[0]=horas
          totalMinutes += getMinutes(movieDuration[1])         //movieDuration[1]=minutos
        }
        else if (movieDuration.length === 1) {
             if (movieDuration[0].includes('h')) {
               totalMinutes = getHours(movieDuration[0]) * 60
             }
             else {
               totalMinutes = getMinutes(movieDuration[0])
             }
        } 
        movie['duration'] = totalMinutes        // fijo la duración de las películas igual a los minutos
        return movie
    })
    return moviesCopy
}

// Función para obtener las horas desde la string
function getHours(duration) {
    const hour = parseInt(duration.substring(0, duration.indexOf('h')))  // indexOf encuentra el index de 'h' --> substring() sustrae desde el index[0] hasta la 'h'
    return hour
}

// Función para obtener los minutos desde la string
function getMinutes(duration) {
    const min = parseInt(duration.substring(0, duration.indexOf('m')))
    return min
}
