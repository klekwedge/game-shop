/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  Flex, Button, Skeleton, Heading, List, ListItem, Image,
} from '@chakra-ui/react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import RAWG from '../../services/RAWG';
import { fetchCurrentGenre } from '../../slices/genresSlice';
import { fetchGames, resetGames } from '../../slices/gamesSlice';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function GameList({ genreName, mainTitle, descr }) {
  const [loadingImage, setLoadingImage] = useState(true);
  const { genre } = useParams();
  const { currentGenre, genres } = useSelector((state) => state.genres);
  const { games, nextPage, gamesLoadingStatus } = useSelector((state) => state.games);

  const dispatch = useDispatch();
  const rawgService = new RAWG();

  const handleOnLoad = () => {
    setLoadingImage(false);
  };

  useEffect(() => {
    dispatch(resetGames());
    if (genreName) {
      dispatch(fetchGames(rawgService.getGameList(genreName)));
    } else {
      dispatch(fetchGames(rawgService.getGameList()));
    }
  }, [genreName]);

  useEffect(() => {
    if (genres && genre) {
      const desiredGenre = genres.results.find((genreItem) => genreItem.slug === genre);
      dispatch(fetchCurrentGenre(rawgService.getGenreDetail(desiredGenre.id)));
    }
  }, [genreName, genres]);

  if (gamesLoadingStatus === 'loading' && games.length === 0) {
    return (
      <Flex gap="20px" flexWrap="wrap" minWidth="1000px">
        {[...Array(16).keys()].map(() => (
          <Skeleton key={uuidv4()} width="220px" height="135px" borderRadius="10px" />
        ))}
      </Flex>
    );
  }

  function loadMoreGames() {
    dispatch(fetchGames(nextPage));
  }

  if (gamesLoadingStatus === 'error') {
    return <ErrorMessage />;
  }

  function defineDescription() {
    console.log(currentGenre);
    if (useLocation().pathname === '/') {
      return descr;
    }
    if (currentGenre) {
      return currentGenre.description;
    }
    return null;
  }

  function getSumNumber(num) {
    let sum = 0;
    let tmp;
    while (num) {
      tmp = num % 10;
      // eslint-disable-next-line no-param-reassign
      num = (num - tmp) / 10;
      sum += tmp;
    }
    return sum;
  }

  return (
    <section>
      <h2 className="text-5xl font-bold mb-2 capitalize">{genre ? `${genre} games` : mainTitle}</h2>
      <h3 className="text-base mb-8">{defineDescription()}</h3>
      {games.length > 0 ? (
        <Flex gap="70px" flexDirection="column">
          <AnimatePresence>
            <List className="flex gap-5 flex-wrap">
              {games.map((game) => (
                <ListItem
                  as={motion.li}
                  className="flex flex-col items-center gap-2 bg-zinc-900 basis-1/5 grow pb-2 rounded-lg hover:scale-105 duration-300"
                  key={game.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {loadingImage && (
                    <Skeleton maxW="256px" maxH="144px" w="100%" h="100%" mb="10px" />
                  )}
                  <Image
                    src={game.background_image}
                    alt={game.background_image}
                    objectFit="cover"
                    maxW="256px"
                    maxH="144px"
                    w="100%"
                    h="100%"
                    mb="10px"
                    onLoad={handleOnLoad}
                  />
                  <Flex
                    w="100%"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="20px"
                    padding="0px 10px"
                    mb="5px"
                    alignSelf="flex-start"
                  >
                    <Heading
                      as="h4"
                      fontWeight="400"
                      fontSize="14px"
                      textAlign="left"
                      color="#d4d4d4"
                      cursor="pointer"
                      transition="all 0.5s ease"
                      _hover={{ color: 'purple.400' }}
                      display="flex"
                      alignItems="center"
                      gap="5px"
                    >
                      <span>Add to cart</span>
                      <AiOutlinePlusCircle size="15px" />
                    </Heading>
                    <Heading
                      as="h4"
                      fontWeight="400"
                      fontSize="14px"
                      textAlign="left"
                      color="#d4d4d4"
                    >
                      $
                      {getSumNumber(game.id)}
                    </Heading>
                  </Flex>

                  <Heading
                    as="h4"
                    fontWeight="500"
                    fontSize="16px"
                    alignSelf="flex-start"
                    padding="0px 10px"
                    transition="all 0.3s ease"
                    _hover={{ color: '#d4d4d4' }}
                    textAlign="left"
                  >
                    <Link to={`/${game.id}`}>{game.name}</Link>
                  </Heading>
                </ListItem>
              ))}
            </List>
          </AnimatePresence>
          <Button
            m="0 auto"
            bg="purple.600"
            _hover={{ bg: 'purple.700' }}
            _active={{ bg: 'purple.500' }}
            onClick={() => loadMoreGames()}
            display={games.next === null ? 'none' : 'block'}
          >
            Load more
          </Button>
        </Flex>
      ) : null}
    </section>
  );
}

export default GameList;
