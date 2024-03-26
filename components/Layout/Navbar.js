import React from "react";
import Link from "utils/ActiveLink";

const NavbarStyle2 = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area fixed-top navbar-style-two">
        <div className="main-navbar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/images/logo.png"
                    alt="동우개발 로고"
                    // className="o"
                    style={{width: "200px", marginLeft: "20px"}}
                  />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      회사소개 <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/info/greet" activeClassName="active">
                          <a className="nav-link">인사말</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/info/overview" activeClassName="active">
                          <a className="nav-link">{`회사 개요(사훈, 경영이념)`}</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/info/business" activeClassName="active">
                          <a className="nav-link">경영방침</a>
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link href="/info/partner" activeClassName="active">
                          <a className="nav-link">협력사</a>
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link href="/info/history" activeClassName="active">
                          <a className="nav-link">연혁</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/info/map" activeClassName="active">
                          <a className="nav-link">오시는 길</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      주요사업 <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/major/management" activeClassName="active">
                          <a className="nav-link">공동주택의 토탈 관리 서비스</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/major/facilities" activeClassName="active">
                          <a className="nav-link">오피스텔·상가·기타 업무용 건물의 시설</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/major/asset" activeClassName="active">
                          <a className="nav-link">자산관리 서비스</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/major/implementation" activeClassName="active">
                          <a className="nav-link">시행&시공사에 대한 관리부분 컨설팅 서비스</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* 공동주택관리, 빌딩종합관리, 부동산자산관리, 인사관리, 회계관리, 경비보안관리, 조경 · 미화 관리 */}
                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a className="nav-link">
                        관리분야 <i className="ri-arrow-down-s-line"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/management/housing" activeClassName="active">
                          <a className="nav-link">공동주택관리</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/management/building" activeClassName="active">
                          <a className="nav-link">빌딩종합관리</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/management/estate" activeClassName="active">
                          <a className="nav-link">부동산자산관리</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/management/hrd" activeClassName="active">
                          <a className="nav-link">인사관리</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/management/financial" activeClassName="active">
                          <a className="nav-link">회계관리</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/management/security" activeClassName="active">
                          <a className="nav-link">경비보안관리</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/management/landscape" activeClassName="active">
                          <a className="nav-link">조경 · 미화 관리</a>
                        </Link>
                      </li>

                      {/* <li className="nav-item">
                        <a href="#" className="nav-link">
                          User Pages <i className="ri-arrow-right-s-line"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/login" activeClassName="active">
                              <a className="nav-link">Login</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/register" activeClassName="active">
                              <a className="nav-link">Register</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/forgot-password"
                              activeClassName="active"
                            >
                              <a className="nav-link">Forgot Password</a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/terms-of-service" activeClassName="active">
                          <a className="nav-link">Terms of Service</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/privacy-policy" activeClassName="active">
                          <a className="nav-link">Privacy Policy</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/coming-soon" activeClassName="active">
                          <a className="nav-link">Coming Soon</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/404" activeClassName="active">
                          <a className="nav-link">404 Error Page</a>
                        </Link>
                      </li> */}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      인재 채용 <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/job/advertisement" activeClassName="active">
                          <a className="nav-link">채용공고</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/job/application"
                          activeClassName="active"
                        >
                          <a className="nav-link">입사지원</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="nav-item">
                    <a href="#" className="nav-link">
                      Blog <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog" activeClassName="active">
                          <a className="nav-link">Blog Grid</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/blog-right-sidebar"
                          activeClassName="active"
                        >
                          <a className="nav-link">Blog Right Sidebar</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/blog-details" activeClassName="active">
                          <a className="nav-link">Blog Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link href="https://gw.dwgroup.kr" activeClassName="active">
                      <a className="nav-link" target="_blank">인트라넷</a>
                    </Link>
                  </li>
                </ul>
              </div>


              {/* <div className="others-options d-flex align-items-center">
                <div className="option-item">
                  <form className="search-box">
                    <input
                      type="text"
                      className="input-search"
                      placeholder="Search..."
                    />
                    <button type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </form>
                </div>
 
                <div className="option-item">
                  <Link href="/contact">
                    <a className="default-btn">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarStyle2;
