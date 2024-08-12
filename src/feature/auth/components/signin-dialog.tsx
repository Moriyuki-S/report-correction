import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";

type SignInDialogProps = {
    isOpenDialog: boolean;
    setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
};

const SignInDialog = (props: SignInDialogProps) => {
    const { isOpenDialog, setIsOpenDialog } = props;

    return (
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DialogContent className="w-72">
                <DialogTitle>
                    ログイン
                </DialogTitle>
                <DialogDescription>
                    Googleでログインしてください。
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