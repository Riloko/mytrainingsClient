<script>
const  getTrainings = async (limit = 8, offset = 0) => {
    const URLbase = "http://localhost:3002";  
    
    let trainings = await fetch(`${URLbase}/dashboard/get_trainings`, {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
        'Content-Type': 'multipart/form-data',
        'Origin': 'http://localhost:8080'                   
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({limit, offset})
    })
        .then(res => res.json())
        .then(body => body)
        .catch(err => console.log(err))

        return trainings
}

const  getTrainingsLimit = async () => {
    const URLbase = "http://localhost:3002";  
    
    let limit = await fetch(`${URLbase}/dashboard/get_trainings_limit`, {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
        'Content-Type': 'multipart/form-data',
        'Origin': 'http://localhost:8080'                   
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer'
    })
        .then(res => res.json())
        .then(body => body)
        .catch(err => console.log(err))

        return limit
}

export default {
    getTrainings,
    getTrainingsLimit
}
</script>