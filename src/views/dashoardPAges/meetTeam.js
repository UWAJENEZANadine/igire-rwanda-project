import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Space, Table, Spin, Modal, Upload, notification, Select } from "antd";
import { Input, Skeleton } from "antd";
import { UploadOutlined, EditOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { LoadingOutlined, DeleteOutlined } from "@ant-design/icons";
import IgireApis from "../../services/IgireApis";
import { Popconfirm, message } from "antd";
import logo from "../../assets/images/logo.png";
import "../../css/meetWithOurTeam.css";
import { Button, Checkbox, Form } from "semantic-ui-react";

const AllTeamMember = () => {
  const [allTeamData, setAllTeamData] = useState([]);
  useEffect(() => {
    IgireApis.getAllTeammate().then((res) => {
      console.log(res);
      setAllTeamData(res.data.data);
    });
  }, []);

  // var team_List =
  // allTeamData.map((team,index)=>{
  //   return(
  //   <tr key={index}>
  //     <td>{team.names}</td>
  //     <td>{team.Position}</td>
  //     <td>{team.description}</td>
  //     <td className="text-success">
  //       <label className="fa fa-edit ">

  //       </label> 
  //     </td>
  //     <td className="text-danger">
  //       <label className="fa fa-trash">

  //       </label>
  //     </td>
  //   </tr>
  //   )
  // })

  const [ID, setID] = useState(null);

  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState({});

  const [tname, setTname] = useState("");
  const [positions, setPositions] = useState("");
  const [detail, setDetail] = useState("");


  console.log(tname);
  console.log(positions);
  console.log(detail);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const sendDataToApi = () => {
    setSuccessMessage("data added");
    setErrorMessage("");

    axios
      .post(`https://igire-rwanda.herokuapp.com/team/register`, {
        names: tname,
        Position: positions,
        description: detail,
      })
      .then((res) => {
        if (!res) {
          return swal.error({
            message: "failed to add a team member",
          });
        }
        if (res.status === 200) {
          swal("YOU ADDED ONE TEAM MEMBER");
          window.location.reload();
        } else {
          return notification.error({
            message: !res.data.error ? res.data.message : res.data.error,
          });
        }
      });




    // IgireApis.AddTeamMember(values).then((res) => {
    //   if (!res) {
    //     return notification.error({ message: "failed to add team member" });
    //   }
    //   if (res.status === 200) {
    //     return notification.success({
    //       message: "added Team member has been created successfully",
    //     });
    //   } else {
    //     return notification.error({
    //       message: !res.data.error ? res.data.message : res.data.error,
    //     });
    //   }
    // });

    // IgireApis.updateTeammate().then((res) => {
    //   if (!res) {
    //     return notification.error({
    //       message: "failed to update a team member",
    //     });
    //   }
    //   if (res.status === 200) {
    //     swal("you have updated  one team member ");
    //     window.location.reload();
    //   } else {
    //     return notification.error({
    //       message: !res.data.error ? res.data.message : res.data.error,
    //     });
    //   }
    // });
  };
  
  const sendDataToApiTupdate = () => {
    setSuccessMessage("");
    setErrorMessage("");

    axios
      .patch(`https://igire-rwanda.herokuapp.com/team/${ID}`, {
        names: tname,
        Position: positions,
        description: detail,
      })
      .then((res) => {
        if (!res) {
          return swal.error({
            message: "failed to UPDATE a team member",
          });
        }
        if (res.status === 200) {
          swal("YOU UPDATED ONE TEAM MEMBER");
          window.location.reload();
        } else {
          return notification.error({
            message: !res.data.error ? res.data.message : res.data.error,
          });
        }
      });
    }

  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

  function confirm(e) {
    console.log(e);
    IgireApis.deleteTeammate(e._id).then((res) => {
      if (!res) {
        return swal.error({
          message: "failed to delete a team member",
        });
      }
      if (res.status === 200) {
        swal("YOU DELETED ONE TEAM MEMBER");
        window.location.reload();
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });
  }
  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }

  const column = [
    {
      title: "Full Name",
      dataIndex: "names",
      key: "names",
    },

    {
      title: "Position",
      dataIndex: "Position",
      key: "Position",
    },

    {
      title: "More Info",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "status",
      key: " actions",
      fixed: "right",
      width: 100,

      render: (text, record) => (
        <Space size="middle">
          <a
            href="#"
            style={{
              color: "green",
              textDecoration: "none",
              fontWeight: "800",
              fontSize: "20px",
            }}
            onClick={() => {
              setUser(record);
              setID(record)
              setModalVisible(true);
            }}
          >
            <EditOutlined />
          </a>
          <a href="" >
            <Popconfirm 
              title="Are you sure to delete this Team member?"
              onConfirm={() => confirm(record)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
              
            >
              <a href="#" style={{ color: "red", fontSize: "20px" }}>
                <DeleteOutlined />
              </a>
            </Popconfirm>
          </a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
        <a class="navbar-brand me-lg-5" href="../../index.html">
          <img
            class="navbar-brand-dark"
            src="../../assets/img/brand/light.svg"
            alt="Volt logo"
          />{" "}
          <img
            class="navbar-brand-light"
            src="../../assets/img/brand/dark.svg"
            alt="Volt logo"
          />
        </a>
        <div class="d-flex align-items-center">
          <button
            class="navbar-toggler d-lg-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <nav
        id="sidebarMenu"
        class="sidebar d-lg-block bg-gray-800 text-white collapse"
        data-simplebar
      >
        <div class="sidebar-inner px-4 pt-3">
          <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
            <div class="d-flex align-items-center">
              <div class="avatar-lg me-4">
                <img
                  src="../../assets/img/team/profile-picture-3.jpg"
                  class="card-img-top rounded-circle border-white"
                  alt="Bonnie Green"
                />
              </div>
              <div class="d-block">
                <h2 class="h5 mb-3">Hi, Diane</h2>
                <a
                  href="../../pages/examples/sign-in.html"
                  class="btn btn-secondary btn-sm d-inline-flex align-items-center"
                >
                  <svg
                    class="icon icon-xxs me-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  Sign Out
                </a>
              </div>
            </div>
            <div class="collapse-close d-md-none">
              <a
                href="#sidebarMenu"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <svg
                  class="icon icon-xs"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <ul class="nav flex-column pt-3 pt-md-0">
            <li class="nav-item">
              <a href="/dashboard" class="nav-link d-flex align-items-center">
                <span class="sidebar-icon">
                  <img
                    src="../../assets/img/brand/igire.jpg"
                    height="40"
                    width="40"
                    alt="Volt Logo"
                  />
                </span>
                <span class="mt-1 ms-1 sidebar-text">Overview</span>
              </a>
            </li>
            <li class="nav-item">
              <span
                class="nav-link  collapsed  d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-app"
              >
                <span>
                  <span class="sidebar-icon">
                    <svg
                      class="icon icon-xs me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="sidebar-text">Manage Program</span>
                </span>
                <span class="link-arrow">
                  <svg
                    class="icon icon-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
              <div
                class="multi-level collapse "
                role="list"
                id="submenu-app"
                aria-expanded="false"
              >
                <ul class="flex-column nav">
                  <li class="nav-item ">
                    <a
                      href="/program"
                      target="_blank"
                      class="btn btn-secondary d-inline-flex align-items-center me-3"
                    >
                      <span class="sidebar-text">SheCanCode</span>
                    </a>
                    <a class="nav-link" href="">
                      <span class="sidebar-text">AWERwanda</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a
                href="meetTeam"
                class="nav-link d-flex justify-content-between"
              >
                <span>
                  <span class="sidebar-icon">
                    <svg
                      class="icon icon-xs me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                  </span>
                  <span class="sidebar-text">Manage Our team</span>
                </span>
              </a>
            </li>
            <li class="nav-item ">
              <a href="" class="nav-link">
                <span class="sidebar-icon">
                  <svg
                    class="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span class="sidebar-text">Other</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main class="content">
        {allTeamData.length == 0 ? (
          <div style={{ marginLeft: "50%", paddingTop: "10%" }}>
            <Space size="middle">
              <Spin indicator={antIcon} />
            </Space>
          </div>
        ) : (
          <Table className="" columns={column} dataSource={allTeamData} />
        )}
        {/* <Table>{team_List}</Table>


        {/* <div className="content-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8"></div>
              <div className="card">
                <div className="card-body card-optmized1">
                  <h3 className="text-center">Organization Pilot list</h3>{" "}
                  <hr />
                  <table className="table table-bordered table-striped">
                    <thead>
                      <th>names</th>
                      <th>posiyoi</th>
                      <th>descriptio</th>
                     

                      <th className="text-success">EDIT</th>
                      <th className="text-danger">DELETE</th>
                    </thead>
              

                    {team_List.length == 0 ? (
          <Skeleton active></Skeleton>
        ) : (
         
        
          <tbody>{team_List}</tbody>
        )}

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <a
          href="#"
          onClick={() => {
            setVisible(true);
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{
              marginLeft: "30px",
              backgroundColor: "rgb(2, 29, 2)",
              borderRadius: "10px",
              height: "8vh",
              width: "170px",
              border: "1px solid rgb(2, 29, 2)",
              boxShadow: "2px 2px 0.5px rgba(128, 128, 128, 0.418)",
              fontFamily: "Lato, sans-serif",
              color:"white"
            }}
          >
            Add Team Member
          </Button>
        </a>

        <Modal style={{marginTop:"-90px" }}
          visible={visible}
          width="40%"
          onOk={() => setVisible(true)}
          onCancel={() => setVisible(false)}
          closable="true"
          footer="" 
        >
          <img
            src={logo}
            style={{ width: "80px", height: "80px", marginBottom: "20px",  }}
          />
          <h1 style={{ fontSize: "25px", height: "3rem" }}>
            Fill this form to add a team Member
          </h1>

          <Form>
            <Form.Field>
              <label>Full Name</label>
              <input 
               onChange={(p) => setTname(p.target.value)}
              name="names"
              placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label> Position</label>
              <input 
              onChange={(p) => setPositions(p.target.value)}
              name="Position" placeholder="Position" />
            </Form.Field>
            <Form.Field>
              <label>description </label>
              <textarea
              onChange={(p) => setDetail(p.target.value)}
               name="description" placeholder="detail....." />
            </Form.Field>
            <Button type="submit" onClick={sendDataToApi} >Submit</Button>
          </Form>
        </Modal>

        <Modal style={{marginTop:"-90px" }}
          visible={modalVisible}
          width="40%"
          onOk={() => setModalVisible(true)}
          onCancel={() => setModalVisible(false)}
          closable="true"
          footer=""
        >
          <img
            src={logo}
            style={{ width: "80px", height: "80px", marginBottom: "20px" }}
          />
          <h1 style={{ fontSize: "25px", height: "3rem" }}>
            Please edit team Member
          </h1>

          <Form>
            <Form.Field>
              <label>Full Name</label>
              <input 
               onChange={(p) => setTname(p.target.value)}
              name="names"
              placeholder={user?.names} />
            </Form.Field>
            <Form.Field>
              <label> Position</label>
              <input 
              onChange={(p) => setPositions(p.target.value)}
              name="Position" placeholder={user?.Position} />
            </Form.Field>
            <Form.Field>
              <label>description </label>
              <textarea
              onChange={(p) => setDetail(p.target.value)}
               name="description" placeholder={user?.description} />
            </Form.Field>
    
          
          
              {/* <Input.TextArea
                placeholder={user?.description}
               
              /> */}
          

          <Button type="submit" onClick={sendDataToApiTupdate} >Edit</Button>
            </Form>
        </Modal>
      </main>
    </>
  );
};

export default AllTeamMember;
