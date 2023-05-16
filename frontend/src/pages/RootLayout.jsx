import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <Outlet />
      {navigation.state === "loading" && <p>Loading...</p>}
    </>
  );
};

export default RootLayout;
