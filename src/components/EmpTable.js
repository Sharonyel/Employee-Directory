import React, { useContext } from "react";

import EmpBody from "./EmpBody";
import "../styles/EmpTable.css";
import DataAreaContext from "../utils/DataAreaContext";

const EmpTable = () => {
  const context = useContext(DataAreaContext);

  return (

    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name);
                    console.log(name)
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <EmpBody />
      </table>
    </div>
  );
}

export default EmpTable;
