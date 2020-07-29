import React, { useEffect } from "react";
import Nav from "../nav";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import "./blocks.less";
import { getBlocks } from "../../api";
// import dayjs from "dayjs"; // 处理时间
// import "dayjs/locale/zh-cn"; // 实时动态转换（简体中文）
// import relativeTime from "dayjs/plugin/relativeTime"; // 加载插件

// dayjs.extend(relativeTime); // 使用插件

const columns = [
  { id: "height", label: "Block", minWidth: 100, color: "#3499db" },
  { id: "timestamp", label: "Age", minWidth: 100 },
  { id: "miner", label: "Miner", minWidth: 170, color: "#3499db" },
  { id: "txns", label: "Txn", minWidth: 100, color: "#3499db" },
  { id: "reward", label: "Reward", minWidth: 170 },
];

function createData(block, age, miner, txn, reward) {
  return { block, age, miner, txn, reward };
}

export default function Blocks() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    // 获取数据
    const fetchData = async () => {
      const result = await getBlocks();
      if (result.data.data === undefined) {
        fetchData()
        return
      }
      setRows(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <div className="main">
        <div className="table-box">
          <h3 style={{ padding: "10px" }}>Blocks</h3>
          <Paper className="root">
            <TableContainer className="container">
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align="center"
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={index}
                        >
                          {columns.map((column) => {
                            let value;
                            // if (column.id == "timestamp") {
                            //   value = dayjs(row[column.id]).format(
                            //     "YYYY-MM-DD HH:mm"
                            //   );
                            // } else {
                            value = row[column.id];
                            // }
                            return (
                              <TableCell
                                key={column.id}
                                align="center"
                                style={{ color: column.color }}
                              >
                                {column.id == "reward"
                                  ? `${row[column.id]} FSN`
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
}
