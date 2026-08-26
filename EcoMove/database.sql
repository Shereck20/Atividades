CREATE DATABASE EcoMove;

BEGIN;


CREATE TABLE IF NOT EXISTS public.atividade
(
    id serial NOT NULL,
    usuario_id integer NOT NULL,
    tipo text NOT NULL,
    distancia_metros numeric NOT NULL,
    duracao_minutos integer NOT NULL,
    co2_kg numeric NOT NULL,
    data_iso timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.usuarios
(
    id serial NOT NULL,
    nome character varying(50) NOT NULL,
    email text NOT NULL,
    senha text NOT NULL,
    foto_url text NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.curtida
(
    usuario_id integer NOT NULL,
    atividade_id integer NOT NULL,
    id serial NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.comentarios
(
    usuario_id integer NOT NULL,
    atividade_id integer NOT NULL,
    id serial NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.atividade
    ADD CONSTRAINT fk_usuarios FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.curtida
    ADD CONSTRAINT fk_usuario FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.curtida
    ADD CONSTRAINT fk_atividade FOREIGN KEY (atividade_id)
    REFERENCES public.atividade (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.comentarios
    ADD CONSTRAINT fk_usuario FOREIGN KEY (usuario_id)
    REFERENCES public.usuarios (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.comentarios
    ADD CONSTRAINT fk_atividade FOREIGN KEY (atividade_id)
    REFERENCES public.atividade (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;