const db = require("./db")

const ESTRUTURA_CLIENTE = `
    DROP TABLE IF EXISTS cliente;
    CREATE TABLE cliente (
        id int(11) NOT NULL AUTO_INCREMENT,
        nome varchar(100) NOT NULL,
        cpf char(14) NOT NULL,
        celular char(14) NOT NULL,
        email varchar(100) NOT NULL,
        senha varchar(512) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY cpf (cpf),
        UNIQUE KEY email (email)
    ) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`

const DADOS_CLIENTE = `
    INSERT INTO cliente VALUES 
        (12,'Nicolas Galvão','123.456.789-00','(42)99966-4444','galvao@gmail.com','$2b$10$N8b2YuzXWdMJVAAd670qG.ScLlmdFsuTJ7C6/GWtMKWhj8O0pU6Pu'),(13,'Nicolas Galvão','123.456.789-02','(42)99966-4444','galvao2@gmail.com','$2b$10$rNwWgUx8kezhoZXXuVG7NeBXqPFAzpkc37Sg4P.ETVtiSaWWqBHxy'),
        (14,'Patrick','123.123.123-12','(42)999669966','patrick123@gmail.com','$2b$10$MZMnDj10f7JnV6ArP.5hm.TAHDZ5NwECYSw6i5kbNowwhPuqbC/W.'),(19,'Richard','148.211.069-57','(42) 99931-865','bellusci.richard@escola.pr.gov.br','$2b$10$v3aTKV7iVqrcBJozlOZwie8I7yO2CyQIfuVk4uxR2RSDPELZSeyxS'),
        (28,'Patrick','111.222.333-49','(42)99999-4444','patrick67@gmail.com','$2b$10$QRU70xwZs0JYccsQcf/BFe7IIGYaqlS0xb.TIkGsv7UKviM2A26pq'),(29,'Kauã silva de lima','152.915.999-79','(42)99999-4444','kaua.lima11@escola.pr.gov.br','$2b$10$Ax80a.N/1RUsBU48IO1hX.d4hyiNt/15aV8.8VJuPziVuzTwGe8ly'),
        (30,'Bruno','120.897.429-76','(42)99830-3607','derbli@gmail.com','$2b$10$t8fYQCnQRXxvbLczF6YJNu31UvNT1qWhZ1r9GiftnFLy1rABdFKfG'),(31,'Guilherme','111.333.444-78','(42)55555-9999','poisler456@gmail.com','$2b$10$r9QmvPFklIeeoCoHfISzGeJNnjScdYm4JZiNBmffsblVzk48uyHXa'),
        (32,'Rhuan','137.604.709-80','(42)99999-4444','rhuan@gmail.com','$2b$10$QA3mNPH90POZijUIri.hKO5pQQH223KGKyYOYycQA0GtPuKGhPrkS');
`

const ESTRUTURA_PRODUTO = `
    DROP TABLE IF EXISTS produto;
    CREATE TABLE produto (
        id int(11) NOT NULL AUTO_INCREMENT,
        nome varchar(200) NOT NULL,
        descricao text NOT NULL,
        categoria varchar(50) NOT NULL,
        preco decimal(10,2) NOT NULL,
        caminho_img varchar(50) NOT NULL,
        quantidade_img int(11) NOT NULL,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`

const DADOS_PRODUTO = `
    INSERT INTO produto VALUES 
        (1,'Bola de Futebol Campo','Bola oficial de futebol de campo, costura termofundida, tamanho 5, ideal para jogos e treinos.','Futebol',149.90,'assets/img/bola-futebol.jpg',15),(2,'Chuteira Society','Chuteira society com travas de borracha, cabedal em sintético e amortecimento no calcanhar.','Futebol',289.90,'assets/img/chuteira-society.jpg',10),(3,'Camisa de Time Oficial','Camisa oficial de time de futebol, tecido dry-fit com escudo bordado.','Futebol',349.90,'assets/img/camisa-time.jpg',8),(4,'Luva de Goleiro','Luva de goleiro profissional com palma em látex e proteção extra nos dedos.','Futebol',129.90,'assets/img/luva-goleiro.jpg',12),(5,'Caneleira de Futebol','Par de caneleiras leves com proteção em EVA e fixação por velcro.','Futebol',49.90,'assets/img/caneleira.jpg',20),
        (6,'Bola de Basquete','Bola de basquete oficial tamanho 7, couro sintético com sulcos profundos para melhor aderência.','Basquete',179.90,'assets/img/bola-basquete.jpg',10),(7,'Tênis de Basquete','Tênis de basquete com amortecimento em gel, suporte de tornozelo e solado antiderrapante.','Basquete',499.90,'assets/img/tenis-basquete.jpg',6),(8,'Regata de Basquete','Regata esportiva de basquete em tecido respirável, modelo sem mangas.','Basquete',89.90,'assets/img/regata-basquete.jpg',14),(9,'Cesta de Basquete','Aro de basquete com rede de nylon, ideal para instalação em garagens e quadras.','Basquete',219.90,'assets/img/cesta-basquete.jpg',5),
        (10,'Raquete de Tênis','Raquete de tênis em grafite, leve e com ótimo controle para iniciantes e intermediários.','Tênis',399.90,'assets/img/raquete-tenis.jpg',7),(11,'Bola de Tênis','Tubo com 3 bolas de tênis oficiais, ideal para treinos em quadra rápida.','Tênis',39.90,'assets/img/bola-tenis.jpg',25),(12,'Kit Raquete de Beach Tennis','Kit com raquete de beach tennis e bolas, ideal para iniciantes no esporte.','Tênis',329.90,'assets/img/kit-beach-tennis.jpg',9),
        (13,'Bola de Vôlei','Bola de vôlei oficial tamanho 5, material sintético com boa aderência.','Vôlei',139.90,'assets/img/bola-volei.jpg',13),(14,'Joelheira de Vôlei','Joelheira esportiva em neoprene com proteção para quedas e impactos.','Vôlei',59.90,'assets/img/joelheira-volei.jpg',18),(15,'Rede de Vôlei','Rede de vôlei oficial com 9,5m de comprimento e cabos de aço.','Vôlei',189.90,'assets/img/rede-volei.jpg',6),
        (16,'Halteres Ajustáveis','Par de halteres ajustáveis de 2 a 20 kg, ideal para treinos em casa.','Musculação',599.90,'assets/img/halteres-ajustaveis.jpg',5),(17,'Anilhas de Ferro','Kit de anilhas de ferro com 20 kg, furos padrão de 30mm.','Musculação',249.90,'assets/img/anilhas-ferro.jpg',8),(18,'Barra Reta','Barra reta de aço com 1,8m, ideal para exercícios de musculação.','Musculação',189.90,'assets/img/barra-reta.jpg',10),(19,'Colchonete de Academia','Colchonete em EVA com 1m, ideal para abdominal, alongamento e yoga.','Musculação',69.90,'assets/img/colchonete.jpg',20),(20,'Luva de Musculação','Luva de musculação em couro sintético com proteção para as palmas.','Musculação',49.90,'assets/img/luva-musculacao.jpg',22),
        (21,'Camisa de Compressão','Camisa de compressão esportiva com tecnologia de secagem rápida.','Vestuário',119.90,'assets/img/camisa-compressao.jpg',16),(22,'Shorts Esportivo','Shorts esportivo em tecido leve com bolsos laterais e cós elástico.','Vestuário',89.90,'assets/img/short-esportivo.jpg',20),(23,'Meia Esportiva','Kit com 3 pares de meias esportivas com amortecimento no calcanhar.','Vestuário',39.90,'assets/img/meia-esportiva.jpg',30),(24,'Jaqueta Corta-Vento','Jaqueta corta-vento impermeável com capuz, ideal para corridas ao ar livre.','Vestuário',229.90,'assets/img/jaqueta-corta-vento.jpg',10),
        (25,'Tênis de Corrida','Tênis de corrida com amortecimento em EVA e solado em borracha.','Corrida',449.90,'assets/img/tenis-corrida.jpg',9),(26,'Cinta de Corrida','Cinta esportiva para corrida com compartimentos para celular e chaves.','Corrida',79.90,'assets/img/cinta-corrida.jpg',15),(27,'Garrafa Térmica Esportiva','Garrafa térmica de 750ml, mantém a bebida gelada por até 12 horas.','Acessórios',89.90,'assets/img/garrafa-termica.jpg',18),
        (28,'Óculos de Natação','Óculos de natação com lentes antinembaçantes e proteção UV.','Natação',69.90,'assets/img/oculos-natacao.jpg',20),(29,'Touca de Natação','Touca de natação em silicone, confortável e com proteção para os cabelos.','Natação',29.90,'assets/img/touca-natacao.jpg',25),(30,'Bola de Futebol Americano','Bola de futebol americano oficial tamanho 9, costura reforçada.','Futebol Americano',179.90,'assets/img/bola-futebol-americano.jpg',7),
        (31,'Capacete de Ciclismo','Capacete de ciclismo com ventilação e sistema de ajuste traseiro.','Ciclismo',249.90,'assets/img/capacete-ciclismo.jpg',8),(32,'Luvas de Ciclismo','Luvas de ciclismo com palma acolchoada e dedos sem corte.','Ciclismo',69.90,'assets/img/luvas-ciclismo.jpg',16),(33,'Bomba de Ar para Bicicleta','Bomba de ar manual para pneus de bicicleta com manômetro.','Ciclismo',59.90,'assets/img/bomba-ar.jpg',20),
        (34,'Bola de Handebol','Bola de handebol oficial com costura termofundida e boa aderência.','Handebol',129.90,'assets/img/bola-handebol.jpg',12),(35,'Bola de Futsal','Bola de futsal oficial tamanho 4, ideal para quadras.','Futsal',139.90,'assets/img/bola-futsal.jpg',14),(36,'Chuteira de Futsal','Chuteira de futsal com solado em borracha e cabedal em sintético.','Futsal',249.90,'assets/img/chuteira-futsal.jpg',10),
        (37,'Bola de Golfe','Bola de golfe oficial com 24 unidades, alta performance.','Golfe',89.90,'assets/img/bola-golfe.jpg',30),(38,'Luva de Golfe','Luva de golfe em couro sintético com ótima aderência.','Golfe',49.90,'assets/img/luva-golfe.jpg',20),(39,'Kit de Tacos de Golfe','Kit com 5 tacos de golfe em aço, ideal para iniciantes.','Golfe',899.90,'assets/img/kit-tacos-golfe.jpg',4),
        (40,'Kit de Primeiros Socorros','Kit de primeiros socorros para atividades esportivas, com 20 itens.','Acessórios',59.90,'assets/img/kit-primeiros-socorros.jpg',15),(41,'Bola de Vôlei de Praia','Bola de vôlei de praia oficial com material resistente à água.','Vôlei',149.90,'assets/img/bola-volei-praia.jpg',10),(42,'Rede de Beach Tennis','Rede de beach tennis oficial com 8m de comprimento.','Tênis',229.90,'assets/img/rede-beach-tennis.jpg',6),
        (43,'Trave de Futebol Infantil','Trave de futebol infantil portátil, ideal para treinos em casa.','Futebol',349.90,'assets/img/trave-infantil.jpg',5),(44,'Corda de Pular','Corda de pular profissional com rolamento e ajuste de comprimento.','Acessórios',29.90,'assets/img/corda-pular.jpg',30),(45,'Faixa de Cabelo Esportiva','Faixa de cabelo esportiva em tecido absorvente, kit com 3 unidades.','Acessórios',24.90,'assets/img/faixa-cabelo.jpg',25),
        (46,'Bolsa Esportiva','Bolsa esportiva com compartimento separado para tênis e alça ajustável.','Acessórios',129.90,'assets/img/bolsa-esportiva.jpg',14),(47,'Tapete de Yoga','Tapete de yoga antiderrapante com 6mm de espessura.','Acessórios',79.90,'assets/img/tapete-yoga.jpg',18),(48,'Bola de Pilates','Bola de pilates com bomba de ar inclusa, 65cm.','Acessórios',59.90,'assets/img/bola-pilates.jpg',20),(49,'Suporte para Garrafa','Suporte para garrafa em bicicleta, em alumínio.','Ciclismo',39.90,'assets/img/suporte-garrafa.jpg',25);
`

async function criar_tabelas() {
    const connection = await db.pool.getConnection();
    try {
        await connection.beginTransaction();

        console.log("Criando tabela 'cliente'...");
        await connection.query(ESTRUTURA_CLIENTE);
        await connection.query(DADOS_CLIENTE);

        console.log("Criando tabela 'produto'...");
        await connection.query(ESTRUTURA_PRODUTO);
        await connection.query(DADOS_PRODUTO);         

        await connection.commit();
        console.log("Migration executada com sucesso!");
        process.exit(0);
    } catch (error) {
        await connection.rollback();
        console.log(error)
        process.exit(1);
    } finally {
        connection.release();
    }
}
criar_tabelas()
