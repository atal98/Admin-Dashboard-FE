// import * as React from "react";
import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function DataTable({ year, quarter }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/user/user_table/?year=${year}&quarter=${quarter}`
        );
        // Add a unique id to each row
        const rowsWithIds = response.data.map((row, index) => ({
          ...row,
          id: index + 1, // Adding 1 to avoid id being 0
        }));
        setData(rowsWithIds);
        setLoading(false);
        // setData(response.data);
        // setLoading(false);
        console.log("data", response.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [year, quarter]);

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const actionCoulmn = [
    {
      field: "action",
      headerName: "Action",
      width: 75,
      renderCell: (params) => {
        const userId = params.row.userid;
        return (
          <div className="cellAction">
            <Link
              to={`/users/${userId}`}
              style={{ textDecoration: "none" }}
              className="link"
            >
              <span className="viewButton">View</span>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div style={{ height: 390, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={userColumns.concat(actionCoulmn)}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection={false}
        />
      </div>
    </div>
  );
}
