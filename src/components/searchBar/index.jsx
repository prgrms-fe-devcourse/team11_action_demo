export default function Index() {
  return (
    <>
      <div>
        <label htmlFor="searchBar" hidden></label>
        <input
          type="text"
          id="searchBar"
          placeholder="어떤 상품을 찾으시나요?"
        />
      </div>
      <button>검색</button>
    </>
  );
}
