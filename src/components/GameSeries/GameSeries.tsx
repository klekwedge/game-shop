import { useNavigate } from 'react-router-dom';
import { Flex, Heading, List, ListItem, Image } from '@chakra-ui/react';
import { IGameSeries } from '../../types';
import { useAppSelector } from '../../types/redux';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface GameSeriesProps {
  gamesOfSeries: IGameSeries[];
  countGamesOfSeries: number;
}

function GameSeries({ gamesOfSeries, countGamesOfSeries }: GameSeriesProps) {
  const navigate = useNavigate();
  const { gamesOfSeriesLoadingStatus } = useAppSelector((state) => state.currentGame);

  const gameOnClick = (id: number) => {
    navigate(`/${id}`);
  };

  if (gamesOfSeriesLoadingStatus === 'loading') {
    return <Spinner />;
  }

  if (gamesOfSeriesLoadingStatus === 'error') {
    return <ErrorMessage />;
  }

  return (
    <Flex as="main" flexDirection="column" justifyContent="space-between" margin="0 auto" padding="0px 20px 10px 20px">
      <div>
        <Heading fontSize="40px" mb="32px" fontWeight="500">
          List of games that are part of the same series:
          {` ${countGamesOfSeries}`}
        </Heading>
        <List display="flex" flexWrap="wrap" gap="20px">
          {gamesOfSeries.map((gameItem) => (
            <ListItem
              key={gameItem.id}
              cursor="pointer"
              display="flex"
              flexDirection="column"
              borderRadius="8px"
              gap="10px"
              flex="0 1 25%"
              maxWidth="300px"
              backgroundColor="#3f3f46"
              transition="all 0.4s ease"
              _hover={{ transform: 'scale(1.05)' }}
              onClick={() => gameOnClick(gameItem.id)}
            >
              <Image
                src={gameItem.background_image}
                alt={gameItem.background_image}
                objectFit="cover"
                w="100%"
                h="100%"
                maxH="180px"
              />
              <Heading
                as="h3"
                fontWeight="500"
                fontSize="20px"
                textAlign="center"
                alignSelf="center"
                padding="5px 10px 5px 10px"
                transition="all 0.3s ease"
                _hover={{ color: '#d4d4d4' }}
              >
                {gameItem.name}
              </Heading>
            </ListItem>
          ))}
        </List>
      </div>
    </Flex>
  );
}

export default GameSeries;
