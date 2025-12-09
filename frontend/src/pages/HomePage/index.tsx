import { useEffect, useState } from "react";

import { api } from "../../config/axios";

export default function HomePage() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // O "ignore" utilizado abaixo é um pattern previsto na documentação oficial do React para fetching com useEffect, e sua função é evitar Race Conditions:
    async function fetchLocation() {
      const result = await api.get("/location");
      if (!ignore) {
        setLocation(result.data);
      }
    }

    let ignore = false;
    fetchLocation();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <h1>Home Page!</h1>
      <div>{JSON.stringify(location)}</div>
    </div>
  );
}
