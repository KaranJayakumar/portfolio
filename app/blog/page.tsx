export default function Blog() {
  return (
      <div>
        <div className="font-bold flex-col py-[10px]" id="blog-title">
          <p className="pb-[4px]">Blog</p>
        </div>
        <div className="font-normal flex-col text-sm" id="blog-list">
          <p>
            <a href="#" className="underline hover:text-gray-600">
              Blog Post Title
            </a>
          </p>
        </div>
      </div>
  );
}
