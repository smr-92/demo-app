import React, { useEffect, useState } from "react";
import "./AppHeader.css";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { changeSelectedOption, fetchApplications, fetchApplicationsData, fetchResourceData, fetchResources, resetOptions } from "../../Redux/Applications/actions";

type Option = {
  label: string;
  value: string;
};

type TabType = "Select Application" | "Select Resource";

const AppHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const options: any[] = useAppSelector(state => state.options)
  const [selectedTab, setSelectedTab] = useState<TabType>("Select Application");
  const [selectedOption, setSelectedOption] = useState<Option>({
    label: "",
    value: "",
  });

  const extendedOptions = [{
    label: "",
    value: "",
  }, ...options];

  const getData = () => {
    if ( selectedOption.value !== "" ) {
      if ( selectedTab === "Select Application" ) {
        dispatch(fetchApplicationsData(selectedOption.value ))
      } else if ( selectedTab === "Select Resource") {
        dispatch(fetchResourceData(selectedOption.value ))
      }
    }
  };

  useEffect(() => {
    if ( selectedTab === "Select Application" ) {
      dispatch(fetchApplications())
    } else if ( selectedTab === "Select Resource") {
      dispatch(fetchResources())
    }
  }, [dispatch, selectedTab]);

  useEffect(() => {
    if ( selectedOption.value !== "" ) {
      if ( selectedTab === "Select Application" ) {
        dispatch(fetchApplicationsData(selectedOption.value ))
      } else if ( selectedTab === "Select Resource") {
        dispatch(fetchResourceData(selectedOption.value ))
      }
    }
    // eslint-disable-next-line 
  }, [dispatch, selectedOption]);

  const handleTabChange = (tabType: TabType) => {
    dispatch(resetOptions());
    setSelectedTab(tabType);
  };

  const handleOptionChange = (option: Option) => {
    dispatch(changeSelectedOption(option.value))
    setSelectedOption(option);
  };

  const handleRefreshClick = () => {
    getData()
  };

  return (
    <div className="app-header">
      <div className="tabs">
        <div
          className={`tab ${selectedTab === "Select Application"  ? "active" : ""}`}
          onClick={() => handleTabChange("Select Application" )}
        >
          Get Application Data
        </div>
        <div
          className={`tab ${selectedTab === "Select Resource" ? "active" : ""}`}
          onClick={() => handleTabChange("Select Resource")}
        >
          Get Resource Data
        </div>
      </div>
      <div className="options">
        <select
          className="select-box"
          placeholder={selectedTab}
          value={selectedOption.value}
          onChange={(e) => {
            const optionValue = e.target.value;
            const optionLabel = e.target[e.target.selectedIndex].innerText;
            handleOptionChange({ label: optionLabel, value: optionValue });
          }}
        >
          {
            extendedOptions.map((option: Option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))
          }
        </select>
        <button className="refresh-button" disabled={selectedOption.value === ""} onClick={handleRefreshClick}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default AppHeader;