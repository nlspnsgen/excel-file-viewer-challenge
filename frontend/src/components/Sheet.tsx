interface RowData {
  age: number;
  job: string;
  day_of_week: string;
}

const Sheet = ({ fileJson }: { fileJson: RowData[] }) => {
    return (

        <div className="overflow-x-auto mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Age</th>
              <th>Job</th>
              <th>Day of Week</th>
            </tr>
          </thead>
          <tbody>
            {fileJson.map((RowObj, index) => {
                return (
                    <tr key={index}>
                        <th>{RowObj.age}</th>
                        <td>{RowObj.job}</td>
                        <td>{RowObj["day_of_week"]}</td>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    )
}


export default Sheet;