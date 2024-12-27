import { useOutletContext } from "react-router-dom";

interface OutletContext {
  canvasRef: React.RefObject<HTMLDivElement>;
}

const useCanvasRef = () => {
  return useOutletContext<OutletContext>().canvasRef;
};

export default useCanvasRef;
