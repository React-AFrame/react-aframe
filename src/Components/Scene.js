import React, { Component } from 'react';
import VRObject from './VRObject';
import Camera from './Camera';
// import { getVRObjects } from './db';

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      vrObjects: [
        {
        geometry: {
          primitive: 'box',
          width: 3,
          height: 15,
          depth: 3
        },
        material: {
          color: 'grey'
        },
        position: {
          xP: -1,
          yP: 1,
          zP: -15
        },
        rotation: {
          xR: 0,
          yR: 45,
          zR: 0
        }
      },
      {
          geometry: {
          primitive: 'box',
          width: 3,
          height: 12,
          depth: 3
        },
        material: {
          color: 'blue'
        },
        position: {
          xP: 45,
          yP: 0.5,
          zP: -3
        },
        rotation: {
          xR: 0,
          yR: 45,
          zR: 0
        }
      },
      {
        geometry: {
          primitive: 'plane',
          width: 6,
          height: 3
        },
        material: {
          color: '#4CC3D9'
        },
        position: {
          xP: -1,
          yP: 0.5,
          zP: -3
        },
        rotation: {
          xR: 0,
          yR: 45,
          zR: 0
        }
      },
      {
        geometry: {
          primitive: 'sphere',
          radius: 1000,
        },
        material: {
          color: 'yellow'
        },
        position: {
          xP: 3000,
          yP: 5555,
          zP: -10000
        },
        light: {
          color: '#DDDDFF',
          intensity: 9
        },
        rotation: {
          xR: 0,
          yR: 4,
          zR: 0
        }
      },
      {
        geometry: {
          primitive: 'cylinder',
          radius: 1000,
          height: 0.1
        },
        material: {
          color: 'green'
        },
        position: {
          xP: 0,
          yP: 0,
          zP: -3
        },
        rotation: {
          xR: 0,
          yR: 0,
          zR: 0
        }
      }
    ],
      scene: ""
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render(){
    let objects = this.state.vrObjects;
    console.log(objects.map(object => console.log(object)));
    return (
      <a-scene vr-mode-ui="enabled: false" background="color: lightblue">
        {objects.map(object => object.radius ? (
            <VRObject
              key={Math.random()}
              geometry={object.geometry}
              material={object.material}
              position={object.position}
              rotation={object.rotation}
              radius={object.radius}
            />
          ) : <VRObject
              key={Math.random()}
              geometry={object.geometry}
              material={object.material}
              position={object.position}
              rotation={object.rotation}
            />
        )}
        <Camera/>
      </a-scene>
    )
  }
}
