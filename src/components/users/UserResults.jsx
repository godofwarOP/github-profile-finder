import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
import PaginationList from "../pagination/PaginationList";

function UserResults() {
  const { users, loading, totalCount } = useContext(GithubContext);

  return (
    <>
      {!loading ? (
        <div className="flex flex-col items-center">
          {totalCount > 0 && (
            <div className="self-start">
              <h1 className="text-base-content text-opacity-40 text-xl">
                Total results - {totalCount}
              </h1>
            </div>
          )}
          <div className="self-start w-full grid grid-cols-1 gap-2 md:gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
          <div className="mt-12">
            <PaginationList />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default UserResults;
