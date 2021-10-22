import styled from 'styled-components';
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  margin-left: 10px;
  padding: 8px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.01);

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;
WrapperTabs.tabsRole = "Tabs";

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 5px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  padding: 16px;
  box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.25);
  margin-top: -4px;
  z-index: 9999;

  &.is-selected {
    display: block;
    
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid #ffffff
  }
`;
WrapperTabPanel.tabsRole= "TabPanel";
