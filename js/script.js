window.addEventListener('load', init)
function init() {
    const $ = (id) => document.getElementById(id)
    let form = $('empForm')
    let id = $('id')
    let fullName = $('name')
    let ext = $('ext')
    let email = $('email')
    let department = $('department')
    form.addEventListener("submit", (e) => {e.preventDefault() 
        console.log(`ID: ${id.value}\nName: ${fullName.value}\nExtension: ${ext.value}\nEmail: ${email.value}\nDepartment: ${department.value}`)
    })
}