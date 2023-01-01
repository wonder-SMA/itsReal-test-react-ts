import React, { useCallback, useEffect, useState } from 'react';
import './style.css';

type ItemProps = {
  _id: string;
  listId: number;
  counter: number;
  onChange?: (_id: string) => void;
}

const Item: React.FC<ItemProps> = (props) => {
  const { onChange: onChangeProp = () => {} } = props;
  const [state, setState] = useState<number>(props.counter);

  const callbacks = {
    onChange: useCallback(() => onChangeProp(props._id), [props.onChange, props._id])
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setState(prevState => prevState - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (state === 0) {
      callbacks.onChange();
    }
  }, [state]);

  return (
    <div className="item">{`${props.listId}. Исчезнет через ${state} секунд`}</div>
  );
};

export default React.memo(Item);
