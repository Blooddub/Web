CREATE TABLE university(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    update_at DATE,
    created_at DATE
);

CREATE TABLE discipline(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    update_at DATE,
    created_at DATE
);

CREATE TABLE groups(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    university_id INTEGER REFERENCES universitie(id),
    update_at DATE,
    created_at DATE
);

CREATE TABLE student(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    patronymic VARCHAR(255),
	birthday DATE NOT NULL,
    date_admission DATE NOT NULL,
    group_id INTEGER REFERENCES groups(id),
    update_at DATE,
    created_at DATE
);

CREATE TABLE grade(
    id SERIAL PRIMARY KEY,
    grade  SMALLINT NOT NULL,
    discipline_id INTEGER REFERENCES discipline(id),
    student_id INTEGER REFERENCES student(id),
    update_at DATE,
    created_at DATE
);

CREATE TABLE profile(
    id SERIAL PRIMARY KEY,
    login  VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    update_at DATE,
    created_at DATE
);
