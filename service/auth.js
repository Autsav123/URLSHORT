const sessionIdToUserMap = new Map();
//const jwt=require("jsonwebtoken");
//const secret="Utsav@123456";
function setUser( id,user) {
 sessionIdToUserMap.set(id, user);

};

function getUser(id) {
 
  return sessionIdToUserMap.get(id);
  
}

module.exports = { 
  setUser,
  getUser,
};