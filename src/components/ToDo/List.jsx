const List = ({ items, removeItem, isLoading }) => {
  return isLoading ? (
    <p>loading ...</p>
  ) : items.length > 0 ? (
    <ul>
      {items.map(({ _id, content, createdAt }) => (
        <li key={_id}>
          {content} - {createdAt}
          <button
            onClick={() => {
              removeItem(_id);
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
