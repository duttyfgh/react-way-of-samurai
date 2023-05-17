const SEND_MESSAGE = 'dialog/SEND-MESSAGE'

const initialState = {
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
            id: 4, textMessages: 'Do we can meet to day?',
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

    dialogsData: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Varya' },
        { id: 5, name: 'Dutyfgh' }
    ],
}

export const dialogsReducer = (state = initialState, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 13,
                textMessages: action.newMessageText,
                sender: 'me'
            }
            stateCopy.messagesData.push(newMessage)
            return stateCopy

        default:
            return stateCopy

    }

}

export const addMessageEctionCreater = (newMessageText) => ({
    type: SEND_MESSAGE,
    newMessageText
})
