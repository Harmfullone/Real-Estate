"use client"

import { ColumnDef } from "@tanstack/react-table"

export type RoleManagement = {
    username: string;
    email: string;
    role: string;
    blockDate?: string;
}

export const columns: ColumnDef<RoleManagement>[] = [
    {
        accessorKey: "username",
        header: "User Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        accessorKey: "blockDate",
        header: "Block Date",
    },
]