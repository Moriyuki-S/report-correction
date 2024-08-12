"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";
import SignInDialog from "../../feature/auth/components/signin-dialog";
import SignUpDialog from "../../feature/auth/components/signup-dialog";

const Header = () => {

    const [isOpenSignInDialog, setIsOpenSignInDialog] = useState<boolean>(false);
    const [isOpenSignUpDialog, setIsOpenSignUpDialog] = useState<boolean>(false);

    const openSignInDialog = () => {
        setIsOpenSignInDialog(true);
    };

    const openSignUpDialog = () => {
        setIsOpenSignUpDialog(true);
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
                <menu className="md:flex md:gap-x-5">
                    <li className="hidden md:block">
                        <Button variant={"outline"} onClick={openSignUpDialog} className="h-10">新規登録</Button>
                    </li>
                    <li>
                        <Button onClick={openSignInDialog} className="h-10">
                            ログイン
                        </Button>
                    </li>
                </menu>
            </header>
            <SignInDialog isOpenDialog={isOpenSignInDialog} setIsOpenDialog={setIsOpenSignInDialog} setIsOpenSignUpDialog={setIsOpenSignUpDialog} />
            <SignUpDialog isOpenDialog={isOpenSignUpDialog} setIsOpenDialog={setIsOpenSignUpDialog} setIsOpenSignInDialog={setIsOpenSignInDialog} />
        </>
    )
};

export default Header;