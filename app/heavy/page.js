import { Suspense } from "react";
import Posts from "../components/Posts";

export default function HeavyPage() {
  return (
    <div>
      <div>Heavy Page</div>
      <div>
        <Suspense fallback={<h1>Loading Posts....</h1>}>
          <Posts />
        </Suspense>
      </div>
    </div>  
  );
}
