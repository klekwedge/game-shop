import { Helmet } from 'react-helmet';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import {
  Flex, Heading, List, ListItem, Image,
} from '@chakra-ui/react';
import { useAppSelector } from '../../types/redux';
import { IGenre } from '../../types';

function GenresPage() {
  const { genres } = useAppSelector((state) => state.genres);

  return (
    <>
      <Helmet>
        <meta name="description" content="All game genres - Game Shop" />
        <title>All game genres - Game Shop</title>
      </Helmet>

      <Flex as="main">
        <List display="flex" flexWrap="wrap" gap="20px">
          {genres.length > 0
            ? genres.map((genreItem: IGenre) => (
              <ListItem
                display="flex"
                flexDirection="column"
                flex="1 1 20%"
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
