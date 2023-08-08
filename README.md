
# Full Stack Development 2 - Assignment.

__Name:__ [Renato Francisco Goedert]

## Features.

[A bullet-point list of the features developed for the React SPA app (only new/modified ones for the Movies app),]

+ Feature X.
+ Feature Y. 
+ etc.

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

[Include a screenshot(s) from the Storybook UI and highlight the stories for new components developed.]

e.g.

![][image5]

## Authentication. (if relevant)

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

[ Briefly state any app functionality that requires authentication, e.g. only authenticated users can tag a movie as a 'favourite'.]

#### Supabase (if relevant)

[Include a screenshot(s) from your Supabase account that verifies its use for this app. ]

## Deployment (if relevant).

[Specify the URL of your deployed app and include a screenshot(s) from your deployment platform account (e.g. Vercal) that verifies its use for this app. Set up a registered user for your app and specify their credentials.

Username: test1 ; Password: pass1
]

## Persistence (if relevant).

[If you are persisting data to the Supabase backend (e.g. favourite movies, fantasy movie), include screenshots with appropriate captions to verify this aspect. ]

## Additional Information.

[ Briefly explain any other aspects of your app's design or implementation that is non-standard and worthy of mention.]

[image1]: ./images/image1.png
[image2]: ./images/image2.png
[image3]: ./images/image3.png
[image4]: ./images/image4.png
[image5]: ./images/image5.png