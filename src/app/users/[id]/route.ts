import {users} from "@/app/users/route";

export async function GET(
    request: Request,
    { params }: { params: { id: string }}
) {
    const { id } = await params;
    const user = users.find(
        (user) => user.id === parseInt(id));
    return Response.json(user);
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    const userId = parseInt(id);

    // Find the index of the user in the array
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return new Response(`User with id ${id} not found`, { status: 404 });
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    return new Response(`User ${deletedUser.name} with id ${id} deleted`, {
        status: 200,
    });
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    const userId = parseInt(id);

    // Parse the incoming JSON body
    const updatedData = await request.json();

    // Find the user by ID
    const user = users.find(user => user.id === userId);

    if (!user) {
        return new Response(`User with id ${id} not found`, { status: 404 });
    }

    // Update the user fields
    user.name = updatedData.name ?? user.name;
    user.email = updatedData.email ?? user.email;

    return new Response(JSON.stringify(user), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
    });
}