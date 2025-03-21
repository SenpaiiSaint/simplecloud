// app/api/auth/dummy/route.ts
export async function GET() {
    const data = {
      metrics: {
        users: 123,
        sales: 456,
        traffic: 789,
      },
      message: "This is dummy data for the dashboard",
    };
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  