export type Action = {
    type?: string;
    payload?: string;
}

export type State = {
    imgSrc: string | undefined;
    name: string;
    surname: string;
    nickname: string;
    bio: string | undefined
}

export const reducer =  (state: State, action: Action) => {
    switch(action.type){

    }
}