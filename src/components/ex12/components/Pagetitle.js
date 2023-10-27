import { Helmet } from "react-helmet";
export const Pagetitle = ({ name }) => {
  return (
    <Helmet>
      <title>{name}</title>
    </Helmet>
    // 각 페이지 타이틀 정의
  );
};
