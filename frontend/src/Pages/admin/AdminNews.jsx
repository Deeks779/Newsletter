import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
} from "@heroui/react";

const NEWS_KEY = "news";

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem(NEWS_KEY)) || [];
    setNews(storedNews);
  }, []);

  const publishNews = () => {
    if (!title.trim() || !article.trim()) return;

    const newItem = {
      id: Date.now(),
      title,
      article,
      date: new Date().toLocaleDateString("en-GB"),
    };

    const updatedNews = [newItem, ...news];
    localStorage.setItem(NEWS_KEY, JSON.stringify(updatedNews));
    setNews(updatedNews);

    setTitle("");
    setArticle("");
  };

  const deleteNews = (id) => {
    const updatedNews = news.filter((n) => n.id !== id);
    localStorage.setItem(NEWS_KEY, JSON.stringify(updatedNews));
    setNews(updatedNews);
  };

  return (
    <div className="px-4 py-6 pb-24 min-h-screen justify-center items-center">
      <h1 className="text-2xl font-semibold mb-6">Manage News</h1>
      {/* ADD NEWS */}
      <Card className="mb-10">
        <CardBody className="space-y-4">
          <Input
            label="News Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            label="Article"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          />

          <Button
            className="bg-[#BBA782] text-[#0b1f36] font-semibold"
            onPress={publishNews}
          >
            Publish News
          </Button>
        </CardBody>
      </Card>

      {/* NEWS LIST */}
      {news.length === 0 ? (
        <p className="text-gray-500 text-sm">No news yet</p>
      ) : (
        news.map((n) => (
          <Card key={n.id} className="mb-2">
            <CardBody>
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2">
                  <p className="text-xs text-gray-500">
                    Date: {n.date}
                  </p>

                  <p className="font-semibold">
                    Title: {n.title}
                  </p>

                  <p className="text-sm text-gray-600">
                    Article: {n.article}
                  </p>
                </div>
                <Button
                  size="sm"
                  color="danger"
                  variant="light"
                  onPress={() => deleteNews(n.id)}
                >
                  Delete
                </Button>

              </div>
            </CardBody>
          </Card>
        ))
      )}
    </div>
  );
}
