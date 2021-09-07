import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, createCounter, resetMyCounter } from './store/actions';
import { useEffect } from 'react';
import Button from './components/button';
import Text from './components/text';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector(state => state.counters);
  const onReset = id => dispatch(resetMyCounter(id));
  const onIncrement = id => dispatch(incrementCounter(id));
  const handleClick = e => {
    onIncrement(counter.id);
  }
  const resetCounter = e => {
    onReset(counter.id);
  }
  useEffect(() => {
    dispatch(createCounter());
  }, [dispatch]);
  console.log('counter', counter);
  return (
    <div className="App">
      <Button
        handleClick={e => handleClick(e)}
        primaryText='Click me'
        primaryColor='green'
      />
      <Text text={counter.value} />
      <Button
        handleClick={e => resetCounter(e)}
        primaryText='Reset counter'
        primaryColor='violet'
      />
    </div>
  );
}

export default App;
