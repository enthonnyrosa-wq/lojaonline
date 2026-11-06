CREATE TABLE cliente 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(100) NOT NULL,  
 cpf CHAR(14) NOT NULL UNIQUE,  
 celular CHAR(14) NOT NULL,  
 email VARCHAR(100) NOT NULL UNIQUE,  
 senha VARCHAR(512) NOT NULL
); 
DROP TABLE cliente;

INSERT INTO cliente (
    nome, cpf, celular, email, senha
) VALUES (
    "Patrick", "111.222.333-66", 
    "(42)99999-4444", "patrick@gmail.com",
    "EAUHEAUISHEUIEAIS"
);

IINSERT INTO cliente (nome, cpf, celular, email, senha) VALUES 
('Edson Arantes do Nascimento', '123.456.789-01', '(11)98888-1111', 'pele.rei@futebol.com', 'REIDOFUTEBOL10'),
('Diego Armando Maradona', '234.567.890-12', '(21)98777-2222', 'maradona.d10s@futebol.com', 'MAO DEDEUS'),
('Ronaldo Luís Nazário de Lima', '345.678.901-23', '(31)98666-3333', 'ronaldo.fenomeno@futebol.com', 'FENOMENO9'),
('Ronaldinho Gaúcho', '456.789.012-34', '(41)98555-4444', 'ronaldinho.bruxo@futebol.com', 'JOGOBONITO10'),
('Lionel Andrés Messi', '567.890.123-45', '(51)98444-5555', 'messi.pulga@futebol.com', 'LAPULGA10'),
('Cristiano Ronaldo dos Santos Aveiro', '678.901.234-56', '(61)98333-6666', 'cr7.siuuu@futebol.com', 'SIUUUU7'),
('Zinedine Yazid Zidane', '789.012.345-67', '(71)98222-7777', 'zidane.maestro@futebol.com', 'CABECACAVALO5'),
('Neymar da Silva Santos Júnior', '890.123.456-78', '(81)98111-8888', 'neymar.jr@futebol.com', 'MENINONEY10'),
('Kylian Mbappé Lottin', '901.234.567-89', '(91)98000-9999', 'mbappe.tartaruga@futebol.com', 'TARTARUGA7'),
('Manuel Neuer', '012.345.678-90', '(12)97999-1010', 'neuer.paredao@futebol.com', 'MURALHA1');

SELECT email, senha FROM cliente;

SELECT email, senha FROM cliente 
WHERE email = "neuer.paredao@futebol.com";

SELECT * FROM cliente WHERE id <= 30 AND LENGTH(senha) > 20;

SELECT * FROM cliente;

DELETE FROM cliente WHERE id = 37;

UPDATE cliente 
SET nome = "Patrick Staroin", email = "p@gmail.com" 
WHERE id = 35;