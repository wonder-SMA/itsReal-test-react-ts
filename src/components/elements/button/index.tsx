import React from 'react';
import './style.css';

type ButtonProps = {
  title: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="button" onClick={props.onClick}>{props.title}</button>
  );
};

export default React.memo(Button);
