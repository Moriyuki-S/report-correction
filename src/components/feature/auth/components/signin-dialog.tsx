import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

type SignInDialogProps = {
    isOpenDialog: boolean;
    setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
    setIsOpenSignUpDialog: Dispatch<SetStateAction<boolean>>;
};

const SignInDialog = (props: SignInDialogProps) => {
    const { isOpenDialog, setIsOpenDialog, setIsOpenSignUpDialog } = props;

    const shiftToSignUpDialog = () => {
        setIsOpenDialog(false);
        setIsOpenSignUpDialog(true);
    };

    return (
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DialogContent className="w-72">
                <DialogTitle>
                    ログイン
                </DialogTitle>
                <DialogDescription>
                    Googleでログインしてください。
                </DialogDescription>
                <DialogDescription>
                    新規登録は<button className={cn("text-blue-500 underline", "hover:text-blue-700")} onClick={shiftToSignUpDialog}>こちらから</button>
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