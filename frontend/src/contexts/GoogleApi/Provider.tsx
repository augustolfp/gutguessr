import { GoogleApiContext } from "./context";
import { streetViewPanorama } from "./config";

interface ProviderProps {
  children?: React.ReactNode;
}

export default function GoogleApiProvider({ children }: ProviderProps) {

    const updateStreetView = () => {

    };

    return (
        <GoogleApiContext.Provider value={{
            updateStreetView
        }}>
            {children}
        </GoogleApiContext.Provider>
    );
}