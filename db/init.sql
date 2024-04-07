CREATE TABLE alunos (
    id int primary key not null,
    nome varchar(30) not null,
    sobrenome varchar(30),
    periodo int not null,
    observacao varchar(100)
);
CREATE TABLE users (
    usu_id SERIAL PRIMARY KEY,
    usu_name TEXT NOT NULL UNIQUE,
    usu_salt TEXT NOT NULL,
    usu_password TEXT NOT NULL
);