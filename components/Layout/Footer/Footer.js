import React from "react";
import Link from "next/link";
import useData from "context/data";
import EditButton from "components/admin/EditButton";

import styles from "./Footer.module.css"

const PR = {position: "relative"}

const Footer = () => {
  const {data} = useData()
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="widget-logo" style={PR}>
                  <EditButton mode="image"
                    type="footer" item="footer_logoUrl" text="로고 삽입"
                    defaultImg="/images/logo.png"
                  />
                  <Link href="/">
                    <a >
                      <img src={data.footer.footer_logoUrl} alt="로고" style={{width:"140px", backgroundColor:"white"}}/>

                    </a>
                  </Link>
                </div>
                <p style={PR}>
                  {data.footer.footer_text}
                  <EditButton type="footer" item="footer_text" text="내용" />
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                  <h3>바로가기</h3>

                  <ul className={`footer-quick-links ${styles.list_container}`} >
                      <li>
                          <Link href="/">
                              <a>Home</a>
                          </Link>
                      </li>
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
                          <Link href="/info/history">
                              <a>연혁</a>
                          </Link>
                      </li>
                      <li>
                          <Link href="/management/housing">
                              <a>공동주택관리</a>
                          </Link>
                      </li>
                      <li>
                          <Link href="/management/building">
                              <a>빌딩종합관리</a>
                          </Link>
                      </li>
                      <li>
                          <Link href="/major/1">
                              <a>토탈관리서비스</a>
                          </Link>
                      </li>
                  </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-sm-6">
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
                      <a target="_blank">동우개발</a>
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
            </div> */}

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget ps-3">
                <h3>Contact Info</h3>
                <ul className="footer-contact-info">
                  <li style={{position:"relative"}}><span>위치:</span> 
                        {data.footer.footer_contactAddress}
                        <EditButton type="footer" item="footer_contactAddress" text="위치" />
                  </li>
                  <li style={{position:"relative"}}><span>이메일:</span> 
                      <a href={`mailto:${data.footer.footer_contactEmail}`}>{data.footer.footer_contactEmail}</a>
                      <EditButton type="footer" item="footer_contactEmail" text="이메일" /> 
                  </li>
                  <li style={{position:"relative"}}><span>전화번호:</span> 
                      <a href={`tel:${data.footer.footer_contactPhone}`}>{data.footer.footer_contactPhone}</a>
                      <EditButton type="footer" item="footer_contactPhone" text="전화번호" />
                  </li>
                  <li style={{position:"relative"}}><span>FAX:</span> 
                  <a href={`tel:${data.footer.footer_fax}`}>{data.footer.footer_fax}</a>
                  <EditButton type="footer" item="footer_fax" text="FAX" />
                  </li>
                   {/* <li><a href="/info/map">찾아오는 길</a></li> */}
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