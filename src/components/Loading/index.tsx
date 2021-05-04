import animationData from "../../../public/loading.json";
import styles from "./styles.module.scss";
import Lottie from "react-lottie";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.loading}>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
}