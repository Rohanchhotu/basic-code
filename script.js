
    const date = new Date()
    const weekDay=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const Months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
    ];
    document.getElementById('date').innerHTML = date.getDate()
    document.getElementById('day').innerHTML = weekDay[date.getDay()]
    document.getElementById('month').innerHTML =Months[date.getMonth()]
    document.getElementById('year').innerHTML = date.getFullYear()

