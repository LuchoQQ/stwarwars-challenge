import React from 'react';
import { Rings } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <Rings
        height="80"
        width="80"
        color="#FFE81F"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="star-wars-loading"
      />
    </div>
  );
};

export default Loader;