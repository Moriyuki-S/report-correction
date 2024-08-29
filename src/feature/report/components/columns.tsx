"use client";

import { ColumnDef, Row } from "@tanstack/react-table";
import { TableDisplayReport } from "../types/file";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { useState } from "react";

const ActionCell = ({ row }: { row: Row<TableDisplayReport> }) => {
    const report = row.original;
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const handleDialogOpen = () => {
        setIsOpenDialog(true);
    };

    const handleDialogClose = () => {
        setIsOpenDialog(false);
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>編集する</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="text-red-500"
                        onClick={handleDialogOpen}
                    >削除する</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            本当に削除しますか？
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            一度削除すると、元に戻すことはできません。
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <Button variant="ghost" onClick={handleDialogClose}>キャンセル</Button>
                        <Button variant={"destructive"}>削除する</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export const columns: ColumnDef<TableDisplayReport>[] = [
    {
        accessorKey: "subject",
        header: "科目"
    },
    {
        accessorKey: "name",
        header: "ファイル名"
    },
    {
        accessorKey: "correctedAt",
        header: "添削日"
    },
    {
        id: "actions",
        cell: ActionCell
    }
];