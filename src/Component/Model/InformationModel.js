import {
  Modal,
  Row,
} from "antd";
import styles from "./style.module.css";
import AntdTable from "../Table";
import React from "react";
import { popupData } from "../../Constants";

function InformationModel({data,visible,onClose}) {


  const MissionInfo=[{
    key:"Flight Number",
    value:data.no},
  {
    key:"Mission Name",
    value:data.mission
  },
{
  key:"Rocket Type",
  value:data.popupInfo.rocket_type
},
{
  key:"Rocket Name",
  value:data.rocket
},
{
  key:"Manufacturer",
  value:data.popupInfo.manufacturer
},
{
  key:"Nationality",
  value:data.popupInfo.nationality
},
{
  key:"Launch Date",
  value:data.launched
}
  ]
   
console.log(data)
  return (
    <Modal
      className={styles.antModal}
      footer={null}
      open={visible}
      onCancel={onClose}
      width={"521px"}
      closeIcon={false}
      borderRadius={"18px"}
    >
      <Row gutter={"24px"}>
      <div className={styles.missionHead}>
        <img alt='logo' src={data.popupInfo.img}/>
        
        <div className={styles.topContainer}>
        <h2 className={styles.removeMargin}>{data.mission}
        
         <span className={(data.launchStatus===true?styles.statusSuccess:styles.statusFailed) || (data.launchStatus===null && styles.statusUpcomming)}>{
          data.launchStatus===true?"Success" : "Failed" || (data.launchStatus===null && "Upcomming")}
          </span></h2>
        <p className={styles.removeMargin}>{data.rocket}</p>

          <div className={styles.iconContainer}>
            <img alt='logo' src="https://img.icons8.com/plumpy/24/null/nasa.png"/>
            <img alt='logo' src="https://img.icons8.com/color/48/null/wikipedia--v3.png"/>
            <img alt='logo' src="https://img.icons8.com/ios/50/null/youtube-play--v1.png"/>
          </div>

        </div>
      </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium, justo quis ornare semper, orci purus volutpat diam, a imperdiet odio est fringilla mauris. Nam quam metus, mollis et ante vitae, sodales tempus nisl. Aliquam id leo ac diam auctor vulputate.</p>
        
        <AntdTable
            style={{ fontWeight: 500, padding: 10,width:"120%",border:"none",outline:"none" }}
            tableColumns={popupData}
            showHeader={false}
            dataSource={MissionInfo}
            loading={false}
            handleChange={() => console.log("change")}
            rowClassName={styles.tableRow}
          />
       
       
      </Row>
    </Modal>
  );
}

export default InformationModel;
