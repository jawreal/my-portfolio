export const formatNumber = (projectNumber: number): string => {
  // Add zero to a whole number (e.g., 01, 02, etc.)
  return projectNumber.toString().padStart(2, "0");
};