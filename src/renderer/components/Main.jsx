import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EditArea from './EditArea';

export default function Main() {
  return (
    <Tabs forceRenderTabPanel>
      <TabList>
        <Tab>Tab1</Tab>
        <Tab>Tab1</Tab>
      </TabList>

      <TabPanel>
        <EditArea />
      </TabPanel>
      <TabPanel>
        <EditArea />
      </TabPanel>
    </Tabs>
  );
}
