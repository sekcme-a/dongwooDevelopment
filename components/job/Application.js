import React, { useEffect, useState } from "react";
import Link from "next/link";
import MultipleFilesSelect from "./MultipleFilesSelect"

import { firestore as db } from "firebase/firebase";
import { useRouter } from "next/router";


// Form initial state
const INITIAL_STATE = {
  name: "",
  phoneNumber: "",
  text: "",
};

const Application = () => {
  const router = useRouter()
  const [contact, setContact] = useState(INITIAL_STATE);
  const [fileList, setFileList] = useState([])
  const [isChecked, setIsChecked] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isFileSubmitting, setIsFileSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(contact.name===""||contact.phoneNumber===""||contact.text===""){
      alert("필수항목을 모두 채워주세요.")
    } else if(!isChecked){
      alert("개인정보 수집 및 이용에 동의해주세요.")
    }
    else {
      setIsSubmitting(true)
      setIsFileSubmitting(true)
    }
  };
  //파일들 업로드 되면 전체 제출
  useEffect(()=> {

    const uploadData = async () => {
      await db.collection("team").doc("development").collection("applications").doc().set({
        ...contact,
        fileList: fileList,
        createdAt: new Date(),
        unread: true,
      })
      setIsSubmitting(false)
      alert("성공적으로 제출되었습니다. 지원해주셔서 감사합니다.")
      router.reload()
    }

    if(fileList.length!==0 && isSubmitting) uploadData()
  },[fileList])

  return (
    <>
      <div className="contact-area pb-100">
        <div className="container">
          <div className="dev-serviceTitle">
            <h2>입사지원</h2>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>이름 *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>연락처 *</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      className="form-control"
                      value={contact.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>지원하는 채용공고명 및 지원분야 *</label>
                    <textarea
                      name="text"
                      cols="30"
                      rows="6"
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>이력서 및 자기소개서 *</label>
                    <MultipleFilesSelect
                      list={fileList} setList={setFileList}
                      isSubmitting={isFileSubmitting} setIsSubmitting={setIsFileSubmitting}
                      path={`development/${contact.name}_${contact.phoneNumber}`}
                    />


                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12" style={{marginTop:"30px"}}>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="checkme"
                      value={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="checkme">
                      <Link href="/privacy-policy">
                        <a target="_blank">개인정보 수집 및 이용에 동의합니다.</a>
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12" style={{marginTop: "30px"}}>
                  <button type="submit" className="btn dev_mainbutton" disabled={isSubmitting}>
                    {isSubmitting ? "제출중" : "제출"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
