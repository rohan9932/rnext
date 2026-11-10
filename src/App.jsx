import "./App.css";
import { loremIpsum } from "lorem-ipsum";
import ListItem from "./components/ListItem";
import { List, AutoSizer } from "react-virtualized";

export default function App() {
  const rowCnt = 5000;
  const listHeight = 900;
  const rowHeight = 50;
  const rowWidth = 1650;

  const list = Array(rowCnt).fill().map((val, id) => {
    return {
      id,
      name: "Rohan Rahim",
      text: loremIpsum({ 
        count: 1, 
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      }),
      image: `https://placehold.co/40?text=R${id}`,
    }
  });

  return (
    <div className="list">
      <AutoSizer>
        {/* automatically adjusts the widht and height */}
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowHeight={rowHeight}
            rowCount={rowCnt}
            rowRenderer={({ key, index, style }) => (
              <ListItem
                key={key}
                name={list[index].name}
                text={list[index].text}
                image={list[index].image}
                style={style}
                overscanRowCount={10}
              />
            )}
          />
        )}
      </AutoSizer>
    </div>
  );
}
