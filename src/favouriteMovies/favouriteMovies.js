import React from 'react'

const FavouriteMovies = ({ profiles, users, movies }) => {

   const likedMovies = Object.keys(movies).map(key => {
      return ({
         movie: movies[key].name,
         users: profiles.filter(profile => movies[key].id == profile.favoriteMovieID)
            .map(profile => users[profile.userID].name)
      })
   })

   console.log(likedMovies)
   return (<div>
      {
         likedMovies.map(movie => {
            return (
               <div>
                  <h2>{movie.movie}</h2>
                  {
                     movie.users.length ?
                        <div>
                           <p>Liked By:</p>
                           <ul>
                              {movie.users.map(user => <li>{user}</li>)}
                           </ul>
                        </div>
                        :
                        <p>None of the current users liked this movie</p>

                  }
               </div>
            )
         })
      }
   </div>)
}

export default FavouriteMovies;