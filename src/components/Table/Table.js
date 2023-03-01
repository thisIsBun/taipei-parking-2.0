import { useContext } from "react";
import { useTable, useSortBy } from "react-table";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const sortIconStyle = {
  marginLeft: "6px",
};

export default function Table({ columns, data }) {
  const { theme } = useContext(ThemeContext);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table
      {...getTableProps()}
      style={{
        width: "100%",
        color: theme.font_main,
        borderCollapse: "collapse",
      }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} style={{ height: "50px" }}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{
                  background: theme.background_hover,
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  manWidth: column.maxWidth,
                  width: column.width,
                }}
              >
                {column.render("Header")}
                {column.Header !== "Action" && column.Header !== "費率" && (
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FontAwesomeIcon
                          icon="fa-solid fa-sort-down"
                          style={sortIconStyle}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon="fa-solid fa-sort-up"
                          style={sortIconStyle}
                        />
                      )
                    ) : (
                      <FontAwesomeIcon
                        icon="fa-solid fa-sort"
                        style={sortIconStyle}
                      />
                    )}
                  </span>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              style={{
                borderBottom: `1px solid ${theme.background_secondary}`,
              }}
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      fontSize:
                        cell.column.Header === "Action" ? "16px" : "12px",
                      textAlign:
                        cell.column.Header === "名稱" ||
                        cell.column.Header === "地址" ||
                        cell.column.Header === "費率"
                          ? "left"
                          : "center",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};
