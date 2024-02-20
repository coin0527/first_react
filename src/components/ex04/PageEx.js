const site = [
  {
    id: 1,
    name: "네이버",
    con: "https:naver.com",
  },
  {
    id: 2,
    name: "카카오",
    con: "https:kakaopage.com",
  },
  {
    id: 3,
    name: "구글",
    con: "https:google.com",
  },
];

export const PageEx = () => {
  return (
    <div>
      <h2> 즐겨찾기 </h2>
      {site.map((look) => (
        <h3 key={look.id}>
          <a href={look.con} target="_blank">
            {look.name}
          </a>
        </h3>
      ))}
    </div>
  );
};
