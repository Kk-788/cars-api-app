import React from 'react';

const VehicleItem = ({ data }) => {
  return (
    <div>
      {data['Model_Name']}
    </div>
  );
};

export default VehicleItem;