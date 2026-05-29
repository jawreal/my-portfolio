import { toast } from "sonner";

interface CustomToastProps {
  description?: string;
  status?: "info" | "success" | "error";
  inLadingPage?: boolean;
}

export const CustomToast = ({
  description,
  status,
  inLadingPage = false,
}: CustomToastProps) => {
  if (!description || !status) return;
  toast[status](description, {
    className: `${
      inLadingPage
        ? "!bg-white !border-slate-200 !text-slate-500"
        : "!border-slate-300 dark:!border-slate-800 font-inter !bg-slate-100 dark:!bg-slate-950 !text-slate-700 dark:!text-slate-200"
    }`,
    duration: 3000,
    position: "bottom-right",
  });
};