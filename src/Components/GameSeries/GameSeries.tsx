import { Link } from 'react-router-dom';
import { Flex, Heading, List, ListItem, Image } from '@chakra-ui/react';
import { GameSeriesProps } from './GameSeries.props';

function GameSeries({ gamesOfSeries, countGamesOfSeries }: GameSeriesProps): JSX.Element {
  return (
    <Flex
      as="main"
      flexDirection="column"
      justifyContent="space-between"
      margin="0 auto"
      padding="0px 20px 10px 20px"
    >
      {gamesOfSeries.length > 0 ? (
        <div>
          <Heading fontSize="40px" mb="32px" fontWeight="500">
            List of games that are part of the same series:
            {` ${countGamesOfSeries}`}
          </Heading>
          <List display="flex" flexWrap="wrap" gap="20px">
            {gamesOfSeries.map((gameItem) => (
              <ListItem
                key={gameItem.id}
                display="flex"
                flexDirection="column"
                borderRadius="8px"
                gap="10px"
                flex="0 1 25%"
                maxWidth="300px"
                backgroundColor="#3f3f46"
                transition="all 0.4s ease"
                _hover={{ transform: 'scale(1.05)' }}
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

export default GameSeries;
