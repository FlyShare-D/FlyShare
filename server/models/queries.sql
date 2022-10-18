CREATE TABLE public.user (
  user_id SERIAL PRIMARY KEY,
  email varchar(255),
  destination varchar(255)
)
INSERT INTO public.user (email, destination)
VALUES ('chunhao@gmail.com', 'Italy');


CREATE TABLE public.flight (
  user_id integer,
  destination varchar(255),
  flight_name varchar(255),
  price money,
  votes integer
)

CREATE TABLE public.Hotel (
  user_id integer,
  destination varchar(255),
  hotel_name varchar(255),
  price money,
  votes integer
)

CREATE TABLE public.Event (
  user_id integer,
  destination varchar(255),
  event_details varchar(255),
  price money,
  votes integer
)

INSERT INTO public.flight (user_id, destination, flight_name, price, votes)
VALUES (0, 'Italy', 'Delta', 250, 0);
INSERT INTO public.Hotel (user_id, destination, hotel_name, price, votes)
VALUES (0, 'Italy', 'Hilton', 500, 0);
INSERT INTO public.Event (user_id, destination, evebt_details, price, votes)
VALUES (0, 'Italy', 'Sky Diving', 500, 0);

DROP TABLE public.user
DROP TABLE public.flight
DROP TABLE public.hotel
DROP TABLE public.event