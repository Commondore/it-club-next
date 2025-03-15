import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { IPost } from "@/interfaces/post";

interface Props {
  post: IPost;
}

export const Post = ({ post }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title.substring(0, 30) + "..."}</CardTitle>
        <CardDescription>{post.body.substring(0, 30) + "..."}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button size={"sm"}>Подробнее</Button>
      </CardContent>
    </Card>
  );
};
