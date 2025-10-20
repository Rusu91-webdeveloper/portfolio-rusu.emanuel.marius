import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "../../context/ThemeContext";
import * as THREE from "three";

function StarField() {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}>
        <PointMaterial
          transparent
          color={theme === "dark" ? "#fff" : "#000"}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 1] }}
          style={{ background: "transparent" }}>
          <StarField />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Background3D;
