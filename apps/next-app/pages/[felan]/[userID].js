import { useRouter } from "next/router";

const UserID = () => {
    const router = useRouter()
    return (
        <div>
            userID---,{router.query.userID}
        </div>
    );
}

export default UserID;