const List = ({ items, removeItem }) => {
  return items.length > 0 ? (
    <ul>
      {items.map(({ id, content }) => (
        <li key={id}>
          {content}
          <button
            onClick={() => {
              removeItem(id);
            }}
            type="button"
          >
            remove
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>no data</p>
  );
};

export default List;
