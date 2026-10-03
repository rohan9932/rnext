export default function getNextId(data) {
  const maxId = data.reduce((prev, current) =>
    prev && prev.id > current.id ? prev.id : current.id,
  );

  return maxId + 1;
};
