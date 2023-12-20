import React from "react";
import Link from "next/link";
import useData from "context/data";
import EditButton from "components/admin/EditButton";

const PR = {position: "relative"}

const Footer = () => {
  const {data} = useData()
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="widget-logo" style={PR}>
                  <EditButton mode="image"
                    type="footer" item="footer_logoUrl" text="로고 삽입"
                    defaultImg="/images/logo.png"
                  />
                  <Link href="/">
                    <a >
                      <img src={data.footer.footer_logoUrl} alt="로고" style={{width:"200px", backgroundColor:"white"}}/>

                    </a>
                  </Link>
                </div>
                <p style={PR}>
                  {data.footer.footer_text}
                  <EditButton type="footer" item="footer_text" text="내용" />
                </p>
                {/* <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/EnvyTheme"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/signup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>페이지 이동</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/info/greet">
                      <a>인사말</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/info/overview">
                      <a>회사 개요</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/info/business">
                      <a>경영방침</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/info/partner">
                      <a>협력사</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/info/history">
                      <a>연혁</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>계열사</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="https://gw.dwgroup.kr">
                      <a target="_blank">인트라넷</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://dongwoo-demo.netlify.app/">
                      <a target="_blank">동우그룹</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a target="_blank">동우개발</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a target="_blank">혜진종합관리</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a target="_blank">삼성조경</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-3">
                <h3>Contact</h3>

                <ul className="footer-information">
                  <li>
                    <i className="ri-map-pin-line"></i>
                    {data.footer.footer_contactAddress}
                    <EditButton type="footer" item="footer_contactAddress" text="주소지" />
                  </li>
                  <li>
                    <i className="ri-phone-fill"></i>
                    <a href={`tel:${data.footer.footer_contactPhone}`}>{data.footer.footer_contactPhone}</a>
                    <EditButton type="footer" item="footer_contactPhone" text="전화번호" />
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:dongwoodh@hanmail.net">{data.footer.footer_contactEmail}</a>
                    <EditButton type="footer" item="footer_contactEmail" text="이메일" /> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:'40px'}} />
        {/* <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright {currentYear} Dongwoo All Rights Reserved by {' '}
                <a
                  href="https://envytheme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
