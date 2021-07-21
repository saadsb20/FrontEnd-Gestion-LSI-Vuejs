import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        access_token: localStorage.getItem('auth') || '',
        username: localStorage.getItem('username') || 'Guest',
        EtuSemestre: localStorage.getItem('EtuSemestre') || '',
        EtuId: localStorage.getItem('EtuId') || '',
        user_role: localStorage.getItem('user_role') || '',
        id_prof: localStorage.getItem('id_prof') || '',
        id_module: localStorage.getItem('id_module') || '',
        semestre_P: localStorage.getItem('semestre_P') || '',
    },
    mutations: {
        setToken(state, access_token) {
            localStorage.setItem('auth', access_token)
            state.access_token = access_token;
        },
        setUser(state, data) {
            localStorage.setItem('username', data.user.prenom + ' ' + data.user.nom)
            localStorage.setItem('user_role', data.role)
            if (data.role == 'Student') {
                localStorage.setItem('EtuSemestre', data.user.id_semestre)
                localStorage.setItem('EtuId', data.user.id)
            } else if (data.role == 'Teacher') {
                localStorage.setItem('id_prof', data.user.id)

            }
            state.username = data.user.prenom + ' ' + data.user.nom
            state.EtuSemestre = data.user.id_semestre
            state.EtuId = data.user.id
            state.user_role = data.role
        },
        setIdModule(state, data) {
            localStorage.setItem('id_module', data)
            state.id_module = data
        },
        setSemestreProf(state, data) {
            localStorage.setItem('semestre_P', data)
            state.semestre_P = data;
        },
        clear(state) {
            localStorage.removeItem('auth')
            localStorage.removeItem('EtuSemestre')
            localStorage.removeItem('EtuId')
            localStorage.removeItem('user_role')
            localStorage.removeItem('id_prof')
            localStorage.removeItem('id_module')
            localStorage.removeItem('semestre_P')
            localStorage.removeItem('username')
            state.username = 'Guest';
            localStorage.setItem('username', state.username)
            state.access_token = '';
        },
    },

});



















