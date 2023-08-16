import { FcReddit } from 'react-icons/fc';
import { MdGames } from 'react-icons/md';
import {
  SiGogdotcom,
  SiPlaystation,
  SiSteam,
  SiGoogleplay,
  SiXbox,
  SiAppstore,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
  SiNintendoswitch,
  SiWindows,
} from 'react-icons/si';
import { AiFillShopping, AiOutlineQuestionCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { IGame } from '../../types';


interface GameInfoProps {
  currentGame: IGame;
}

function GameInfo({ currentGame }: GameInfoProps): JSX.Element {
  function chooseStoreIcon(storeName: string): JSX.Element {
    switch (storeName) {
      case 'GOG':
        return <SiGogdotcom size="23" />;
      case 'PlayStation Store':
        return <SiPlaystation size="23" />;
      case 'Steam':
        return <SiSteam size="23" />;
      case 'Google Play':
        return <SiGoogleplay size="23" />;
      case 'Xbox Store':
        return <SiXbox size="23" />;
      case 'Xbox 360 Store':
        return <SiXbox size="23" />;
      case 'App Store':
        return <SiAppstore size="23" />;
      default:
        return <AiOutlineQuestionCircle size="23" />;
    }
  }

  function choosePlatformIcon(platformName: string): JSX.Element {
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
    <section>
      <div className="flex gap-5 mb-14">
        <div className="flex flex-col bg-slate-800 p-5 rounded-lg basis-1/4">
          <AiOutlineInfoCircle className="self-center mb-3" size="40" />
          <h2 className="font-medium text-lg mb-2">Info:</h2>

          <h3>
            Release date:
            {` ${currentGame.released}`}
          </h3>
          <a href={`${currentGame.website}`}>Official website</a>

          <h3 className="my-2">
            Metacritic rating:
            {` ${currentGame.metacritic}`}
          </h3>

          <h3 className="mb-2">
            RAWG rating:
            {` ${currentGame.rating}`}
          </h3>
          <h3 className="mb-2">
            Achievements count:
            {` ${currentGame.achievements_count}`}
          </h3>

          <h3 className="mb-2">
            Developers:
            {` ${currentGame.developers.map((developerItem) => developerItem.name)}`}
          </h3>

          <h3 className="mb-2">
            Publishers:
            {` ${currentGame.publishers.map((publisherItem) => publisherItem.name)}`}
          </h3>
        </div>
        <div className="flex flex-col bg-slate-800 p-5 rounded-lg basis-1/4">
          <FcReddit className="self-center mb-3" size="40" />
          <a href={`${currentGame.reddit_url}`} className="font-medium text-lg mb-2">
            {currentGame.reddit_name}
          </a>
          <p>{currentGame.reddit_description}</p>
        </div>
        <div className="flex flex-col bg-slate-800 p-5 rounded-lg basis-1/4">
          <AiFillShopping className="self-center mb-3" size="40" />
          <h2 className="font-medium text-lg mb-2">The shops:</h2>
          {currentGame.stores.map((storeItem) => (
            <a key={storeItem.store.id} href={storeItem.store.domain} className="flex items-center gap-3 mb-2">
              {storeItem.store.name}
              {chooseStoreIcon(storeItem.store.name)}
            </a>
          ))}
        </div>
        <div className="flex flex-col bg-slate-800 p-5 rounded-lg basis-1/4">
          <MdGames className="self-center mb-3" size="40" />
          <h2 className="font-medium text-lg mb-2">Platforms:</h2>
          {currentGame.platforms.map((platformItem) => (
            <h3 key={platformItem.platform.id} className="flex items-center gap-3 mb-2">
              {platformItem.platform.name}
              {choosePlatformIcon(platformItem.platform.name)}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GameInfo;
