import React from "react";
import Head from "next/head";
import { inject, observer } from "mobx-react";
// local files
import { HomeComponent } from "../components/home";

const Home = inject("store")(observer(({store}) => {
  React.useEffect(() => {
    store.auth.getTestData();
  }, [store.auth]);
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
    </div>
  )
}));

export default Home;
