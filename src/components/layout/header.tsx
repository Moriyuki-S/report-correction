"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";
import SignInDialog from "../feature/auth/components/signin-dialog";

const Header = () => {

    const [isOpenSignInDialog, setIsOpenSignInDialog] = useState<boolean>(false);


    const openSignInDialog = () => {
        setIsOpenSignInDialog(true);
    };


    return (
        <>
            <header
                className={cn("h-16", "flex", "items-center", "p-4", "border-b", "justify-between")}
            >
                <h1
                    className={cn("text-lg", "font-bold", "md:text-xl")}
                >
                    <span>📄</span>面白レポート添削
                </h1>
                <Button onClick={openSignInDialog} className="h-10">
                    ログイン
                </Button>
            </header>
            <SignInDialog isOpenDialog={isOpenSignInDialog} setIsOpenDialog={setIsOpenSignInDialog} />
        </>
    )
};

export default Header;