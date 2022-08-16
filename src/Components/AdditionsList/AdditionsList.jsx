/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  Heading, List, ListItem, Image,
} from '@chakra-ui/react';

function AdditionsList({ additions }) {
  return (
    <section>
      {additions ? (
        <List className="flex gap-5 flex-wrap" p="20px 0px">
          {additions.map((additionItem) => (
            <ListItem
              flex="1 1 25%"
              maxW="256px"
              maxH="144px"
              className="flex flex-col items-center gap-2 bg-zinc-900 pb-2 rounded-lg hover:scale-105 duration-300"
              key={additionItem.id}
            >
              <Image
                src={additionItem.background_image}
                alt={additionItem.background_image}
                objectFit="cover"
                w="100%"
                h="100%"
                mb="10px"
              />
              <Heading
                as="h4"
                fontWeight="500"
                fontSize="16px"
                textAlign="center"
                alignSelf="center"
                padding="0px 10px"
                transition="all 0.3s ease"
                _hover={{ color: '#d4d4d4' }}
              >
                <Link to={`/${additionItem.id}`}>{additionItem.name}</Link>
              </Heading>
            </ListItem>
          ))}
        </List>
      ) : null}
    </section>
  );
}

export default AdditionsList;
