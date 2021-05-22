const List = ({ items, removeItem }) => {
  return (
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
  );
};

export default List;
