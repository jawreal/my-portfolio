interface MyStats {
  title: string;
  description: string;
}

const myStats: MyStats[] = [
  {
    title: "SCALABLE SYSTEMS",
    description:
      "Backend architectures and APIs built to grow with your product — from MVP to production load.",
  },
  {
    title: "TYPE-SAFE APPS",
    description:
      "Fullstack TypeScript from database to UI, so bugs get caught at compile time, not in production.",
  },
  {
    title: "FAST INTERFACES",
    description:
      "React UIs optimized for speed and responsiveness — smooth on any screen, any connection.",
  },
];

export { myStats, type MyStats };