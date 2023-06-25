pragma solidity ^0.8.0;

contract FileSharingContract {
    struct File {
        address uploader;
        address[] receivers;
        string ipfsHash;
    }

    mapping(address => File) public files;

    event FileUploaded(address indexed uploader, string ipfsHash);
    event FileShared(address indexed uploader, address indexed receiver, string ipfsHash);

    function uploadFile(string memory ipfsHash) public {
        require(bytes(ipfsHash).length > 0, "IPFS hash cannot be empty");
        files[msg.sender] = File(msg.sender, new address[](0), ipfsHash);
        emit FileUploaded(msg.sender, ipfsHash);
    }

    function shareFile(address receiver) public {
        require(receiver != address(0), "Invalid receiver address");
        require(files[receiver].uploader != address(0), "No file uploaded by the given address");

        File storage sharedFile = files[receiver];
        sharedFile.receivers.push(msg.sender);
        emit FileShared(sharedFile.uploader, msg.sender, sharedFile.ipfsHash);
    }

    function getFile(address uploader) public view returns (string memory) {
        require(uploader != address(0), "Invalid uploader address");
        return files[uploader].ipfsHash;
    }
}
