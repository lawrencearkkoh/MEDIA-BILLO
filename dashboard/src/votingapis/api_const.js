import swal from "sweetalert"

var ur = 'http://admin.mediabillo.net/adminresources'
export const AUTH_TOKEN = "Bearer "+sessionStorage.getItem('token')
export const VOTE_BASE_URL =  'http://192.168.8.100:4000/voting'
export const statusHandler = (response)=>{
    if(response.status !== 200) {
        ///throw new Error('Network response was not ok');
        //console.log(response.json())
       return response.json() // Promise.reject('an error has occured')

    }else{
        console.log('all is well',response.status)
        return response.json()
    }
}

export const sweetAlertMsg = (msg,icon)=>{
    swal({
        text:msg,
        icon: icon
      })
}