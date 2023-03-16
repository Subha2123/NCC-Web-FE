
import axios from 'axios'

const adminLogin= (payload) => {
    const url=`http://localhost:9876/api/admin/login`
    return axios.post(url,payload)
       
}

const studentLogin= (payload) => {
    const url=`http://localhost:9876/api/student/login`
    return axios.post(url,payload)
       
}


export {adminLogin,studentLogin}