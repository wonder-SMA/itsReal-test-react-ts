import React from 'react';
import { Item } from '@src/app/main';
import './style.css';

type ListProps = {
  items?: Array<Item>;
  renderItem: (item: Item, index: number) => React.ReactElement;
}

const List: React.FC<ListProps> = (props) => {
  const { items: itemsProp = [] } = props;

  return (
    <div className="list">
      {itemsProp.map((item, index) =>
        <React.Fragment key={item._id}>
          {props.renderItem(item, index)}
        </React.Fragment>
      )}
    </div>
  );
};

export default React.memo(List);
