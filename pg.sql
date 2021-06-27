--
-- PostgreSQL database dump
--

-- Dumped from database version 10.17 (Ubuntu 10.17-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.17 (Ubuntu 10.17-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Administrators; Type: TABLE; Schema: public; Owner: nodejs
--

CREATE TABLE public."Administrators" (
    id integer NOT NULL,
    "fullName" character varying(255),
    username character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Administrators" OWNER TO nodejs;

--
-- Name: Administrators_id_seq; Type: SEQUENCE; Schema: public; Owner: nodejs
--

CREATE SEQUENCE public."Administrators_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Administrators_id_seq" OWNER TO nodejs;

--
-- Name: Administrators_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nodejs
--

ALTER SEQUENCE public."Administrators_id_seq" OWNED BY public."Administrators".id;


--
-- Name: Programs; Type: TABLE; Schema: public; Owner: nodejs
--

CREATE TABLE public."Programs" (
    id integer NOT NULL,
    title character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Programs" OWNER TO nodejs;

--
-- Name: Programs_id_seq; Type: SEQUENCE; Schema: public; Owner: nodejs
--

CREATE SEQUENCE public."Programs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Programs_id_seq" OWNER TO nodejs;

--
-- Name: Programs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nodejs
--

ALTER SEQUENCE public."Programs_id_seq" OWNED BY public."Programs".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: nodejs
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO nodejs;

--
-- Name: Students; Type: TABLE; Schema: public; Owner: nodejs
--

CREATE TABLE public."Students" (
    id integer NOT NULL,
    "fullName" character varying(255),
    email character varying(255),
    "phoneNumber" character varying(255),
    "isBoy?" boolean,
    "dateOfBirth" timestamp with time zone,
    "placeOfBirth" character varying(255),
    "programId" integer,
    "statusId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Students" OWNER TO nodejs;

--
-- Name: Students_id_seq; Type: SEQUENCE; Schema: public; Owner: nodejs
--

CREATE SEQUENCE public."Students_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Students_id_seq" OWNER TO nodejs;

--
-- Name: Students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nodejs
--

ALTER SEQUENCE public."Students_id_seq" OWNED BY public."Students".id;


--
-- Name: Administrators id; Type: DEFAULT; Schema: public; Owner: nodejs
--

ALTER TABLE ONLY public."Administrators" ALTER COLUMN id SET DEFAULT nextval('public."Administrators_id_seq"'::regclass);


--
-- Name: Programs id; Type: DEFAULT; Schema: public; Owner: nodejs
--

ALTER TABLE ONLY public."Programs" ALTER COLUMN id SET DEFAULT nextval('public."Programs_id_seq"'::regclass);


--
-- Name: Students id; Type: DEFAULT; Schema: public; Owner: nodejs
--

ALTER TABLE ONLY public."Students" ALTER COLUMN id SET DEFAULT nextval('public."Students_id_seq"'::regclass);


--
-- Data for Name: Administrators; Type: TABLE DATA; Schema: public; Owner: nodejs
--

COPY public."Administrators" (id, "fullName", username, password, "createdAt", "updatedAt") FROM stdin;
1	Kevin Huang	admin	$2a$08$Sqs7mnI4uVj/8GM.lLcy.eODFpvDfTQyjD6kwe/2U1ipxzifmXwR6	2021-06-26 09:23:16.046+07	2021-06-26 09:23:16.046+07
\.


--
-- Data for Name: Programs; Type: TABLE DATA; Schema: public; Owner: nodejs
--

COPY public."Programs" (id, title, "createdAt", "updatedAt") FROM stdin;
1	S1 - Teknik Informatika	2021-06-26 11:18:19.385+07	2021-06-26 11:56:24.862+07
2	S1 - Sistem Informasi	2021-06-26 11:18:23.834+07	2021-06-26 11:57:14.211+07
3	S1 - Manajemen	2021-06-26 11:19:56.513+07	2021-06-26 11:57:52.78+07
4	S1 - Akuntansi	2021-06-26 11:21:00.266+07	2021-06-26 11:58:00.221+07
5	D3 - Manajemen Informatika	2021-06-26 11:21:01.509+07	2021-06-26 11:58:25.577+07
6	S2 - Teknologi Informasi	2021-06-26 11:21:47.229+07	2021-06-26 11:58:53.701+07
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: nodejs
--

COPY public."SequelizeMeta" (name) FROM stdin;
20210625152830-create-student.js
20210625153032-create-program.js
20210625153308-create-administrator.js
\.


--
-- Data for Name: Students; Type: TABLE DATA; Schema: public; Owner: nodejs
--

COPY public."Students" (id, "fullName", email, "phoneNumber", "isBoy?", "dateOfBirth", "placeOfBirth", "programId", "statusId", "createdAt", "updatedAt") FROM stdin;
2	Kevin	kvnhuang7@gmail.com	085277978737	t	2000-11-17 07:00:00+07	Medan	1	1	2021-06-26 12:49:53.941+07	2021-06-26 12:49:53.941+07
3	Kevin	kvnhuang7@gmail.com	085277978737	t	2000-11-17 07:00:00+07	Medan	1	1	2021-06-26 12:50:04.01+07	2021-06-26 12:50:04.01+07
4	Kevin	kvnhuang7@gmail.com	085277978737	t	2000-11-17 07:00:00+07	Medan	1	1	2021-06-26 12:54:01.96+07	2021-06-26 12:54:01.96+07
5	Kevin	kvnhuang7@gmail.com	085277978737	t	2000-11-17 07:00:00+07	Medan	1	1	2021-06-26 13:25:59.412+07	2021-06-26 13:25:59.412+07
6	Kevin	kvnhuang7@gmail.com	085277978737	t	2000-11-17 07:00:00+07	Medan	1	1	2021-06-26 13:26:00.481+07	2021-06-26 13:26:00.481+07
1	Kevin	kvnhuang7@gmail.com	085277978737	t	2000-11-17 07:00:00+07	Medan	1	2	2021-06-26 12:02:16.945+07	2021-06-26 14:28:50.136+07
7	Kevin	kvnhuang7@gmail.com	085277978737	t	2000-11-17 07:00:00+07	Medan	1	1	2021-06-26 14:58:31.622+07	2021-06-26 14:58:31.622+07
8	Kevin	kvnhuang7@gmail.com	085277978737	t	2000-11-17 07:00:00+07	Medan	1	1	2021-06-27 09:40:00.505+07	2021-06-27 09:40:00.505+07
9	Tes From Frontend	tes@tes.com	111	f	2021-06-28 07:00:00+07	Medan	5	1	2021-06-27 10:48:30.168+07	2021-06-27 10:48:30.168+07
10	TE	kevin@wrsupratman.sch.id	E	t	2021-06-07 07:00:00+07	TE	2	1	2021-06-27 11:04:40.444+07	2021-06-27 11:04:40.444+07
11	tes	tes@tes.com	a	f	2021-06-06 07:00:00+07	tes	2	1	2021-06-27 11:04:59.907+07	2021-06-27 11:04:59.907+07
12	Budi Jayden	budi@example.com	081234567890	t	2021-06-01 07:00:00+07	Medan	1	2	2021-06-27 11:31:38.422+07	2021-06-27 11:41:15.792+07
\.


--
-- Name: Administrators_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nodejs
--

SELECT pg_catalog.setval('public."Administrators_id_seq"', 1, true);


--
-- Name: Programs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nodejs
--

SELECT pg_catalog.setval('public."Programs_id_seq"', 8, true);


--
-- Name: Students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nodejs
--

SELECT pg_catalog.setval('public."Students_id_seq"', 12, true);


--
-- Name: Administrators Administrators_pkey; Type: CONSTRAINT; Schema: public; Owner: nodejs
--

ALTER TABLE ONLY public."Administrators"
    ADD CONSTRAINT "Administrators_pkey" PRIMARY KEY (id);


--
-- Name: Programs Programs_pkey; Type: CONSTRAINT; Schema: public; Owner: nodejs
--

ALTER TABLE ONLY public."Programs"
    ADD CONSTRAINT "Programs_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: nodejs
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Students Students_pkey; Type: CONSTRAINT; Schema: public; Owner: nodejs
--

ALTER TABLE ONLY public."Students"
    ADD CONSTRAINT "Students_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

