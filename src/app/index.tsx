import React from 'react';
import Main from './main';

/**
 * Приложение
 * @return {React.ReactElement} Виртуальные элементы React
 */
const App: React.FC = () => {
  return (
    <Main />
  );
};

export default React.memo(App);
