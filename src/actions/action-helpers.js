export function actionCreator (type, props = {}) {
  return Object.assign({ type }, props);
}
