import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import FantasyMovie from "./pages/fantasyMovie";
import ActorsPage from "./pages/actorsPage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/SingupPage";
import ActorsDetailsPage from "./pages/actorDetailsPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import { Auth0ProviderWithNavigate } from "./components/auth-provider";
import { AuthenticationGuard } from "./components/auth-guard";
import { Provider as SupabaseProvider } from "react-supabase";
import { supabase } from './api/supabase';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});


const App = () => {
  const refresh = () => window.location.reload(true);

  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SupabaseProvider value={supabase}>
          <Auth0ProviderWithNavigate>
            <SiteHeader />
            <MoviesContextProvider>
              <Routes>
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                <Route
                  path="/movies/favourites"
                  element={
                    <AuthenticationGuard component={FavouriteMoviesPage} />
                  }
                />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route
                  path="/movies/upcoming"
                  element={<UpcomingMoviesPage />}
                />
                <Route
                  path="/movies/toprated"
                  element={<TopRatedMoviesPage />}
                />
                <Route
                  path="/fantasymovie"
                  element={<AuthenticationGuard component={FantasyMovie} />}
                />
                <Route path="/actors" element={<ActorsPage />} />
                <Route path="/actors/:id" element={<ActorsDetailsPage />} />
                <Route
                  path="/actors/favourites"
                  element={
                    <AuthenticationGuard component={FavouriteActorsPage} />
                  }
                />
                <Route path="/login" element={<LoginPage setToken={setToken} />} />
                <Route path={'/signup'} element={ <SignupPage />} />
              </Routes>
            </MoviesContextProvider>
          </Auth0ProviderWithNavigate>
        </SupabaseProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
