for (let i = 1; i < 13; i++){
    for (let j = 1; j < 10; j++)
    {
        for (let x = 1; x < 5; x++)
        {
            let rand = getRandomInt(1, 5);
            console.log("INSERT INTO grades (student_id, disciplines_id, grade, created_at) VALUES ("+ i + ", "+ j + ", "+ rand + ", current_timestamp);")
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Напишу запрос на выборку всех студентов определенной группы со средней оценкой больше 3,5
// select avg(grades.grade), students.first_name, students.surname from grades join students on students.id = grades.student_id join groups on groups.id = students.group_id where (groups.name = 'ИВТ-18') GROUP BY students.first_name, students.surname having avg(grades.grade) > 3.5;