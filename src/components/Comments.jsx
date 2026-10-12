import { useEffect, useState } from "react";
import { fetchComments } from "../utils/fetchComments";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      // network call isn't an issue will get fixed in production
      const json = await fetchComments(postId);
      // but setState should be handled as it would hamper developer issue
      // as fetching data of same id could give different results
      
      //state shouldn't be done 2 times
      if (!ignore) { // 2nd call goes only
        setComments(json);
      }
    }
    startFetching();

    return () => {
      ignore = true;
    };
  }, [postId]);

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
}
