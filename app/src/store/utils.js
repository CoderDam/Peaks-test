/* Normalize data */
// eslint-disable-next-line import/prefer-default-export
export const normalizeData = (dataArr) => {
  const allIds = [];
  const byId = {};

  dataArr.forEach((item) => {
    allIds.push(item.id);
    byId[item.id] = { ...item };
  });

  return {
    allIds,
    byId,
  };
};
