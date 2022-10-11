const testUserForm = async ()=>{

const LoadUserForm = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('page loaded');
    }, 3000)
});

const enterUserName = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('user entered');
    }, 3000)
});

const verifyUserDetails = () => {

}

await LoadUserForm;
await enterUserName;
const testresult = verifyUserDetails();

return testresult;
}
testUserForm().then((m) => console.log(`person3: shows ${m}`));
