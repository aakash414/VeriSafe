import Sidebar from "../components/Sidebar";
import axios from "axios";
//import { create } from "ipfs-core";
import { useState } from "react";

const Upload = () => {


  const [file, setFile] = useState(null);
  const [hash, setHash] = useState(null);

  const onFileChange = async (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const options = {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: "0841abb02f314a44aafa",
          pinata_secret_api_key:
            "ff25ff7d1165f5d76179673b42348604e1576fcc1969574fd8f226af6c5a777b",
        },
      };

      try {
        const response = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          options
        );

        const { IpfsHash } = response.data;
        setHash(IpfsHash);

        const uploadedFile = { name: file.name, hash: IpfsHash };
        const uploadedFiles = JSON.parse(localStorage.getItem("uploadedFiles"));
        localStorage.setItem(
          "uploadedFiles",
          JSON.stringify([...(uploadedFiles || []), uploadedFile])
        );

        setFile(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex flex-row w-full">
      <Sidebar/>
      <div className="flex flex-row items-center justify-center w-full gap-1">
        <input type="file" onChange={onFileChange} className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"/>
        <button onClick={uploadFile} className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-green-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
          Upload
        </button>
        {hash && (
          <p>
            File uploaded to IPFS! Hash:{" "}
            <a
              href={`https://gateway.pinata.cloud/ipfs/${hash}`}
              target="_blank"
              rel="noreferrer"
            >
              {hash}
            </a>
          </p>
        )}
      </div>
    </div>
  )
}


export default Upload