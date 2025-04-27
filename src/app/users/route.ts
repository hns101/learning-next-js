export const users = [
    {id:1,name:"John Doe", email:"john@gmail.com"},
    {id:2,name:"Jane Doe", email:"jane@gmail.com"},
]

export async function GET() {
    return Response.json(users);
}

export async function POST(request: Request) {
    const user = await request.json()
    const newUser = {
        id: users.length + 1,
        name: user.name,
        email: user.email
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser),{
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201,
    });
}


