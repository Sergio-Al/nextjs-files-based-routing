import React from "react";
import Link from "next/Link";

function ClientsPage() {
  const clients = [
    { id: "sergioid", name: "Sergio" },
    { id: "alejandroid", name: "Alejandro" },
  ];
  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
