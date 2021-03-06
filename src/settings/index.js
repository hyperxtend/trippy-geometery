export const defaultConfig = {
  white: false,
  nbVertexes: 5,
  nbObjects: 25,
  objectMinRadius: 1,
  objectRadiusCo: 2,
  objectThickness: 0.5,
  objectDepth: 0.5,
  rotationX: 0,
  rotationY: 360,
  rotationZ: 360,
  animationDuration: 9,
  animationDelay: 0.1,
  cameraZ: 75,
};

let demos = [
  {
    ...defaultConfig,
    white: false,
    nbVertexes: 7,
    objectRadiusCoef: 4,
    objectThickness: 1,
    rotationX: 360,
    rotationY: 0,
    rotationZ: 0,
    animationDuration: 5,
  },
  {
    ...defaultConfig,
    white: true,
    nbObjects: 50,
    objectRadiusCoef: 10,
    objectThickness: 0.2,
    objectDepth: 1,
    animationDuration: 11,
  },
  { ...defaultConfig, objectRadiusCoef: 3, objectThickness: 1, objectDepth: 0.2, rotationY: 180 },
  {
    ...defaultConfig,
    white: true,
    nbVertexes: 7,
    nbObjects: 70,
    objectRadiusCoef: 3,
    objectThickness: 0.2,
    objectDepth: 0.2,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 360,
    animationDuration: 7,
  },
  {
    ...defaultConfig,
    white: false,
    nbVertexes: 4,
    objectRadiusCoef: 10,
    objectThickness: 2,
    objectDepth: 0.5,
    rotationX: 0,
    rotationY: 360,
    rotationZ: 0,
    animationDuration: 7,
  },
];

export let config = { ...demos[0] };
