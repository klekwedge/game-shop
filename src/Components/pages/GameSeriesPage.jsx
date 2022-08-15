import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdKeyboardBackspace } from 'react-icons/md';
import {
  Flex, Heading, List, ListItem,
} from '@chakra-ui/react';
import RAWG from '../../services/RAWG';
import {
  gameSeriesFetching,
  gameSeriesFetched,
  gameSeriesFetchingError,
  gameSeriesReset,
} from '../../slices/gamesSlice';

function GameSeriesPage() {
  const { gameId } = useParams();

  const rawgService = new RAWG();

  const { gamesOfSeries } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameSeriesReset());
    dispatch(gameSeriesFetching());
    rawgService
      .getListOfGamesSeries(gameId)
      .then((data) => dispatch(gameSeriesFetched(data)))
      .catch(() => gameSeriesFetchingError());
  }, [gameId]);

  return (
    <Flex
      as="main"
      flexDirection="column"
      justifyContent="space-between"
      maxWidth="1400px"
      margin="0 auto"
      padding="50px 20px 10px 20px"
    >
      <Flex justifyContent="space-between" alignItems="center" mb="30px">
        <Heading
          as="h2"
          fontSize="32px"
          fontWeight="500"
          transition="all 0.3s ease"
          _hover={{ color: '#6d28d9' }}
        >
          <Link to="/" className="flex gap-2 items-center">
            <MdKeyboardBackspace size="40" />
            Store
          </Link>
        </Heading>
      </Flex>
      {gamesOfSeries && gamesOfSeries.count > 0 ? (
        <div>
          <Heading fontSize="40px" mb="32px" fontWeight="500">
            List of games that are part of the same series:
            {` ${gamesOfSeries.count}`}
          </Heading>
          <List display="flex" flexWrap="wrap" gap="20px">
            {gamesOfSeries.results.map((gameItem) => (
              <ListItem
                key={gameItem.id}
                display="flex"
                flexDirection="column"
                borderRadius="8px"
                gap="10px"
                flex="1 1 20%"
                maxWidth="360px"
                backgroundColor="#3f3f46"
                transition="all 0.4s ease"
                _hover={{ transform: 'scale(1.05)' }}
              >
                <img
                  src={gameItem.background_image}
                  alt={gameItem.background_image}
                  objectFit="cover"
                  // className="object-cover"
                />
                <Heading
                  as="h3"
                  fontWeight="500"
                  fontSize="20px"
                  textAlign="center"
                  alignSelf="center"
                  padding="0px 10px 5px 10px"
                  transition="all 0.3s ease"
                  _hover={{ color: '#d4d4d4' }}
                >
                  <Link to={`/${gameItem.id}`}>{gameItem.name}</Link>
                </Heading>
              </ListItem>
            ))}
          </List>
        </div>
      ) : (
        <Heading as="h2" fontSize="40px" mb="30px" fontWeight="500">
          This game is not part of any series.
        </Heading>
      )}
    </Flex>
  );
}

export default GameSeriesPage;
