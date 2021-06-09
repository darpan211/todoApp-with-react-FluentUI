import React, {useState} from "react";
import {
    Stack,
    IconButton,
    Dialog,
    DialogType,
    DialogFooter,
    PrimaryButton,
    DefaultButton
} from '@fluentui/react';
import {initializeIcons} from '@fluentui/font-icons-mdl2';
import {FontSizes, Depths} from '@fluentui/theme';

initializeIcons();

const dialogContentProps = {
    type: DialogType.normal,
    title: 'Delete',
    closeButtonAriaLabel: 'Close',
    subText: "Are you sure you want to delete this item? This cannot be undone.",
};

const Todolist = ({data, deleteTodo}) => {
    const [open, setOpen] = useState(true);
    const [dataId, setDataId] = useState();
    // console.log(dataId);
    // console.log(open);
    return (
        <>
            <Stack>
                <Stack verticalAlign="center" horizontalAlign="space-between">
                    {
                        data && data.map((ele, i) => {
                            return (
                                <Stack.Item key={i} align="center" style={{
                                    boxShadow: Depths.depth8,
                                    fontSize: FontSizes.size20,
                                    padding: 8,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    margin: 5,
                                    width: '100%'
                                }}>
                                    <span>{ele}</span>
                                    <IconButton onClick={() => {
                                        setOpen(!open)
                                        setDataId(i)
                                    }} iconProps={{iconName: 'Delete'}}/>
                                </Stack.Item>
                            )
                        })
                    }
                </Stack>
                <Dialog
                    hidden={open}
                    dialogContentProps={dialogContentProps}
                    modalProps={{
                        isBlocking: false
                    }}
                >
                    <DialogFooter>
                        <PrimaryButton onClick={() => {
                            deleteTodo(dataId)
                            setOpen(true)
                        }} text='Yes'/>
                        <DefaultButton onClick={() => setOpen(true)} text="No"/>
                    </DialogFooter>
                </Dialog>
            </Stack>
        </>
    )
};

export default Todolist;