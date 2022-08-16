import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { NavLink, Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import {
  FaFistRaised,
  FaHorseHead,
  FaMountain,
  FaSnowboarding,
  FaChessBoard,
  FaTruck,
} from 'react-icons/fa';
import { SiApplearcade } from 'react-icons/si';
import { RiTeamFill } from 'react-icons/ri';
import {
  GiBroadsword,
  GiPistolGun,
  GiBoxingGlove,
  GiCardAceDiamonds,
  GiFlatPlatform,
  GiSandSnake,
} from 'react-icons/gi';
import { MdFamilyRestroom, MdPerson } from 'react-icons/md';
import { IoExtensionPuzzleSharp, IoCarSport, IoSchool } from 'react-icons/io5';
import RAWG from '../../services/RAWG';
import { genresFetched, genresFetchingError } from '../../slices/genresSlice';

function SidePanel() {
  const rawgService = new RAWG();

  const { genres } = useSelector((state) => state.genres);

  const genresIcons = [
    <FaFistRaised />,
    <MdPerson />,
    <FaMountain />,
    <GiBroadsword />,
    <FaHorseHead />,
    <GiPistolGun />,
    <GiSandSnake />,
    <FaTruck />,
    <IoExtensionPuzzleSharp />,
    <SiApplearcade />,
    <GiFlatPlatform />,
    <IoCarSport />,
    <RiTeamFill />,
    <FaSnowboarding />,
    <GiBoxingGlove />,
    <MdFamilyRestroom />,
    <FaChessBoard />,
    <IoSchool />,
    <GiCardAceDiamonds />,
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    rawgService
      .getGenres()
      .then((genresData) => dispatch(genresFetched(genresData)))
      .catch(() => dispatch(genresFetchingError()));
  }, []);

  return (
    <section className="basis-1/4">
      <h2 className="text-2xl font-medium mb-2">Popular</h2>
      <ul className="flex flex-col gap-1 text-xl w-64 mb-5">
        <li className="cursor-pointer">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
            className="flex items-center gap-3"
          >
            Popular games
          </NavLink>
        </li>
      </ul>
      <h2 className="text-2xl font-medium mb-2">
        <Link to="/genres">Genres</Link>
      </h2>
      <ul className="flex flex-col gap-1 text-xl w-64">
        {genres && genres.results.length > 0
          ? genres.results.map((genre, i) => (
            <li key={genre.id} className="cursor-pointer p-1">
              <NavLink
                to={`/games/${genre.slug}`}
                style={({ isActive }) => (isActive ? { color: '#6d28d9' } : undefined)}
                className="flex items-center gap-3"
              >
                <Flex alignItems="center" justifyContent="center" bg="#27272a" p="5px">
                  {genresIcons[i] ? genresIcons[i] : null}
                </Flex>

                {genre.name}
              </NavLink>
            </li>
          ))
          : null}
      </ul>
    </section>
  );
}

export default SidePanel;
