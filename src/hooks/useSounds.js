import { useEffect, useRef } from "react";
import * as Tone from "tone";

export default function useSounds() {
  const mySampler = useRef(null);
  useEffect(() => {
    const sampler = new Tone.Sampler({
      urls: {
        //! Pour des sons personnalisés il suffit de les importer et de passer un objet a tone.sampler comme par exemple  {C4: instru1, "D#4: instru2, etc..*/
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();
    Tone.loaded().then(() => {
      mySampler.current = sampler;
    });
  }, []);

  const soundPlay = (note) => {
    mySampler.current.triggerAttackRelease([note], 4);
  };

  const handleKeyDown = ({ key }) => {
    switch (key) {
      case "a":
        soundPlay("C4");
        break;
      case "z":
        soundPlay("D#4");
        break;
      case "e":
        soundPlay("F#4");
        break;
      case "r":
        soundPlay("A4");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const buttonsList = [
    {
      soundPlay: () => soundPlay("C4"),
    },
    {
      soundPlay: () => soundPlay("D#4"),
    },
    {
      soundPlay: () => soundPlay("F#4"),
    },
    {
      soundPlay: () => soundPlay("A4"),
    },
  ];

  return { buttonsList };
}
