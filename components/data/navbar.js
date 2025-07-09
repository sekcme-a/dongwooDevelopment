export const NavbarList = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "회사소개",
    url: "/info/greet",
    child: [
      {
        text: "인사말",
        url: "/info/greet",
      },
      {
        text: "회사 개요(사훈, 경영이념)",
        url: "/info/overview",
      },
      {
        text: "경영방침",
        url: "/info/business",
      },
      {
        text: "연혁",
        url: "/info/history",
      },
      {
        text: "오시는 길",
        url: "/info/map",
      },
    ],
  },
  {
    text: "주요사업",
    url: "/major/management",
    child: [
      {
        text: "공동주택의 토탈 관리 서비스",
        url: "/major/management",
      },
      {
        text: "오피스텔 · 상가 · 기타 업무용 건물의 시설",
        url: "/major/facilities",
      },
      {
        text: "자산관리 서비스",
        url: "/major/asset",
      },
      {
        text: "시행&시공사에 대한 관리부분 컨설팅 서비스",
        url: "/major/implementation",
      },
    ],
  },
  {
    text: "홍보센터",
    url: "/article/announcement",
    child: [
      {
        text: "공지사항",
        url: "/article/announcement",
      },
      {
        text: "동우뉴스",
        url: "/article/news",
      },
      {
        text: "사업실적",
        url: "/article/achievements",
      },
    ],
  },
  {
    text: "관리분야",
    url: "/management/housing",
    child: [
      {
        text: "공동주택관리",
        url: "/management/housing",
      },
      {
        text: "빌딩종합관리",
        url: "/management/building",
      },
      {
        text: "부동산자산관리",
        url: "/management/estate",
      },
      {
        text: "인사관리",
        url: "/management/hrd",
      },
      {
        text: "회계관리",
        url: "/management/financial",
      },
      {
        text: "경비보안관리",
        url: "/management/security",
      },
      {
        text: "조경 · 미화 관리",
        url: "/management/landscape",
      },
    ],
  },
  {
    text: "인재 채용",
    url: "/job/advertisement",
    child: [
      {
        text: "채용공고",
        url: "/job/advertisement",
      },
      {
        text: "입사지원",
        url: "/job/application",
      },
    ],
  },
];
