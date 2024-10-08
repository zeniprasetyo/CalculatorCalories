function calculateCalories() {
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activityLevel = document.getElementById('activityLevel').value;

    if (gender && age && weight && height && activityLevel) {
        let bmr;
        
        if (gender === 'M') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (gender === 'F') {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        const totalCalories = bmr * activityLevel;


        document.getElementById('result').innerHTML = 
            `<h5> ${totalCalories.toFixed(2)} Calorie</h5>`;
    } else {
        alert('Please complete all columns!');
    }
}