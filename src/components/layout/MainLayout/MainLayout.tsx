import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: any,
}


const MainLayout: React.FC<Props> = ({children}) => {

  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;