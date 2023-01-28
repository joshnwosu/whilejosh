import React from "react";

interface Props {
  inter: any;
}

export default function Me({ inter }: Props) {
  return (
    <div>
      <div>
        <h1 className={inter.className}>Joshua Nwosu</h1>
        <h2 className={inter.className}>Software Engineer at Mindiv</h2>
      </div>
      <div>
        <p>
          I build open-source front-end libraries at Algolia and host two tech
          podcasts: Developer Experience and Entre Devs.
        </p>
        <p>
          On my spare time, I share what I learn on my blog and speak at tech
          conferences around the world.
        </p>
      </div>
    </div>
  );
}
