import { useContext } from "react";
import { GoogleApiContext } from "../contexts/GoogleApi/context";

export default function useGoogleApiContext() {
  return useContext(GoogleApiContext);
}