export default {
    isLoggedIn() {
        return false;
    },
    devSubmit() { 
        console.log('Dev Submit: ', ...arguments);
    },
    toast(str: string) {
        console.log('Toast', str);
    }
};