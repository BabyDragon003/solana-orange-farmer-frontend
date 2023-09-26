import { toast } from "react-toastify";

export const showToast = (
  txt: string,
  duration: number = 5000,
  let autoClose: any = duration;
  if (duration < 0) {
    autoClose = false;
  }
  return toast.error(txt, {
    position: "bottom-left",
    autoClose,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    type,
    theme: "colored",
  });
};