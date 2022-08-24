export interface AchievementsListProps {
  achievements: IAchievement[];
  achievementsAmount: number;
  nextAchievementsPage: string;
  loadMoreAchievements: () => void;
}

export interface IAchievement {
  description: string;
  id: number;
  image: string;
  name: string;
  percent: number;
}
