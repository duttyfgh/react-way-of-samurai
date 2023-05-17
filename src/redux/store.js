import { profileReducer } from "./profileReducer"
import { dialogsReducer } from "./dialogsReduser"




const store = {
    _state: {

        profilePage: {
            postData: [
                { id: 1, message: 'Hi, how are you?' },
                { id: 2, message: "It's my first post" },
            ],
            newPostText: "dutyfgh"
        },
        dialogPage: {
            messagesData: [
                {
                    id: 1, textMessages: 'Hi',
                    sender: 'me'
                },
                {
                    id: 2, textMessages: 'How are you?',
                    sender: 'me'
                },
                {
                    id: 3, textMessages: 'Not bad',
                    sender: 'frend'
                },
                {
                    id: 4, textMessages: 'Do you can meet to day?',
                    sender: 'me'
                },
                {
                    id: 5, textMessages: 'Yes, lets go',
                    sender: 'frend'
                },
                {
                    id: 8, textMessages: 'Where we will meet?',
                    sender: 'me'
                },
                {
                    id: 9, textMessages: 'Near your home',
                    sender: 'frend'
                },
                {
                    id: 10, textMessages: 'Okey am waiting',
                    sender: 'me'
                },
                {
                    id: 11, textMessages: 'Am waiting too',
                    sender: 'frend'
                },
                {
                    id: 12, textMessages: 'What time will we meet?',
                    sender: 'frend'
                },
                {
                    id: 13, textMessages: 'After 30 minutes',
                    sender: 'me'
                },

            ],

            newMessageText: '',

            dialogsData: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Varya' },
                { id: 5, name: 'Dutyfgh' }
            ],
        },
    },
    _callSubscraber() { },

    getState() {
        return this._state
    },
    subscribe(observer) {//  патерн observer
        this._callSubscraber = observer
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogPage, action)

        this._callSubscraber(this._state)
    }

}

export default store
