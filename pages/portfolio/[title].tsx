import { Router, useRouter } from "next/router";
import { LOCAL_URL } from "../../contants/urls";

export default function WorkDetails({ works }) {
  const router = useRouter();
  const { title } = router.query;

  return (
    <>
      <h1>Hello {title} details</h1> {JSON.stringify(works)}
    </>
  );
}

WorkDetails.getInitialProps = async ({ query }) => {
  const works = await (
    await fetch(`${LOCAL_URL}/api/works?title=${query.title}`)
  ).json();

  return { works };
};
