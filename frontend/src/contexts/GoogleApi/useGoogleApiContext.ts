import { useContext } from "react";
import { GoogleApiContext } from "./context";

export default function useGoogleApiContext() {
  return useContext(GoogleApiContext);
}