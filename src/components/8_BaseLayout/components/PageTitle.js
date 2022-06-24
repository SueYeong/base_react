import { Helmet } from "react-helmet-async";

export const PageTitle = ({ text }) => {
  return (
    <Helmet>
      <title>{text}</title>
    </Helmet>
  );
};
