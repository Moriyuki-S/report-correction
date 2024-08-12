"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";
import SignInDialog from "../../feature/auth/components/signin-dialog";
import useAuth from "@/feature/auth/hooks/auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {

    const [isOpenSignInDialog, setIsOpenSignInDialog] = useState<boolean>(false);
    const [isOpenSignOutDialog, setIsOpenSignOutDialog] = useState<boolean>(false);
    const { authUser } = useAuth();

    const openSignInDialog = () => {
        setIsOpenSignInDialog(true);
    };

    const openSignOutDialog = () => {
        setIsOpenSignOutDialog(true);
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
                    {authUser ?
                        (
                            <>
                                <li>
                                    <Button onClick={openSignOutDialog}>ログアウト</Button>
                                </li>
                                <li>
                                    <button>
                                    <Avatar>
                                        <AvatarImage src={authUser.icon} />
                                        <AvatarFallback>{authUser.name}</AvatarFallback>
                                    </Avatar>
                                    </button>
                                </li>
                            </>
                        )
                        :
                        (
                            <>
                                <li>
                                    <Button onClick={openSignInDialog} className="h-10">
                                        ログイン
                                    </Button>
                                </li>
                            </>
                        )

                    }
                </menu>
            </header>
            <SignInDialog isOpenDialog={isOpenSignInDialog} setIsOpenDialog={setIsOpenSignInDialog} />
        </>
    )
};

export default Header;