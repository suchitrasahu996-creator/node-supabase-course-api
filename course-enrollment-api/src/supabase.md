--courses table
create table courses(
  id serial primary key,
  title text not null,
  instructor text not null
);

--Enrollment table
create table enrollments(
  id serial primary key,
  title text not null,
  student_name text,
  course_id integer references courses(id)
);

courses(1)---(many) enrollments