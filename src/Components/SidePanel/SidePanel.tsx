import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdFamilyRestroom, MdPerson } from 'react-icons/md';
import { NavLink, Link } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
import { IoExtensionPuzzleSharp, IoCarSport, IoSchool } from 'react-icons/io5';
import { FaFistRaised, FaHorseHead, FaMountain, FaSnowboarding, FaChessBoard, FaTruck } from 'react-icons/fa';
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
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import RAWG from '../../services/RAWG';
import { fetchGenres } from '../../slices/genresSlice/genresSlice';

function SidePanel() {
  const listItemVariants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: { opacity: 0, x: -100 },
  };

  const { getGenres } = RAWG();

  const { genres } = useAppSelector((state) => state.genres);

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

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGenres(getGenres()));
  }, []);

  return (
    <Box flex="1 1 30%">
      <h2 className="text-2xl font-medium mb-2">Popular</h2>
      <ul className="flex flex-col gap-1 text-xl w-64 mb-5">
        <li className="cursor-pointer">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { color: '#6d28d9' } : { color: 'white' })}
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
          {genres.length > 0
            ? genres.map((genre, i: number) => (
                <motion.li
                  key={genre.id}
                  className="cursor-pointer p-1"
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <NavLink
                    to={`/games/${genre.slug}`}
                    style={({ isActive }) => (isActive ? { color: '#6d28d9' } : { color: 'white' })}
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
    </Box>
  );
}

export default SidePanel;
