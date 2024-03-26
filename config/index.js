const dev = process.env.NODE_ENV !== "production";
export const BASEPATH = dev
  ? "https://wp.jointviews.com/"
  : "https://wp.jointviews.com/";
