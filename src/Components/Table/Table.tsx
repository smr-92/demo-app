import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import './Table.css';

interface TableProps {
  data: any[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Quantity",
        accessor: "ConsumedQuantity"
      },
      {
        Header: "Cost",
        accessor: "Cost",
      },
      {
        Header: "Date",
        accessor: "Date"
      },
      {
        Header: "Instance ID",
        accessor: "InstanceId",
      },
      {
        Header: "Meter Category",
        accessor: "MeterCategory"
      },
      {
        Header: "Resource Group",
        accessor: "ResourceGroup"
      },
      {
        Header: "Resource Location",
        accessor: "ResourceLocation"
      },
      {
        Header: "App Name",
        accessor: "Tags.app-name",
      },
      {
        Header: "Environment",
        accessor: "Tags.environment",
      },
      {
        Header: "Business-Unit",
        accessor: "Tags.business-unit",
      },
      {
        Header: "Unit of Measure",
        accessor: "UnitOfMeasure"
      },
      {
        Header: "Location",
        accessor: "Location"
      },
      {
        Header: "Service Name",
        accessor: "ServiceName"
      },
    ],
    []
  );

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters,
    useSortBy
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                  <div>
                    {column.canFilter ? column.render("Filter") : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
      </table>
    </>
  );
};

interface DefaultColumnFilterProps {
  column: any;
}

const DefaultColumnFilter: React.FC<DefaultColumnFilterProps> = ({
  column: { filterValue, preFilteredRows, setFilter }
}) => {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
};

export default Table;