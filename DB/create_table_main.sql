CREATE TABLE universities(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    update_at DATE,
    created_at DATE
);

CREATE TABLE disciplines(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    update_at DATE,
    created_at DATE
);

CREATE TABLE groups(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    university_id INTEGER REFERENCES universities(id),
    update_at DATE,
    created_at DATE
);

CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    patronymic VARCHAR(255),
	age SMALLINT NOT NULL,
    date_admission DATE NOT NULL,
    group_id INTEGER REFERENCES groups(id),
    update_at DATE,
    created_at DATE
);

CREATE TABLE grades(
    id SERIAL PRIMARY KEY,
    grade  SMALLINT NOT NULL,
    disciplines_id INTEGER REFERENCES disciplines(id),
    student_id INTEGER REFERENCES students(id),
    update_at DATE,
    created_at DATE
);






