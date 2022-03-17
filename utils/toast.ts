import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ConfigToastProps {
  position: string;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: any;
}

const configToast: any = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

const toastMessage = (message: string, status: string) => {
  switch (status) {
    case "error":
      toast.error(`${message}`, configToast);
      break;
    case "warning":
      toast.warn(`${message}`, configToast);
      break;
    case "normal":
      toast.success(`${message}`, configToast);
      break;
    default:
      toast(`${message}`, configToast);
  }
};

export default toastMessage;
