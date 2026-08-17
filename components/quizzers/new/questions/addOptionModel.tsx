import { Button, Checkbox, Label, Modal, Separator, TextArea } from "@heroui/react";
import { IconFilter2Question, IconPlus } from "@tabler/icons-react";

const shellClassName =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30";


export const AddOptionModel = () => {
    return (
        <Modal>
            <Button variant="secondary">
                <span className="inline-flex items-center gap-2">
                    <IconPlus size={16} />
                    Add option
                </span>
            </Button>
            <Modal.Backdrop>
                <Modal.Container size="lg">
                    <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <IconFilter2Question className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>
                                Option
                                <p className="text-sm text-white/70">
                                    Add With three different langues
                                </p>
                            </Modal.Heading>

                        </Modal.Header>
                        <Modal.Body>
                            <div className="space-y-4 mt-4">
                                <div>
                                    <Label htmlFor="textarea-english-option">English</Label>
                                    <TextArea
                                        className={shellClassName}
                                        aria-label="English Option"
                                        id="textarea-english-option"
                                        placeholder="This week's highlights..."
                                        rows={3}
                                    />
                                </div>

                                <Separator variant="tertiary" />

                                <div>
                                    <Label htmlFor="textarea-বাংলা-বিকল্" className="text-xl">বাংলা</Label>
                                    <TextArea
                                        className={shellClassName}
                                        aria-label="বাংলা বিকল্প"
                                        id="textarea-বাংলা-বিকল্"
                                        placeholder="This week's highlights..."
                                        rows={3}
                                    />
                                </div>

                                <Separator variant="tertiary" />

                                <div>
                                    <Label htmlFor="textarea-हिंदी-विकल्प">हिंदी</Label>
                                    <TextArea
                                        className={shellClassName}
                                        aria-label="हिंदी विकल्प"
                                        id="textarea-हिंदी-विकल्प"
                                        placeholder="This week's highlights..."
                                        rows={3}
                                    />
                                </div>

                                <Checkbox name="basic-terms">
                                    <Checkbox.Content>
                                        <Checkbox.Control>
                                            <Checkbox.Indicator />
                                        </Checkbox.Control>
                                        Select as Correct
                                    </Checkbox.Content>
                                </Checkbox>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="ghost">
                                Cancel
                            </Button>
                            <Button slot="close">
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}

