import pgp from "pg-promise";

export default class GetTicket {
  constructor() {

  }

  async execute(ticketId: string): Promise<Output> {
    const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
    const [ticket] = await connection.query("select * from public.ticket where ticket_id = $1", [ticketId]);
    await connection.$pool.end();
    return ticket;
  }
}

type Output = {
  ticketId: string
  event_id: string,
  email: string,
  price: string
}