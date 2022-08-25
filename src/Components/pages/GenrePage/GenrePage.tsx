import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import SidePanel from '../../SidePanel/SidePanel';
import GameList from '../../GameList/GameList';

function GenrePage() {
  const { genre } = useParams();
  return (
    <>
      <Helmet>
        <meta name="description" content=" - Game Shop" />
        <title>
          {genre}
          {' '}
          - Game Shop
        </title>
      </Helmet>
      <Flex
        as="main"
        margin="0 auto"
        justifyContent="space-between"
        alignItems="flex-start"
        gap="96px"
        maxWidth="1400px"
        padding="20px 20px"
      >
        <SidePanel />
        <GameList genreName={genre} />
      </Flex>
    </>
  );
}

export default GenrePage;
