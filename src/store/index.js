import { createStore } from "vuex";
const store = createStore({
    state: {
        ShowAlert: false,
        Status: 0,
        userName: [],
        UserId: [],
        countBrand: [],
    },
    getters: {},
    mutations: {
        SHOW_ALERT(state, id) {
            state.ShowAlert = true;
            state.Status = id;
            setTimeout(function () { state.ShowAlert = 0 }.bind(this), 1500)
            setTimeout(function () { state.Status = 0 }.bind(this), 1500)
        },
        USER_INFOS(state, _userName, _UserId, _countBrand) {
            state.userName = _userName,
                state.UserId = _UserId,
                state.countBrand = _countBrand
        },
    },
    actions: {
    }
})
export default store;