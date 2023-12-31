'use client';
import Image from 'next/image';
import { useState } from 'react';
import Container from '@/components/container';
import { useMessage } from '@/components/ui/Message';
import Modal from '@/components/ui/Modal';
import Select from '@/components/ui/Select';
import ModalHeadless from '@/components/ui/ModalHeadless';
import SearchSelect from '@/components/ui/SearchSelect';

const MySearchSelect = () => {
  const [value, setValue] = useState<string | number>('');

  const people = [
    { label: 'Wade Cooper', value: 1 },
    { label: 'Arlene Mccoy', value: 2 },
    { label: 'Devon Webb', value: 3 },
    { label: 'Tom Cook', value: 4 },
    { label: 'Tanya Fox', value: 5 },
    { label: 'Hellen Schmidt', value: 6 },
  ];
  return (
    <SearchSelect
      options={people}
      value={value}
      onChange={(val) => setValue(val)}
    />
  );
};

const MySelect = () => {
  const [value, setValue] = useState<string | number>(1);

  const people = [
    { label: 'Wade Cooper', value: 1 },
    { label: 'Arlene Mccoy', value: 2 },
    { label: 'Devon Webb', value: 3 },
    { label: 'Tom Cook', value: 4 },
    { label: 'Tanya Fox', value: 5 },
    { label: 'Hellen Schmidt', value: 6 },
  ];
  return (
    <Select options={people} value={value} onChange={(val) => setValue(val)} />
  );
};

const MyModalHeadless = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="mt-10">
      <button
        className="rounded-lg bg-indigo-600 px-4 py-2 text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        onClick={() => {
          setVisible(true);
        }}
      >
        打开headlessModal
      </button>
      <ModalHeadless
        visible={visible}
        onClose={() => setVisible(false)}
        title="测试title"
      >
        <div>这是一段测试岑日</div>
      </ModalHeadless>
    </div>
  );
};

export default function Home() {
  const message = useMessage();
  const [visible, setVisible] = useState(false);

  const handleClick = async () => {
    message.success(`测试弹窗${new Date()}`);
  };

  return (
    <Container>
      <div className="w-[200px]">
        <div className="text-secondary line-clamp-2">
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
      <div className="mt-10">
        <MySelect />
      </div>
      <div className="mt-10">
        <MySearchSelect />
      </div>
      <MyModalHeadless />
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        title="标题"
        footer={null}
      >
        这是测试内容
      </Modal>
    </Container>
  );
}
