import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import {
  Flex, Heading, List, ListItem, Image,
} from '@chakra-ui/react';
import SidePanel from '../SidePanel/SidePanel';

function GenresPage() {
  const { genres } = useSelector((state) => state.genres);

  return (
    <>
      <Helmet>
        <meta name="description" content="All game genres - Game Shop" />
        <title>All game genres - Game Shop</title>
      </Helmet>

      <Flex as="main" p="20px 20px">
        <SidePanel />
        <List display="flex" flexWrap="wrap" gap="20px 20px">
          {genres && genres.results.length > 0
            ? genres.results.map((genreItem) => (
              <ListItem
                display="flex"
                flexDirection="column"
                flex="0 1 20%"
                key={uuidv4()}
                bg="#3f3f46"
                borderRadius="10px"
              >
                <Image
                  src={genreItem.image_background}
                  alt={genreItem.name}
                  objectFit="cover"
                  h="100%"
                  w="100%"
                  maxH="175px"
                  maxW="280px"
                />
                <Heading as="h2" p="10px" fontWeight="500" fontSize="20px" textAlign="center">
                  <Link to={`/games/${genreItem.slug}`}>{genreItem.name}</Link>
                </Heading>
              </ListItem>
            ))
            : null}
        </List>
      </Flex>
    </>
  );
}

export default GenresPage;
