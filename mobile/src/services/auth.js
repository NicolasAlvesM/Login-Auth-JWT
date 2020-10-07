export function signIn(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve({
                token:'asdfadsfadfazcxzzxxasfdafdxxxxx',
                user:{
                    name:'Nicolas',
                    email:'enmail@email.com',
                },
            })
        }, 2000);
})} 
