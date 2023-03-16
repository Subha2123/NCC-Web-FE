import { showNotification } from "@mantine/notifications";

  function Errornotification(message) {
   showNotification({
   autoClose: 2000,
   message:message,
   color:'#ff3333',
   style: { backgroundColor:'#ff3333'},
   sx: { backgroundColor: '#ff3333' },
   loading: false,
   })
}

function Successnotification(message) {
    showNotification({
    autoClose: 3000,
    message:message,
    color:'#009933',
    style: { backgroundColor:'#009933'},
    sx: { backgroundColor: '#009933' },
    loading: false,
    })
}
export {Errornotification,Successnotification}
