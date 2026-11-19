import comments from "@/app/data/comments";

export async function GET(_request, { params }) {
  const comment = comments.find((c) => c.id === parseInt(params.id));
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  return Response.json(comment);
}

export async function PATCH(request, { params }) {
  const comment = await request.json();
  const index = comments.findIndex((c) => c.id === parseInt(params.id));
  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  comments[index].text = comment.text;
  return Response.json(comment);
}

export async function DELETE(request, { params }) {
  const index = comments.findIndex((c) => c.id === parseInt(params.id));
  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  comments.splice(index, 1);
  return new Response(null, { status: 204 });
}
