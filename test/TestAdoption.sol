pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption {
    Adoption adoption = Adoption(DeployedAddresses.Adoption());

    function testserCanAdoptpet() public {
        uint returnedId = adoption.adopt(8);
        uint expected = 8;
        Assert.equal(returnedId, expected, "Adoption of pet ID 8 should be recorded.");
    }

    function testGetAdopterAddressByPetId() public {
        address expected = this;
        address adopter = adoption.adopters(8);
        // 1人のペットのオーナーの検索のテスト
        Assert.equal(adopter, expected, "Owner of pet ID 8 should be recorded.");
    }

    function testgetAdopterAddressByIdInArray() public {
        address expected = this;
        address[16] memory adopters = adoption.getAdopters();
        // すべてのペットのオーナーの検索のテスト
        Assert.equal(adopters[8], expected, "Owner of pet ID 8 should be recorded.");
    }
}