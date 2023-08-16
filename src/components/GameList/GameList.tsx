/* eslint-disable react/require-default-props */
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Flex, Button, Skeleton, Heading, List, ListItem, Image } from '@chakra-ui/react';
import RAWG from '../../services/RAWG';
import { fetchCurrentGenre } from '../../slices/genresSlice/genresSlice';
import { fetchGames, resetGames } from '../../slices/gamesSlice/gamesSlice';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import './GameList.scss'
import { IGenre } from '../../types';

interface GameListProps {
  mainTitle?: string;
  descr?: string;
  genreName?: string;
}

function GameList({ genreName, mainTitle }: GameListProps): JSX.Element {
  const [loadingImage, setLoadingImage] = useState(true);
  const { genre } = useParams();
  const { currentGenre, genres } = useAppSelector((state) => state.genres);
  const { games, nextPage, gamesLoadingStatus } = useAppSelector((state) => state.games);

  const dispatch = useAppDispatch();
  const { getGameList, getGenreDetail } = RAWG();

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
      <Flex gap="20px" flexWrap="wrap">
        {[...Array(20).keys()].map(() => (
          <Skeleton key={uuidv4()} width="256px" h='200px' flex='1 1 20%' borderRadius="10px" />
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
    if (currentGenre) {
      return {
        __html: currentGenre.description
      }
    }

    return {
      __html: ''
    }

  }

  return (
    <section>
      <Heading as="h2" fontSize="48px" textTransform="capitalize" mb="8px" fontWeight="700">
        {genre ? `${genre} games` : mainTitle}
      </Heading>
      {
        currentGenre && <Heading as="h3" fontSize="16px" mb="32px" dangerouslySetInnerHTML={defineDescription()} />

      }
      {games.length > 0 ? (
        <Flex gap="70px" flexDirection="column">
          <AnimatePresence>
            <List className="flex gap-5 flex-wrap">
              {games.map((game) => (
                <ListItem
                  as={motion.li}
                  className='game-item'
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
                      maxW="100%"
                      maxH="160px"
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
            color='white'
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
