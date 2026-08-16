import { Card, Separator, Switch } from "@heroui/react";

const settings = [
    {
        title: "Randomize Questions",
        description: "Present questions in a random order for each user.",
        defaultChecked: true,
    },
    {
        title: "Show Correct Answers",
        description: "Display correct answers immediately after submission.",
        defaultChecked: false,
    },
    {
        title: "Allow Retake",
        description: "Permit users to retake the quiz multiple times.",
        defaultChecked: false,
    },
];

export const QuizSetting = () => {
    return (
        <Card className="border border-white/10 bg-[#0e1213] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <Card.Header>
                <div className="border-b border-white/10 pb-6">
                    <h2 className="text-3xl font-semibold text-white">Quiz Settings</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                        Fine-tune how the quiz behaves for each participant before publishing.
                    </p>
                </div>
            </Card.Header>

            <Card.Content className="flex flex-row">
                <div className="mt-6 space-y-4 w-1/2">
                    {settings.slice(0, 2).map((setting) => (
                        <Switch key={setting.title} className="flex items-center justify-between rounded-lg bg-background p-md transition-colors hover:border-surface-variant">
                            <Switch.Content className={"flex w-full items-center justify-between"}>
                                <label
                                    key={setting.title}
                                    className="flex cursor-pointer items-center justify-between rounded-lg bg-background p-md transition-colors hover:border-surface-variant"
                                >
                                    <div>
                                        <div className="font-body-md font-semibold text-on-surface">{setting.title}</div>
                                        <div className="font-body-sm text-on-surface-variant">{setting.description}</div>
                                    </div>
                                </label>
                                <Switch.Control>
                                    <Switch.Thumb />
                                </Switch.Control>
                            </Switch.Content>
                        </Switch>
                    ))}
                </div>
                <Separator orientation="vertical" className="mx-4" />
                <div className="mt-6 space-y-4 w-1/2">
                    {settings.slice(2).map((setting) => (
                        <Switch key={setting.title} className="flex items-center justify-between rounded-lg bg-background p-md transition-colors hover:border-surface-variant">
                            <Switch.Content className={"flex w-full items-center justify-between"}>
                                <label
                                    key={setting.title}
                                    className="flex cursor-pointer items-center justify-between rounded-lg bg-background p-md transition-colors hover:border-surface-variant"
                                >
                                    <div>
                                        <div className="font-body-md font-semibold text-on-surface">{setting.title}</div>
                                        <div className="font-body-sm text-on-surface-variant">{setting.description}</div>
                                    </div>
                                </label>
                                <Switch.Control>
                                    <Switch.Thumb />
                                </Switch.Control>
                            </Switch.Content>
                        </Switch>
                    ))}
                </div>
            </Card.Content>
        </Card >
    );
};
