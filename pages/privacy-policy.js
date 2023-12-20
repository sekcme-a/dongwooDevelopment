import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <PageBanner title="개인정보 수집 및 이용" subtitle="Privacy Policy" homeText="개인정보 수집 및 이용" homeUrl="/privacy-policy" />

      <div className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="privacy-policy-content">
            <p>
              <i>{`본인은 귀사에 입사지원서류를 제출함에 따라 [개인정보 보호법] 제15조 및 제22조에 따라 동의를 얻어야 하므로 이에 본인은 귀사의 개인정보 수집 및 이용에 관하여 아래 내용을 동의합니다.`}</i>
            </p>
            <h3>
              <span>1.</span> 개인정보의 수집 및 이용에 관한 사항
            </h3>
              <p style={{whiteSpace:"pre-line"}}>
                {`-수집하는 개인정보항목(이력서 및 개인 신고서 양식)
                성명, 주민등록번호, 전화번호, 주소, 혈액형, 가족사항, 자택전화, 이동전화, 학력사항, 상벌현황, 병역사항, 보훈장애, 자격 및 교육이수현황, 지인현황, 활동경력
                
                -개인정보 이용의 목적
                회사는 수집한 개인정보를 본사 또는 사업장의 직원으로 채용 시 필요한 채용심사용으로 활용하는 목적 외 입사지원자가 제공한 모든 개인정보는 타 용도로는 사용되지 않습니다.
                
                `}
              </p>
            <h3>
              <span>2.</span> 개인정보의 보관 및 이용 기간
            </h3>
            <p style={{whiteSpace:"pre-line"}}>
              {`-회사는 입사지원일로부터 아래 기간 동안 입사지원자의 개인정보를 이용 및 보관하게 됩니다.
              
              -개인정보 수집 및 이용에 관한 동의를 철회하는 경우, 수집 및 이용 목적이 달성되거나 보관 및 이용기간이 종료한 경우 해당 개인정보를 지체 없이 파기하며 이 경우 개인정보는 어떠한 용도로도 열람 또는 재이용할 수 없도록 처리 됩니다.
              
              -채용이 완료된 자의 수집된 개인정보 보관
              보관사유 및 기간 : 회사 내 인사관리기록용으로 5년간 보관 
              
              -채용이 안 된 자의 수집된 개인정보 보관
              보관사유 및 기간 : 동일 조건의 사업장 배치를 위해 지원일로부터 심사용으로 1개월간 보관
              
              `}
            </p>
            <h3>
              <span>3.</span> 수집항목 : 주민등록번호
            </h3>
            <p style={{whiteSpace:"pre-line"}}>
              {`-보관사유 및 기간 : 채용완료 시 회사 내 인사관리용으로 반영구적 보관
              
              ※ 귀하는 개인정보 및 고유식별 정보 수집에 대한 동의를 거부할 권리가 있으며 다만, 동의하지 않는 경우 채용 심사에서 불이익을 받을 수 있습니다.
              
              (주) 동우개발`}
            </p>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
