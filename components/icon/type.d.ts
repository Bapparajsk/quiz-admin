export type IconName =
    | "add"
    | "analytics"
    | "category"
    | "dashboard"
    | "format_list_bulleted"
    | "group"
    | "leaderboard"
    | "logout"
    | "manage_accounts"
    | "more_horiz"
    | "notifications"
    | "qr_code_2"
    | "quiz"
    | "settings"
    | "touch_app"
    | "trending_up";

export type IconProps = {
    name: IconName;
    className?: string;
};

export type IconComponent = (props: { className?: string }) => JSX.Element;