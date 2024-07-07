import GetTicket from "../GetTicket";
import PurchaseTicket from "../PurchaseTicket";

test("It should be able to buy a ticket for an event", async function() {
  // GIVEN
  const purchaseTicket = new PurchaseTicket();
  const getTicket = new GetTicket();
  const inputPurchaseTicket = {
    event_id: "426fe2fa-db53-4a91-92e1-107a9926bd48",
    email: "johndoe@gmail.com"
  }

  // WHEN
  const outputPurchaseTicket = await purchaseTicket.execute(inputPurchaseTicket);
  const outputGetTicket = await getTicket.execute(outputPurchaseTicket.ticketId);

  // THEN
  expect(outputPurchaseTicket.ticketId).toBeDefined();
  expect(outputGetTicket.event_id).toBe("426fe2fa-db53-4a91-92e1-107a9926bd48");
  expect(outputGetTicket.email).toBe("johndoe@gmail.com");
  expect(outputGetTicket.price).toBe(100);
})