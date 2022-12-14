CREATE TABLE public.user (
  user_id SERIAL PRIMARY KEY,
  email varchar(255),
)
INSERT INTO public.user (email)
VALUES ('chunhao@gmail.com');


CREATE TABLE public.flight (
  id SERIAL,
  user_id integer,
  destination varchar(255),
  flight_name varchar(255),
  price integer,
  votes integer
)

CREATE TABLE public.Hotel (
  id SERIAL,
  user_id integer,
  destination varchar(255),
  hotel_name varchar(255),
  price integer,
  votes integer
)

CREATE TABLE public.Event (
  id SERIAL,
  user_id integer,
  destination varchar(255),
  event_details varchar(255),
  price integer,
  votes integer
)

INSERT INTO public.flight (user_id, destination, flight_name, price, votes)
VALUES (0, 'Italy', 'Delta', 250, 0);
INSERT INTO public.hotel (user_id, destination, hotel_name, price, votes)
VALUES (0, 'Italy', 'Hilton', 500, 0);
INSERT INTO public.event (user_id, destination, event_details, price, votes)
VALUES (0, 'Italy', 'Sky Diving', 500, 0);

DROP TABLE public.user
DROP TABLE public.flight
DROP TABLE public.hotel
DROP TABLE public.event