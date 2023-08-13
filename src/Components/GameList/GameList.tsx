import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Flex, Button, Skeleton, Heading, List, ListItem, Image } from '@chakra-ui/react';
import RAWG from '../../services/RAWG';
import { fetchCurrentGenre } from '../../slices/genresSlice/genresSlice';
import { fetchGames, resetGames } from '../../slices/gamesSlice/gamesSlice';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { GameListProps } from './GameList.props';
import { IGenre } from '../../pages/GenresPage/GenresPage.types';

function GameList({ genreName, mainTitle, descr }: GameListProps): JSX.Element {
  const [loadingImage, setLoadingImage] = useState(true);
  const { genre } = useParams();
  const { currentGenre, genres } = useAppSelector((state) => state.genres);
  const { games, nextPage, gamesLoadingStatus } = useAppSelector((state) => state.games);

  const dispatch = useAppDispatch();
  const { getGameList, getGenreDetail} = RAWG();

  const handleOnLoad = () => {
    setLoadingImage(false);
  };

  useEffect(() => {
    dispatch(resetGames());
    if (genreName) {
      dispatch(fetchGames(getGameList(genreName)));
    } else {
      dispatch(fetchGames(getGameList()));
    }
  }, [genreName]);

  useEffect(() => {
    if (genres.length > 0 && genre) {
      const desiredGenre = genres.find((genreItem: IGenre) => genreItem.slug === genre);
      if (desiredGenre) {
        dispatch(fetchCurrentGenre(getGenreDetail(desiredGenre.id)));
      }
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
    if (nextPage) {
      dispatch(fetchGames(nextPage));
    }
  }

  if (gamesLoadingStatus === 'error') {
    return <ErrorMessage />;
  }

  function defineDescription() {
    if (useLocation().pathname === '/') {
      return descr;
    }
    if (currentGenre) {
      return currentGenre.description;
    }
    return null;
  }

  return (
    <section>
      <Heading as="h2" fontSize="48px" textTransform="capitalize" mb="8px" fontWeight="700">
        {genre ? `${genre} games` : mainTitle}
      </Heading>
      <Heading as="h3" fontSize="16px" mb="32px">
        {defineDescription()}
      </Heading>
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
                  transition={{ duration: '1' }}
                >
                  <>
                    {loadingImage && <Skeleton maxW="256px" maxH="144px" w="100%" h="100%" mb="10px" />}
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
                  </>
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
            display={nextPage === null ? 'none' : 'block'}
          >
            Load more
          </Button>
        </Flex>
      ) : null}
    </section>
  );
}

export default GameList;
