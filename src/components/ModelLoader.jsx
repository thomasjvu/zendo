import { Html, useProgress } from "@react-three/drei";

function ModelLoader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
}

export default ModelLoader
