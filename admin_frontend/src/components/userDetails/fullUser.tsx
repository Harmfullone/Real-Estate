import { UserActionsAndDetails } from "./userActions&Details";
import { UserListedProperties } from "./userListedProperties";

export function FullUserDetails() {
    return (
        <div>
            <div className="grid grid-cols-2 ">
                <UserActionsAndDetails />
                <UserListedProperties/>
            </div>
        </div>
    )
}