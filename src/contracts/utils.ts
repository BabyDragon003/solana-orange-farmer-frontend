import { toast } from "react-toastify";

export const showToast = (
  txt: string,
  duration: number = 5000,
  ty: number = 0
) => {
  let type = toast.TYPE.SUCCESS;
  if (ty === 1) type = toast.TYPE.ERROR;
  if (ty === 2) type = toast.TYPE.INFO;

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