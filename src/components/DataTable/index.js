import React, { useEffect, useState } from "react";
import { Table } from "antd";

import "antd/dist/antd.css";
import "./styles.css";

export const DataTable = ({
  title = null,
  footer = null,
  bordered = false,
  dataSource,
  loading,
  filter,
  columns = [],
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const sortableColumns = columns.map((column) => {
    const { sorter, dataIndex, ...otherColumnProps } = column;

    if (sorter) {
      const { compare, ...otherSorterProps } = sorter;

      if (typeof props.onChange === "function") {
        return column;
      }

      return {
        ...otherColumnProps,
        dataIndex,
        sorter: {
          compare: (rowA, rowB) => compare(rowA[dataIndex], rowB[dataIndex]),
          ...otherSorterProps
        }
      };
    }

    return column;
  });

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const getTitle = () => {
    if (title) {
      return () => title;
    }
  };

  const getFooter = () => {
    if (footer) {
      return () => footer;
    }
  };

  return (
    <Table
      columns={sortableColumns}
      dataSource={dataSource || []}
      loading={isLoading}
      title={getTitle()}
      footer={getFooter()}
      bordered={bordered}
      {...props}
    />
  );
};
