import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import GameList from '../../components/GameList/GameList';

function GenrePage() {
  const { genre } = useParams();
  return (
    <>
      <Helmet>
        <meta name="description" content=" - Game Shop" />
        <title>
          {genre && genre[0].toUpperCase() + genre.slice(1)}
          - Game Shop
        </title>
      </Helmet>
      <Flex
        as="main"
        margin="0 auto"
        justifyContent="space-between"
        alignItems="flex-start"
        gap="96px"
        padding="20px 20px"
      >
        <GameList genreName={genre} />
      </Flex>
    </>
  );
}

export default GenrePage;
