import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { Audio as ThreeAudio, AudioLoader } from "three";

function GardenAudio() {
  const sound = useRef();
  const listener = useRef(new THREE.AudioListener());
  const audioFile = useLoader(AudioLoader, "/audio/garden.mp3");

  useEffect(() => {
    const audio = new ThreeAudio(listener.current);
    audio.autoplay = true;
    audio.setBuffer(audioFile);
    audio.setLoop(true);
    audio.setVolume(0.5);
    audio.play();
    sound.current = audio;

    return () => {
      if (sound.current) {
        sound.current.stop();
      }
    };
  }, [audioFile]);

  return null;
}

export default GardenAudio;
