import { hot } from 'react-hot-loader/root';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ColumnList from '../containers/ColumnList';
import reducer from '../reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <ColumnList />
      </DndProvider>
    </Provider>
  );
};

export default hot(App);
