import React, { useState } from "react";
import { create } from "ipfs-core";
import axios from "axios";

function FileUpload() {
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
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={uploadFile}>Upload</button>
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
  );
}

export default FileUpload;
