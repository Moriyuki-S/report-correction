import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type SidebarButtonProps = {
    label: string;
    href: string;
    icon: ReactNode;
};

const SidebarButton = (props: SidebarButtonProps) => {
    const { label, href, icon } = props;

    return (
        <Link href={href} className={cn("w-full h-12 border-y flex items-center pl-20 gap-x-8 transition-colors", "hover:bg-gray-200 hover:bg-opacity-50")}>
            {icon} <span className={cn("font-bold")}>{label}</span>
        </Link>
    );
};

export default SidebarButton;