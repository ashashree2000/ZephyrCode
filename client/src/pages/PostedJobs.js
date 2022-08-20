import React from "react";
import { useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Table, Typography } from "antd";
import moment from "moment";
import { useHistory } from "react-router-dom";
const { Title } = Typography;
const PostedJobs = () => {
  const alljobs = useSelector((state) => state.jobsReducer).jobs;
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  const userPostedJobs = alljobs.filter((job) => job.postedBy == userid);
  const history = useHistory();

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Posted on",
      dataIndex: "postedOn",
    },
    {
      title: "Applied Candidates",
      dataIndex: "appliedCandidates",
    },
    {
      title: "Actions",
      render: (text, data) => {
        return (
          <div className="flex">
            <Button
              onClick={() => {
                history.push(`/editjob/${data.completeJobData._id}`);
              }}
            >
              Edit
            </Button>
          </div>
        );
      },
    },
  ];

  const dataSource = [];
  for (var job of userPostedJobs) {
    var obj = {
      title: job.title,
      company: job.company,
      postedOn: moment(job.createdAt).format("MMM DD , YYYY"),
      appliedCandidates: job.appliedCandidates.length,
      completeJobData: job,
    };
    dataSource.push(obj);
  }

  console.log(userPostedJobs);
  return (
    <div>
      <DefaultLayout>
        <Title level={3}>Posted Jobs</Title>
        <Table columns={columns} dataSource={dataSource}></Table>
      </DefaultLayout>
    </div>
  );
};

export default PostedJobs;
