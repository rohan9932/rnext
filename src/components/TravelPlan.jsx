import { useState } from "react";
import { initialTravelPlan } from "../data/places-normalized";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  const root = plan[0];

  const planets = root.childIds;

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  }

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map((placeId) => (
          <PlaceTree
            key={placeId}
            id={placeId}
            placesById={plan}
            onComplete={handleComplete}
            parentId={0}
          />
        ))}
      </ol>
    </>
  );
}
