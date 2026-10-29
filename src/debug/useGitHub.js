import { useDebugValue, useEffect } from "react";
import useStateDisplayName from "./useStateDisplayName";
const useGitHub = (username) => {
  useDebugValue(`Fetching data for ${username}`);

  const [user, setUser] = useStateDisplayName(null, "userInfo");
  const [error, setError] = useStateDisplayName(null, "errorInfo");
  const [loading, setLoading] = useStateDisplayName(false, "loadingInfo");

  useDebugValue(
    error
      ? `There is an error fetching the data for ${username}`
      : `No Error fetching the data for ${username}`,
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );
        const responseData = await response.json();
        setUser(responseData);
        setLoading(false);
        console.log(responseData);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  // performance optimization
  useDebugValue(user, (user) => user?.bio); // this function only fires when we go check on the components section in the dev tools, not when we change the state of user in the code. and this hook fires when the function is called
  return { user, loading, error };
};

export default useGitHub;
