'use client';
import Container from '@/components/container';
import { useMessage } from '@/components/message';

export default function Index() {
  const message = useMessage();
  const handleClick = async () => {
    message.success(`测试弹窗${new Date()}`);
  };

  return (
    <Container>
      <div className="w-[200px]">
        <div className="line-clamp-2 text-secondary">
          <span>这是一段文本</span>
          <span>这是一段文本</span>
          <span>这是一段文本</span>
          <span>这是一段文本</span>
          <span>这是一段文本</span>
        </div>
      </div>
      <button
        className="rounded-lg bg-indigo-600 px-4 py-2 text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        onClick={handleClick}
      >
        Button
      </button>
    </Container>
  );
}
