import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import useAuth from "../hooks/auth";

type SignUpDialogProps = {
    isOpenDialog: boolean;
    setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
    setIsOpenSignInDialog: Dispatch<SetStateAction<boolean>>;
};


const SignUpDialog = (props: SignUpDialogProps) => {
    const { isOpenDialog, setIsOpenDialog, setIsOpenSignInDialog } = props;
    const { authUser, signIn } = useAuth();

    const shiftToSignInDialog = () => {
        setIsOpenDialog(false);
        setIsOpenSignInDialog(true);
    };

    const handleSignUp = () => {
        signIn();
        setIsOpenDialog(false);
    };

    return (
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DialogContent className="w-72">
                <DialogTitle>
                    新規登録
                </DialogTitle>
                <DialogDescription>
                    Googleで登録してください。
                </DialogDescription>
                <DialogDescription>
                    ログインは<button className={cn("text-blue-500 underline", "hover:text-blue-700")} onClick={shiftToSignInDialog}>こちらから</button>
                </DialogDescription>
                <div className={cn("w-fit", "mx-auto", "mt-5")}>
                    <Button onClick={handleSignUp}>
                        Googleで登録
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
};

export default SignUpDialog;