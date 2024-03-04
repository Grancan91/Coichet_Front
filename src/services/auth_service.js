import { api } from "./api_service";

const login = async(user, password) => {
    const { data } = await api.post('auth/login', { email: user, password: password })
    localStorage.setItem('authorization', data.Authorization)
    return true
}

export { login }