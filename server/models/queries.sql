CREATE TABLE public.User (
  UserId SERIAL PRIMARY KEY,
  Email varchar(255),
  Destination varchar(255)
)
INSERT INTO public.user (Email, Destination)
VALUES ('chunhao@gmail.com', 'Italy');


CREATE TABLE public.Flight (
  UserId integer,
  Destination varchar(255),
  FlightName varchar(255),
  Price integer,
  Votes integer
)

CREATE TABLE public.Hotel (
  UserId integer,
  Destination varchar(255),
  HotelName varchar(255),
  Price integer,
  Votes integer
)

CREATE TABLE public.Event (
  UserId integer,
  Destination varchar(255),
  EventDetails varchar(255),
  Price integer,
  Votes integer
)

INSERT INTO public.Flight (UserId, Destination, FlightName, Price, Votes)
VALUES (0, 'Italy', 'Delta', 250, 0);
INSERT INTO public.Hotel (UserId, Destination, HotelName, Price, Votes)
VALUES (0, 'Italy', 'Hilton', 500, 0);
INSERT INTO public.Event (UserId, Destination, EventDetails, Price, Votes)
VALUES (0, 'Italy', 'Sky Diving', 500, 0);

DROP TABLE public.Flight
DROP TABLE public.Hotel
DROP TABLE public.Event