import axios from 'axios';
import {showAlert} from './alerts'

export const updateSetting = async (data, type) => {
   
    try {
        
        const url =
          type === 'password'
            ? 'http://127.0.0.1:8000/api/v1/users/updatemypassword'
            : 'http://127.0.0.1:8000/api/v1/users/updateMe';
        const res = await axios({
            method: 'PATCH',
            url,
            data
        });
        
        if (res.data.status === 'success') {
            showAlert('success', `${type.toUpperCase()} updated successfully!`)
        }
    } catch (error) {
        showAlert('error', err.response.data.message)
    }
};



