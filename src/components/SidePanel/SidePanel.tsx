import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdFamilyRestroom, MdPerson } from 'react-icons/md';
import { NavLink, Link } from 'react-router-dom';
import {
  Flex,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
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
import { useAppSelector, useAppDispatch } from '../../hooks/useRedux';
import { fetchGenres } from '../../slices/genresSlice/genresSlice';
import './SidePanel.scss';

function SidePanel() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const listItemVariants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: { opacity: 0, x: -100 },
  };

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
    dispatch(fetchGenres());
  }, []);

  return (
    <Box flex="1 1 30%">
      <Button onClick={onOpen}>Choose genre</Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent background="black">
          <DrawerCloseButton />
          <DrawerBody p="20px 15px">
            <h2 className="sidepanel__title">Popular</h2>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? { color: '#6d28d9' } : { color: 'white' })}
              className="sidepanel__link"
            >
              Popular games
            </NavLink>

            <h2 className="sidepanel__title">
              <Link to="/genres">Genres</Link>
            </h2>
            <AnimatePresence>
              <ul className="sidepanel__genres">
                {genres.length > 0
                  ? genres.map((genre, i: number) => (
                      <motion.li
                        key={genre.id}
                        style={{ cursor: 'pointer', padding: '3px' }}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <NavLink
                          to={`/games/${genre.slug}`}
                          style={({ isActive }) => (isActive ? { color: '#6d28d9' } : { color: 'white' })}
                          className="sidepanel__link"
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
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              color="white"
              _hover={{
                background: 'black',
              }}
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default SidePanel;
