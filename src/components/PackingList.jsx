function Item({ name, isPacked }) {
  return (
    <li className="item">{isPacked ? <del>{name + " ✓"}</del> : name}</li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Rides Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={false} name="Helmet with a golden leaf" />
        <Item isPacked={true} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// just for memory
// const lang = "JavaScript1";

// const result1 = lang && "JavaScript"; // left side truthy hole right side return korbe, otherwise left side return korbe

// const result2 = lang || "JavaScript"; // left side falsy hole right side return korbe, otherwise left side return korbe

// const result3 = lang ?? "JavaScript"; // Nullish Coalescing Operator: left side Nullish (Null or Undefined) hole right side return korbe, otherwise left side return korbe

// console.log(result1); // JavaScript
// console.log(result2); // JavaScript1
// console.log(result3); // JavaScript1
