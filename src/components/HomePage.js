import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieItem from "./Movies/MovieItem";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
      <Box width="80%" height={"40vh"} margin={"auto"} padding={2}>
        <img
          width={"100%"}
          height={"100%"}
          src="https://wallpaperbuzz.net/wp-content/uploads/2023/03/20230321_083354-1024x575.jpg"
          alt="Bramhastra"
        />
      </Box>

      <Box margin="auto" padding={5}>
        <Typography variant="h3" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>

      <Box
        margin={"auto"}
        display="flex"
        width="80%"
        justifyContent={"center"}
        flexWrap="wrap"
        alignItems="center"
      >
        {movies &&
          movies
            .slice(0, 4)
            .map((movie, index) => (
              <MovieItem
                id={movie.id}
                title={movie.title}
                posterUrl={movie.posterUrl}
                releaseDate={movie.releaseDate}
                key={index}
              />
            ))}
      </Box>

      <Box display="flex" padding={5} margin={"auto"}>
        <Button
          LinkComponent={Link}
          to="/movies"
          sx={{ margin: "auto", color: "#2b2d42" }}
          variant="outlined"
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;

//const carouselImages = [
//     {
//       id: 1,
//       title: 'SKANDA',
//       description: 'Action',
//       image: 'https://www.nowrunning.com/content/movie/2023/boyap-28106/Stills/skanda_2023923.jpg',
//     },
//     {
//       id: 2,
//       title: 'TIGER 3',
//       description: 'ACTION',
//       image: 'https://www.yashrajfilms.com/images/default-source/movies/tiger-3/tiger-3---salman-khan-katrina-kaif5f98ada026f56f7f9f64ff0e00090313.jpg?sfvrsn=866dc2cc_6',
//     },
//     {
//       id: 3,
//       title: 'The Marvels',
//       description: 'Action',
//       image: 'https://www.cinelinx.com/wp-content/uploads/2023/09/THE-MARVELS_27x40_IMAX_Digital_Supplemental_v3_Lg.jpeg',
//     },
//     {
//       id: 4,
//       title: 'Aadikeshava',
//       description: 'Action',
//       image: 'https://moviegalleri.net/wp-content/uploads/2023/08/Panja-Vaisshnav-Tej-Sreeleela-Aadikeshava-movie-release-on-Nov-10th.jpg',
//     },
//     {
//       id: 5,
//       title: 'Salaar',
//       description: 'Action',
//       image: 'https://m.media-amazon.com/images/M/MV5BOTk4ZDQ1ZTctNzU3MC00NmY4LWJjMzItNDMwZTA2ODhiYWM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
//     },
//     {
//       id: 6,
//       title: 'Animal',
//       description: 'Animal',
//       image: 'https://m.media-amazon.com/images/M/MV5BNWU5ZDRmMWItZGU0NC00NzZjLTgzYjctY2RlMzI3OTNkN2U5XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg',
//     }
//   ];
