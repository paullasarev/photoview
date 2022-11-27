export const parseNumber = (num: any, fallback: number): number => {
  const parsed = parseInt(num);
  return !isNaN(parsed) ? parsed : fallback;
};
