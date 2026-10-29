import { useState, useTransition } from "react";
import { users as defaultUsers } from "./fakeuser";

const FindUser = ({ users = defaultUsers }) => {
  const userList = users || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(userList);

  const [isPending, startTransition] = useTransition();

  // only use when needed like heavy state operation blocking rendering
  const handleChange = ({ target: { value } }) => {
    // Set the search term on the textbox
    setSearchTerm(value);

    // Execution of non-urgent state update.
    // as otherwise react updates both the state in batch
    // as a result as this is an expensive operation we feel lag
    // to prevent this lag we use startTransition
    startTransition(() => {
      // Filter the user list based on the search term
      setFiltered(
        userList.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    });
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl my-2">User Finder</h1>
      <div className="text-md my-2">
        {isPending ? (
          <div>Loading...</div>
        ) : (
          <p>
            {userList.length !== filtered.length
              ? `${filtered.length} matches`
              : null}
          </p>
        )}
      </div>
      <input
        onChange={handleChange}
        value={searchTerm}
        type="text"
        placeholder="Type a name"
        className="border border-slate-200 p-1 rounded-sm"
      />

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-center items-center">
          {filtered.length > 0 ? (
            filtered.map((user, index) => (
              <div
                key={`${user.name}-${index}`}
                className="flex flex-col m-2 p-2 border rounded-md"
              >
                <div className="rounded my-2">
                  <img
                    src={user.avatar}
                    alt={`Avatar image of ${user.name}`}
                    className="w-32 h-32 rounded-full"
                  />
                </div>
                <p className="text-xl text-center">
                  <strong>{user.name}</strong>
                </p>
              </div>
            ))
          ) : (
            <h4 className="text-3xl bg-gray-200 p-2 border">
              The match not found...
            </h4>
          )}
        </div>
      )}
    </div>
  );
};

export default FindUser;
