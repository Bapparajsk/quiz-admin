import { AddIcon } from "./add";
import { AnalyticsIcon } from "./analytics";
import { CategoryIcon } from "./category";
import { DashboardIcon } from "./dashboard";
import { Format_list_bulletedIcon } from "./format_list_bulleted";
import { GroupIcon } from "./group";
import { LeaderboardIcon } from "./leaderboard";
import { LogoutIcon } from "./logout";
import { Manage_accountsIcon } from "./manage_accounts";
import { More_horizIcon } from "./more_horiz";
import { NotificationsIcon } from "./notifications";
import { Qr_code_2Icon } from "./qr_code_2";
import { QuizIcon } from "./quiz";
import { SettingsIcon } from "./settings";
import { Touch_appIcon } from "./touch_app";
import { Trending_upIcon } from "./trending_up";
import { IconComponent, IconName, IconProps } from "./type";

const iconMap: Record<IconName, IconComponent> = {
    "quiz": QuizIcon,
    "add": AddIcon,
    "analytics": AnalyticsIcon,
    "category": CategoryIcon,
    "dashboard": DashboardIcon,
    "format_list_bulleted": Format_list_bulletedIcon,
    "group": GroupIcon,
    "leaderboard": LeaderboardIcon,
    "logout": LogoutIcon,
    "manage_accounts": Manage_accountsIcon,
    "more_horiz": More_horizIcon,
    "notifications": NotificationsIcon,
    "qr_code_2": Qr_code_2Icon,
    "settings": SettingsIcon,
    "touch_app": Touch_appIcon,
    "trending_up": Trending_upIcon
}


const Icon = ({ name, className = "h-5 w-5" }: IconProps) => {
    const IconComponent = iconMap[name];
    return <IconComponent className={className} />;
}

export default Icon;