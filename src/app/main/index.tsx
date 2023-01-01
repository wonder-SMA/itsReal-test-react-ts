import React, { useCallback, useState } from 'react';
import * as uuid from 'uuid';
import Button from '@src/components/elements/button';
import Item from '@src/components/elements/item';
import Layout from '@src/components/layouts/main-layout';
import List from '@src/components/elements/list';

export type Item = {
  _id: string;
  counter: number;
}

const Main: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const callbacks = {
    // Пересчет элементов списка
    onChange: useCallback((_id: string) => {
      setItems(prevState => prevState.filter(item => item._id !== _id));
    }, []),
    // Добавление нового элемента в список
    onClick: useCallback(() => {
      setItems(prevState => [...prevState, {
        _id: uuid.v4(),
        counter: Math.round(Math.random() * 15) + 15
      }]);
    }, [])
  };

  const renders = {
    // Рендер-функция для элемента списка
    item: useCallback((item: Item, index: number) => (
      <Item
        _id={item._id}
        listId={index + 1}
        counter={item.counter}
        onChange={callbacks.onChange}
      />
    ), [callbacks.onChange]),
  };

  return (
    <Layout head={
      <Button title="Добавить" onClick={callbacks.onClick} />
    }>
      <List items={items} renderItem={renders.item} />
    </Layout>
  );
};

export default React.memo(Main);
