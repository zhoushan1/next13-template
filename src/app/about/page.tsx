'use client';

export default function Index() {
  const handleClick = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();
    console.log('获取数据', data);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        Button
      </button>
      <div>about页面</div>
    </div>
  );
}
