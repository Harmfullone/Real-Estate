"use client"

import { ColumnDef } from "@tanstack/react-table"


export type AuditAction = "BLOCK" | "VIEW" | "EDIT" | "DELETE";
type RoleManagement = {
    username: string;
    email: string;
    role: string;
    blockDate?: string;
}


export const roleManagement: RoleManagement[] = [
    {
        username: "John Doe",
        email: "john.doe@example.com",
        role: "Admin",
        blockDate: "2021-01-01",
      },
      {
        username: "Jane Smith",
        email: "jane.smith@example.com",
        role: "Viewer",
      },
]

export const ManagementTable = () => {
    return (
        <div>
            <h1>Management Table</h1>
        </div>
    )
}