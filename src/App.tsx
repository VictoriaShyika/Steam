import { useTypedSelector } from './hooks/useTypedSelector';
import { Route, Routes } from 'react-router-dom';
import { Search } from './page/search';
import { Like } from './page/like';

function App() {
  const { items, loading } = useTypedSelector((state) => state.items);
  const { likes } = useTypedSelector((state) => state.likes);

  return (
    <Routes>
      <Route path="/" element={<Search items={items} loading={loading} />} />
      <Route path="/like" element={<Like likes={likes} items={items} />} />
    </Routes>
  );
}

export default App;
