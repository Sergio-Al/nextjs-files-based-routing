import React from "react";
import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    // router.push("/clients/sergioid/projecta");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "sergioid", clientProjectId: "projecta" },
    });
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}

export default ClientProjectsPage;
