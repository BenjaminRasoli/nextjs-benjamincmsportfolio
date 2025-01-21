import React from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const NAVBAR_QUERY = `*[_type == "navbar"]`;

const options = { next: { revalidate: 30 } };

async function Navbar() {
  const navbar = await client.fetch<SanityDocument[]>(
    NAVBAR_QUERY,
    {},
    options
  );

  return (
    <div>
      {navbar.map((item) => (
        <ul key={item._id}>
          <li> {item.mainTitle}</li>
        </ul>
      ))}
    </div>
  );
}

export default Navbar;
