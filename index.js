// Add your code here

function submitData(name,email) {
    fetch('http://localhost:3000/users',{
    method: 'POST',
    headers: {
        
        "Content-Type": "application/json",
        //Accept: "application/json",
    },
    body: JSON.stringify(
        {
            'name': name,
            'email': email
        }
    )
    })
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        let par = document.createAttribute('p').textContent = `${data.id}`
                      
        document.querySelector("body").insertAdjacentHTML('beforeend',par)
       
    })
    .catch((err) => {
        //alert('rejected',err);
                             
        document.querySelector("body").insertAdjacentHTML('beforeend',err)
    });
}
submitData("Steve",'steve@steve.com')
