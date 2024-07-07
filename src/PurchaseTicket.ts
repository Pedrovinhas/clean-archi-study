import crypto from "crypto";
import pgPromise from "pg-promise";
import pgp from "pg-promise";

export default class PurchaseTicket {
  constructor() {

  }

  async execute(input: Input): Promise<Output> {
    const ticketId = crypto.randomUUID();
    const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
    const [event] = await connection.query("select * from public.event where event_id = $1", [input.eventId]);
    await connection.query("insert into public.ticket (ticket_id, event_id, email, price, status, date) values ($1, $2, $3, $4, $5, $6)" ,
       [ticketId, input.event_id, input.email, parseFloat(event.price), "active", new Date()]);
    await connection.$pool.end();

    return {
      ticketId
    }
  }
}

type Input = {
  event_id: string,
  email: string
}

type Output = {
  ticketId: string
}