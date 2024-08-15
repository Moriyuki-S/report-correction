import { cn } from "@/lib/utils";
import { DocumentCheckIcon, HomeIcon, PaintBrushIcon } from "@heroicons/react/16/solid";
import SidebarButton from "../ui/sidebar-button";

const Sidebar = () => {
    return (
        <aside className={cn("hidden", "md:block md:fixed top-16 left-0 w-72 h-full pt-8 bg-white border-r")}>
            <div>
                <button className={cn("w-36 flex justify-center items-center border rounded-2xl py-4  mx-auto", "transition-colors", "hover:bg-black hover:text-white hover:border-white")}>
                    <PaintBrushIcon className="me-2 w-8 h-8" /><span className={cn("font-bold")}>AIが添削</span>
                </button>
            </div>
            <nav className={cn("*:list-none mt-10 flex flex-col gap-y-5")}>
                <li>
                    <SidebarButton label="ホーム" href="/" icon={<HomeIcon className={cn("w-6 h-6")} />} />
                </li>
                <li>
                    <SidebarButton label="添削済み" href="/files" icon={<DocumentCheckIcon className={cn("w-6 h-6")} />} />
                </li>
            </nav>
        </aside>
    )
};

export default Sidebar;