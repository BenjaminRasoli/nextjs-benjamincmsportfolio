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

  console.log(navbar);

  return (
    <div>
      {navbar.map((item) => (
        <ul>
          <li> {item.mainTitle}</li>
          <li>
            {item.links.map((link: any) => (
              <li>
                <a href={"#" + link.label}>{link.label}</a>
              </li>
            ))}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Navbar;
