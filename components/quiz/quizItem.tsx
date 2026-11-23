"use client";

import { Button, Chip, cn, Dropdown, Kbd, Label, Separator } from "@heroui/react";
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";
import { More_horizIcon } from "../icon/more_horiz";

export type QuizStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export type  Difficulty = "EASY" | "MEDIUM" | "HARD" | "EXPERT";

export interface Quiz {
    id: string;
    title: string;
    chapter: string;
    _count: {
        questions: number
    };
    attempts: number;
    difficulty: Difficulty;
    status: QuizStatus;
}

const itemClassName = "px-6 py-4";

export const QuizItem = ({ quiz }: { quiz: Quiz }) => {
    const { status, difficulty } = quiz;

    return (
        <tr key={quiz.title} className="transition-colors duration-200 hover:bg-[#1E293B] hover:cursor-pointer">
            <td className={cn("font-semibold", itemClassName)}>{quiz.title}</td>
            <td className={cn("text-on-surface-variant", itemClassName)}>{quiz.chapter}</td>
            <td className={cn("text-right font-label-mono", itemClassName)}>{quiz._count.questions}</td>
            <td className={cn("text-right font-label-mono", itemClassName)}>{quiz.attempts ?? 0}</td>
            <td className={cn(itemClassName)}>
                <Chip variant={"primary"} color={difficulty === "EASY" ? "success" : difficulty === "MEDIUM" ? "warning" : difficulty === "HARD" ? "danger" : "accent"}>
                    {difficulty}
                </Chip>
            </td>
            <td className={cn(itemClassName)}>
                <Chip
                    variant={status === "PUBLISHED" ? "soft" : status === "DRAFT" ? "secondary" : "tertiary"}
                    color={status === "PUBLISHED" ? "accent" : status === "DRAFT" ? "default" : "danger"}
                >
                    {quiz.status}
                </Chip>
            </td>
            <td className={cn("text-right", itemClassName)}>
                <div>
                    <Dropdown>
                        <Button aria-label="Menu" variant="ghost">
                            <More_horizIcon />
                        </Button>
                        <Dropdown.Popover>
                            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                <Dropdown.Item id="new-file" textValue="New file">
                                    <IconEye stroke={2} size={20} />
                                    <Label>View Quiz</Label>
                                    <Kbd className="ms-auto" slot="keyboard" variant="light">
                                        <Kbd.Abbr keyValue="command" />
                                        <Kbd.Content>Q</Kbd.Content>
                                    </Kbd>
                                </Dropdown.Item>
                                <Dropdown.Item id="open-file" textValue="Open file">
                                    <IconPencil stroke={2} size={20} />
                                    <Label>Edit Quiz</Label>
                                    <Kbd className="ms-auto" slot="keyboard" variant="light">
                                        <Kbd.Abbr keyValue="command" />
                                        <Kbd.Content>E</Kbd.Content>
                                    </Kbd>
                                </Dropdown.Item>
                                <Separator className="bg-separator-secondary" />
                                <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
                                    <IconTrash stroke={2} size={20} color="red" />
                                    <Label>Delete file</Label>
                                    <Kbd className="ms-auto" slot="keyboard" variant="light">
                                        <Kbd.Abbr keyValue="command" />
                                        <Kbd.Abbr keyValue="shift" />
                                        <Kbd.Content>D</Kbd.Content>
                                    </Kbd>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>
            </td>
        </tr>
    );
}

