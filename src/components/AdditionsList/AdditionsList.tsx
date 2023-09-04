import { useNavigate } from 'react-router-dom';
import { Heading, List, ListItem, Image } from '@chakra-ui/react';
import { IAddition } from '../../types';
import { useAppSelector } from '../../hooks/useRedux';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './AdditionsList.scss';

function AdditionsList() {
  const navigate = useNavigate()
  const { additions, additionsLoadingStatus } = useAppSelector((state) => state.currentGame);

  const gameOnClick = (id: number) => {
    navigate(`/${id}`);
  };

  if (additionsLoadingStatus === 'loading') {
    return <Spinner />;
  }

  if (additionsLoadingStatus === 'error') {
    return <ErrorMessage />;
  }

  return (
    <section>
      <List display="flex" gap="20px" flexWrap="wrap" p="20px 0px">
        {additions.map((additionItem: IAddition) => (
          <ListItem
            flex="1 1 25%"
            maxW="256px"
            maxH="144px"
            className="addition__item"
            key={additionItem.id}
            onClick={() => gameOnClick(additionItem.id)}
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
              {additionItem.name}
            </Heading>
          </ListItem>
        ))}
      </List>
    </section>
  );
}

export default AdditionsList;
