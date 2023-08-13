import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { Flex, Box, Button, Text, Heading, List, ListItem, Image } from '@chakra-ui/react';
import { AchievementsListProps } from './AchievementsList.props';

function AchievementsList({
  achievements,
  achievementsAmount,
  nextAchievementsPage,
  loadMoreAchievements,
}: AchievementsListProps): JSX.Element {
  return (
    <section>
      {achievements.length > 0 ? (
        <Flex flexDirection="column" alignItems="center" pt="20px">
          <Heading as="h4" fontWeight="600" fontSize="30px" mb="40px" alignSelf="flex-start">
            Achievements {`(${achievementsAmount})`}
          </Heading>
          <List display="flex" justifyContent="center" gap="35px" flexWrap="wrap" mb="60px">
            {achievements.map((achievementItem) => (
              <ListItem
                key={uuidv4()}
                flex='1 1 17%'
                minH="100%"
                minW="230px"
                borderRadius='10px'
                display="flex"
                flexDirection="column"
                bg="#202020"
                className={cn('AchievementIconWrapper', {
                  LegendaryAchievement: +achievementItem.percent <= 5,
                  EpicAchievement: +achievementItem.percent <= 10 && +achievementItem.percent > 5,
                  RareAchievement: +achievementItem.percent > 10 && +achievementItem.percent <= 15,
                })}
              >
                  {+achievementItem.percent < 20 ? (
                    <div className="AchievementIconGlowContainerRoot">
                      <div className="AchievementIconGlowContainer">
                        <div className="AchievementIconGlow" />
                      </div>
                    </div>
                  ) : null}
                  <div>
                    <Image
                      src={achievementItem.image}
                      objectFit="cover"
                      w="100%"
                      mb='10px'
                    />
                    <Heading as="h4" textAlign="center" fontWeight="500" fontSize="20px" p="0px 10px 10px">
                      {achievementItem.name}<span
                        className={cn('AchievementIconWrapper', {
                          LegendaryAchievementColor: +achievementItem.percent <= 5,
                          EpicAchievementColor: +achievementItem.percent <= 10 && +achievementItem.percent > 5,
                          RareAchievementColor: +achievementItem.percent > 10 && +achievementItem.percent <= 15,
                        })}
                      >
                       {" "}({achievementItem.percent}%)
                      </span>
                    </Heading>
                    <Text textAlign="center" fontWeight="400" fontSize="16px">
                      {achievementItem.description}
                    </Text>
                  </div>
              </ListItem>
            ))}
          </List>
          <Button
            m="0 auto"
            bg="purple.600"
            _hover={{ bg: 'purple.700' }}
            _active={{ bg: 'purple.500' }}
            onClick={() => loadMoreAchievements()}
            display={nextAchievementsPage === null ? 'none' : 'block'}
          >
            Load more
          </Button>
        </Flex>
      ) : null}
    </section>
  );
}

export default AchievementsList;
