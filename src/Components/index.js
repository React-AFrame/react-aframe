export default (
  geometry,
  material,
  position,
  rotation,
) => {
  if(geometry !== undefined) {
    let { primitive } = geometry;
    var geometryString = `primitive: ${primitive};`
    Object.keys(geometry).forEach((key, index) => {
      if(key === 'primitive') return;
      if(index !== Object.keys(geometry).length -1){
        geometryString += ` ${[key]}: ${Object.values(geometry)[index]}; `
      } else {
        geometryString += ` ${[key]}: ${Object.values(geometry)[index]}`
      }
    })
  }
  let materialString = ''
  Object.keys(material).forEach((key, index) => {
    if(index === 0){
      Object.keys(material)[index + 1] ? materialString += `${[key]}: ${Object.values(material)[index]}; ` :
      materialString += `${[key]}: ${Object.values(material)[index]}`
    } else {
      Object.keys(material)[index + 1] ? materialString += `${[key]}: ${Object.values(material)[index]}; ` :
      materialString += `${[key]}: ${Object.values(material)[index]}`
    }
  })
  if(geometry === undefined){

        return {
          material: materialString
       }
  }
  let { xP, yP, zP } = position;
  let { xR, yR, zR } = rotation;
  // console.log('geometryString: ' + geometryString);

  return {
    geometry: geometryString,
    material: materialString,
    position: `${xP} ${yP} ${zP}`,
    rotation: `${xR} ${yR} ${zR}`}

  }
