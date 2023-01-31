import { SorterUtil } from "../utils";

export const mockColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: {
      compare: SorterUtil.DEFAULT,
      multiple: 1
    }
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    sorter: {
      compare: SorterUtil.DEFAULT,
      multiple: 2
    }
  },
  {
    title: "DOB",
    dataIndex: "dob",
    key: "dob",
    sorter: {
      compare: SorterUtil.DATE,
      multiple: 3
    }
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    sorter: {
      compare: SorterUtil.DEFAULT,
      multiple: 4
    }
  }
];

export const mockServerColumns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%"
  },
  {
    title: "Protocol",
    dataIndex: "gender",
    filters: [
      { text: "RTSP", value: "male" },
      { text: "ONVIF", value: "female" }
    ],
    width: "20%"
  },
  {
    title: "Email",
    dataIndex: "email"
  }
];

export const ItemsColumns = [
  {
    title: "Address",
    dataIndex: "address",
    sorter: true,
    render: (address) => `${address}`,
    width: "50%"
  },
  {
    title: "IP",
    dataIndex: "stream",
    filters: [
      { text: "RTSP", value: "male" },
      { text: "ONVIF", value: "female" }
    ],
    width: "20%"
  },
  {
    title: "Email",
    dataIndex: "email"
  }
];
