import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

type SignInDialogProps = {
    isOpenDialog: boolean;
    setIsOpenDialog: Dispatch<SetStateAction<boolean>>
};

const SignInDialog = (props: SignInDialogProps) => {
    const { isOpenDialog, setIsOpenDialog } = props;

    const shiftSignUpDialog = () => {
        setIsOpenDialog(false);
    };

    return (
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DialogContent className="w-72">
                <DialogTitle>
                    ログイン
                </DialogTitle>
                <DialogDescription>
                    Googleでログインしてください。新規登録は<button onClick={shiftSignUpDialog}>こちらから</button>
                </DialogDescription>
                <div className={cn("w-fit", "mx-auto", "mt-5")}>
                    <Button>
                        Googleでログイン
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SignInDialog;