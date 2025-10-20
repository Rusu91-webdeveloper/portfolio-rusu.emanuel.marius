import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

// Country coordinates and data
const HIGHLIGHTED_COUNTRIES = [
  {
    name: "Germany",
    id: "germany",
    lat: 51.1657,
    lng: 10.4515,
    color: "#FF4444",
    flag: "/flags/germany.png",
    years: "2017 - 2025",
    description:
      "2017-2023: Machine Operator; 2023-2025: Full-Stack Development",
  },
  {
    name: "Romania",
    id: "romania",
    lat: 45.9432,
    lng: 24.9668,
    color: "#44FF44",
    flag: "/flags/romania.png",
    years: "Home Country",
    description: "Origins & cultural background",
  },
  {
    name: "UK-London",
    id: "uk-london",
    lat: 51.5074,
    lng: -0.1278,
    color: "#4444FF",
    flag: "/flags/uk.png",
    years: "2013 - 2017",
    description: "Professional development period",
  },
  {
    name: "France",
    id: "france",
    lat: 46.2276,
    lng: 2.2137,
    color: "#FFFF44",
    flag: "/flags/france.png",
    years: "2009 - 2011",
    description: "Early career experience",
  },
];

// Marker component with hover effect
const CountryMarker: React.FC<{
  position: THREE.Vector3;
  color: string;
  name: string;
  flag: string;
  onClick: () => void;
}> = ({ position, color, name, flag, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();
  const markerRef = useRef<THREE.Mesh>(null);

  // Update marker size on hover
  const scale = hovered ? 1.5 : 1;

  return (
    <group position={position}>
      {/* Invisible hit area to ensure reliable raycasting for clicks/hover */}
      <mesh
        ref={markerRef}
        scale={[scale, scale, scale]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial
          transparent
          opacity={0.001}
          depthWrite={false}
        />
      </mesh>

      {/* Pin marker rendered as HTML for a Google Maps-like style */}
      <Html
        position={[0, 0, 0]}
        style={{ transform: "translate(-50%, -100%)", pointerEvents: "none" }}>
        <div
          style={{
            position: "relative",
            width: hovered ? 24 : 20,
            height: hovered ? 28 : 24,
            transition:
              "transform 0.15s ease, width 0.15s ease, height 0.15s ease",
            transform: hovered ? "translateY(-2px)" : "none",
            cursor: "pointer",
          }}>
          {/* Head of the pin */}
          <div
            style={{
              width: "100%",
              height: "70%",
              background: color,
              borderRadius: 9999,
              border: "2px solid rgba(0,0,0,0.15)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
              display: "grid",
              placeItems: "center",
              color: "#fff",
              fontSize: 12,
              lineHeight: 1,
            }}>
            {/* Small flag inside the pin head */}
            <span aria-label={`${name} flag`}>
              {name === "Germany" && "🇩🇪"}
              {name === "Romania" && "🇷🇴"}
              {name === "UK-London" && "🇬🇧"}
              {name === "France" && "🇫🇷"}
              {name === "DR Congo" && "🇨🇩"}
            </span>
          </div>
          {/* Tail of the pin (diamond) */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: 2,
              width: 10,
              height: 10,
              background: color,
              transform: "translateX(-50%) rotate(45deg)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
              borderLeft: "1px solid rgba(0,0,0,0.15)",
              borderBottom: "1px solid rgba(0,0,0,0.15)",
            }}
          />
        </div>
      </Html>

      {/* Hover tooltip with flag and name */}
      {hovered && (
        <Html
          position={[0, 0.4, 0]}
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            padding: "8px",
            borderRadius: "4px",
            color: "white",
            width: "140px",
            textAlign: "center",
            transform: "translate(-50%, -100%)",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}>
            <span style={{ fontSize: 18 }}>
              {name === "Germany" && "🇩🇪"}
              {name === "Romania" && "🇷🇴"}
              {name === "UK-London" && "🇬🇧"}
              {name === "France" && "🇫🇷"}
              {name === "DR Congo" && "🇨🇩"}
            </span>
            <div>{name}</div>
          </div>
        </Html>
      )}
    </group>
  );
};

const Earth: React.FC = () => {
  const navigate = useNavigate();
  const meshRef = useRef<THREE.Mesh>(null);
  const markersRef = useRef<THREE.Group>(null);

  // Create a basic material for initial render
  const [material, setMaterial] = useState<THREE.Material>(
    new THREE.MeshStandardMaterial({
      color: "#1E4D6B",
      metalness: 0.1,
      roughness: 0.8,
    })
  );

  // Load Earth texture
  React.useEffect(() => {
    const loader = new TextureLoader();
    loader.load(
      "/earth-texture.jpg",
      (texture) => {
        setMaterial(
          new THREE.MeshStandardMaterial({
            map: texture,
            metalness: 0.1,
            roughness: 0.8,
          })
        );
      },
      undefined,
      (error) => {
        console.error("Error loading texture:", error);
      }
    );
  }, []);

  // Static globe - no auto-rotation
  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += 0.001;
  //   }
  //   if (markersRef.current) {
  //     markersRef.current.rotation.y += 0.001;
  //   }
  // });

  // Convert lat/lng to 3D coordinates
  const latLngToVector3 = (
    lat: number,
    lng: number,
    radius: number
  ): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  };

  return (
    <>
      {/* Earth sphere */}
      <mesh
        ref={meshRef}
        rotation={[0, -Math.PI / 6, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        {material && (
          <primitive
            object={material}
            attach="material"
          />
        )}
      </mesh>

      {/* Country markers */}
      <group
        ref={markersRef}
        rotation={[0, -Math.PI / 6, 0]}>
        {HIGHLIGHTED_COUNTRIES.map((country) => {
          const position = latLngToVector3(country.lat, country.lng, 2.1);
          return (
            <CountryMarker
              key={country.id}
              position={position}
              color={country.color}
              name={country.name}
              flag={country.flag}
              onClick={() => navigate(`/country/${country.id}`)}
            />
          );
        })}
      </group>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
      />
      <pointLight
        position={[-10, -10, -5]}
        intensity={0.5}
      />
    </>
  );
};

const LoadingFallback = () => {
  return null;
};

const GlobeContainer: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{
          position: [0, 1, 7], // Adjusted to better view Europe and Africa with all pins visible
          fov: 50,
        }}>
        <Suspense fallback={<LoadingFallback />}>
          <Earth />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={false}
          minDistance={5}
          maxDistance={10}
          // Set initial rotation to focus on Europe/Africa region
          target={[0, 0, 0]}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default GlobeContainer;
