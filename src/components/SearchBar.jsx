import { Divider, Input } from 'antd';

const SearchBar = ({ searchFood, search }) => {
  const handleSearchFood = (e) => {
    searchFood(e.target.value);
  };

  return (
    <>
      <Divider>
        <h1>Search</h1>
      </Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSearchFood} />
    </>
  );
};

export default SearchBar;
