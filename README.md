# CinemaSearch API

An API for browsing movies, reading their reviews, and finding a venue to watch them.

[Live API](https://cinemaserach-api.herokuapp.com/)

## Documentation
### GET /movies:
Responds with a list of all movies currently stored in the database.
#### Example Response
```
{
  data: [
    {
      "movie_id": 1,
      "title": "Spirited Away",
      "runtime_in_minutes": 125,
      "rating": "PG",
      "description": "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town...",
      "image_url": "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
      "created_at": "2021-05-28T02:13:17.857Z",
      "updated_at": "2021-05-28T02:13:17.857Z"
    },
    {
      "movie_id": 2,
      "title": "Interstellar",
      "runtime_in_minutes": 169,
      "rating": "PG-13",
      "description": "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life...",
      "image_url": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
      "created_at": "2021-05-28T02:13:17.857Z",
      "updated_at": "2021-05-28T02:13:17.857Z"
    },
    ...
  ]
}
```
### GET /movies?is_showing=true:
Responds with a list of all currently showing movies.
#### Example Response
```
{
  data: [
     {
      "movie_id": 2,
      "title": "Interstellar",
      "runtime_in_minutes": 169,
      "rating": "PG-13",
      "description": "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life...",
      "image_url": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
      "created_at": "2021-05-28T02:13:17.857Z",
      "updated_at": "2021-05-28T02:13:17.857Z"
    }
  ]
}
```
### GET /movies/:movieId
Responds with the movie with the targeted movie ID.
#### Example Request
`GET /movies/4`
#### Example Response
```
{
    "data": {
        "movie_id": 4,
        "title": "Raiders of the Lost Ark",
        "runtime_in_minutes": 115,
        "rating": "PG",
        "description": "The year is 1936. An archeology professor named Indiana Jones is venturing in the jungles of South America searching for a golden statue. Unfortunately, he sets off a deadly trap but miraculously escapes. Then, Jones hears from a museum curator named Marcus Brody about a biblical artifact called The Ark of the Covenant, which can hold the key to humanly existence. Jones has to venture to vast places such as Nepal and Egypt to find this artifact...",
        "image_url": "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_Ratio0.6716_AL_.jpg",
        "created_at": "2021-05-28T02:13:17.857Z",
        "updated_at": "2021-05-28T02:13:17.857Z"
    }
}
```
### GET /movies/:movieId/theaters
Responds with the list of theaters currently showing the targeted movie.
#### Example Request
`GET /movies/4/theaters`
#### Example Response
```
{
  "data": [
    {
      "theater_id": 1,
      "name": "Regal City Center",
      "address_line_1": "801 C St.",
      "address_line_2": "",
      "city": "Vancouver",
      "state": "WA",
      "zip": "98660",
      "created_at": "2021-05-28T02:13:18.177Z",
      "updated_at": "2021-05-28T02:13:18.177Z",
      "movie_id": 4,
      "is_showing": true
    },
    {
      "theater_id": 2,
      "name": "Hollywood Theatre",
      "address_line_1": "4122 NE Sandy Blvd.",
      "address_line_2": "",
      "city": "Portland",
      "state": "OR",
      "zip": "97212",
      "created_at": "2021-05-28T02:13:18.177Z",
      "updated_at": "2021-05-28T02:13:18.177Z",
      "movie_id": 4,
      "is_showing": true
    },
    ...
  ]
}
```
### GET /movies/:movieId/reviews
Responds with the list of reviews for the targeted movie, and with the critic info for each review embedded.
#### Example Request
`GET /movies/4/reviews`
#### Example Response
```
{
  "data": [
    {
      "review_id": 22,
      "content": "Lorem markdownum priores iactate receptus margine in motu ferreus pastor. Teneat\ntua opifex regina, adest; similisque nec, me convivia ortus.\n\nEst sontes praemia fatorum diversosque innubere rursus. Tanto inter commenta\ntremulasque tergo donec Apollinei mearum: Hector colorum horruit.\n\n> Cur repulsa matrem frequentes parvum coniuge ad nisi leto, ira. Orbis levatus\n> o coniugis longis confinia *bello* rursus quem Atridae indulgere! Sanguine o\n> operi flammas sorores suffundit et ilia. Nais edentem tamen. Acta munera enixa\n> ad terram!\n\nSint sed per oppugnant Medusae Pagasaeae undique rebus cernit terram delituit\ndilapsa tigres. Ait omne conatur nomen cumque, ad Minoa magna *dolentes*,\nageret. Sum addat, et unum iunge, aberant his indigenae facundia?\n\n> Perdidit astra, si maternis sibi, Phoebi protinus senecta digitos. Atque\n> suique **Lyrnesia**, prosunt suae mihi aqua, te!\n\nSubsedit tantaque vulnera totiens aptos vivit digna pectoraque mutua. Duro ante\ntibi perhorruit praedelassat simulat turis loco hunc dederat viscera scilicet\ntransitus quam longius aenea, concussaque hoc mille.\n\nUt erat. Tibi Themin corpore saepes.",
      "score": 3,
      "critic_id": 1,
      "movie_id": 4,
      "created_at": "2021-05-28T02:13:18.014Z",
      "updated_at": "2021-05-28T02:13:18.014Z",
      "critic": {
        "critic_id": 1,
        "preferred_name": "Chana",
        "surname": "Gibson",
        "organization_name": "Film Frenzy",
        "created_at": "2021-05-28T02:13:17.902Z",
        "updated_at": "2021-05-28T02:13:17.902Z"
      }
    },
    {
      "review_id": 23,
      "content": "Lorem markdownum priores iactate receptus margine in motu ferreus pastor. Teneat\ntua opifex regina, adest; similisque nec, me convivia ortus.\n\nEst sontes praemia fatorum diversosque innubere rursus. Tanto inter commenta\ntremulasque tergo donec Apollinei mearum: Hector colorum horruit.\n\n> Cur repulsa matrem frequentes parvum coniuge ad nisi leto, ira. Orbis levatus\n> o coniugis longis confinia *bello* rursus quem Atridae indulgere! Sanguine o\n> operi flammas sorores suffundit et ilia. Nais edentem tamen. Acta munera enixa\n> ad terram!\n\nSint sed per oppugnant Medusae Pagasaeae undique rebus cernit terram delituit\ndilapsa tigres. Ait omne conatur nomen cumque, ad Minoa magna *dolentes*,\nageret. Sum addat, et unum iunge, aberant his indigenae facundia?\n\n> Perdidit astra, si maternis sibi, Phoebi protinus senecta digitos. Atque\n> suique **Lyrnesia**, prosunt suae mihi aqua, te!\n\nSubsedit tantaque vulnera totiens aptos vivit digna pectoraque mutua. Duro ante\ntibi perhorruit praedelassat simulat turis loco hunc dederat viscera scilicet\ntransitus quam longius aenea, concussaque hoc mille.\n\nUt erat. Tibi Themin corpore saepes.",
      "score": 1,
      "critic_id": 2,
      "movie_id": 4,
      "created_at": "2021-05-28T02:13:18.014Z",
      "updated_at": "2021-05-28T02:13:18.014Z",
      "critic": {
        "critic_id": 2,
        "preferred_name": "Maria",
        "surname": "Cooke",
        "organization_name": "The Spool",
        "created_at": "2021-05-28T02:13:17.902Z",
        "updated_at": "2021-05-28T02:13:17.902Z"
      }
    },
    ...
  ]
}
```
### GET /theaters
Responds with a list of all theaters, each with their film catalouge embedded.
#### Example Response
```
{
  "data": [
    {
      "theater_id": 1,
      "name": "Regal City Center",
      "address_line_1": "801 C St.",
      "address_line_2": "",
      "city": "Vancouver",
      "state": "WA",
      "zip": "98660",
      "created_at": "2021-05-28T02:13:18.177Z",
      "updated_at": "2021-05-28T02:13:18.177Z",
      "movies": [
        {
          "movie_id": 1,
          "title": "Spirited Away",
          "runtime_in_minutes": 125,
          "rating": "PG",
          "description": "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town...",
          "image_url": "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
          "created_at": "2021-05-28T02:13:17.857Z",
          "updated_at": "2021-05-28T02:13:17.857Z",
          "theater_id": 1,
          "is_showing": true
        },
        ...
      ]
    },
    ...
  ]
}   
```
### DELETE /reviews/:reviewId
Deletes the targeted review.
#### Example Request
`DELETE /reviews/22`
#### Example Response
`204 No Content`
### PUT /reviews/:reviewId
Updates the content and/or score fields of the review to reflect the request body. Responds with the updated review.
#### Example Request
`PUT /reviews/23`

Request Body:
```
{
  "data": {
    "content": "Hello there!",
    "score": 5
  }
}
```
#### Example Response
```
{
  "data": {
    "review_id": 23,
    "content": "Hello there!",
    "score": 5,
    "critic_id": 2,
    "movie_id": 4,
    "created_at": "2021-05-28T02:13:18.014Z",
    "updated_at": "2021-06-02T18:30:16.034Z",
    "critic": {
      "critic_id": 2,
      "preferred_name": "Maria",
      "surname": "Cooke",
      "organization_name": "The Spool",
      "created_at": "2021-05-28T02:13:17.902Z",
      "updated_at": "2021-05-28T02:13:17.902Z"
    }
  }
}
```



