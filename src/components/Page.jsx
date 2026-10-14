import { useContext, useEffect, useEffectEvent } from "react";
import logVisit from "../utils/logVisit";
import ShoppingCartContext from "../contexts/shoppingCartContext";

export default function Page({ url, onPageChange, onAddItems, cartItems }) {
  const items = useContext(ShoppingCartContext);
  const numberOfItems = items.length;

  // handles number of items as non reactive
  const onVisit = useEffectEvent((url) => {
    logVisit(url, numberOfItems);
  });

  // here the effect would react on url and num of items also
  // but we don't want that. we only want log for the page not for the number of items change
  // we want log for only url change -> we will use EffectEvent
  useEffect(() => {
    onVisit(url);
  }, [url]);

  return (
    <div>
      <button onClick={onPageChange}>Change Page</button>
      <button onClick={onAddItems}>Add Item</button>
      <div>This is page</div>
      {
        cartItems.map((item) => (
          <div key={item.id}>
            <span>{item.title}</span>
          </div>
        ))
      }
    </div>
  );
}
