export const getCorrectImagePath = (imagePath: string): string => {
  const imageNameAndExtension = imagePath.split('/')[1];
  return `src/assets/images/${imageNameAndExtension}`;
};
