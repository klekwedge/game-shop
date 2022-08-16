/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  Flex, Skeleton, Heading, List, ListItem, Image,
} from '@chakra-ui/react';
import RAWG from '../../services/RAWG';
import { currentGenreFetched, currentGenreFetchingError } from '../../slices/genresSlice';
import { gamesFetched, gamesFetching, gamesFetchingError } from '../../slices/gamesSlice';
import Spinner from '../Spinner/Spinner';

function GameList({ genreName, mainTitle, descr }) {
  const { genre } = useParams();
  const { currentGenre, genres } = useSelector((state) => state.genres);
  const { games, gamesLoadingStatus } = useSelector((state) => state.games);

  const dispatch = useDispatch();
  const rawgService = new RAWG();

  useEffect(() => {
    dispatch(gamesFetching());
    if (genreName) {
      rawgService
        .getGameList(genreName)
        .then((data) => dispatch(gamesFetched(data)))
        .catch(() => dispatch(gamesFetchingError()));
    } else {
      rawgService
        .getGameList()
        .then((data) => dispatch(gamesFetched(data)))
        .catch(() => dispatch(gamesFetchingError()));
    }
  }, [genreName]);

  useEffect(() => {
    if (genres && genre) {
      const test = genres.results.find((genreItem) => genreItem.slug === genre);
      rawgService
        .getGenreDetail(test.id)
        .then((genreData) => dispatch(currentGenreFetched(genreData)))
        .catch(() => dispatch(currentGenreFetchingError()));
    }
  }, [genreName, genres]);

  if (gamesLoadingStatus === 'loading') {
    return (
      <Flex gap="20px" flexWrap="wrap" minWidth="1000px">
        {[...Array(16).keys()].map(() => (
          <Skeleton key={uuidv4()} width="220px" height="135px" borderRadius="10px" />
        ))}
      </Flex>
    );
  }
  if (gamesLoadingStatus === 'error') {
    return <h5 className="text-center basis-3/4">Ошибка загрузки</h5>;
  }

  console.log(games);

  return (
    <section>
      <h2 className="text-5xl font-bold mb-2 capitalize">{genre ? `${genre} games` : mainTitle}</h2>
      <h3 className="text-base mb-8">{currentGenre ? currentGenre.description : descr}</h3>
      {games ? (
        <List className="flex gap-5 flex-wrap">
          {games.results.map((game) => (
            <ListItem
              className="flex flex-col items-center gap-2 bg-zinc-900 basis-1/5 grow pb-2 rounded-lg hover:scale-105 duration-300"
              key={game.id}
            >
              <Image
                src={game.background_image}
                alt={game.background_image}
                objectFit="cover"
                maxW="256px"
                maxH="144px"
                w="100%"
                h="100%"
                mb="10px"
              />
              <Heading
                as="h4"
                fontWeight="500"
                fontSize="16px"
                textAlign="center"
                alignSelf="center"
                padding="0px 10px"
                transition="all 0.3s ease"
                _hover={{ color: '#d4d4d4' }}
              >
                <Link to={`/${game.id}`}>{game.name}</Link>
              </Heading>
            </ListItem>
          ))}
        </List>
      ) : null}
    </section>
  );
}

export default GameList;
