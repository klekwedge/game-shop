import React from 'react';
import { Flex } from '@chakra-ui/react';
import SidePanel from '../SidePanel/SidePanel';
import GameList from '../GameList/GameList';

function MainPage() {
  return (
    <Flex
      as="main"
      margin="0 auto"
      justifyContent="space-between"
      alignItems="flex-start"
      gap="96px"
      maxWidth="1400px"
      padding="12px 20px"
    >
      <SidePanel />
      <GameList mainTitle="games" descr="Popular games" />
    </Flex>
  );
}

export default MainPage;
