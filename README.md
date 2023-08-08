
# Full Stack Development 2 - Assignment.

__Name:__ [Renato Francisco Goedert]

## Features.

[A bullet-point list of the features developed for the React SPA app (only new/modified ones for the Movies app),]

+ List view Top rated movies.
+ List view Actor. 
+ Detail view Actor Bio
+ New  parameterized URL(Actor details/Review)
+ Extensive Data hyperlinking with actors and movie details
+ An additional data entity type Actor and Playlist
+ Server state Caching
+ Rating filtering and/or sorting criteria
+ Pagination - for actor and movies listing pages
+ Private and Public routes
+ Premium functionality(favourites and playlists)
+ Favourite Actors
+ Multi-criteria Search(year,rating,number of vote, sortBy and isAdult
+ Storybook support
+ Ordered Favourites with drag and drop
+ Create themed movie playlists
+ My fantasy movie (Advanced)
+ 3rd party authentication - Supabase
+ Backend persistence using Supabase Favourites, playlists
+ Deployment 

## Feature Design.

[ For each feature listed above, show a screenshot(s) of its UI layout (use appropriate magnification for accessibility). Include a caption with each image.]

e.g. 

#### Upcoming Movies.

> Lists movies from the Upcoming movies endpoint of TMDB.

![][image1]

#### Movies Reviews.

> Lists all the reviews for a particular movie (shows text extract only).

![][image2]

> Click the 'Full Review' link of a review extract to see the review's full text. 

![][image3]

.... other features .......

## Storybook.

[Storybook suport for all new itens]
![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/f1648aa3-76a7-411a-9320-af5cbbfc76f6)

Actor new details 
![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/f9cbfc48-0f54-4a86-a821-9c138adcdbd4)

Fantasy movie form and cast
![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/31e1fff7-b865-4680-a79b-40a6ab836f11)

Review form, list and details
![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/5783c942-a631-4bcf-916e-41d29f5cd9f9)

New movie list Header
![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/2befc2d4-6c7d-4271-ac37-2b1febaa7a94)

HomePage Search Bar
![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/37b452e7-e23b-4e30-b9ca-96444cd7c136)


## Authentication. (if relevant)

Supabase Auth

![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/411b875e-2ae0-49c6-b593-536b6d0f23ff)

Web app Login 

![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/c097e22b-109b-4c25-a673-dda669267874)

Login Form

![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/b381ace0-6706-47d8-8270-059bc40ebda5)

Sign Up form

![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/fefda56b-da11-4aed-8c8e-a6ea03d60872)

Logout

![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/604040cd-5e95-4bda-8eb9-fa4cdc6fb9bf)


#### Protected routes 

+ / - List of 20  movies from the Discover endpoint,
+ /movies/{movie_id} - Detailed information on a specific movie.
+ /movies/favourites (Protected) - List of favourite movies
+ /movies/upcoming - List of Upcoming movies
+ /movies/toprated - List of Toprated movies
+ /reviews/{review_id} - The full text of a movie review.
+ /reviews/form/:id - form to add a review to a movie with id
+ /fantasymovie - Create your fantasy movie
+ /actors - list of Actors
+ /actors/:id - Detailed information about an actor
+ /actors/favourites (Protected) - List of favourites Actors
+ /playlists (Protected) - List of playlists
+ /login - login page
+ /signup - signup page

#### Protected functionality. (if relevant)

Only authenticated users can tag a movie as a 'favourite, create playlists, route to playlists, fav actors, fav movies and see favorites avatar in lists

#### Supabase (if relevant)

Supabase Database for Fav Actors, Fav Movies and Playlists
![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/405d57ac-4ce2-4633-87f6-5bf7156e7672)

![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/530cf3e3-97e4-4d35-b0f9-49f01b956704)

Supabase Auth

![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/411b875e-2ae0-49c6-b593-536b6d0f23ff)


## Deployment (if relevant).

[Specify the URL of your deployed app and include a screenshot(s) from your deployment platform account (e.g. Vercal) that verifies its use for this app. Set up a registered user for your app and specify their credentials.

Username: test1 ; Password: pass1
]

## Persistence (if relevant).

Supabase Database for Fav Actors, Fav Movies and Playlists
![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/405d57ac-4ce2-4633-87f6-5bf7156e7672)

![image](https://github.com/renatogoedert/labMoviesApp/assets/25923678/530cf3e3-97e4-4d35-b0f9-49f01b956704)

## Additional Information.

[ Briefly explain any other aspects of your app's design or implementation that is non-standard and worthy of mention.]

[image1]: ./images/image1.png
[image2]: ./images/image2.png
[image3]: ./images/image3.png
[image4]: ./images/image4.png
[image5]: ./images/image5.png
