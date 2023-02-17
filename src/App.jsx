import { useState } from "react";
import "tw-elements";
import "./App.css";

// ! Import Component
import Video from "./components/Video";
import ModalSuccess from "./components/ModalSuccess";
import ModalSuccess2 from "./components/ModalNoFp";

export default function App() {
  // return <Video />;
  return <ModalSuccess />;
  // return <ModalNoFp />;
}
