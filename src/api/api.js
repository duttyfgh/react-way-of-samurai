import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': '3f434e06-595b-46a6-93e7-758c9740118b' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)

    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`,).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`,).then(response => response.data)
    },
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data)
    }, 
    loginout() {
        return instance.delete(`auth/login`).then(response => response.data)
    },   

}

export const profileAPI = {
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status }).then(response => response.data)

    }
}