export const getGradientColors = (text: string) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash % 360);
  const h2 = (h1 + 40) % 360;

  return {
    light: `linear-gradient(135deg, hsl(${h1}, 60%, 50%), hsl(${h2}, 70%, 40%))`,
    dark: `linear-gradient(135deg, hsl(${h1}, 40%, 25%), hsl(${h2}, 45%, 20%))`
  };
};