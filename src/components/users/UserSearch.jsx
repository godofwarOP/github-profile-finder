import { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";
import PaginationContext from "../../context/pagination/PaginationContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const { page } = useContext(PaginationContext);

  const handleTextChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text, page);
      dispatch({
        type: "GET_USERS",
        payload: {
          items: users.items,
          search: text,
          total_count: users.total_count,
        },
      });
      setText("");
    }
  };

  return (
    <div className="mb-8 md:flex justify-center items-center">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                value={text}
                onChange={handleTextChange}
                placeholder="Search"
                type="text"
                className="w-full pr-40 bg-gray-200 input input-md text-black"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-32 md:w-20 btn btn-md"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => {
              dispatch({ type: "CLEAR_USERS" });
            }}
            className="ml-4 btn btn-ghost btn-md"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
