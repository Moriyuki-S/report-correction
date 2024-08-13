"use client";

import { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useAuth from "../hooks/auth";

type SignOutDialogProps = {
    isOpenDialog: boolean;
    setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
}

const SignOutDialog = (props: SignOutDialogProps) => {
    const { isOpenDialog, setIsOpenDialog } = props;
    const { signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
        setIsOpenDialog(false);
    };

    return (
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DialogContent className={cn("w-72")}>
                <DialogTitle>
                    ログアウト
                </DialogTitle>
                <DialogDescription>
                    下のボタンをクリックしてログアウトしてください。
                </DialogDescription>
                <div className={cn("w-fit mx-auto mt-5")} >
                    <Button onClick={handleSignOut}>
                        ログアウト
                    </Button>
                </div>
                </DialogContent>
        </Dialog>
    );
}

export default SignOutDialog;