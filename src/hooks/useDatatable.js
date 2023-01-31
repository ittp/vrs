import { useState, useEffect } from "react";
import axios from "axios";

import { DataTable } from "../components/DataTable";

import { DateUtil, JsonataUtil } from "../utils";

export const useDatatable = ({ dataSource = null, url = null }) => {
  const [filter, setFilter] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 200 //inserted because is an external api
    }
  });

  const handleFilters = (configFilter) => {
    const { key, value, type } = configFilter;

    if (!value) {
      handleDeleteFilter(key);
      return;
    }

    if (filterExit(key)) {
      const changedFilter = filter.map((f) => {
        return f.key === key
          ? {
              key,
              value,
              type
            }
          : f;
      });

      setFilter(changedFilter);
      return;
    }

    setFilter([...filter, configFilter]);
  };

  const filterExit = (key) => {
    return filter.some((f) => f.key === key);
  };

  const handleDeleteFilter = (key) => {
    const draftFilter = filter;

    setFilter(draftFilter.filter((f) => f.key !== key));
  };

  const handleTableChange = async (pagination, filters, sorter) => {
    setParams({
      pagination,
      sorter,
      ...filters
    });
  };

  useEffect(() => {
    (async () => {
      if (url) {
        setLoading(true);

        const filters = {};

        if (filter.length) {
          filter.forEach((f, i) => {
            filters[f.key] = f.value;
          });
        }

        const formattedParams = {
          sortField: params.sorter?.field || null,
          sortOrder: params.sorter?.order || null,
          results: params.pagination.pageSize,
          page: params.pagination.current,
          total: params.pagination.total,
          ...filters,
          ...params
        };

        const { data } = await axios.get(url, { params: formattedParams });

        setFilteredData(data.results);

        setLoading(false);
      }
    })();
  }, [url, params, filter]);

  useEffect(() => {
    if (dataSource) {
      setLoading(true);

      if (filter.length) {
        const dataAfterFilter = filter.reduce((accumulator, currentValue) => {
          switch (currentValue.type) {
            case "jsonata":
              return JsonataUtil.EVALUATE(currentValue.value, accumulator);
            case "dateRange":
              return accumulator.filter((register) => {
                const field = register[currentValue.key];

                return (
                  !currentValue.value ||
                  DateUtil.CHECK_DATE_BETWEENDATES(
                    field,
                    currentValue.value[0],
                    currentValue.value[1]
                  )
                );
              });
            default:
              return accumulator;
          }
        }, dataSource);

        setFilteredData(dataAfterFilter);
      } else {
        setFilteredData(dataSource);
      }

      setLoading(false);
    }
  }, [filter, dataSource]);

  return {
    DataTable,
    handleFilters,
    handleTableChange,
    pagination: params.pagination,
    filteredData,
    loading
  };
};
