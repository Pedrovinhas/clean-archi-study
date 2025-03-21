drop schema public cascade;
create schema public;

create table public.event (
	event_id uuid primary key,
	description text,
	price numeric,
	date timestamp,
	capacity int
);

create table public.ticket (
	ticket_id uuid primary key,
	event_id uuid,
	email text,
	price numeric,
	date timestamp,
	status text
);

insert into public.event (event_id, description, price, date, capacity) values ('185ff433-a7df-4dd6-ac86-44d219645cb1', 'A', 100, '2024-10-10T10:00:00', 500);