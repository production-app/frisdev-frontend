"use client";
import {
  ActionIcon,
  Divider,
  Group,
  MultiSelect,
  NumberInput,
  Paper,
  Popover,
  TextInput,
  Text,
  Grid,
  Title,
  Select as Selects,
  Tooltip,
  Button as Buttons,
  Textarea,
  Badge,
  Avatar,
} from "@mantine/core";
import {
  Button,
  List,
  Select,
  message,
  Upload,
  Steps,
  Table,
  Popconfirm,
  InputNumber,
  Input,
  Form,
  Image,
  Typography,
} from "antd";
import { nanoid } from "nanoid";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import _ from "lodash";

import { ColumnsType } from "antd/es/table";
import { ChevronDown, Edit } from "lucide-react";

let data: any = [];

interface Item {
  key: string;
  name: string;
  role: string;
  photo_url: string;
}

const UserManagmentTable = (props: any) => {
  const [dataSource, setDataSource] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  const [form] = Form.useForm();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [t, setT] = useState([]);
  const [value, setValue] = useState(0);
  const [hodqty, setHodQty] = useState(0);
  const [roleValues, setRoleValues] = useState("");
  const [uuids, setUuids] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonQty, setButtonQty] = useState(false);
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState(0);

  interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: "text" | "number";
    record: Item;
    index: number;
    children: React.ReactNode;
  }

  const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode =
      inputType === "text" ? (
        <Selects
          label="Switch Role:"
          placeholder="Pick one"
          rightSection={<ChevronDown size="1rem" />}
          rightSectionWidth={20}
          // styles={{ rightSection: { pointerEvents: "none" } }}
          data={["user", "admin", "manager", "global"]}
          // onChange={(e) => }
        />
      ) : (
        <Input />
      );

    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ role: roleValues, ...record });
    setEditingKey(record.key);
    //console.log(roleValues);
  };

  const columns = [
    {
      title: "S/N",
      dataIndex: "id",
      key: "id",
      render: (value: any, item: any, index: any) =>
        index === 0 ? index + 1 : index + 1,
    },
    {
      title: "Profile Photo",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (photo: String) => (
        <>
          {/* <Image src={"data:image/png;base64," + photo} width={100}> */}
          {/* <Avatar
            src={"data:image/png;base64," + photo}
            radius="xl"
            size={50}
            alt="pro
            file_photo"
          /> */}
          <Image
            src={`${photo}`}
            width={60}
            style={{ borderRadius: "100px" }}
          />

          {/* </Image> */}
        </>
      ),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },

    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },

    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: "20%",
      render: (role: string) => (
        <Badge variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
          {role}
        </Badge>
      ),

      editable: true,
    },

    {
      title: "Operation(s)",
      dataIndex: "operation",
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        //console.log(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Grid>
            <Group>
              <Tooltip
                label="Edit
                "
                withArrow
                arrowSize={5}
                // transition="skew-up"
                // transitionDuration={300}
              >
                <ActionIcon
                  // variant=""
                  onClick={() => edit(record)}
                  variant="subtle"
                  component="button"
                  // disabled={record.button_ui}
                >
                  <Edit size={24} color={"black"} />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Grid>
        );
      },
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[], index: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    //selectedRowKeys const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    // console.log("Bidun", selectedRowKeys);
  };

  const hasSelected = selectedRowKeys.length > 0;

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const loadDataFromDB = () => {
    data = [];

    setLoading(true);

    //firstregistrarsnigeria.com/frisportals/allusers
    fetch(`https://frisdev-frontend-gilt.vercel.app/api/getusers`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(true);
        data = [];

        res.users.forEach((value: any, index: any) => {
          data.push({
            key: value.id.toString(),
            lastName: value.lastName,
            firstName: value.firstName,
            imageUrl: value.imageUrl,
            role: value.role,
            //status: value.status,
            // button_ui: value.button_ui,
            // hod_qty: value.manager_qty,
            // counts_of_items: value.count_of_items,
            id: value.id,
          });
          setValues(Number(value.count_of_items));
        });
        setDataSource(data);
      })
      .finally(() => {
        setLoading(false);
      });
    //  };
  };

  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  const saveLogs = async () => {
    message.loading("Please wait while the action is in progress...", 6.5);
    await axios
      .put(
        `https://frisbackendurl.azurewebsites.net/requestlog/`,
        // `https://frisbackendurl.azurewebsites.net/requestlog/${control_id}`,
        // `https://firstregistrarsnigeria.com/frisportals/requestlog/${control_id}`,
        {
          status: "TREATED",
        }
      )
      .then((item) => {
        //  setCounter((prevCount) => prevCount + 1);
        //  loadDataFromDB();
        // console.log(item);
        message.success({
          content: "Request had been updated Successfully !",
          duration: 5,
        });
        //  navigate("/global/admin/dashboard");
      });
  };

  useEffect(() => {
    loadDataFromDB();
  }, []);

  useEffect(() => {
    let value: any = {};

    value = _.last(data);

    if (
      value !== undefined &&
      _.every(dataSource, (element: any) => element.button_ui === true)
    ) {
      saveLogs();
    }

    //if (value.button_ui_admin === true) {
    //  showPromiseConfirm();
    /// }
  }, [dataSource]);

  useEffect(() => {
    buttonFunction();
  }, []);

  const buttonFunction = () => {
    if (Number(values) && counter == Number(values)) {
      setButtonDisabled(false);
    } else if (
      _.every(dataSource, (element: any) => element.button_ui === true)
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === "hod_qty" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      //console.log(hodqty);

      const newData: any = [...dataSource];
      const index = newData.findIndex((item: any) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setDataSource(newData);
        // setHodQty(newData[index].hod_qty);
        console.log(newData[index].role);
        console.log(key);

        await axios
          .put(
            `https://frisdev-frontend-gilt.vercel.app/api/editusers/${key}`,
            // `https://firstregistrarsnigeria.com/frisportals/globalroles/${key}`,
            {
              role: newData[index].role,

              // quantity: newData[index].hod_qty,
            }
          )
          .then((item) => {
            //  console.log("Hello");
            //  setCounter((prevCount) => prevCount + 1);
            loadDataFromDB();
            // console.log(item);
            message
              .loading("Action in progress..", 1.0)
              .then(() => message.success("Successfully update the role", 3.5));
          });

        setEditingKey("");
      } else {
        newData.push(row);
        setDataSource(newData);
        // setHodQty(newData.role);
        // setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  // console.log(user.isadmin);

  return (
    <Paper
      shadow="md"
      radius="lg"
      p="lg"
      withBorder
      style={{ padding: "0px", margin: "30px" }}
    >
      <div className="removeMargin">
        <div className="firstHalf">
          <div
            style={{
              padding: 40,
              height: "auto",
            }}
          >
            <br />

            <Form form={form} component={false}>
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                // rowSelection={rowSelection}
                className=""
                dataSource={dataSource}
                columns={mergedColumns}
                loading={loading}
                pagination={{
                  pageSize: 10,
                }}
                scroll={{
                  x: 150,
                  // y: 100,
                }}
                bordered
                // onChange={onChange}
              />
            </Form>
            {/* <Button
              type="primary"
              danger
              disabled={buttonDisabled}
              onClick={() => saveLogs()}
            >
              {" "}
              Save
            </Button> */}
            <Divider style={{ marginTop: 20 }} />
          </div>
        </div>

        {/* <div className="secondHalf">
          <div className="custom-shape-divider-bottom-1671865759">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fills"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fills"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fills"
              ></path>
            </svg>
          </div>
        </div> */}
      </div>
    </Paper>
  );
};

export default UserManagmentTable;

// import React, { useEffect, useRef, useState } from "react";
// import _ from "lodash";
// import {
//   AppShell,
//   Navbar,
//   Header,
//   Footer,
//   Aside,
//   Text,
//   Avatar,
//   MediaQuery,
//   Burger,
//   useMantineTheme,
//   createStyles,
//   Group,
//   Code,
//   ScrollArea,
//   Image,
//   Container,
//   ActionIcon,
//   Grid,
//   SimpleGrid,
//   Skeleton,
//   Card,
//   Anchor,
//   Breadcrumbs,
//   Indicator,
//   Box,
//   Progress,
//   ThemeIcon,
//   Loader,
//   Center,
//   Badge,
//   NumberInputHandlers,
//   MultiSelect,
//   NumberInput,
//   Select,
//   Paper,
//   Button as Buttons,
//   Divider as Dividers,
//   Space,
//   Tooltip,
// } from "@mantine/core";
// import {
//   Button,
//   List,
//   Popconfirm,
//   Table,
//   Avatar as Avatars,
//   Input,
//   DatePicker,
//   Divider,
//   InputNumber,
//   Form,
//   Typography,
// } from "antd";
// import { useScrollIntoView, useWindowScroll } from "@mantine/hooks";
// import { InboxOutlined } from "@ant-design/icons";
// import type { UploadProps } from "antd";
// import { message, Upload } from "antd";
// import { nanoid } from "nanoid";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import type { ColumnsType } from "antd/es/table";
// import moment from "moment";
// import {
//   IconChevronDown,
//   IconEdit,
//   IconSettings,
//   IconSquareCheck,
//   IconSquareX,
//   IconThumbDown,
//   IconThumbUp,
// } from "@tabler/icons";
// import momentBusiness from "moment-business-days";
// import { useForm } from "@mantine/form";

// const { Dragger } = Upload;
// const { Search } = Input;
// const { RangePicker } = DatePicker;

// const newYearDay = "01-01-2023";
// const laborDay = "05-01-2023";
// const democracyDay = "06-12-2023";
// const independenceDay = "10-01-2023";
// const christmasDay = "12-25-2023";
// const boxingDay = "12-26-2023";

// momentBusiness.updateLocale("us", {
//   holidays: [
//     newYearDay,
//     laborDay,
//     democracyDay,
//     independenceDay,
//     christmasDay,
//     boxingDay,
//   ],
//   holidayFormat: "MM-DD-YYYY",
//   forcedBusinessDaysFormat: "MM-DD-YYYY",
//   workingWeekdays: [1, 2, 3, 4, 5],
// });

// const useStyles = createStyles((theme) => ({
//   navbar: {
//     backgroundColor:
//       theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
//     paddingBottom: 0,
//   },

//   description: {
//     maxWidth: 650,
//     margin: "auto",

//     "&::after": {
//       content: '""',
//       display: "block",
//       backgroundColor: theme.fn.primaryColor(),
//       width: 45,
//       height: 2,
//       marginTop: theme.spacing.sm,
//       marginLeft: "auto",
//       marginRight: "auto",
//     },
//   },

//   card: {
//     border: `1px solid ${
//       theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
//     }`,

//     "&:hover": {
//       transform: "scale(1.11)",
//       boxShadow: theme.shadows.md,
//     },
//   },

//   cardTitle: {
//     "&::after": {
//       content: '""',
//       display: "block",
//       backgroundColor: theme.fn.primaryColor(),
//       width: 45,
//       height: 2,
//       marginTop: theme.spacing.sm,
//     },
//   },

//   header: {
//     padding: theme.spacing.md,
//     paddingTop: 0,
//     marginLeft: -theme.spacing.md,
//     marginRight: -theme.spacing.md,
//     color: theme.colorScheme === "dark" ? theme.white : theme.black,
//     borderBottom: `1px solid ${
//       theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
//     }`,
//   },

//   links: {
//     marginLeft: -theme.spacing.md,
//     marginRight: -theme.spacing.md,
//   },

//   linksInner: {
//     paddingTop: theme.spacing.xl,
//     paddingBottom: theme.spacing.xl,
//   },

//   footer: {
//     marginLeft: "260px",
//     marginRight: -theme.spacing.md,
//     borderTop: `1px solid ${
//       theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
//     }`,
//   },
// }));

// interface DataType {
//   key: string;
//   items: string;
//   status: number;
//   updatedAt: any;
// }

// interface Item {
//   key: string;
//   name: string;
//   photo_url: string;
//   role: string;
// }

// let getLocalStorageItems: any = localStorage.getItem("Items");

// let data: any = [];
// let getUser: any = [];

// const TransferModule = () => {
//   const [scroll, scrollTo] = useWindowScroll();
//   const [display, setDisplay] = useState(false);
//   const { classes } = useStyles();
//   const theme = useMantineTheme();

//   const [editingKey, setEditingKey] = useState("");
//   const [form] = Form.useForm();

//   const [a, seta] = useState([]);
//   const [dataSource, setDataSource] = useState([]);
//   const [shows, setShows] = useState(false);
//   const [roleValues, setRoleValues] = useState("");
//   const [c, setC] = useState([]);
//   const [searchValues, setSearchValues] = useState("");
//   const [userprofile, setUserprofile] = useState<any>([]);
//   const [numberDays, setNumberDays] = useState(0);
//   const [dateReturn, setDateReturn] = useState<any>("");
//   const [roleChange, setRoleChange] = useState<any>("");
//   const [actingUsername, setActingUsername] = useState("");
//   const [getEmail, setGetEmail] = useState("");
//   const handlers: any = useRef<NumberInputHandlers>(null);
//   const previousValue: any = useRef(null);

//   const navigate = useNavigate();

//   let { user } = useSelector((state: any) => ({ ...state }));

//   interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
//     editing: boolean;
//     dataIndex: string;
//     title: any;
//     inputType: "text" | "number";
//     record: Item;
//     index: number;
//     children: React.ReactNode;
//   }

//   const EditableCell: React.FC<EditableCellProps> = ({
//     editing,
//     dataIndex,
//     title,
//     inputType,
//     record,
//     index,
//     children,
//     ...restProps
//   }) => {
//     const inputNode =
//       inputType === "text" ? (
//         <Select
//           label="Roles"
//           placeholder="Pick one"
//           rightSection={<IconChevronDown size="1rem" />}
//           rightSectionWidth={30}
//           styles={{ rightSection: { pointerEvents: "none" } }}
//           data={["React", "Angular", "Svelte", "Vue"]}
//         />
//       ) : (
//         <Input />
//       );

//     return (
//       <td {...restProps}>
//         {editing ? (
//           <Form.Item
//             name={dataIndex}
//             style={{ margin: 0 }}
//             rules={[
//               {
//                 required: true,
//                 message: `Please Input ${title}!`,
//               },
//             ]}
//           >
//             {inputNode}
//           </Form.Item>
//         ) : (
//           children
//         )}
//       </td>
//     );
//   };
//   const isEditing = (record: Item) => record.key === editingKey;

//   const edit = (record: Partial<Item> & { key: React.Key }) => {
//     form.setFieldsValue({ role: roleValues, ...record });
//     setEditingKey(record.key);
//   };

//   // const form = useForm({
//   //   initialValues: {
//   //     email: "",
//   //     termsOfService: false,
//   //   },

//   //   validate: {
//   //     email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
//   //   },
//   // });

//   const columns: ColumnsType<DataType> = [
//     {
//       title: "S/N",
//       dataIndex: "id",
//       key: "id",
//       responsive: ["lg"],
//       render: (value: any, item: any, index: any) =>
//         index === 0 ? index + 1 : index + 1,
//     },
//     {
//       title: "Profile Photo",
//       dataIndex: "photo_url",
//       key: "photo_url",
//       render: (photo) => (
//         <Avatar
//           src={"data:image/png;base64," + photo}
//           radius="xl"
//           size={50}
//           alt="it's me"
//         />
//       ),
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       // render: (text) => <a>{text}</a>,
//     },

//     {
//       title: "Role",
//       dataIndex: "role",
//       key: "role",
//       render: (role: String) => (
//         <Badge variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
//           {role}
//         </Badge>
//       ),
//     },
//  {
//       title: "Operation(s)",
//       dataIndex: "operation",
//       render: (_: any, record: Item) => {
//         const editable = isEditing(record);
//         //console.log(record);
//         return editable ? (
//           <span>
//             <Typography.Link
//               onClick={() => {
//                 //save(record.key)
//               }}
//               style={{ marginRight: 8 }}
//             >
//               Save
//             </Typography.Link>
//             <Popconfirm title="Sure to cancel?" >
//               <a>Cancel</a>
//             </Popconfirm>
//           </span>
//         ) : (
//           <Grid>
//             <Group position="left" spacing="sm">
//               <Tooltip
//                 label="Edit
//                 "
//                 withArrow
//                 arrowSize={5}
//                 transition="skew-up"
//                 transitionDuration={300}
//               >
//                 <ActionIcon
//                   // variant=""
//                   onClick={() => edit(record)}
//                   variant="subtle"
//                   component="button"
//                  // disabled={record.button_ui}
//                 >
//                   <IconEdit size={24} stroke={1.5} color={"black"} />
//                 </ActionIcon>
//               </Tooltip>
//               <Popconfirm
//                 title="Confirmation"
//                 // description="Are you sure to delete this task?"
//                 // onConfirm={confirm}
//                 onConfirm={() => confirm(record.key)}
//                 okText="Yes"
//                 cancelText="No"
//               >
//                 <Tooltip
//                   label="Accept"
//                   withArrow
//                   arrowSize={5}
//                   transition="skew-up"
//                   transitionDuration={300}
//                 >
//                   <ActionIcon
//                     variant="subtle"
//                     component="button"
//                    // disabled={record.button_ui || user.isadmin}
//                     // onClick={() => console.log(a.button_ui)}
//                   >
//                     <IconThumbUp size={24} stroke={1.5} color={"lime"} />
//                   </ActionIcon>
//                 </Tooltip>
//               </Popconfirm>

//               {/* <Popover
//                 width={300}
//                 trapFocus
//                 position="top-end"
//                 withArrow
//                 shadow="md"
//               >
//                <Popover.Target>  */}

//               <Popconfirm
//                 title="Confirmation"
//                 // description="Are you sure to delete this task?"
//                 // onConfirm={confirm}
//               //  onConfirm={() => confirmDeclined(record.key)}
//                 okText="Yes"
//                 cancelText="No"
//               >
//                 <Tooltip
//                   label="Reject"
//                   withArrow
//                   arrowSize={5}
//                   transition="skew-up"
//                   transitionDuration={300}
//                 >
//                   <ActionIcon
//                     // variant=""

//                     variant="subtle"
//                     component="button"
//                    // disabled={record.button_ui}
//                   >
//                     <IconThumbDown size={24} stroke={1.5} color={"red"} />
//                   </ActionIcon>
//                 </Tooltip>
//               </Popconfirm>
//             </Group>
//           </Grid>
//         );
//       },
//     },
//   ];

//   // let control_id = window.location.href;

//   // console.log(data);

//   const LoadsDataFromDB = () => {
//     data = [];
//     fetch("http://localhost:5000/allusers")
//       .then((res) => res.json())
//       .then((res) => {
//         // console.log(res.data);
//         // setOptions(res.data);

//         console.log(res.data);

//         res.data.forEach((value: any, index: any) => {
//           data.push({
//             key: nanoid(),
//             name: value.name,
//             photo_url: value.photo_url,
//             role: value.role,
//             //  requester_name: value.requester_name,
//             email: value.email,
//             value: value.email,
//             label: value.name,
//             // updatedAt: value.updatedAt,
//           });
//         });
//         setDataSource(data);
//       })
//       .finally(() => {
//         //   setLoading(false);
//       });
//   };

//   useEffect(() => {
//     LoadsDataFromDB();
//   }, []);

//   const confirm = async (uuid: any) => {
//     await axios
//       .put(
//         `https://frisportalbackendapp.azurewebsites.net/requisitions/${uuid}`,
//         {
//           status: "APPROVED",
//         }
//       )
//       .then(() => {
//         LoadsDataFromDB();
//         message.success({
//           content: "Operation is Successfully !",
//           duration: 7,
//         });
//       });
//   };

//   const props: UploadProps = {
//     name: "file",
//     multiple: true,
//     accept: ".csv",
//     action: "https://frisportalbackendapp.azurewebsites.net/uploadfiles",
//     onChange(info) {
//       const { status } = info.file;

//       if (status !== "uploading") {
//         console.log(info.file, info.fileList);
//       }
//       if (status === "done") {
//         const parent: any = document.querySelector(".ant-upload-list");

//         setDisplay(true);

//         const newEl = document.createElement("p");

//         newEl.style.cssText = "text-align:center";
//         newEl.textContent = "Attachment List";

//         parent.insertBefore(newEl, parent.children[0]);
//         window.scroll(0, 500);

//         message.success(`${info.file.name} file uploaded successfully.`);
//       } else if (status === "error") {
//         message.error(`${info.file.name} file upload failed.`);
//       }

//       setDisplay(false);
//     },
//     onDrop(e) {
//       console.log("Dropped files", e.dataTransfer.files);
//     },
//   };

//   return (
//     <>
//       <SimpleGrid
//         cols={1}
//         spacing="md"
//         breakpoints={[{ maxWidth: "sm", cols: 1 }]}
//       >
//         <Card
//           //withBorder
//           radius="md"
//           p="xl"
//           style={{ padding: "12px !important" }}
//         >
//           {/* <Image
//             src={"https://i.ibb.co/M6SSP1d/Requisition.png"}
//             fit="fill"
//             radius="sm"
//           /> */}
//           <div className="mantine-Badge-root mantine-rhsza5">
//             <span className="mantine-h9iq4m mantine-Badge-inner">
//               Manage Active User(s)
//             </span>
//           </div>
//           {/* <Text
//             variant="gradient"
//             gradient={{ from: "gold", to: "cyan", deg: 45 }}
//             sx={{ fontFamily: "Greycliff CF, sans-serif" }}
//             weight={650}
//             style={{ marginTop: 20 }}
//             size={25}
//             className={classes.description}
//             align="center"
//           >
//             Central Document Request-Types Logs
//           </Text> */}
//           <Text size="sm" mt="sm" color="dimmed" style={{ padding: 20 }}>
//             Please provide the information for your acting officer.
//           </Text>
//           <Paper
//             shadow="md"
//             radius="lg"
//             p="lg"
//             withBorder
//             style={{ padding: "0px", margin: "5px" }}
//           >
//             <div className="removeMargin">
//               <div className="firstHalf">
//                 <div
//                   style={{
//                     padding: 40,
//                     bottom: 0,
//                     top: 30,
//                     height: "auto",
//                   }}
//                 >
//                   <Table columns={columns} dataSource={dataSource} bordered />
//                 </div>
//               </div>

//               <br />

//               <div className="secondHalf">
//                 <div className="custom-shape-divider-bottom-1671865759">
//                   <svg
//                     data-name="Layer 1"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 1200 120"
//                     preserveAspectRatio="none"
//                   >
//                     <path
//                       d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//                       opacity=".25"
//                       className="shape-fill"
//                     ></path>
//                     <path
//                       d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//                       opacity=".5"
//                       className="shape-fill"
//                     ></path>
//                     <path
//                       d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//                       className="shape-fill"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </Paper>
//         </Card>

//         {/* <Grid gutter="md">
//             <Grid.Col>
//               <Skeleton
//                 height={SECONDARY_COL_HEIGHT}
//                 radius="md"
//                 animate={false}
//               />
//             </Grid.Col>
//             <Grid.Col span={6}>
//               <Skeleton
//                 height={SECONDARY_COL_HEIGHT}
//                 radius="md"
//                 animate={false}
//               />
//             </Grid.Col>
//             <Grid.Col span={6}>
//               <Skeleton
//                 height={SECONDARY_COL_HEIGHT}
//                 radius="md"
//                 animate={false}
//               />
//             </Grid.Col>
//           </Grid> */}
//       </SimpleGrid>
//     </>
//   );
// };

// export default TransferModule;
