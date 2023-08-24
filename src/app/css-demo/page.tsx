'use client';

export default function Index() {
  const handleClick = async () => {};

  return (
    <div>
      <button className="btn btn-primary " onClick={handleClick}>
        Button
      </button>
      <div className="w-[200px]">
        <div className="line-clamp-2 text-secondary">
          <span>这是一段文本</span>
          <span>这是一段文本</span>
          <span>这是一段文本</span>
          <span>这是一段文本</span>
          <span>这是一段文本</span>
        </div>
      </div>
    </div>
  );
}
