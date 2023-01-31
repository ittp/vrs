import React from "react";
import { Space, Input, DatePicker, Select } from "antd";

import { DataTable } from "./components/DataTable";

import { mockColumns } from "./mocks/columns";
import { mockData } from "./mocks/data";

import { useFilter } from "./hooks/useFilter";
import "./styles.css";

const { RangePicker } = DatePicker;
const { Option } = Select;

export default function App() {
  const { handleFilters, filteredData, loading } = useFilter({
    dataSource: mockData
  });

  const handleSearch = (e) => {
    const elemValue = e.target.value.toLowerCase();
    const key = "name";

    elemValue
      ? handleFilters({
          key,
          value: `**[$contains($lowercase(${key}), /${elemValue}/i)]`,
          type: "jsonata"
        })
      : handleFilters({ key }); //when only one key passes, the condition filter is cleared
  };

  const handleSelect = (value) => {
    const key = "country";

    value
      ? handleFilters({
          key,
          value: `**[$contains($lowercase(${key}), /${value}/i)]`,
          type: "jsonata"
        })
      : handleFilters({ key }); //when only one key passes, the condition filter is cleared
  };

  const handleRangeDate = (value) => {
    const key = "dob";

    value
      ? handleFilters({
          key: "dob",
          value,
          type: "dateRange"
        })
      : handleFilters({ key });
  };

  return (
    <>
      <Space className="datatable-wrapper" size={30} direction="vertical">
        <Space className="datatable-filters" size={20}>
          <div>
            <Input
              className="search-box"
              placeholder="Enter a name to search"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div>
            <Select
              style={{ width: 200 }}
              placeholder="Select a Country"
              onChange={handleSelect}
              allowClear
            >
              <Option value="United States">United States</Option>
              <Option value="Brazil">Brazil</Option>
              <Option value="India">India</Option>
              <Option value="Japan">Japan</Option>
            </Select>
            <RangePicker
              className="filter-item"
              style={{ minwidth: 180 }}
              onChange={(value) => handleRangeDate(value)}
            />
          </div>
        </Space>

        <DataTable
          rowKey="name"
          dataSource={filteredData}
          columns={mockColumns}
          loading={loading}
          pagination={false}
        />
      </Space>
    </>
  );
}
