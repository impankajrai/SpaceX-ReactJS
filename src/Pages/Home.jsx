import React, { useEffect, useState } from "react";
import {useSearchParams} from 'react-router-dom'
import Loader from "../Component/Loader";
import NoResult from "../Component/NoResult";
import AntdTable from "../Component/Table";
import styles from "./style.module.css";
import { FilterOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { columns } from "../Constants";
import InformationModel from "../Component/Model/InformationModel";

function HomePage() {
  const InitialState = {
    no: "",
    launched: "",
    location: "",
    mission: "",
    orbit: "",
    launchStatus: "",
    rocket: "",
    popupInfo: {
      details: "",
      rocket_type: "",
      img: "",
      nationality: "",
      manufacturer: "",
    },
  };

  const [tableData, setTableData] = useState([]);
  const [showInfoModel, SetshowInfoModel] = useState(false);
  const [selected, SetSelected] = useState(InitialState);
  const [db, setDB] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [searchParam,setSearchParam]=useSearchParams();
  const [URLData,setURLData]=useState(searchParam.get('filter'))
 

  const getRocketData = () => {
    fetch("https://api.spacexdata.com/v3/launches", {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        const tempData = result.map((spacex) => {
          return {
            no: spacex.flight_number,
            launched: spacex.launch_date_local,
            location: spacex.launch_site.site_name,
            mission: spacex.mission_name,
            orbit: spacex.rocket.second_stage.payloads[0].orbit,
            launchStatus: spacex.launch_success,
            rocket: spacex.rocket.rocket_name,
            popupInfo: {
              details: spacex.details,
              rocket_type: spacex.rocket.rocket_type,
              img: spacex.links.mission_patch_small,
              nationality: spacex.rocket.second_stage.payloads[0].nationality,
              manufacturer: spacex.rocket.second_stage.payloads[0].manufacturer,
            },
          };
        });

        //set data into states
        setDB(tempData);
        tempData.length && SetLoading(false);
        setTableData(tempData);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getRocketData();

  }, []);


  useEffect(()=>{
    URLData&& FilterFun(URLData)
  },[loading])

  // funtions
  const onRow = (record, rowIndex) => {
    SetSelected(record);
    SetshowInfoModel(true);
  };

  const closeDialogbox = () => {
    SetshowInfoModel(false);
  };

  // function for filter records
  const FilterFun = (key) => {
    let filteredData;
    switch (key) {
      case "all":
        getRocketData();
        setSearchParam()
        break;

      case "upcomming":
        filteredData = db.filter((data) => data.launchStatus === null);
        setTableData(filteredData);
        setSearchParam({filter:"upcomming"})
        break;

      case "success":
        filteredData = db.filter((data) => data.launchStatus === true);
        setTableData(filteredData);
        setSearchParam({filter:"success"})
        break;

      default:
        filteredData = db.filter((data) => data.launchStatus === false);
        setTableData(filteredData);
        setSearchParam({filter:"failed"})
        break;
    }
  };

  return (
    <div style={{ padding: "30px 60px", height: "autHeadingo" }}>
      <div>
        <div
          className={styles.menucontainer}
          style={{ display: "flex", alignItems: "space-between" }}
        >
          <Select
            style={{ width: 170, border: "none" }}
            options={[
              {
                label: "Past 6 Months",
                value: "6 Months",
              },
            ]}
            defaultValue={{
              label: "Past 6 Months",
              value: "6 Months",
            }}
          />

          <div className={styles.filterDropDown}>
            <FilterOutlined />
            <Select
              style={{ width: 170, border: "none" }}
              onChange={FilterFun}
              options={[
                {
                  label: "All Launches",
                  value: "all",
                },
                {
                  label: "Upcomming Launches",
                  value: "upcomming",
                },
                {
                  label: "Successful Launches",
                  value: "success",
                },
                {
                  label: "Failed Launches",
                  value: "failed",
                },
              ]}
              defaultValue={{
                label: `${URLData?URLData:"All"} Launches`,
                value: URLData?URLData:"all",
              }}
            />
          </div>
        </div>
        <Loader spinning={loading}>
          <AntdTable
            style={{ fontWeight: 500, padding: 10 }}
            tableColumns={columns}
            dataSource={tableData}
            onRow={onRow}
            loading={loading}
            pagination={tableData.length}
            rowClassName={styles.tableRow}
            locale={{ emptyText: <NoResult /> }}
          />
        </Loader>
      </div>

      {showInfoModel && (
        <InformationModel
          visible={showInfoModel}
          onClose={closeDialogbox}
          data={selected}
        />
      )}
    </div>
  );
}

export default HomePage;
