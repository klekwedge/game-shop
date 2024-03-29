import { useState } from 'react';
import { Flex, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../types/redux';
import { fetchGames, resetGames } from '../../slices/gamesSlice/gamesSlice';
import SidePanel from '../SidePanel/SidePanel';
import './Header.scss';

function Header() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  function searchGame() {
    if (inputValue) {
      dispatch(resetGames());
      dispatch(fetchGames(`https://api.rawg.io/api/games?key=9c6f34d35ac04b2bbe700fdadfb26801&search=${inputValue}`));
    }
  }

  function keyDownHandler(e: React.KeyboardEvent) {
    if (e.code === 'Enter') {
      searchGame();
    }
  }

  return (
    <header className="header">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap="30px">
          <SidePanel />
          <InputGroup>
            <InputLeftElement>
              <AiOutlineSearch size="22" style={{ cursor: 'pointer' }} onClick={() => searchGame()} />
            </InputLeftElement>
            <Input
              onKeyDown={(e) => keyDownHandler(e)}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search game"
              border="1px solid #553C9A"
              minW="250px"
            />
          </InputGroup>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <a href="https://rawg.io/">Rawg</a>
          <Heading as="h1">
            <Link to="/" className="header__logo">
              <svg
                style={{ width: '32px' }}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M182.4,251.5c-28.9,0-52.5,23.5-52.5,52.5s23.5,52.5,52.5,52.5c28.9,0,52.5-23.5,52.5-52.5S211.3,251.5,182.4,251.5zM182.4,331.9c-15.4,0-28-12.5-28-28s12.5-28,28-28c15.4,0,28,12.5,28,28S197.8,331.9,182.4,331.9z" />
                  <path d="M382.1,303.9c0-28.9-23.5-52.5-52.5-52.5c-28.9,0-52.5,23.5-52.5,52.5s23.5,52.5,52.5,52.5 C358.6,356.4,382.1,332.8,382.1,303.9z M329.6,331.9c-15.4,0-28-12.5-28-28s12.5-28,28-28c15.4,0,28,12.5,28,28 S345.1,331.9,329.6,331.9z" />
                  <path d="M467.8,173.6c-8.4-50-49.7-87-100.6-90.1l-2.1-0.4c-0.7-0.1-1.4-0.2-2.1-0.2H151.5c-53.3,0-98.4,38.1-107.2,90.4L12,346.4c-1,4.7-1.5,9.4-1.5,14.1c0,37.8,30.7,68.5,68.5,68.5c22.8,0,44.1-11.3,56.6-29.9l15.6-21.6c4-5.5,2.7-13.1-2.8-17.1c-5.5-4-13.1-2.7-17.1,2.8l-15.8,21.9c-8.2,12.2-21.9,19.5-36.5,19.5c-24.3,0-44-19.8-44-44c0-3,0.3-6.1,1-9.4l32.3-173.5c6.8-40.7,41.8-70.2,83.1-70.2H362l1.7,0.3c0.5,0.1,0.9,0.1,1.4,0.2c39,2.1,72,31.5,78.5,69.9L476,351.4c0.6,3,0.9,6.1,0.9,9.1c0,24.3-19.8,44-44,44c-14.7,0-28.3-7.3-36.8-19.8l-16.8-23.2c-4-5.5-11.6-6.7-17.1-2.8c-5.5,4-6.7,11.6-2.8,17.1l16.5,22.9c12.8,18.9,34,30.2,56.8,30.2c37.8,0,68.5-30.7,68.5-68.5c0-4.7-0.5-9.5-1.4-13.9L467.8,173.6z" />
                  <circle cx="319.5" cy="181.8" r="16.6" />
                  <circle cx="387.4" cy="181.8" r="16.6" />
                  <path d="M159.7,132.6c-6.8,0-12.3,5.5-12.3,12.3V167h-22.1c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h22.1v22.1c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-22.1h22.1c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H172v-22.1C172,138.1,166.5,132.6,159.7,132.6z" />
                  <circle cx="353.4" cy="215.7" r="16.6" />
                  <circle cx="353.4" cy="147.8" r="16.6" />
                </g>
              </svg>
              Game Shop
            </Link>
          </Heading>
        </Flex>
      </Flex>
    </header>
  );
}

export default Header;
