import { Box, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import { SiXbox, SiPlaystation3, SiPlaystation4, SiPlaystation5, SiNintendoswitch, SiWindows } from 'react-icons/si';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IGame, IScreenshot } from '../../types';
import { useAppSelector } from '../../hooks/useRedux';
import './GameCard.scss';

function GameCard({ currentGame }: { currentGame: IGame }) {
  const { screenshots } = useAppSelector((state) => state.currentGame);

  function choosePlatformIcon(platformName: string) {
    switch (platformName) {
      case 'PlayStation 3':
        return <SiPlaystation3 size="23" title={platformName} />;
      case 'PlayStation 4':
        return <SiPlaystation4 size="23" title={platformName} />;
      case 'PlayStation 5':
        return <SiPlaystation5 size="23" title={platformName} />;
      case 'Xbox Series S/X':
        return <SiXbox size="23" title={platformName} />;
      case 'Xbox One':
        return <SiXbox size="23" title={platformName} />;
      case 'Xbox 360':
        return <SiXbox size="23" title={platformName} />;
      case 'Nintendo Switch':
        return <SiNintendoswitch size="23" title={platformName} />;
      case 'PC':
        return <SiWindows size="23" title={platformName} />;
      default:
        return <AiOutlineQuestionCircle size="23" title={platformName} />;
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl self-end ease-in duration-200 hover:text-violet-700">
          <Link to="/" className="flex gap-2 items-center">
            <MdKeyboardBackspace size="40" />
            Store
          </Link>
        </h2>
        <Box alignSelf="flex-end" display="flex" gap="15px" flexDirection="column" alignItems="flex-end">
          <h1 className="text-5xl mb-4 text-right">{currentGame.name}</h1>
          <Box display="inline-flex" gap="20px" alignItems="center" justifyContent="flex-end">
            {currentGame.platforms.map((platformItem) => (
              <h3 key={platformItem.platform.id}>{choosePlatformIcon(platformItem.platform.name)}</h3>
            ))}
          </Box>
        </Box>
      </div>

      <div className="game__card">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          allowTouchMove={false}
          navigation
          pagination={{ clickable: true }}
          className="game__carousel"
        >
          <SwiperSlide>
            <Image src={currentGame.background_image} alt={currentGame.background_image} />
          </SwiperSlide>
          {screenshots.length > 0
            ? screenshots.map((screenshot: IScreenshot) => (
                <SwiperSlide key={screenshot.id}>
                  <Image src={screenshot.image} alt={`Screenshot from ${currentGame.name}`} />
                </SwiperSlide>
              ))
            : null}
        </Swiper>

        <p className="game__description">{currentGame.description_raw}</p>
      </div>
    </>
  );
}

export default GameCard;
