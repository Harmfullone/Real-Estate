import { AllUsersDataTable } from "@/components/user_management/allUsersDataTable"
import { allUsersColumns, type UserColumnInterface, KYCStatus } from "@/components/user_management/allUsersColumns"
import { BlockedUsersDataTable } from "@/components/user_management/blockedUsersDataTable";
import { BlockedUsersColumns } from "@/components/user_management/blockedUsersColumns";

async function getUsers(): Promise<UserColumnInterface[]> {
    // const response = await fetch("https://api.example.com/users")
    // const data = await response.json()
    // return data;
    return [
        {
            username: "Emilysadas White",
            email: "ahhgdjsjh@gmail.com",
            isVerified: true,
            propertyListings: { total: 10, sold: 3, active: 4, unlisted: 3 },
            gems: 54545,
            kycStatus: "Verified",
            isBlocked: false,
        },
        {
            username: "amily White",
            email: "ahhgdjsjh@gmail.com",
            isVerified: false,
            propertyListings: { total: 10, sold: 3, active: 4, unlisted: 3 },
            gems: 10000,
            kycStatus: "Pending",
            isBlocked: true,
        },
        {
            username: "Emily Whites",
            email: "ahhgdjsjh@gmail.com",
            isVerified: true,
            propertyListings: { total: 10, sold: 3, active: 4, unlisted: 3 },
            gems: 54545,
            kycStatus: "Verified",
            isBlocked: false,
        },
    ]
}

export default async function AllUsersPage() {
    const data = await getUsers();
    return (
        <div>
            <BlockedUsersDataTable columns={BlockedUsersColumns} data={data} />
        </div>
    )
}
 