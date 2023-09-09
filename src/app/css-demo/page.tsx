'use client';
import { useState } from 'react';
import Container from '@/components/container';
import { useMessage } from '@/components/message';
import Modal from '@/components/modal';

export default function Index() {
  const message = useMessage();
  const [visible, setVisible] = useState(false);

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
      <div className="space-x-8">
        <button
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
          onClick={handleClick}
        >
          弹出message
        </button>
        <button
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
          onClick={() => {
            setVisible(true);
          }}
        >
          打开Modal
        </button>
      </div>
      <Modal visible={visible} onCancel={() => setVisible(false)} title="标题">
        这是测试内容
      </Modal>
    </Container>
  );
}
