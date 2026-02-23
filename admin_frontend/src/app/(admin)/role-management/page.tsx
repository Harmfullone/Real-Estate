import { ManagementTable } from "@/components/role_management/managementTable";
import axios from "axios";
import {columns} from "@/components/role_management/columns";
import { RoleManagement } from "@/components/role_management/columns";
import {DataTable} from "@/components/role_management/data-table";

async function getRoleManagement(): Promise<RoleManagement[]> {
    // const response = await fetch("https://api.example.com/role-management")
    // const data = await response.json()
    // return data
    return [
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
}

export default async function RoleManagement() {
    const data = await getRoleManagement();
    return (
        <div>
            <h1 className="font-medium text-[20px] p-2 mb-4">Admin Staff</h1>
            <DataTable columns={columns} data={data}/>
        </div>
    )
}