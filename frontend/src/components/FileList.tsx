import { useEffect, useState } from "react";
import Sheet from "./Sheet";

const FileList = () => {
  const [uploadedFileNames, setUploadedFileNames] = useState<string[]>([]);
    const [fileJson, setFileJson] = useState<object[]>([]);

  useEffect(() => {
    const getuploadedFiles = async () => {
      const resp = await fetch("http://localhost:3000/files");
      const fileNames = await resp.json();
      setUploadedFileNames(fileNames);
    };
    getuploadedFiles();
  });

  const seleclFile = async (fileName: string) => {
    const resp = await fetch(`http://localhost:3000/file/${fileName}`);
    const spreadSheetJson = await resp.json();
    setFileJson(spreadSheetJson);
  }
  return (
    <>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {uploadedFileNames.map((fileName, index) => {
                return (
                    <tr key={index}>
                        <th>{index}</th>
                        <td>{fileName}</td>
                        <th>
                        <button className="btn btn-ghost btn-xs" onClick={() => seleclFile(fileName)}>details</button>
                        </th>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>
      <Sheet fileJson={fileJson} />
    </>
  );
};

export default FileList;
