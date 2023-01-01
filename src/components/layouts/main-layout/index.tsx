import React from 'react';
import './style.css';

type LayoutProps = {
  head?: React.ReactNode;
  top?: React.ReactNode;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ head, top, children }) => {
  return (
    <div className="layout">
      {top && <div className="top">{top}</div>}
      {head && <div className="head">{head}</div>}
      {children && <div className="content">{children}</div>}
    </div>
  );
};

export default React.memo(Layout);
