import { useState, ChangeEvent } from "react";
import FileList from "./components/FileList";

function App() {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files){
      setSelectedFile(event.target.files[0]);
    }
  }

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('spreadsheet', selectedFile as File);
    if(selectedFile) {
      await fetch("http://localhost:3000/upload", {
        method: "post",
        body: formData
      });
      
      const filesResponse = await fetch("http://localhost:3000/files");
      const files = await filesResponse.json();
      setUploadedFiles(files);
    }
  }

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Excel Uploader</h1>
            <p className="py-6">
              Upload and view your excel files.
            </p>
            <input type="file" onChange={selectFile} className="file-input w-full max-w-xs" />
            <button className="btn btn-primary" onClick={uploadFile}>Upload File</button>

            <FileList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
