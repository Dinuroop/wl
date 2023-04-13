const form = document.getElementById('student-form')
form.addEventListener('submit',(e)=>{
    console.log("Hello")
    e.preventDefault();
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const dept = document.getElementById('dept').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const data = {
        id : id,
        name : name,
        age: age,
        dept: dept,
        gender: gender,
        dob: dob
    }
    console.log(data)
    fetch("http://localhost:5000/addStudent",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
})