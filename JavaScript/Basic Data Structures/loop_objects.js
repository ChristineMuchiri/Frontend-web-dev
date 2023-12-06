const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  
  let noOnline = 0;
for ( let users in allUsers) {
  if ( allUsers[users].online === true ){
    noOnline += 1;
  }
  }
  return noOnline;
}
