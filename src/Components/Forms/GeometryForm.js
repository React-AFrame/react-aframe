import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default class GeometryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primitive: '',
      width: 0,
      height: 0,
      depth: 0
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleUpdate(e){
    let { target } = e;
    let { name, value } = target;
    await this.setState({[name]: value})
  }
  handleSubmit(e){
    e.preventDefault()
  }
  render(){
    let { primitive, width, height, depth } = this.state;
    let { handleUpdate, handleSubmit } = this;
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="primitiveInput">Primitive</label>
            <input type="text" className="form-control" id="primitiveInput" aria-describedby="primitiveHelp" placeholder="Enter 3D shape type" onChange={handleUpdate} value={primitive}/>
            <small id="emailHelp" className="form-text text-muted">Some shape types are 'box', 'cylinder', etc..</small>
          </div>
          <div className="form-group">
            <label htmlFor="widthInput">Width</label>
            <input type="number" className="form-control" id="widthInput" placeholder="0" onChange={handleUpdate} value={width}/>
          </div>
          <div className="form-group">
            <label htmlFor="heightInput">Height</label>
            <input type="number" className="form-control" id="heightInput" placeholder="0" onChange={handleUpdate} value={height}/>
          </div>
          <div className="form-group">
            <label htmlFor="depthInput">Depth</label>
            <input type="number" className="form-control" id="depthInput" placeholder="0"  onChange={handleUpdate} value={depth}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
