export const getCurrentPrize = (imgList, points) => (
  imgList.filter((img) => points >= img.min && points <= img.max && img
  )
);
