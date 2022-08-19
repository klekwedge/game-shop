import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
import { fetchGenres } from '../../slices/genresSlice';

function SidePanel() {
  const listItemVariants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: { opacity: 0, x: -100 },
  };

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
    dispatch(fetchGenres(rawgService.getGenres()));
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
      <AnimatePresence>
        <ul className="flex flex-col gap-1 text-xl w-64">
          {genres && genres.results.length > 0
            ? genres.results.map((genre, i) => (
              <motion.li
                key={genre.id}
                className="cursor-pointer p-1"
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
              >
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
              </motion.li>
            ))
            : null}
        </ul>
      </AnimatePresence>
    </section>
  );
}

export default SidePanel;
