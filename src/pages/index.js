import React, {
  useEffect
} from "react"
import { graphql, useStaticQuery } from "gatsby"

function IndexPage() {

const DATA_QUERY = useStaticQuery(graphql`
  query {
    elApi { 
      allMimHomePages {
        intro
        about
        facebook
        partners
      }
      allMimPeople(where: { showOnHome: true }) {
        name
        title
        bio
        image {
          publicId
        }
      }
    }
  }
`);

  useEffect(() => {
        document.onkeydown = (evt) => {
          console.log(evt.code);
        };
  });

  return (
    <main>
      <title>Home Page</title>
      <code>{JSON.stringify(DATA_QUERY)}</code>
    </main>
  );
}

export default IndexPage
