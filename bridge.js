module.exports = {
    isLoggedIn() {
        return false;
    },
    devSubmit: false,
    devSubmit() { 
        console.log('Dev Submit: ', ...arguments);
    },
    toast(str) {
        console.log('Toast', str);
    }
};