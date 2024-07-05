import React,{useState, useEffect} from "react";
import Link from 'next/link';
import Image from "next/image";
import EditButton from "components/admin/EditButton";
import useData from "context/data";

const PageBanner = ({ title, homeText,subtitle,  homeUrl }) => {
  const {data} = useData()

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      if(window.innerWidth<=600 && !isMobile)
        setIsMobile(true)
      else if(window.innerWidth>600 && isMobile)
        setIsMobile(false)
    };

    // Initial window width
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <>
      <div className="page-banner-area" style={{position:"relative", height:"400px"}}>
        <div style={{position:"absolute", top: 0, left: 0, width:"100%", height:"100%", backgroundColor:"#1a0602", opacity:.6}} />
        <Image style={{position:"absolute", top: 0, left: 0, width:"100%", height:"100%", zIndex:-1, objectFit:"cover" }}
          layout="fill" objectFit="cover" quality={10} src={data.main.dwdev_bannerBg ?? "/images/banner_bg.jpg" }
          alt="배너 이미지"
        />

        <EditButton
          type="main" item="dwdev_bannerBg" text="배경이미지 삽입" mode="image" defaultImg="/images/banner_bg.jpg" 
          style={{position:"absolute", top: 150, right: 100}}
        />
        {/* <div className="container"  >
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <h2 style={{color:"white"}}>{title}</h2>


              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div
                className="page-banner-image"
              >
                <img
                  src="/images/page-banner-image.png"
                  alt="동우개발"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
              </div>
                <ul>
                  <li>
                    <Link href={homeUrl}>
                      <a style={{color:"white"}}>{homeText}</a>
                    </Link>
                  </li>
                  <li style={{color:"white"}}>{title}</li>
                </ul>
            </div>
          </div>
        </div> */}
        <div style={{ width:"100%", height:"100%", display:"flex", flexWrap:"wrap", alignItems:"center",
          ...(isMobile ? {justifyContent:'center'} : {justifyContent:"space-between", padding: "0 100px"})
        }}>
          <div
            data-aos={isMobile? "fade" : "fade-right"}
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2 style={{color:"white", ...(isMobile ? {fontSize: "21px"} : {})}}>{title}</h2>
            <h4 style={{color:"white", ...(isMobile ? {fontSize: "19px"} : {})}}>{!isMobile && "|"} {subtitle}</h4>
          </div>
          {!isMobile && 
            <div 
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100px"}}>
                <div style={{color:"rgb(211, 211, 211)", display:"flex", justifyContent:"center", alignItems:"center"}}>{homeText}</div>
                <div style={{color:"white", padding: "0 10px", display:"flex", justifyContent:"center", alignItems:"center"}}>{`>`}</div>
                <div style={{color:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>{title}</div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default PageBanner;
