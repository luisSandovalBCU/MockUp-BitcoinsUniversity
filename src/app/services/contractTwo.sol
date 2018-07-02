pragma  solidity ^0.4.18;

contract Videonizer {

    address owner;
    uint constant platformPercentage = 20;

    constructor() public {
        owner = msg.sender;
    }

    function Payable() payable public {
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    modifier onlyUser {
        require(UserAccounts[msg.sender].uRole == 0 && UserAccounts[msg.sender].uRole == 1 && UserAccounts[msg.sender].uRole == 2);
        _;
    }

    modifier onlyNewUser {
        require(UserAccounts[msg.sender].uRole != 0 && UserAccounts[msg.sender].uRole != 1 && UserAccounts[msg.sender].uRole != 2);
        _;
    }

    modifier haveMoney (bytes32 _aHash) {
        require(Assets[_aHash].aPrice == msg.value);
        _;
    }

    modifier onlyAssetAndDeal (bytes32 _aHash) {
        require(Assets[_aHash].aPrice != 0 && Deals[_aHash].dPrice != 0);
        _;
    }

    struct UserAccount {
        address uAddress;
        uint8 uRole;
        uint uTokens;
        bytes16 uName;
    }

    struct Asset {
        bytes32 aHash;
        bytes32 aType;
        bytes32 aName;
        uint aPrice;
    }

    struct Deal {
        bytes32 aHash;
        uint dPrice;
        address expertAddress;
        uint expertPercentage;
        address userAddress;
        uint userPercentage;
    }

    struct Sale {
        bytes32 aHash;
        address uAddress;
    }

    event NewUser (
        uint8 uRole,
        bytes16 uName
    );

    event NewAsset (
        bytes32 aHash,
        bytes32 aType,
        bytes32 aName,
        uint aPrice
    );

    event NewDeal (
        bytes32 aHash,
        uint dPrice,
        address expertAddress,
        uint expertPercentage,
        address userAddress,
        uint userPercentage
    );

    event NewSale (
        bytes32 aHash,
        address uAddress,
        uint expertPercentage,
        uint expertTransfer,
        uint userPercentage,
        uint userTransfer,
        uint ownerPercentage,
        uint ownerTransfer
    );
    
    mapping (address => UserAccount) UserAccounts;
    mapping (bytes32 => Asset) Assets;
    mapping (bytes32 => Deal) Deals;
    mapping (bytes32 => Sale) Sales;

    function setUser(uint8 _role, bytes16 _name) public {
        UserAccounts[msg.sender] = UserAccount ({
            uAddress: msg.sender,
            uRole: _role,
            uTokens: 0,
            uName: _name
        });
        emit NewUser(_role, _name);
    }
    //relacionar el video y el rol de los autores

    function watchUser() view public returns (address, uint, uint, bytes16) {
        return (UserAccounts[msg.sender].uAddress,
        UserAccounts[msg.sender].uRole,
        UserAccounts[msg.sender].uTokens,
        UserAccounts[msg.sender].uName
        );
    }

    function setAsset(bytes32 _aHash, bytes32 _aType, bytes32 _aName, uint _aPrice) public {        
        Assets[_aHash] = Asset ({
            aHash: _aHash,
            aType: _aType,
            aName: _aName,
            aPrice: _aPrice
        });        
        emit NewAsset(_aHash, _aType, _aName, _aPrice);                
    }

    function watchAsset(bytes32 _aHash) view public returns (bytes32, bytes32, bytes32, uint) {
        return (Assets[_aHash].aHash,
        Assets[_aHash].aType,
        Assets[_aHash].aName,
        Assets[_aHash].aPrice
        );
    }

    function setDeal(bytes32 _aHash, uint _dPrice, address _expertAddress, uint _expertPercentage, address _userAddress, uint _userPercentage) public {        
        Deals[_aHash] = Deal ({
            aHash: _aHash,
            dPrice: _dPrice,
            expertAddress: _expertAddress,
            expertPercentage: _expertPercentage,
            userAddress: _userAddress,
            userPercentage: _userPercentage
        });        
        emit NewDeal(_aHash, _dPrice, _expertAddress, _expertPercentage, _userAddress, _userPercentage);                
    }

    function watchDeal(bytes32 _aHash) view public returns (bytes32, uint, address, uint, address, uint) {
        return (Deals[_aHash].aHash,
        Deals[_aHash].dPrice,
        Deals[_aHash].expertAddress,
        Deals[_aHash].expertPercentage,
        Deals[_aHash].userAddress,
        Deals[_aHash].userPercentage
        );
    }
    
    function setSale(bytes32 _aHash) payable public haveMoney(_aHash) onlyAssetAndDeal(_aHash){
        Sales[_aHash] = Sale ({
            aHash: _aHash,
            uAddress: msg.sender
        });
        uint expertPercentage = ((msg.value * 80) / 100);
        uint userPercentage = ((msg.value * 80) / 100);
        uint ownerPercentage = ((msg.value * platformPercentage) / 100);
        uint expertProfit = ((expertPercentage * Deals[_aHash].expertPercentage) / 100);
        uint userProfit = ((userPercentage * Deals[_aHash].userPercentage) / 100);
        (Deals[_aHash].expertAddress).transfer(expertProfit);
        (Deals[_aHash].userAddress).transfer(userProfit);
        owner.transfer(ownerPercentage);
        emit NewSale(_aHash, msg.sender, Deals[_aHash].expertPercentage, expertProfit, Deals[_aHash].userPercentage, userProfit, platformPercentage, ownerPercentage);
    }
}