import { useEffect, useState } from "react";
import useRouteCheck from "./useRouteCheck";

export default function useSome() {
  const [isLoading, setIsLoading] = useState(true);

  const loginRoute = useRouteCheck(["login"]);
  const registerRoute = useRouteCheck(["register"]);
  const onboardingRoute = useRouteCheck(["onboarding"]);
  useEffect(() => {
    if (!loginRoute && !registerRoute && !onboardingRoute) {
      setIsLoading(false);
    }
  }, [loginRoute, registerRoute, onboardingRoute]);
  if (isLoading || loginRoute || registerRoute || onboardingRoute) {
    return null;
  } else return true;
}
