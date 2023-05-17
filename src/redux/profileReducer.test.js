import { addPostEctionCreater, deletePost, profileReducer } from "./profileReducer";

const state = {
    postData: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: "It's my first post" },
    ]
}

test('length of posts should be incremented', () => {
    //1. test data
    const action = addPostEctionCreater('Yoo')

    //2. action
    const newState = profileReducer(state, action)
    
    //3. expectation
    expect(newState.postData.length).toBe(3)

});

test('message of new post should be correct', () => {
    const action = addPostEctionCreater('Yoo')
    const newState = profileReducer(state, action)

    expect(newState.postData[2].message).toBe('Yoo')

});

test('after deleting length og messages should be decrement', () => {
    const action = deletePost(1)
    const newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(1)

});

test("after deleting length should't be decrement if id is incorrect", () => {
    const action = deletePost(1000)
    const newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(2)

});