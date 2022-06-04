import configs from "../configs";
import axios from "axios";
import { toast } from "react-toastify";
import CustomToast from "../utils/customeToast";
const toastObject = {
    autoClose: 2000,
};
const getHeader = () => {
    const token = localStorage.getItem('token');
    let axiosConfig = {
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            authorization: `Bearer ${token}`
        },
    };
    // console.log(axiosConfig);
    return axiosConfig;
}
const getHeaderUpload = () => {
    const token = localStorage.getItem('token');
    let axiosConfig = {
        headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${token}`,
        },
    };
    // console.log(axiosConfig);
    return axiosConfig;
}

const post = (url, params) => {
    return new Promise((resolve, rejected) => {
        axios
            .post(configs.server + url, params, getHeader())
            .then(function (response) {
                toast(
                    "Success", toastObject
                );
                return resolve(response.data);
            })
            .catch(function (error) {
                toast(
                    "Có lỗi xảy ra, vui lòng thử lại sau", toastObject
                );
                console.log(error.response);
                handleError(error, rejected);
            });
    });
}
const upload = (url, params) => {
    return new Promise((resolve, rejected) => {
        axios
            .post(configs.server + url, params, getHeaderUpload())
            .then(function (response) {
                toast(
                    "Success",
                    toastObject
                );
                return resolve(response.data);
            })
            .catch(function (error) {
                toast(
                    "Có lỗi xảy ra, vui lòng thử lại sau", toastObject
                );
                console.log("UploadError", error);
                handleError(error, rejected);
            });
    });
}

const patch = (url, params) => {
    return new Promise((resolve, rejected) => {
        axios
            .patch(configs.server + url, params, getHeader())
            .then(function (response) {
                // console.log('lala');
                toast(
                    "Success", toastObject
                );
                return resolve(response.data);
            })
            .catch(function (error) {
                toast(
                    "Có lỗi xảy ra, vui lòng thử lại sau", toastObject
                );
                // console.log('1234');
                console.log(error);
                handleError(error, rejected);
            });
    });
}

const put = (url, params) => {
    return new Promise((resolve, rejected) => {
        axios
            .put(configs.server + url, params, getHeader())
            .then(function (response) {
                // console.log('lala');
                toast(
                    "Success", toastObject
                );
                return resolve(response.data);
            })
            .catch(function (error) {
                // console.log('1234');
                toast(
                    "Có lỗi xảy ra, vui lòng thử lại sau", toastObject
                );
                console.log(error);
                handleError(error, rejected);
            });
    });
}

const get = (url) => {
    return new Promise((resolve, rejected) => {
        axios
            .get(configs.server + url, getHeader())
            .then(function (response) {
                return resolve(response.data);
            })
            .catch(function (error) {
                toast(
                    "Có lỗi xảy ra, vui lòng thử lại sau", toastObject
                );
                handleError(error, rejected);
                // return rejected(error)
            });
    });
}
const deletel = (url) => {
    return new Promise((resolve, rejected) => {
        axios
            .delete(configs.server + url, getHeader())
            .then(function (response) {
                toast(
                    "Success", toastObject
                );
                return resolve(response.data);
            })
            .catch(function (error) {
                toast(
                    "Có lỗi xảy ra, vui lòng thử lại sau", toastObject
                );
                console.log(error);
                // self.handleError(error, rejected);
            });
    });
}

const handleError = (error, rejected) => {
    if (error.response) {
        if (error.response.status === 401) {
            console.log(error.response, "hihi");
            if (error.response.data.message == "Logout") {
                window.location.reload();
            } else {
                window.location = '/login';
            }
        } else if (error.response.status === 404) {
            // window.location.href = '/error';
        } else {
            rejected(error);
        }
    } else {
        console.log("ERROR---->", error);
        rejected(error);
    }
}
const axiosConfig = {
    post,
    patch,
    put,
    delete: deletel,
    upload,
    get
}
export default axiosConfig;
