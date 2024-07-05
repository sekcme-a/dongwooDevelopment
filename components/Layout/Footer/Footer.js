import React from "react";
import Link from "next/link";
import useData from "context/data";
import EditButton from "components/admin/EditButton";

import styles from "./Footer.module.css"
import Image from "next/image";

const PR = {position: "relative"}

const Footer = () => {
  const {data} = useData()
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="dev-footZone pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="dev-footLogo">
                <div className="dev-logo" style={PR}>
                  <EditButton mode="image"
                    type="footer" item="footer_logoUrl" text="로고 삽입"
                    defaultImg="/images/logo.png"
                  />
                  <Link href="/">
                    <a >
                      <Image 
                        src={data.footer.footer_logoUrl ?? "https://firebasestorage.googleapis.com/v0/b/dongwoo-315ab.appspot.com/o/development%2Ffooter%2Ffooter_logoUrl?alt=media&token=3724df96-8253-437c-8753-2fff2f6924f3"} 
                        alt="로고" 
                        width={180}
                        height={50}
                        style={{ backgroundColor:"white"}}
                      />

                    </a>
                  </Link>
                </div>
                <p style={PR}>
                  {data.footer.footer_text ?? "동우개발은 밝은 비전을 제시하며 고객감동 서비스를 경영 이념으로 실천하는 (주)동우개발은 공동주택관리 분야를 선도하는 기업이 되겠습니다."}
                  <EditButton type="footer" item="footer_text" text="내용" />
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="dev-footLogo">
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
                          <Link href="/major/management">
                              <a>토탈관리서비스</a>
                          </Link>
                      </li>
                  </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-sm-6">
              <div className="dev-footLogo ps-5">
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
              <div className="dev-footLogo ps-3">
                <h3>Contact Info</h3>
                <ul className="footer-contact-info">
                  <li style={{position:"relative"}}><span style={{marginRight:"3px"}}>위치:</span> 
                        {data.footer.footer_contactAddress ?? "서울특별시 도봉구 시루봉로 234, 동우빌딩 2층"}
                        <EditButton type="footer" item="footer_contactAddress" text="위치" />
                  </li>
                  <li style={{position:"relative"}}><span style={{marginRight:"3px"}}>이메일:</span> 
                      <a href={`mailto:${data.footer.footer_contactEmail ?? "dongwoodh@hanmail.net"}`}>{data.footer.footer_contactEmail ?? "dongwoodh@hanmail.net"}</a>
                      <EditButton type="footer" item="footer_contactEmail" text="이메일" /> 
                  </li>
                  <li style={{position:"relative"}}><span style={{marginRight:"3px"}}>전화번호:</span> 
                      <a href={`tel:${data.footer.footer_contactPhone ?? "02) 976-2200"}`}>{data.footer.footer_contactPhone ?? "02) 976-2200"}</a>
                      <EditButton type="footer" item="footer_contactPhone" text="전화번호" />
                  </li>
                  <li style={{position:"relative"}}><span style={{marginRight:"3px"}}>FAX:</span> 
                  <a href={`tel:${data.footer.footer_fax ?? "02-903-1297"}`}>{data.footer.footer_fax ?? "02-903-1297"}</a>
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