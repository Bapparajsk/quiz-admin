"use client";

import { Button, Chip, cn, Dropdown, Kbd, Label, Separator } from "@heroui/react";
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";
import { More_horizIcon } from "../icon/more_horiz";

export interface Quiz {
    name: string;
    category: string;
    questions: number;
    attempts: number;
    difficulty: string;
    status: string;
    statusClass: "published" | "draft" | "closed";
}

function formatAttempts(attempts: number) {
    return attempts.toLocaleString("en-US");
}

export const QuizItem = ({ quiz }: { quiz: Quiz }) => {

    const itemClassName = "px-6 py-4";

    return (
        <tr key={quiz.name} className="transition-colors duration-200 hover:bg-[#1E293B] hover:cursor-pointer">
            <td className={cn("font-semibold", itemClassName)}>{quiz.name}</td>
            <td className={cn("text-on-surface-variant", itemClassName)}>{quiz.category}</td>
            <td className={cn("text-right font-label-mono", itemClassName)}>{quiz.questions}</td>
            <td className={cn("text-right font-label-mono", itemClassName)}>{formatAttempts(quiz.attempts)}</td>
            <td className={cn(itemClassName)}>
                <Chip variant={"primary"} color={quiz.difficulty === "Easy" ? "success" : quiz.difficulty === "Medium" ? "warning" : "danger"}>
                    {quiz.difficulty}
                </Chip>
            </td>
            <td className={cn(itemClassName)}>
                <Chip
                    variant={quiz.statusClass === "published" ? "soft" : quiz.statusClass === "draft" ? "secondary" : "tertiary"}
                    color={quiz.statusClass === "published" ? "accent" : quiz.statusClass === "draft" ? "default" : "danger"}
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

