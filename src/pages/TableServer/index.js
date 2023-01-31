import React from "react";
import { Space, Select } from "antd";

import { DataTable } from "../../components/DataTable";

import { mockServerColumns } from "../../mocks/columns";

import { useDatatable } from "../../hooks/useDatatable";

import "./styles.css";

const { Option } = Select;

export default function TableServer() {
  const {
    handleTableChange,
    handleFilters,
    filteredData,
    pagination,
    loading
  } = useDatatable({
    url: "https://randomuser.me/api"
  });

  const handleSelect = (value) => {
    const key = "gender";

    value
      ? handleFilters({
          key,
          value
        })
      : handleFilters({ key }); //when only one key passes, the condition filter is cleared
  };

  return (
    <>
      <Space className="datatable-wrapper" size={30} direction="vertical">
        <Space className="datatable-filters" size={20}>
          <div>
            <Select
              style={{ width: 200 }}
              placeholder="Select a gender"
              onChange={handleSelect}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          </div>
        </Space>

        <DataTable
          rowKey={(record) => record.login.uuid}
          dataSource={filteredData}
          columns={mockServerColumns}
          loading={loading}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </Space>
    </>
  );
}
