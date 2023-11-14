import { test, expect } from "@playwright/test";

test.describe("booking/ GET requests", async () => {  
  let cookies = "";

  test.beforeAll(async ({ request }) => {
    console.log("beforeAll Begin-execute once")
    const response = await request.post("auth/login", {
      data: {
        username: "admin",
        password: "password",
      },
    });
    expect(response.status()).toBe(200);
    const headers = await response.headers();
    cookies = headers["set-cookie"];
    console.log("beforeAll End - execute once")
  });

  test("GET booking summary with specific room id", async ({ request }) => {       
    const id = 1;        
    const response = await request.get(`booking/summary?roomid=${id}` );

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.bookings.length).toBeGreaterThanOrEqual(1);
    expect(isValidDate(body.bookings[0].bookingDates.checkin)).toBe(true);
    expect(isValidDate(body.bookings[0].bookingDates.checkout)).toBe(true);    
  });

  test("GET all bookings with details -via the token", async ({ request }) => {
    const response = await request.get("booking/", {
      headers: { cookie: cookies },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.bookings.length).toBeGreaterThanOrEqual(1);
    expect(body.bookings[0].bookingid).toBe(1);
    expect(body.bookings[0].roomid).toBe(1);
    expect(body.bookings[0].firstname).toBe("James");
    expect(body.bookings[0].lastname).toBe("Dean");
    expect(body.bookings[0].depositpaid).toBe(true);
    expect(isValidDate(body.bookings[0].bookingdates.checkin)).toBe(true);
    expect(isValidDate(body.bookings[0].bookingdates.checkout)).toBe(true);
    
  });

  test("GET booking by id with details -via the token", async ({ request }) => {    
    const id = 1;   
    const response = await request.get(`booking/${id}`, {
      headers: { cookie: cookies },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.bookingid).toBe(1);
    expect(body.roomid).toBe(1);
    expect(body.firstname).toBe("James");
    expect(body.lastname).toBe("Dean");
    expect(body.depositpaid).toBe(true);
    expect(isValidDate(body.bookingdates.checkin)).toBe(true);
    expect(isValidDate(body.bookingdates.checkout)).toBe(true);    
  });

});

export function isValidDate(date: string) {
  if (Date.parse(date)) {
    return true;
  } else {
    return false;
  }
}