import comments from "@/app/data/comments";

// we want to show comment
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  if (query) {
    const filteredComments = comments.filter((c) =>
      c.text.toLowerCase().includes(query.toLowerCase())
    );
    return Response.json(filteredComments);
  }
  
  return Response.json(comments);
}

export async function POST(request) {
  const { text } = await request.json();
  const newComment = {
    id: comments.length + 1,
    text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201
  });
}
