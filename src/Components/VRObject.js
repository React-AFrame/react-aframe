import React from 'react';
import createStrings from './'

export default (props) => {
    let { geometry, material, position, rotation } = props;
    let stringObject = createStrings(geometry, material, position, rotation);
    return (
      <a-entity
        id={props.id}
         geometry={stringObject.geometry}
         material={stringObject.material}
         position={stringObject.position}
         rotation={stringObject.rotation}
      />
    )
  }
